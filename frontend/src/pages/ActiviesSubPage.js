import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import H1 from "../components/H1";
import MinMaxSlider from "../components/MinMaxSlider";
import ErrorMessage from "../components/ErrorMessage";
import {
  MIN_TEMPERATURE_VALUE,
  MAX_TEMPERATURE_VALUE,
  TEMPERATURE_STEP_VALUE,
  MIN_TEMPERATURE_DEFAULT_VALUE,
  MAX_TEMPERATURE_DEFAULT_VALUE,
  MIN_WINDSPEED_VALUE,
  MAX_WINDSPEED_VALUE,
  WINDSPEED_STEP_VALUE,
  MIN_WINDSPEED_DEFAULT_VALUE,
  MAX_WINDSPEED_DEFAULT_VALUE,
  MIN_RAINFALL_VALUE,
  MAX_RAINFALL_VALUE,
  RAINFALL_STEP_VALUE,
  MIN_RAINFALL_DEFAULT_VALUE,
  MAX_RAINFALL_DEFAULT_VALUE,
} from "../constants";

// The subpage that renders the form that allows user to add new activities.

const ActivitiesSubPage = ({ onSubPageAddButtonClick, onSubPageCancelButtonClick, }) => {
  const [activityName, setActivityName] = useState("");
  const [temperatureSliderValue, setTemperatureSliderValue] = useState([MIN_TEMPERATURE_DEFAULT_VALUE, MAX_TEMPERATURE_DEFAULT_VALUE,]);
  const [windspeedSliderValue, setWindspeedSliderValue] = useState([MIN_WINDSPEED_DEFAULT_VALUE, MAX_WINDSPEED_DEFAULT_VALUE,]);
  const [rainfallSliderValue, setRainfallSliderValue] = useState([MIN_RAINFALL_DEFAULT_VALUE, MAX_RAINFALL_DEFAULT_VALUE,]);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleActivityNameChange = (event) => {
    setActivityName(event.target.value);
  };

  const handleTemperatureSliderValueChange = (event, newValue) => {
    setTemperatureSliderValue(newValue);
  };

  const handleWindspeedSliderValueChange = (event, newValue) => {
    setWindspeedSliderValue(newValue);
  };

  const handleRainfallSliderValueChange = (event, newValue) => {
    setRainfallSliderValue(newValue);
  };

  const handleAddButtonClick = () => {
    const newActivity = {
      activity_id: null,
      activity_name: activityName,
      criteria: [
        {
          variable: "temperature_2m",
          min: temperatureSliderValue[0],
          max: temperatureSliderValue[1],
        },
        {
          variable: "wind_speed_10m",
          min: windspeedSliderValue[0],
          max: windspeedSliderValue[1],
        },
        {
          variable: "rain",
          min: rainfallSliderValue[0],
          max: rainfallSliderValue[1],
        }
      ]
    };

    if (newActivity.activity_name) {
        // Pass data to parent component's method
        onSubPageAddButtonClick(newActivity);
        setErrorMessageVisible(false);
    }
    else {
        setErrorMessageVisible(true);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        textAlign: "left",
        marginTop: "50px",
      }}
    >

      <H1 text="Add a new activity" />

      <Typography
        variant="body1"
        sx={{
          marginBottom: "15px",
        }}
      >
        Name of activity (for example: running)
      </Typography>

      {errorMessageVisible && (
        <ErrorMessage message="Please enter a name for your activity" />
      )}

      <TextField
        label="Type here"
        variant="outlined"
        size="small"
        value={activityName}
        onChange={handleActivityNameChange}
        fullWidth
        sx={{
          marginBottom: 1,
          width: "100%",
        }}
      />

      <MinMaxSlider
        value={temperatureSliderValue}
        onChange={handleTemperatureSliderValueChange}
        min={MIN_TEMPERATURE_VALUE}
        max={MAX_TEMPERATURE_VALUE}
        step={TEMPERATURE_STEP_VALUE}
        label="Temperature range"
      />

      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography variant="body1">{MIN_TEMPERATURE_VALUE} &deg;C</Typography>
        <Typography variant="body1">+{MAX_TEMPERATURE_VALUE} &deg;C</Typography>
      </Box>

      <MinMaxSlider
        value={windspeedSliderValue}
        onChange={handleWindspeedSliderValueChange}
        min={MIN_WINDSPEED_VALUE}
        max={MAX_WINDSPEED_VALUE}
        step={WINDSPEED_STEP_VALUE}
        label="Windspeed range"
      />

      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography variant="body1">{MIN_WINDSPEED_VALUE} m/s</Typography>
        <Typography variant="body1">{MAX_WINDSPEED_VALUE} m/s</Typography>
      </Box>
      <Typography variant="body1" align="right">
        (extreme wind)
      </Typography>

      <MinMaxSlider
        value={rainfallSliderValue}
        onChange={handleRainfallSliderValueChange}
        min={MIN_RAINFALL_VALUE}
        max={MAX_RAINFALL_VALUE}
        step={RAINFALL_STEP_VALUE}
        label="Rainfall range"
      />

      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography variant="body1">{MIN_RAINFALL_VALUE} mm/h</Typography>
        <Typography variant="body1">{MAX_RAINFALL_VALUE} mm/h</Typography>
      </Box>
      <Typography variant="body1" align="right">
        (heavy rain)
      </Typography>

      <Box display="flex" width="100%" gap="16px">
        <Button
          variant="contained"
          color="success"
          sx={{ width: "30%", marginTop: "35px" }}
          onClick={handleAddButtonClick}
        >
          Add new
        </Button>

        <Button
          sx={{
            width: "30%",
            marginTop: "35px",
            backgroundColor: "aliceblue",
            "&:hover": {
              backgroundColor: "#d0e4f1",
            },
          }}
          onClick={onSubPageCancelButtonClick}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ActivitiesSubPage;