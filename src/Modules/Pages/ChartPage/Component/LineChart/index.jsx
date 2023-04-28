import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

function LineChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },

      title: {
        display: true,
        text: 'Chart.js Line Chart',
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
        label: 'Dataset 1',
        data: [3, 6, 7, 4, 2, 6, 9],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Mực nước hạ lưu',
        data: [7, 2, 5, 8, 9, 3, 5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div>
      <h1 className=" flex justify-center text-xl"> {props.title} </h1>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart
