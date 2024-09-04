import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import SearchField from "../components/SearchField";
import H1 from "../components/H1";
import WeatherDataSubPage from "./WeatherDataSubPage";

// The page that displays the weather.

const WeatherPage = () => {
  const [isWeatherDataVisible, setWeatherDataVisible] = useState(false);
  const [geolocation, setGeolocation] = useState(null);
  const [activities, setActivities] = useState([]);

  // On component mount retrieve activities from local storage
  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    } else {
      setActivities([]);
    }
  }, []);

  // Function to handle geolocation change
  const handleGeolocationChange = (option) => {
      setGeolocation(option);
      setWeatherDataVisible(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <H1 text="Select a location" />
      <SearchField onOptionSelect={handleGeolocationChange} />

      {!isWeatherDataVisible && (
        <Typography variant="body1">
          Type in to select a location to show the weather forecast for.
        </Typography>
      )}

      {isWeatherDataVisible && <WeatherDataSubPage geolocation={geolocation} activities={activities} />}
    </Box>
  );
};

export default WeatherPage;
