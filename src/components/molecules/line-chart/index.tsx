import { Typography, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';

import { ChartProps } from './chart';

export default function LineChart({ title, labels, data }: ChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <Box width={1}>
      <Typography variant="h6">{title}</Typography>
      <Line data={chartData} options={options} />
    </Box>
  );
}
