import { Container, Form, Card, Button } from 'react-bootstrap';
import './App.css';


function App() {

  return (
    <Container>
    <Card.Title className='mb-4'>Preguntas de servicios universitarios</Card.Title>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>1. ¿Cómo calificaría la calidad del servicio de atnención en servicio de cajas en la universidad??</Form.Label>
        <Form.Control placeholder='Ingrese una calificación del 1 al 10' type="number"></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>2. ¿Qué tan accesible monetariamente piensas que son las plataformas de aprendizaje que usa la universidad?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>3. ¿Cómo calificarías la disponibilidad de los recursos bibliográficos?</Form.Label>
        <Form.Control placeholder='Ingrese una calificación del 1 al 10' type="number"></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>4. ¿Cómo calificarías los servicios de salud universitario?</Form.Label>
        <Form.Control placeholder='Ingrese una calificación del 1 al 10' type='number'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>5. En relación con el servicio de asesoría académica, ¿cómo lo calificarías?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>6. ¿Cómo consideras la calidad de las instalaciones deportivas de la universidad?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>7. ¿Qué tan efectivo consideras que es el proceso de inscripción en materias?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>8. ¿Cómo calificarías la calidad de los servicios de transporte de la universidad?</Form.Label>
        <Form.Control placeholder='Ingrese una calificación del 1 al 10' type="number"></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>9. ¿Cómo calificarías la calidad de los espacios de estudio?</Form.Label>
        <Form.Control placeholder='Ingrese una calificación del 1 al 10' type="number"></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>10. En relación con la comunicación institucional, ¿cómo consideras la eficiencia en la transmisión de información relevante?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>11. ¿Qué tan satisfecho estás con la oferta de actividades extracurriculares para la liberación de créditos?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>12. ¿Cómo calificarías la disponibilidad y calidad de los servicios de la cafetería?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>13. ¿Cómo consideras la seguridad dentro de la universidad?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Form.Group className="mb-3">
        <Form.Label>14. En cuanto al apoyo psicológico, ¿cómo lo calificarías?</Form.Label>
        <Form.Control placeholder='Ingrese su respuesta'></Form.Control>
      </Form.Group> 
      <Button type='submit'>Enviar</Button>
      <Button type='reset' variant='danger'>Cancelar</Button>
    </Form>
   </Container>
   
  
  );
}

export default App;
