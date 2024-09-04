import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import LocationInfo from "../components/LocationInfo";
import ErrorMessage from "../components/ErrorMessage";
import Analysis from "../components/Analysis";
import { postData } from "../ApiService";

// The subpage that displays the weather data for a geolocation.

const WeatherDataSubPage = ({ geolocation, activities }) => {
  const [weatherData, setWeatherData] = useState(null);

  // On component mount make a post request to get a weather forecst for the location
  useEffect(() => {
    const postActivities = async () => {
      const transformedData = {
        activities: activities,
        location: {
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
        },
      };

      try {
        const response = await postData("opportunities", transformedData);
        console.log("Weather data for activities found:", response);
        setWeatherData(response.weather_data);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };
    postActivities();
  }, [activities, geolocation]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        textAlign: "left",
      }}
    >
      {!geolocation.name && (
        <ErrorMessage message={"Please select a location from the options."} />
      )}

      {geolocation.name && <LocationInfo geolocation={geolocation} />}

      {geolocation.name && !weatherData && <CircularProgress />}

      {weatherData && <Analysis weatherData={weatherData} />}
    </Box>
  );
};

export default WeatherDataSubPage;