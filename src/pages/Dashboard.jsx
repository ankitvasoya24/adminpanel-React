import { Row, Col, Card, Table, Badge, Button} from "react-bootstrap";
import { BarChart} from '@mui/x-charts/BarChart';
import {CardContent,CardHeader} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineElementClasses } from '@mui/x-charts/LineChart';


function Metric({ title, value, delta, variant = "success" }) {
  return (
    <Card className="card-metric">
      <Card.Body>
        <div className="text-secondary small">{title}</div>
        <div className="fs-4 fw-semibold">{value}</div>
        <div>
          <Badge bg={variant} className="me-2">
            {delta}
          </Badge>
          <span className="text-secondary small">vs last week</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default function Dashboard() {

  
   const dataset = [
    { month: "Jan", London: 120, Paris: 150, NewYork: 300, Seoul: 200 },
    { month: "Feb", London: 140, Paris: 170, NewYork: 280, Seoul: 250 },
    { month: "Mar", London: 160, Paris: 180, NewYork: 350, Seoul: 300 },
    { month: "Apr", London: 180, Paris: 200, NewYork: 400, Seoul: 320 },
  ];
    const revenueData = [
      { month: 'Jan', revenue: 1200 },
      { month: 'Feb', revenue: 2100 },
      { month: 'Mar', revenue: 1800 },
      { month: 'Apr', revenue: 2400 },
      { month: 'May', revenue: 3200 },
      { month: 'Jun', revenue: 4000 },
      { month: 'july', revenue:4700 },
    ];

    const margin = { right: 24 };
    const indiaSales = [4000, 3000, 2000, 2780, 1890, 2390, 4490];
    const usaSales = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const ukSales = [2000, 2500, 4000, 5000, 6000, 7500, 9000];
    const germanySales = [1800, 2200, 3500, 4500, 5500, 6800, 8000];
    const japanSales = [2200, 2800, 3700, 4600, 5900, 7100, 8500];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <div className="d-grid gap-4">
      <div>
        <h1 className="h3 text-balance">Dashboard</h1>
        <p className="text-secondary mb-0">Overview of your app metrics.</p>
      </div>

      <Row xs={1} md={2} lg={4} className="g-3">
        <Col>
          <Metric title="Users" value="12,340" delta="+3.1%" variant="success" />
        </Col>
        <Col>
          <Metric title="Sessions" value="98,214" delta="+1.4%" variant="primary" />
        </Col>
        <Col>
          <Metric title="Revenue" value="$24,560" delta="+2.6%" variant="success" />
        </Col>
        <Col>
          <Metric title="Errors" value="23" delta="-12%" variant="danger" />
        </Col>
      </Row>

    <Row xs={1} md={2} lg={12} className="mt-2">
      <Col>
        <Card sx={{ maxWidth: 900, m: 2 }}>
        <CardHeader title="Order Total by Customer" />
        <CardContent>
          <BarChart
            xAxis={[{ data: ["Alice", "Bob", "Chris", "Diana", "Boby","Luthrford"] }]}
            series={[{ data: [380.0, 220.5, 980.1, 72.2, 450.5, 300.0] }]}
            height={350}
          />
        </CardContent>
      </Card>
      </Col>
      
      <Col>
        <Card sx={{maxWidth:900,m:2}}>
          <CardHeader title="City Sales Analysis – Jan to Apr" />
          <CardContent>
            
            <BarChart
              dataset={dataset}
              xAxis={[{ dataKey: 'month' }]}
              series={[
                 { dataKey: "London", label: "London" },
                 { dataKey: "Paris", label: "Paris" },
                 { dataKey: "NewYork", label: "New York" },
                 { dataKey: "Seoul", label: "Seoul" },
              ]}
              height={350}        
            />
          </CardContent>
        </Card>
      </Col>
    </Row>

      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="fw-semibold">Recent Orders</div>
          <Button size="sm" variant="outline-primary">
            View all
          </Button>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1001, name: "Alice", date: "2025-08-01", total: "$320.00", status: "Paid", variant: "success" },
                { id: 1002, name: "Bob", date: "2025-08-03", total: "$120.50", status: "Pending", variant: "warning" },
                { id: 1003, name: "Chris", date: "2025-08-04", total: "$980.10", status: "Paid", variant: "success" },
                { id: 1004, name: "Diana", date: "2025-08-05", total: "$72.20", status: "Failed", variant: "danger" },
                { id: 1005, name: "Boby", date: "2025-08-05", total: "$450.05", status: "Delivered", variant: "info" },
                { id: 1006, name: "Luthrford", date: "2025-08-06", total: "$300.00", status: "Failed", variant: "danger" },
                { id: 1007, name: "Chris", date: "2025-08-07", total: "$220.40", status: "Shipped", variant: "primary" }

              ].map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.name}</td>
                  <td>{o.date}</td>
                  <td>{o.total}</td>
                  <td>
                    <Badge bg={o.variant}>{o.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    <Row xs={1} lg={12} className="mt-2">
      <Col>
      <Card>
        <CardHeader title="Order Status"/>
        <CardContent>
          <PieChart
          series={[
            {
              data: [
                { id: 0, value: 2, label: "Paid" },
                { id: 1, value: 1, label: "Pending" },
                { id: 2, value: 2, label: "Failed" },
                { id: 3, value: 1, label: "Delivered" },
                { id: 4, value: 1, label: "Shipped" },
              ],
            },
          ]}
          width={350}
          height={300}
          />
        </CardContent>
      </Card> 
      </Col>
    </Row>
    <Row xs={1} md={12} className="mt-2 mb-2">
      <Col>
      <Card>
        <CardHeader title="Monthly Revenue Record"/>
        <CardContent>
           <LineChart
            dataset={revenueData}
            xAxis={[{ dataKey: 'month',scaleType: 'band'}]}
            series={[{ dataKey: 'revenue', label: 'Revenue ($)' }]}
            width={600}
            height={300}
            />
        </CardContent>
      </Card>
      </Col>
    </Row>

     <Row xs={1} md={12} className="mt-2 mb-2">
      <Col>
      <Card>
        <CardHeader title="Sales in Country"/>
        <CardContent>
           <LineChart
              height={300}
              series={[
                { data: indiaSales, label: 'INDIA', area: true, stack: 'total', showMark: false },
                { data: usaSales, label: 'USA', area: true, stack: 'total', showMark: false },
                { data: ukSales, label: 'UK', area: true, stack: 'total', showMark: false },
                { data: germanySales, label: 'JAPAN', area: true, stack: 'total', showMark: false },
                { data: japanSales, label: 'GERMANY', area: true, stack: 'total', showMark: false },

              ]}
              xAxis={[{ scaleType: 'point', data: months }]}
              yAxis={[{ width: 50 }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: 'none',
                },
              }}
              margin={margin}
            />
        </CardContent>
      </Card>
      </Col>
      {/* <Col className="mt-5 mb-2">
        <Card>
        <CardHeader title="To-Do List "/>
        <CardContent>
           
        </CardContent>
      </Card>  
      </Col> */}
    </Row>
    </div>
  )
}
