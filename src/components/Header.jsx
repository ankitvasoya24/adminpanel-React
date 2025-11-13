"use client"
import { Navbar, Container, Button } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa";

export default function Header({ onMenuClick }) {
  return (
    <Navbar bg="white" className="border-bottom" expand="md" sticky="top">
      <Container fluid>
        <div className="d-flex align-items-center gap-2">
          <Button variant="outline-primary" className="d-md-none" aria-label="Open menu" onClick={onMenuClick}>
            {/* simple hamburger */}
            <span
              className="navbar-toggler-icon"
              style={{ display: "inline-block", width: 20, height: 14, position: "relative" }}
            >
              <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#0d6efd" }} />
              <span style={{ position: "absolute", top: 6, left: 0, right: 0, height: 2, background: "#0d6efd" }} />
              <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#0d6efd" }} />
            </span>
          </Button>
          <Navbar.Brand className="fw-semibold"><h2>Admin Panel</h2></Navbar.Brand>
        </div>
        <div className="d-flex align-items-center gap-2">
          
          <Button  variant="outline-secondary" size="sm">
            Help
          </Button>
          <Button variant="primary" size="sm">
            <FaUserCircle style={{fontSize:'15px',marginRight:'5px'}}/>
            Profile
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}
