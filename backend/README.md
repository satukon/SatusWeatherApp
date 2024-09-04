# Getting started 

## Set up a virtual environment and install dependencies (do this once)

``` sh
python -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```


## Activate virtual environment (do this during evelopment)

``` sh
. venv/bin/activate
```


## Run in dev mode 

``` sh
./run-dev.sh
```

url: http://localhost:8080


## Production

``` sh
./run-prod.sh
```

url: http://localhost:8080



# API documentation

## GET /geography

### Query parameters
* `name` - prefix of name, for example "Joe" (for "Joensuu")

### Response

Array with max 10 objects.

``` json
[
  {
    "admin1": "North Karelia Region",
    "country": "Finland",
    "latitude": 62.60118,
    "longitude": 29.76316,
    "name": "Joensuu"
  }
]
```


## POST /opportunities

### Request
Weather data is currently fetched by location and returns hourly forecast for next 7 days for params temp, windspeed and rain.
After fetching the forecast from Open Meteo, the ctivity criterion variables are used to analyse the opprotunities.

``` json
{
  "activities": [
    {
      "activity_id": 1,
      "activity_name": "Jogging",
      "criteria": [
        {
          "variable": "temperature_2m",
          "min": 10,
          "max": 20
        }
        {
        "variable": "wind_speed_10m",
        "min": 0,
        "max": 4
      },
            {
        "variable": "rain",
        "min": 0,
        "max": 0.1
      }
      ]
    }
  ],
  "location": {
    "latitude": 62.6,
    "longitude": 29.7
  }
}
```

### Response

Response is a opportunity analysis for each activity. Hourly weather forecast is currently returned for 7 days (the current day and next 6 days).

``` json
{
    "weather_data": [
        {
            "activity_id": 1,
            "activity_name": "Jogging",
            "days": [
                {
                    "date": "2024-09-04 00:00:00+00:00",
                    "hourly_data": [
                        {
                            "date": "Wed, 04 Sep 2024 00:00:00 GMT",
                            "rain": 0.0,
                            "rain_in_range": true,
                            "temperature_2m": 16.09600067138672,
                            "temperature_2m_in_range": true,
                            "wind_speed_10m": 3.9600000381469727,
                            "wind_speed_10m_in_range": true
                        },
			                    .
			                    .
			                    .
                        {
                            "date": "Wed, 04 Sep 2024 23:00:00 GMT",
                            "rain": 0.0,
                            "rain_in_range": true,
                            "temperature_2m": 16.54599952697754,
                            "temperature_2m_in_range": true,
                            "wind_speed_10m": 8.279999732971191,
                            "wind_speed_10m_in_range": false
                        }
                    ]
                },
          	    .
		            .	
		            .
                {
                    "date": "2024-09-10 00:00:00+00:00",
                    "hourly_data": [
                        {
                            "date": "Tue, 10 Sep 2024 00:00:00 GMT",
                            "rain": 0.10000000149011612,
                            "rain_in_range": true,
                            "temperature_2m": 15.699999809265137,
                            "temperature_2m_in_range": true,
                            "wind_speed_10m": 12.181624412536621,
                            "wind_speed_10m_in_range": false
                        },
			                    .
			                    .
			                    .
                        {
                            "date": "Tue, 10 Sep 2024 23:00:00 GMT",
                            "rain": 0.0,
                            "rain_in_range": true,
                            "temperature_2m": 16.0,
                            "temperature_2m_in_range": true,
                            "wind_speed_10m": 7.1003098487854,
                            "wind_speed_10m_in_range": false
                        }
                    ]
                }
            ]
        }
    ]
}

```
