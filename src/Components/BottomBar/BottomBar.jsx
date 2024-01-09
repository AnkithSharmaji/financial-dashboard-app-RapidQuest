import React from 'react';
import styles from './BottomBar.module.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const BottomBar = () => {
  return (
    <div className={styles.childDiv}>
        <span style={{color:'white',backgroundColor:'#318CE7'}} className={styles.iconsDiv}><HomeOutlinedIcon/></span>
        <span style={{color:'grey'}} className={styles.iconsDiv}><NewspaperOutlinedIcon/></span>
        <span style={{color:'grey'}} className={styles.iconsDiv}><FormatListBulletedOutlinedIcon/></span>
        <span style={{color:'grey'}} className={styles.iconsDiv}><AccountCircleOutlinedIcon/></span>
    </div>
  )
}

export default BottomBar;