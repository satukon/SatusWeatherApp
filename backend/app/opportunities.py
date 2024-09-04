"""WeatherData related Flask blueprint and functionalities."""

from dataclasses import dataclass
from typing import List
import pandas
from dataclasses_json import dataclass_json
from flask import Blueprint, jsonify, request
from . import weather
from . import common_responses

blueprint = Blueprint("opportunities", __name__)


# Request related dataclasses
@dataclass_json
@dataclass
class Criteria:
    variable: str
    min: float
    max: float


@dataclass_json
@dataclass
class Activity:
    activity_id: int
    activity_name: str
    criteria: List[Criteria]


@dataclass_json
@dataclass
class Location:
    latitude: float
    longitude: float


@dataclass_json
@dataclass
class Request:
    location: Location
    activities: List[Activity]


# Response related dataclasses
@dataclass_json
@dataclass
class DailyWeatherData:
    date: str
    hourly_data: list


@dataclass_json
@dataclass
class WeatherData:
    activity_id: int
    activity_name: str
    days: List[DailyWeatherData]


@dataclass_json
@dataclass
class Response:
    weather_data: List[WeatherData]



@blueprint.post("/opportunities")
def opportunities_post():
    """API endpoint to get opportunities for the requested activities."""

    request_data = request.get_json()
    WeatherData_request = Request.from_dict(request_data)
    forecast = fetch_forecast(WeatherData_request)
    weather_data = analyze_opportunities(forecast, WeatherData_request)
    return jsonify(weather_data)


def fetch_forecast(WeatherData_request: Request):
    """Fetch a weather forecast from Open Meteo for the requested location"""

    forecast = weather.fetch_forecast(
        latitude=WeatherData_request.location.latitude,
        longitude=WeatherData_request.location.longitude,
    )

    print(forecast)

    return forecast


def analyze_opportunities(forecast, WeatherData_request: Request):
    """Analyze the weather forecast: for each activity check if the criterions (temperature, rain...) are in range."""

    opportunities = []
    forecast_days = 7  # The amount of days to analyze the forecast for
    df = pandas.DataFrame(forecast)

    # Loop through each activity
    for activity in WeatherData_request.activities:
        df_result = df.copy()

        # Loop through each activity criterion (temperature, rain...)
        for criterion in activity.criteria:
            variable = criterion.variable
            min_value = float(criterion.min)
            max_value = float(criterion.max)

            # Create a new column and show the result for each row (hourly forecast data) in it
            # Tolerance is applied for floating-point precision issues
            tolerance = 1e-7
            df_result[f"{variable}_in_range"] = df_result[variable].apply(
                lambda x: min_value - tolerance <= x <= max_value + tolerance
            )

        print("Result for activity: " + activity.activity_name)
        print(df_result)

        # Group the data by the date column, with a frequency of one day ('D')
        df_result_grouped_by_date = df_result.groupby(pandas.Grouper(key='date', freq='D'))

        # Cut result to match to the value of forecast_days and convert it to a list
        final_result = list(df_result_grouped_by_date)[:forecast_days]

        activity_daily_data = []

        # Form a dictionary that contains the daily forecast for the activity
        for date, daily_data in final_result:
            hourly_data = daily_data.to_dict(orient="records")
            data_object = DailyWeatherData(date=str(date), hourly_data=hourly_data)
            activity_daily_data.append(data_object)

        # Create a WeatherData object to store the previously created dictionary and the activity's information
        weather_data_of_one_activity = WeatherData(
            activity_id=activity.activity_id,
            activity_name=activity.activity_name,
            days=activity_daily_data,
        )

        # ...and add it to the dictionary containing data for all activities
        opportunities.append(weather_data_of_one_activity)

    return Response(opportunities)
