import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProductSalesPage = () => {
  const [salesInfo, setSalesInfo] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);

  const [lineChartData, setLineChartData] = useState({
    labels: "",
    datasets: [],
  });

  const params = useParams();
  const productId = params.productId;

  const getSalesInfo = async () => {
    let response = await fetch(
      `http://localhost:8080/api/sales/product/${productId}`
    );
    let data = await response.json();
    data = data.map((sale) => ({
      ...sale,
      createdAt: sale.createdAt.substring(0, 10),
    }));
    data = data.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    const uniqueDates = {};
    data.map((element) => {
      uniqueDates[element.createdAt] = (uniqueDates[element.createdAt] + 1) | 1;
    });
    const uniqueDatesList = Object.keys(uniqueDates).map((element) => ({
      date: element,
      count: uniqueDates[element],
    }));
    setUniqueDates(uniqueDatesList);
    setLineChartData((prevState) => ({
      ...prevState,
      labels: uniqueDatesList.map((salesByDate) => salesByDate.date),
      datasets: [
        {
          data: uniqueDatesList.map((salesByDate) => salesByDate.count),
          label: "Total units sales for last 90 days",
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    }));

    setSalesInfo(data);
  };
  useEffect(() => {
    getSalesInfo();
    document.title = 'Sales analysis';
  }, []);
  return (
    <>
      <Typography>ProductSalesPage {productId}</Typography>
      {/* {salesInfo.map((sale) =>
        <>
            <h3>Price: {sale.price}</h3>
            <h4>Date: {sale.createdAt}</h4>
        </>
        )} */}
      <Line data={lineChartData} />
      {uniqueDates.map((date) => (
        <>
          <h4>
            {date.date}: {date.count}
          </h4>
        </>
      ))}
    </>
  );
};

export default ProductSalesPage;
