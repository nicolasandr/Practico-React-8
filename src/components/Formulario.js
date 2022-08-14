import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div className="py-5">
      <Form>
        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3 px-3" controlId="formNombre">
              <Form.Label className="text-light">Nombre:</Form.Label>
              <Form.Control type="text" placeholder="ingrese nombre" />
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3 px-3" controlId="formApellido">
              <Form.Label className="text-light">Apellido:</Form.Label>
              <Form.Control type="text" placeholder="ingrese Apellido" />
            </Form.Group>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3 px-3" controlId="formDNI">
              <Form.Label className="text-light">DNI:</Form.Label>
              <Form.Control type="number" placeholder="ingrese DNI" />
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3 px-3" controlId="formEmail">
              <Form.Label className="text-light">Email:</Form.Label>
              <Form.Control type="email" placeholder="ingrese email" />
            </Form.Group>
          </div>
        </div>

        <div className="text-center py-4">
          <Button variant="secondary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
