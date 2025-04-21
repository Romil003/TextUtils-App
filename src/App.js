import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  // const [greyMode,setGreyMode] = useState("grey");

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode On";
      // changing title for 2 seconds
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing one";
      // },2000);
    }else{
      setMode('light');
      document.body.style.background = "white";
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode On";
    }
  }

  const toggleGreyMode = () => {
    if(mode === 'grey'){
      setMode('blue');
      // document.body.style.background = "#042743";
      document.body.style.background = "#6f42c1";
      showAlert("Blue mode has been enabled","success");
    }else{
      setMode('grey');
      document.body.style.background = "grey";
      showAlert("Grey mode has been enabled","success");
    }
  }

  const toggleOrangeMode = () => {
    if(mode === 'orange'){
      setMode('dark');
      document.body.style.background = "#042743";
      // document.body.style.background = "blue";
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('orange');
      document.body.style.background = "orange";
      showAlert("Orange mode has been enabled","success");
    }
  }

 // toggleGreyMode={toggleGreyMode} 
  return (
    <>
    <Router>
    <Navbar title="Text Utils" aboutText="About Text" mode={mode} toggleMode={toggleMode} toggleOrangeMode={toggleOrangeMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      {/* <Switch>  newer versions using "Routes" instead of "Switch"
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>
        </Route>
      </Switch> */}
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>} />
        <Route exact  path="/about" element={<About />} />
      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
