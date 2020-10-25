import { Chart } from "@components/Chart";
import { chartStyles } from "../styles/chartStyles";

const doughnutChart = {
  data: {
    labels: ["Shirts", "Shoes", "Bags"],
    datasets: [
      {
        data: [42, 33, 55],
        borderColor: chartStyles.color.solids.map((eachColor) => eachColor),
        backgroundColor: chartStyles.color.alphas.map((eachColor) => eachColor),
      },
    ],
  },
};

const lineChart = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Organic",
        borderColor: chartStyles.color.solids.map((eachColor) => eachColor)[0],
        backgroundColor: chartStyles.color.alphas.map(
          (eachColor) => eachColor
        )[0],
        data: [43, 48, 40, 54, 67, 73, 70],
      },
      {
        label: "Paid",
        borderColor: chartStyles.color.solids.map((eachColor) => eachColor)[2],
        backgroundColor: chartStyles.color.alphas.map(
          (eachColor) => eachColor
        )[2],
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
};

const barsChart = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Shoes",
        borderColor: chartStyles.color.solids.map((eachColor) => eachColor)[2],
        backgroundColor: chartStyles.color.alphas.map(
          (eachColor) => eachColor
        )[2],
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: "Bags",
        borderColor: chartStyles.color.solids.map((eachColor) => eachColor)[0],
        backgroundColor: chartStyles.color.alphas.map(
          (eachColor) => eachColor
        )[0],
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
};

export default function Charts(): React.ReactNode {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Charts
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Charts are provided by
        <a
          className="text-purple-600 dark:text-purple-400 hover:underline"
          href="https://www.chartjs.org/"
        >
          Chart.js
        </a>
        . Note that the default legends are disabled and you should provide a
        description for your charts in HTML. See source code for examples.
      </p>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        {/* Doughnut/Pie chart */}
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Doughnut/Pie
          </h4>
          <Chart type="doughnut" data={doughnutChart.data} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Lines
          </h4>
          <Chart type="line" data={lineChart.data} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Bars
          </h4>
          <Chart type="bar" data={barsChart.data} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Polar Area
          </h4>
          <Chart type="polarArea" data={doughnutChart.data} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Radar
          </h4>
          <Chart type="radar" data={lineChart.data} />
        </div>
      </div>
    </>
  );
}
