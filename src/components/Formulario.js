import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

const Formulario = () => {
    const [formularioEnviado,cambiarFormularioEnviado]= useState(false);
  return (
    <div className="py-5">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          dni: "",
          correo: "",
        }}
        onSubmit={(valores,{resetForm}) => {

          console.log("formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => {
            cambiarFormularioEnviado(false);
          },5000);
          resetForm();
        }}
        validate={(valores) => {

            let errores = {};
          //validamos nombre
          if (!valores.nombre) {
            errores.nombre = 'Por favor ingresa un nombre';
          }
          else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errores.nombre = 'El nombre solo puede contener letras y espacios';
          }
          //validamos apellido
          if (!valores.apellido) {
            errores.apellido = 'Por favor ingresa un apellido';
          }
          else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
            errores.apellido= 'El apellido solo puede contener letras y espacios';
          }

          //validamos DNI:
          if (!valores.dni) {
            errores.dni = 'Por favor ingresa tu DNI';
          }
          else if(!/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(valores.dni)){
            errores.dni = 'El DNI solo puede contener entre 7 y 9 numeros';
          }

          //validamos correo
          if (!valores.correo) {
            errores.correo = 'Por favor ingresa un correo electronico';
          }
          else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
            errores.correo = 'El correo solo puede contener letras,numeros,puntos,guiones y guion bajo';
          }
          return errores;
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur,errors,touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3 px-3">
                  <Form.Label htmlFor="nombre" className="text-light">
                    Nombre:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    placeholder="ingrese nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={4}
                    maxLength={16}
                    required
                  />
                  {touched.nombre &&  errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                </Form.Group>
              </div>
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3 px-3">
                  <Form.Label className="text-light">Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    id="apellido"
                    placeholder="ingrese Apellido"
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={4}
                    maxLength={14}
                    required
                  />
                   {touched.apellido &&  errors.apellido && <div className="text-danger">{errors.apellido}</div>}
                </Form.Group>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3 px-3">
                  <Form.Label className="text-light">DNI:</Form.Label>
                  <Form.Control
                    type="number"
                    id="dni"
                    placeholder="ingrese DNI"
                    value={values.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={7}
                    maxLength={9}
                    required
                  />
                   {touched.dni &&  errors.dni && <div className="text-danger">{errors.dni}</div>}
                </Form.Group>
              </div>
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3 px-3">
                  <Form.Label className="text-light">Email:</Form.Label>
                  <Form.Control
                    type="email"
                    id="correo"
                    placeholder="ingrese email"
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={12}
                    maxLength={40}
                    required
                  />
                   {touched.correo &&  errors.correo && <div className="text-danger">{errors.correo}</div>}
                </Form.Group>
              </div>
            </div>

            <div className="text-center py-4">
              <Button variant="secondary" type="submit">
                Enviar
              </Button>
              {formularioEnviado && <p className="text-success pt-5">formulario enviado con exito!</p>}
              
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
