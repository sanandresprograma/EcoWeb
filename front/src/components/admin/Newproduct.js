import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';

function Newproduct() {
  return (
    <Form>
      <br></br>
      <h2>Ingreso nuevos materiales</h2>
      <br></br>
      <Container>
      <Row>
      <Col>
        <Form.Group className="mb-3" controlId="productForm.nombre">
        <Form.Label>Nombre del material</Form.Label>
        <Form.Control type="String" placeholder="Ingrese un nombre para el material que desea vender" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.precio">
        <Form.Label>Precio</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="Ingrese un valor sin puntos ni comas"/>
        <InputGroup.Text>COP</InputGroup.Text>
      </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} type="String" placeholder="Haga una descripción del material que desea ingresar"/>
      </Form.Group>
      </Col>
      <Col xs={6}><Form.Group controlId="productForm.imagen" className="mb-3">
        <Form.Label>Imágenes del material</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Label>Categorí­a y tipo de material </Form.Label>
      <br></br>
      <Form.Select size="lg">
        <option>Despliegue las opciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        </option>
        <option value="1">Cartón</option>
        <option value="2">Metal - Aluminio</option>
        <option value="3">Metal - Cobre</option>
        <option value="4">Metal - Hierro</option>
        <option value="5">Papel - Archivo</option>
        <option value="6">Papel - PeriÃ³dico</option>
        <option value="7">Papel - Plegadiza</option>
        <option value="8">Papel - Tetrapak</option>
        <option value="9">Plástico - Icopor</option>
        <option value="10">Plástico - PET Cristal</option>
        <option value="11">Plástico - PET Otros</option>
        <option value="12">Plástico - Flexible</option>
        <option value="13">Plástico - Mezclado</option>
        <option value="14">Plástico - Rí­gido</option>
        <option value="15">Vidrio</option>
        <option value="16">Otros</option>
      </Form.Select>
      <br></br>
      <br></br>

      <Form.Group className="mb-3" controlId="productForm.inventario">
        <Form.Label>Inventario</Form.Label>
        <Form.Control type="Number" placeholder="Ingrese un valor sin puntos ni comas" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productForm.inventario">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control type="String" placeholder="Nombre de la persona que vende el material" />
      </Form.Group>

    
      <div className='btn btn-success' value="Submit">Enviar</div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <div className='btn btn-danger' value="Submit">Cancelar</div>


      </Col>
      </Row>
      </Container>
      </Form>
  );
}

export default Newproduct
