import React from 'react';
import styles from './SideBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  return (
    <div className={styles.sideBar} style={{ height: '100%' }}>
      <div className={styles.childDiv} style={{ paddingTop: '15px' }}>
        <div className={styles.sideBar}>
          <span style={{ color: 'grey' }} className={styles.iconsDiv}>
            <img
              src="/logo.png" // Adjust the path based on your actual file name and location
              alt="Logo"
              width="32"
              height="32"
            />
          </span>
          <span style={{ color: 'grey' }} className={styles.iconsDiv}>
            <SearchIcon />
          </span>
        </div>
        <div className={styles.sideBar}>
          <span
            style={{ color: 'white', backgroundColor: '#2d2dcb' }}
            className={styles.iconsDiv}
          >
            <HomeOutlinedIcon />
          </span>
          <span style={{ color: 'grey' }} className={styles.iconsDiv}>
            <NewspaperOutlinedIcon />
          </span>
          <span style={{ color: 'grey' }} className={styles.iconsDiv}>
            <FormatListBulletedOutlinedIcon />
          </span>
          <span style={{ color: 'grey' }} className={styles.iconsDiv}>
            <AccountCircleOutlinedIcon />
          </span>
        </div>
      </div>
      <div
        className={styles.childDiv}
        style={{
          justifyContent: 'flex-end',
          paddingBottom: '20px',
          rowGap: '10px',
        }}
      >
        <span style={{ color: 'grey' }} className={styles.iconsDiv}>
          <NotificationsNoneOutlinedIcon />
        </span>
        <span style={{ color: 'grey' }} className={styles.iconsDiv}>
          <LogoutIcon />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
