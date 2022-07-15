import React, { useState } from "react";
import CardInputs from './CardInputs';
import CardClimate from './CardClimate';
import { Row, Col } from "reactstrap";

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Row class="row" style={{padding: "100px"}}>
        <Col class="col-6">
          <CardInputs lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
        </Col>
        <Col class="col-6">
          <CardClimate lat={lat} setLat={setLat} lon={lon} setLon={setLon} loading={loading} setLoading={setLoading}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
