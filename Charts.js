
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Swal from 'sweetalert2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Charts() {
    const [numberAnswers, setnumberAnswers] = useState([]);
    useEffect (() => { //ejecuta una app que toma su tiempo

    }, []);
    const getData = async () => {
        try {
            Swal.fire("Cargando datos")
            Swal.showLoading()
            const { data } = await axios.get("http://localhost:4000/get-answers") //desestructura obj que viene de axios
            setnumberAnswers(data);
            Swal.close();
        } catch (error){
            Swal.fire("Algo salio maaaaal", error.msg, "error")

        }
    }


    const data = {
        labels: ['Excelente', 'Regular', 'Malo'], //nuestras opciones
        datasets: [
          {
            label: '# of Answeeeeers',
            data: numberAnswers, //numeros para cargar cosas que tenemos
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return <Doughnut data={data} />;
}
