# Analytics Dashboard API

## Overview
This project provides an API for an analytics dashboard. It serves chart data via RESTful API endpoints using Node.js and Express. The data includes sales, revenue growth, work efficiency, and activity insights.

## Features
- **REST API**: Provides analytics data in JSON format.
- **CORS Enabled**: Allows frontend applications to access API resources.
- **Chart Data**: Supports multiple chart types (bar, line, and doughnut).

## Technologies Used
- Node.js
- Express.js
- Cors (for cross-origin requests)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd analytics-dashboard-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

## API Endpoints
### Fetch Analytics Data
**Endpoint:** `GET /api/analytics`

**Response:**
```json
{
  "charts": [
    {
      "id": 1,
      "title": "Sales Overview",
      "type": "bar",
      "labels": ["Jan", "Feb", "Mar", "Apr", "May"],
      "dataset": {
        "label": "Sales",
        "data": [500, 700, 800, 600, 900],
        "backgroundColor": "#d0f38d"
      }
    }
  ]
}
```

## Contribution
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the MIT License.