import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CardBody, 
  Row, Col, Card, Spinner, CardHeader
} from "reactstrap";

// const baseURL = "https://weather.contrateumdev.com.br/api/weather";

axios.defaults.baseURL = "https://weather.contrateumdev.com.br/api/weather";


const CardClimate = ({ lat, lon, loading, setLoading }) => {

  console.log("loading no climate", loading);
  console.log(lat);
  console.log(lon);
  const [district, setDistrict] = useState();


  useEffect(()=>{
    axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

    axios.get("",{params: {
      lat: lat,
      lon: lon,
      format: "jsonv2"
    }})
    .then(response => {
      console.log(response);
      console.log(response.data.name);
      setDistrict(response.data.name)
      setLoading(false)
    })
    .catch(err => {
      console.log(err);
      setLoading(false)

    })
 
  }, [lat]);

  return (
    <div>
      <Card>
        <CardHeader>
          Voce está no bairro {district}
        </CardHeader>
      </Card>
    </div>
  );
}

export default CardClimate;


