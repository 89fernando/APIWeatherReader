import React, { useState } from "react";
import axios from "axios";
import {
  Button, FormGroup, Input, Label, Card, 
  Col, Row, CardBody, CardHeader,
} from "reactstrap";
import './Style.css'

const CardInputs = ({ setLat,  setLon }) => {
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()

  return (
    <div>
      <Card>
        <CardHeader>
          <h3>Endereço</h3>
        </CardHeader>
        <CardBody className="bodyInputs">
          <Row className="flex">
            <Col>
              <Label>
                Rua:
              </Label>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  className="inputForm"
                  required 
                  name="street"
                  id="street"
                  placeholder="Nome da Rua"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value)
                  }} 
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="flex">
            <Col>
              <Label>
                Cidade:
              </Label>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  className="inputForm"
                  required 
                  name="city"
                  id="city"
                  placeholder="Nome da Cidade"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                  }} 
                />
              </FormGroup>
            </Col>
          </Row> 
          <Row className="flex">
            <Col>
              <Label>
                Estado:
              </Label>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  className="inputForm"
                  required 
                  name="state"
                  id="state"
                  placeholder="Nome do Estado"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value)
                  }} 
                />
              </FormGroup>
            </Col>
          </Row> 
          <Button
            type="submit"
            color="primary"
            onClick={(e) => {
              e.preventDefault();

              axios.get("https://nominatim.openstreetmap.org/search", {params: {
                street:street,
                city:city,
                state:state,
                format: "jsonv2"
              }})
              .then(response => {
                setLat(response.data[0].lat)
                setLon(response.data[0].lon)
              })
              .catch(err => {
                console.log(err);
              })
            }}
          >
            Enviar
          </Button>    
        </CardBody>
      </Card>
    </div>
  );
}

export default CardInputs;