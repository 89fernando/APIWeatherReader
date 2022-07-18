import React, { useState } from "react";
import CardInputs from './CardInputs';
import CardClimate from './CardClimate';
import { Row, Col } from "reactstrap";
import './Style.css'

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="divApp">
        <Row class="col-12 appRow">
          <h1 className="appRow">
            CLIMA E PREVISÃO DO TEMPO
          </h1>
        </Row>
        <Row>
          <Col class="col-6">
            <CardInputs lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
          </Col>
          <Col class="col-6">
            <CardClimate lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
