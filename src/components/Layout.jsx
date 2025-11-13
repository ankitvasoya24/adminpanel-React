
"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import { Outlet } from "react-router-dom"

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="app-shell bg-light">
      <Header onMenuClick={() => setShowSidebar(true)} />
      <Container fluid className="app-content">
        <Row className="g-0">
          {/* Desktop sidebar */}
          <Col
            md="auto"
            className="d-none d-md-block border-end bg-white sidebar-static"
          >
            <Sidebar variant="static" onHide={() => setShowSidebar(false)} />
          </Col>

          {/* Main area */}
          <Col className="main-area">
            <div className="p-3 p-md-4">
              {/* ✅ Outlet render karega nested routes ka content */}
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mobile sidebar (Offcanvas) */}
      <Sidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
    </div>
  )
}
