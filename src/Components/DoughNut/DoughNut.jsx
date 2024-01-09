import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <div>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size="100px" style={{color:'#36DEA2'}} thickness={6}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{fontWeight:'bold', fontSize:'20px'}}>{`${Math.round(props.value)}%`}</div>
      </Box>
    </Box>
    <div style={{textAlign:'center'}}>{props.name}</div>
    </div>
  );
}

export default function Doughnut(props) {
  return <CircularProgressWithLabel value={props.progress} name={props.name}/>;
}
