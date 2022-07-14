import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form, FormGroup, Input, Label,
  Modal, ModalHeader, ModalBody, ModalFooter, 
  Col, Row
} from "reactstrap";


const CardInputs = ({ setLat,  setLon, loading, setLoading }) => {
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()

  axios.defaults.baseURL = "https://nominatim.openstreetmap.org";
  // axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
  // axios.defaults.headers['Access-Control-Allow-Origin'] = '*';


  return (
    <div>
      <h1>Inputs</h1>
      <Row>
        <Row style={{display: "flex"}}>
          <Col>
            <Label>
              Rua
            </Label>
          </Col>
          <Col>
            <FormGroup>
            <Input
              style={{width:"167px", height:"30px", fontSize:"15px"}}
              // type="number"
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
        <Row style={{display: "flex"}}>
          <Col>
            <Label>
              Cidade
            </Label>
          </Col>
          <Col>
            <FormGroup>
            <Input
              style={{width:"167px", height:"30px", fontSize:"15px"}}
              // type="number"
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
        <Row style={{display: "flex"}}>
          <Col>
            <Label>
              Estado
            </Label>
          </Col>
          <Col>
            <FormGroup>
            <Input
              style={{width:"167px", height:"30px", fontSize:"15px"}}
              // type="number"
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

            axios.get("/search", {params: {
              street:street,
              city:city,
              state:state,
              format: "jsonv2"
            }})
            .then(response => {
              console.log(response);
              // console.log(response.data[0].lat);
              setLat(response.data[0].lat)
              setLon(response.data[0].lon)
              setLoading(true)
            })
            .catch(err => {
              console.log(err);
            })
          }}
        >
          Enviar
        </Button>    
      </Row>


    </div>
  );
}

export default CardInputs;