import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { getData } from "../ApiService";

// The searchfield component that is displayed on the "Weather" page.

const SearchField = ({ onOptionSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [geolocations, setGeolocations] = useState([]);

  // Debouncing to reduce the amoount of API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500); // 500ms

    return () => {
      // Clear the timeout if inputValue changes before debounce time is up
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (!debouncedInputValue.trim()) {
      setGeolocations([]);
      return;
    }

    // Get a list of geolocations from backend
    const fetchGeolocations = async () => {
      try {
        const response = await getData(`geography?name=${debouncedInputValue}`);
        console.log("Geolocations found:", response);
        setGeolocations(response);
      } catch (error) {
        console.error("Failed to fetch geolocations:", error);
      }
    };

    fetchGeolocations();
  }, [debouncedInputValue]);

  return (
    <Autocomplete
      freeSolo
      fullWidth
      options={geolocations}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      // Set labels for options (and filter null values)
      getOptionLabel={(option) => {
        const parts = [option.name, option.admin1, option.country].filter(
          (part) => part != null
        );
        return parts.join(", ");
      }}
      // Handle situation when selected option (a geolocation) changes
      onChange={(event, newValue) => {
        if (newValue !== null) {
        onOptionSelect(newValue);
        }
        else {
          newValue = ""
        }
      }}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}, {option.admin1}, {option.country}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Type here"
          variant="outlined"
          size="small"
          style={{ marginBottom: "50px" }}
        />
      )}
    />
  );
};

export default SearchField;
