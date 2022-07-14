import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import axios from "axios";
import CardInputs from './CardInputs';
import CardClimate from './CardClimate';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [loading, setLoading] = useState(false);

  console.log("loading no app", loading);

  // useEffect(()=>{
  //   setLoading(true)
  // }, [loading])

  return (
    <div className="App">
      <CardInputs lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
      <CardClimate lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
    </div>
  );
}

export default App;
