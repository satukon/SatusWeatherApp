import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


// A reusable MUI slider component with min and max values.

const MinMaxSlider = ({ value, onChange, min, max, step, label }) => {

  return (
    <Box width={'100%'} sx={{ margin: 'auto', mt: 5 }}>
      <Typography gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={step}
      />
    </Box>
  );
};

export default MinMaxSlider;