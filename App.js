//200 es el que se manda de que es success 
//400 errores de usuario
//500 errores de programador
import { Container, Form, Card, Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [cita, setCita] = useState({});
  const [enable, setIsenable] = useState(true);

  const onChange = (e) => {
    e.preventDefault();
    const obj = { ...cita };
    obj[e.target.name] = e.target.value;
    setCita(obj);

    if (
      cita.uno && cita.uno !== '' &&
      cita.dos && cita.dos !== '' &&
      cita.tres && cita.tres !== '' &&
      cita.cuatro && cita.cuatro !== '' &&
      cita.cinco && cita.cinco !== '' &&
      cita.seis && cita.seis !== '' &&
      cita.siete && cita.siete !== '' &&
      cita.ocho && cita.ocho !== '' &&
      cita.nueve && cita.nueve !== '' &&
      cita.diez && cita.diez !== ''
    ) {
      setIsenable(false);
    }
  };

  const onSubmit = async () => {
    // Validar preguntas contestadas
    const questionUnanwsered = []; // Arreglo de preguntas sin contestar
    cita.preguntas.map((pregunta, i) => {
      if (!answers[`pregunta_${i + 1}`]) { 
        questionUnanwsered.push(i + 1); 
      }
    });
    if (questionUnanwsered.length > 0){
      //envia un string por medio de join y los une a todo por una coma
      Swal.fire("Faltan preguntas por contestar, regresate compa", questionUnanwsered.join(','), "error");
    }
    return;
    e.preventDefault(); // Previene el envío por defecto del formulario
    try {
      Swal.fire("Enviando datos para crear cita");
      Swal.showLoading();
      await axios.post("http://localhost:4000/save-answers", cita);
      Swal.fire("Datos registrados", "Éxito", "Success").then(() => window.location.reload)
    } catch (error) {
      Swal.fire("Ocurrió un error en tu cuestionario", error.message, "error");
    }
  };

  return (
    <Container>
      <Card className='mt-5'>
        <Card.Body>
          <Card.Title>FORMULARIO PARA SERVICIOS UNIVERSITARIOS</Card.Title>
          <Form onSubmit={onSubmit}> {/*Guarda respuestas*/}
            <Form.Group className='mb-3'> {/*Contenedor que agrupa, mb3 aplica un margen*/}
              {/*Etiqueta*/} <Form.Label>1.	¿Cómo calificaría la calidad del servicio de atención en servicio de cajas en la universidad?</Form.Label>
              {/*nameuno es para que el usuario solo escoja una, value es el valor que mandara cuando sea seleccionada*/}
              {/*onChange es para actualizar o guards la seleccion de usuario*/}
              <Form.Check
              type="radio" 
              label="Excelente"
              name="uno"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="uno"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Malo"
              name="uno"
              value="Malo"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>2. ¿Qué tan accesible monetariamente piensas que son las plataformas de aprendizaje que usa la universidad?</Form.Label>
              <Form.Check
              type="radio"
              label="Accesible"
              name="dos"
              value="Accesible"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Poco accesible"
              name="dos"
              value="Poco accesible"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="No son accesibles"
              name="dos"
              value="No son accesibles"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>3. ¿Cómo calificarías la disponibilidad de los recursos bibliográficos?</Form.Label>
              <Form.Check
              type="radio"
              label="Excelente"
              name="tres"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="tres"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Mala"
              name="tres"
              value="Mala"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>4. ¿Cómo graduarías los servicios de salud universitario?</Form.Label>
              <Form.Check
              type="radio"
              label="Satisfecho"
              name="cuatro"
              value="Satisfecho"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="cuatro"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Insatisfecho"
              name="cuatro"
              value="Insatisfecho"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>5. En relación con el servicio de asesoría académica, ¿cómo lo calificarías?</Form.Label>
              <Form.Check
              type="radio"
              label="Excelente"
              name="cinco"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="cinco"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Malo"
              name="cinco"
              value="Malo"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>6. ¿Cómo consideras la calidad de las instalaciones deportivas de la universidad?</Form.Label>
              <Form.Check
              type="radio"
              label="Excelente"
              name="seis"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="seis"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Malo"
              name="seis"
              value="Malo"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>7. ¿Qué tan efectivo consideras que es el proceso de inscripción en materias?</Form.Label>
              <Form.Check
              type="radio"
              label="Efectivo"
              name="siete"
              value="Efectivo"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="siete"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Ineficiente"
              name="siete"
              value="Ineficiente"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>8. ¿Cómo calificarías la calidad de los servicios de transporte de la universidad?</Form.Label>
              <Form.Check
              type="radio"
              label="Excelente"
              name="ocho"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="ocho"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Malo"
              name="ocho"
              value="Malo"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>9. ¿Cómo calificarías la calidad de los espacios de estudio?</Form.Label>
              <Form.Check
              type="radio"
              label="Excelente"
              name="nueve"
              value="Excelente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="nueve"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Malo"
              name="nueve"
              value="Malo"
              onChange={onChange}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>10. En relación con la comunicación institucional, ¿cómo consideras la eficiencia en la transmisión de información relevante?</Form.Label>
              <Form.Check
              type="radio"
              label="Eficiente"
              name="diez"
              value="Eficiente"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Regular"
              name="diez"
              value="Regular"
              onChange={onChange}/>
            <Form.Check
              type="radio"
              label="Ineficiente"
              name="diez"
              value="Ineficiente"
              onChange={onChange}/>
            </Form.Group>
            
            <div style={{ display: 'flex', flexDirection: 'revert', gap: '10px' }}> 
              <Button onClick={() => onSubmit()} >ENVIAR</Button> 
              <Button type="reset" variant="danger" onClick={() => setCita({})}>ELIMINAR</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );

}

export default App;

