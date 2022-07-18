import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardBody, Card, CardHeader, Spinner } from "reactstrap";
import './Style.css'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const CardClimate = ({ lat, lon }) => {
  const [district, setDistrict] = useState();
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumididy] = useState();
  const [feelsLike, setFeelsLike] = useState();

  useEffect(()=>{
    axios.get("https://weather.contrateumdev.com.br/api/weather",{params: {
      lat: lat,
      lon: lon,
    }})
    .then(response => {
      setDistrict(response.data.name)
      setTemp(response.data.main.temp.toFixed(1))
      setDescription((response.data.weather[0].description).toUpperCase())
      setHumididy(response.data.main.humidity)
      setFeelsLike(response.data.main.feels_like.toFixed(1))
    })
    .catch(err => {
      console.log(err);
    })
 
  }, [lat, lon]);

  return (
    <div>
      <Card className="cardClimate">
        <CardHeader>
          <h3>
            Clima
          </h3>
        </CardHeader>
        {(temp)
          ? <CardBody className="bodyClimate">
              <div className="divTemp">
                <h3 className="h3TempText">
                  A temperatura em {district} é de: 
                </h3>
                <h3 className="h3Temp">
                  {temp} º
                </h3>
              </div>
              <h2 className="h2Feels">
                A sensação térmica é de {feelsLike}º
              </h2>
              <h2 className="h2FellsDescription">
                {description}
              </h2>
              <h4>
                Umidade de {humidity}%.
              </h4>
            </CardBody>
          : <CardBody className="spinnerCard">
              <Spinner
                className="m-5 spinnerStyle"
                color="primary"
              >
                Loading...
              </Spinner>
            </CardBody> 
        }  
      </Card>
    </div>
  );
}

export default CardClimate;