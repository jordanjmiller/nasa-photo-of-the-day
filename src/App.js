import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/#apod
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)

//APOD obj:
//date //stardate: xxxx-xx-xx
//explanation
//hdurl
//media_type
//service_version
//title
//url

function App() {
  const today = new Date();
  console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
  console.log(today);

  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [useHD, setUseHD] = useState(false);
  const [url, setUrl] = useState('');
  const [hdurl, setHdurl] = useState('');
  const [media_type, setMedia_type] = useState('');
  // const [date, setDate] = useState('');
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {console.log(response.data)})
    .catch(error => {console.log('Error! : ' + error)})
  }, []);

  // axios.get('https://api.github.com/users/jordanjmiller')
  // .then(response => {console.log(response.data)})
  // .catch(error => {console.log('Error! : ' + error)});

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <button onClick={() => {console.log('click')}}>clicker</button>
    </div>
  );
}

export default App;
