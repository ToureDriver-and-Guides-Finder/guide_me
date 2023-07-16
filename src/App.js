import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import BGImage from"../src/images/bg.png";
import './components/nav.css';

function App() {
  return (
    <div>
      <NavBar/>
      
      <img src={BGImage} className='w-100' style={{object_fit: 'cover'}}/>
      
      
    </div>
      
    
  );
}

export default App;
