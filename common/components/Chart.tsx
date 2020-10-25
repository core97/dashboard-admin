import { Doughnut, Radar, Polar, Bar, Line } from "react-chartjs-2";

// type: "doughnut" | "bar" | "radar" | "polarArea" | "line"
export const Chart = ({ data, type }) => {
  if (type === "doughnut") {
    return (
      <Doughnut
        data={data}
        options={{
          responsive: true,
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    );
  } else if (type === "bar") {
    return (
      <Bar
        data={data}
        options={{
          legend: {
            display: true,
            position: "bottom"
          },
        }}
      />
    );
  } else if (type === "radar") {
    return (
      <Radar
        data={data}
        options={{
          legend: {
            display: true,
            position: "right"
          },
        }}
      />
    );
  } else if (type === "polarArea") {
    return (
      <Polar
        data={data}
        options={{
          legend: {
            position: "right",
          },
        }}
      />
    );
  } else if (type === "line") {
    return (
      <Line
        data={data}
        options={{
          responsive: true,
          legend: {
            display: true,
            position: "bottom",
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        }}
      />
    );
  }
};
