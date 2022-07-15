import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardBody, Card, CardHeader } from "reactstrap";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const CardClimate = ({ lat, lon, setLoading }) => {
  const [district, setDistrict] = useState();
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumididy] =useState();

  useEffect(()=>{
    setLoading(false)
    axios.get("https://weather.contrateumdev.com.br/api/weather",{params: {
      lat: lat,
      lon: lon,
    }})
    .then(response => {
      setDistrict(response.data.name)
      setTemp(response.data.main.temp)
      setDescription(response.data.weather[0].description)
      setHumididy(response.data.main.humidity)
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
          <h3>
            Clima
          </h3>
        </CardHeader>
        <CardBody>
          <h2>
              A temperatura em {district} é de {temp}º, com humidade de {humidity}%
          </h2>
          <h3>
            {description}
          </h3>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardClimate;