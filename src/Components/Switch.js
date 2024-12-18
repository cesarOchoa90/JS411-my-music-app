import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({state, setState}) {
    const handleChange = ()=>{
        setState(!state)
    }
  return (
    <div>
      <Switch {...label} checked={state} onChange={handleChange} />
    </div>
  );
}
