import React from 'react';
import styles from './SecondComponent.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import BarChart from '../BarChart/BarChart';
import Doughnut from '../DoughNut/DoughNut';

const SecondComponent = () => {
    
  return (
    <div className={styles.parentDiv}>
        <div className={styles.flexDiv} style={{borderBottom:'0px', width:'100%'}}>
            <span style={{color:'blue'}}>Retirement Income</span>
            <span style={{fontWeight:'bold', fontSize:'20px'}}>Starting Year 2056</span>
        </div>
        <div className={styles.responsiveFlex}>
            <div className={styles.flexDiv} id={styles.myGoal}>
                <span className={styles.impTitle}>$300,000</span>
                <span style={{color:'grey'}}>My Goal</span>
            </div>
            <div className={styles.flexDiv} id={styles.achieved}>
                <span className={styles.impTitle}>59%</span>
                <span style={{color:'grey'}}>Goal Achieved</span>
            </div>
            <div className={styles.flexDiv} id={styles.income}>
                <span className={styles.impTitle}>$300</span>
                <span style={{color:'grey'}}>Est. Monthly Income</span>
            </div>
        </div>
        <div className={styles.barChartDiv}>
            <span style={{fontWeight:'bold',fontSize:'20px'}}>Contributions Overtime</span>
            <div className={styles.pillsDiv}>
                <div className={styles.pillsDiv}>
                    <div className={styles.pill} style={{backgroundColor:'#00308F'}}></div>
                    <span style={{color:'gray',fontSize:'14px'}}>Employer:</span>
                    <span style={{fontSize:'14px', fontWeight:'bold'}}> K 73,500</span>
                </div>
                <div className={styles.pillsDiv}>
                    <div className={styles.pill} style={{backgroundColor:'#318CE7'}}></div>
                    <span style={{color:'gray',fontSize:'14px'}}>Employee:</span>
                    <span style={{fontSize:'14px', fontWeight:'bold'}}> K 52,500</span>
                </div>
                <div className={styles.pillsDiv}>
                    <div className={styles.pill} style={{backgroundColor:'#7CB9E8'}}></div>
                    <span style={{color:'gray',fontSize:'14px'}}>Total Interest: </span>
                    <span style={{fontSize:'14px', fontWeight:'bold'}}> K 244,313</span>
                </div>
            </div>
            <BarChart />
        </div>
        <div className={styles.peersDiv}>
            <span style={{fontSize:'18px', fontWeight:'bold'}}>How do I compare to my peers?</span>
            <span style={{color:'gray'}}>These number represent current goal achievement</span>
            <div className={styles.formAndDoughNuts}>
                <div>
                <div>
                    <label>Age: </label>
                    <Select defaultValue={30} size='small' sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
                        <MenuItem value={30}>Under 30</MenuItem>
                        <MenuItem>Under 40</MenuItem>
                        <MenuItem>Under 50</MenuItem>
                    </Select>
                </div>
                <div>
                    <label>Salary: </label>
                    <Select defaultValue={20} size='small' sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
                        <MenuItem value={20}>K 20 - K 40</MenuItem>
                        <MenuItem>K 40 - K 60</MenuItem>
                        <MenuItem>K 60 - K 80</MenuItem>
                    </Select>
                </div>
                <div>
                    <label>Gender: </label>
                    <Select defaultValue={'male'} size='small' sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem>Female</MenuItem>
                        <MenuItem>Other</MenuItem>
                    </Select>
                </div>
                </div>
                <div className={styles.doughNutsDiv}>
                    <Doughnut progress={78} name='Average'/>
                    <Doughnut progress={95} name='Top'/>
                    <Doughnut progress={59} name='Me'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SecondComponent;