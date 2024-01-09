import './App.css';
import BottomBar from './Components/BottomBar/BottomBar';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import SideBar from './Components/SideBar/SideBar';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function App() {
  return (
    <>
    <div className="App">
      <div className='sideBar'><SideBar /></div>
      <div className='notificationIcon'><NotificationsNoneOutlinedIcon/></div>
      <div className='firstComponent'><FirstComponent /></div>
      <div className='secondComponent'><SecondComponent /></div>
      <div className='thirdComponent'><ThirdComponent /></div>
    </div>
    <div className='bottomBar'><BottomBar/></div>
    </>
  );
}

export default App;
