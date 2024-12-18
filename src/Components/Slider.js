import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`
}

export default function DiscreteSliderLabel({state, setState}) {
    const handleChange=(e)=>{
        setState(e.target.value)
    }
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        getAriaValueText={valuetext}
        step={10}
        marks
        valueLabelDisplay="on"
        onChange={handleChange}
        value={state}
        min={0}
        max={100}
      />
    </Box>
  );
}
