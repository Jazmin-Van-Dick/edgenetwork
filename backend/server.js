const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for frontend requests

// Analytics API Route
app.get("/api/analytics", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    charts: [
      {
        id: 1,
        title: "Sales Overview",
        type: "bar",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        dataset: {
          label: "Sales",
          data: [500, 700, 800, 600, 900],
          backgroundColor: "#d0f38d",
          borderRadius: 10
        }
      },
      {
        id: 2,
        title: "Revenue Growth",
        type: "line",
        labels: ["2020", "2021", "2022", "2023", "2024"],
        dataset: {
          label: "Revenue",
          data: [1000, 1500, 2000, 2500, 3000],
          borderColor: "#f97b0a",
          fill: false
        }
      },
      {
        id: 3,
        title: "Work Efficiency",
        type: "line",
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        dataset: {
          label: "Efficiency",
          data: [65, 75, 80, 90, 87],
          borderColor: "#019736",
          fill: true,
          backgroundColor: "#01973620"
        }
      },
      {
        id: 4,
        title: "Activity",
        type: "doughnut",
        labels: ["Mon", "Tue", "Wed"],
        dataset: {
          label: "Activity",
          data: [10, 20, 15],
          backgroundColor: ["#f97b0a", "#019736", "#d0f38d"],
          borderRadius: 10
        }
      }
    ]
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});