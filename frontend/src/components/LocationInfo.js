import React from "react";
import { Box, Typography } from "@mui/material";

//  A component to display the name, region, country and coordinates of a geolocation.

const LocationInfo = ({ geolocation }) => {
    // Handle possibly missing subregion
  let subregion;
  if (!geolocation.admin1) {
    subregion = null;
  } else {
    subregion = `${geolocation.admin1},`;
  }

  return (
    <Box
      sx={{
        marginBottom: "35px",
      }}
    >
      <Typography variant="h5">{geolocation.name}</Typography>

      <Typography variant="h6">{subregion} {geolocation.country}</Typography>

      <Typography variant="h7">
        {geolocation.latitude}, {geolocation.longitude}
      </Typography>
    </Box>
  );
};

export default LocationInfo;
