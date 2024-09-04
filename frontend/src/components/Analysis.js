import React from "react";
import {} from "@mui/material";
import OpportunityTable from "../components/OpportunityTable";
import DateFormatter from "../components/DateFormatter";

//  The component that displays weather data for each activity, for each forecast day.

const Analysis = ({ weatherData }) => {

  if (weatherData.length === 0) {
    return "You need to set some activities in order to get a forecast.";
  }

  // Helper function to group the activity data by date
  const groupByDate = (weatherData) => {
    const grouped = {};

    weatherData.forEach((activity) => {
      activity.days.forEach((day) => {
        const { date, hourly_data } = day;

        if (!grouped[date]) {
          grouped[date] = [];
        }

        grouped[date].push({
          activity_name: activity.activity_name,
          hourly_data: hourly_data,
        });
      });
    });

    return grouped;
  };

  var groupedByDay = groupByDate(weatherData);

  return (
    <div>
      {Object.keys(groupedByDay).map((date) => (
        <div key={date}>
          <DateFormatter dateString={date} />
          <div style={{ marginTop: "20px" }}>
            {groupedByDay[date].map((activity, index) => (
              <div key={index}>
                <strong>{activity.activity_name.charAt(0).toUpperCase() + activity.activity_name.toLowerCase().slice(1)}</strong>
                <OpportunityTable hourlyData={activity.hourly_data} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
