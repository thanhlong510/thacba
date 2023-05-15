import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import axios from 'axios'
import { useRef } from 'react'
function LineChart(props) {
  axios
  .get(
    'https://api.dulieuthuyloivietnam.vn/api/sensor/box?id=GOIBGJOQ&max_ts=1682960399999&min_ts=1682874000000'
  )
  .then(function (response) {
   
  })
  const chartRef = useRef(null)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },title: {
        display: true,
        text: props.title || 'Biểu đồ',
        color: '#4285f4',
        padding: 20,
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Mực nước thượng lưu',
        data: [10, 30, 40, 20, 50, 10, 10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        plugins: {
          legend: {
            position: 'bottom',
          }}
      },
      {
        label: 'Mực nước hạ lưu',
        data: [10, 30, 30, 20, 50, 50, 20],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
       
      },
    ],
    scales: {
      label: [{
        display: true,
        position: 'bottom', 
        
      }]  }
  }

  return (
     <Line ref={chartRef} options={options} data={data} /> 
  )
}

export default LineChart
