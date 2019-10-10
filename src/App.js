import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import styled from 'styled-components';
import "./css/index.css";

// components
import ButtonsAndTitle from './components/buttons/buttons.js';
import Description from './components/description/description.js';
import Header from './components/header/header.js';
import Image from './components/image/image.js';
import Title from './components/title/title.js';


//personal api key: https://api.nasa.gov/planetary/apod?api_key=39fVSI5GWG0ExzLP4WgQBSsTbpPZhZuwQ8dMPe0B
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
  const [displayedDate, setDisplayedDate] = useState(new Date());

  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [useHD, setUseHD] = useState(false);
  const [url, setUrl] = useState('');
  const [hdurl, setHdurl] = useState('');
  const [media_type, setMedia_type] = useState('');
  // const [date, setDate] = useState('');
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=39fVSI5GWG0ExzLP4WgQBSsTbpPZhZuwQ8dMPe0B&date=${displayedDate.getFullYear()}-${displayedDate.getMonth()+1}-${displayedDate.getDate()}`)
    .then(response => {
    console.log(response.data);
    
    setTitle(response.data.title);
    setExplanation(response.data.explanation);
    setHdurl(response.data.hdurl);
    setUrl(response.data.url);
    setMedia_type(response.data.media_type);
    
    })
    .catch(error => {console.log('Error! : ' + error)})
  }, [displayedDate, useHD]);

  // axios.get('https://api.github.com/users/jordanjmiller')
  // .then(response => {console.log(response.data)})
  // .catch(error => {console.log('Error! : ' + error)});

  return (
    // <div className="App"> 
    <>
    <Header today={today} displayedDate={displayedDate} setDisplayedDate={setDisplayedDate} useHD={useHD} setUseHD={setUseHD}/>
    <div className ="appContainer">
      <ButtonsAndTitle title={title} today={today} displayedDate={displayedDate} setDisplayedDate={setDisplayedDate} />
      <Image media_type={media_type} useHD={useHD} url={url} hdurl ={hdurl}/>
      <Description explanation={explanation}/>
    </div>
    </>
  );
}

export default App;
// need toggle HD button
// need to check for and display video
//need to add a today button
//also add today button to header logo