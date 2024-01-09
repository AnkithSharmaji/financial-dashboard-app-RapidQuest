import React from 'react';
import styles from './FirstComponent.module.css';
import Button from '@mui/material/Button';

const FirstComponent = () => {
  return (
    <div className={styles.parentDiv}>
        <div className={styles.userDetails}>
            <div className={styles.imageDiv}>
            <img style={{ width: '100%', height: '100%' }} src='/12.png' alt='avatar' />
            </div>
            <div className={styles.textDiv}>
                <span style={{fontSize:'30px',fontWeight:'bold'}}>
                    Hi Ankith,
                </span>
                <span style={{color:'rgb(150,150,150)'}}>
                    welcome back.
                </span>
            </div>
        </div>
        <div style={{fontSize:'20px',fontWeight:'bold'}}>Today</div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'30px',fontWeight:'bold'}}>
                $19,892
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Amount Balance
            </span>
        </div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>
                $4,000
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Year-To-Date Contributions
            </span>
        </div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>
                $1,892
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Total Interest
            </span>
        </div>
        <Button variant="contained" style={{ width: '50%', backgroundColor: '#0c08d4' }}>I want to</Button>
        <div style={{fontSize:'20px',fontWeight:'bold',marginTop:'25px'}}>Recent Transactions</div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-08-07
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-07-21
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-07-16
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>   
    </div>
  )
}

export default FirstComponent;