import Chart from 'react-apexcharts'

export const charts = () => {
  return(
    <Chart
      type="pie"
      height="400"
      series={[350,100,90,400]}
      option={[

      ]}
    />
  )
}