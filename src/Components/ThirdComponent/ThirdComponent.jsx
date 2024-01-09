import React, { useState } from 'react';
import styles from './ThirdComponent.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const ThirdComponent = () => {
    const [val, setVal] = useState(12);
    const [age, setAge] = useState(65);

  return (
    <div className={styles.parentDiv}>
  <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Retirement Strategy</div>
  <div>Employee Contribution</div>
  <Box className={styles.flexBox}>
    <Slider
      value={val}
      onChange={(e) => setVal(e.target.value)}
      style={{
        width: '80%',
        color: '#7CB9E8', 
      }}
      track='inverted' 
      thumbStyle={{
        backgroundColor: 'white', 
      }}
      min={0}
      max={20}
    />
    <span>{val}%</span>
  </Box>
  <div>Retirement Age</div>
  <Box className={styles.flexBox}>
    <Slider
      value={age}
      onChange={(e) => setAge(e.target.value)}
      style={{
        width: '80%',
        color: '#7CB9E8',
      }}
      track='inverted'
      thumbStyle={{
        backgroundColor: 'white',
      }}
      min={50}
      max={70}
    />
    <span>{age}</span>
  </Box>
  <Box className={styles.flexBox}>
    <span>Employer Contribution</span>
    <span>8.4%</span>
  </Box>
  <Box className={styles.flexBox}>
    <span>Interest Rate</span>
    <span>5%</span>
  </Box>
  <Button variant="contained" style={{ width: '95%', backgroundColor: '#0c08d4' }}>Update</Button>
  <Button href="#text-buttons" style={{ fontWeight: 'bold', color: '#0c08d4' }}>{`View Help Docs ${'>'}`}</Button>
  <div style={{ color: 'gray' }} className={styles.boxStyle}>
    <div>Are you considering a <span style={{ fontWeight: 'bold', color: 'black' }}>Housing Advance?</span></div>
    <div>Limited time reduced interest.</div>
    <Button href="#text-buttons" style={{ fontWeight: 'bold', color: '#0c08d4' }}>{`Learn More ${'>'}`}</Button>
  </div>
</div>

  );
}

export default ThirdComponent;