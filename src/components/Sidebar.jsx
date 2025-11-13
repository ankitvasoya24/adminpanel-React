import { Offcanvas, Nav, Button} from "react-bootstrap"
import { NavLink, useNavigate} from "react-router-dom"
import { AiFillDashboard } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAppRegistration } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { toast,ToastContainer } from "react-toastify";

export default function Sidebar({ show, onHide, variant = "offcanvas" }) {
  const navigate = useNavigate();
  const handleLogout = () => {

  const confirmLogout = window.confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
      navigate("/"); 
  } else {
    toast.info("Logout cancelled", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
    });
  }
  }
  const nav = (
    <Nav className="flex-column p-2 ">
      <Nav.Link as={NavLink} to="/dashboard" end>
      <AiFillDashboard style={{fontSize:'22px',marginRight:'5px'}}/>
        Dashboard
      </Nav.Link>
      <Nav.Link as={NavLink} to='/users'>
      <PiUsersThreeFill style={{fontSize:'22px',marginRight:'5px'}}/>
        Users
      </Nav.Link>
       {/* <Nav.Link as={NavLink} to='/'>
        Login
      </Nav.Link> */}
      <Nav.Link as={NavLink} to='/registration'>
      <MdAppRegistration style={{fontSize:'22px',marginRight:'5px'}}/>
        Registration
      </Nav.Link>
      <Nav.Link as={NavLink} to="/setting">
      <IoSettings style={{fontSize:'22px',marginRight:'5px'}} />
        Settings
      </Nav.Link>
       <ToastContainer/>
    </Nav>

  )

  if (variant === "static") {
    return (
      <aside className="h-100">
        <div className="p-3 border-bottom">
          <div className="fw-semibold text-secondary text-center">Navigation</div>
        </div>
        {nav}
        {/* log-out button */}
        <div className="p-3 border-top border-bottom ">
          <Button onClick={handleLogout}><TbLogout2 style={{fontSize:'22px',marginRight:'5px'}}/>Log out</Button>
        </div>
      </aside>
    )
  }

  return (
    <Offcanvas show={!!show} onHide={onHide} scroll backdrop>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{nav}</Offcanvas.Body>
    </Offcanvas>
  )
}


// import { Nav, Button } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AiFillDashboard } from "react-icons/ai";
// import { PiUsersThreeFill } from "react-icons/pi";
// import { MdAppRegistration } from "react-icons/md";
// import { IoSettings } from "react-icons/io5";
// import { TbLogout2 } from "react-icons/tb";
// import { useState, useRef } from "react";
// import "./Sidebar.css";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [sidebarWidth, setSidebarWidth] = useState(220); // default width
//   const [isResizing, setIsResizing] = useState(false);
//   const sidebarRef = useRef(null);

//   const handleLogout = () => {
//     alert("Log-out clicked");
//     navigate("/");
//   };

//   const startResizing = (e) => {
//     e.preventDefault();
//     setIsResizing(true);
//   };

//   const stopResizing = () => {
//     setIsResizing(false);
//   };

//   const resize = (e) => {
//     if (isResizing) {
//       const newWidth = e.clientX; // mouse X position se width le raha hai
//       if (newWidth > 60 && newWidth < 400) {
//         setSidebarWidth(newWidth);
//       }
//     }
//   };

//   // Mouse move/leave listeners
//   window.addEventListener("mousemove", resize);
//   window.addEventListener("mouseup", stopResizing);

//   return (
//     <aside
//       ref={sidebarRef}
//       className="sidebar-container"
//       style={{ width: sidebarWidth }}
//     >
//       <div className="p-2 border-bottom fw-semibold text-secondary text-center">
//         Navigation
//       </div>

//       <Nav className="flex-column p-2">
//         <Nav.Link as={NavLink} to="/dashboard" end>
//           <AiFillDashboard className="sidebar-icon" /> <span>Dashboard</span>
//         </Nav.Link>
//         <Nav.Link as={NavLink} to="/users">
//           <PiUsersThreeFill className="sidebar-icon" /> <span>Users</span>
//         </Nav.Link>
//         <Nav.Link as={NavLink} to="/registration">
//           <MdAppRegistration className="sidebar-icon" /> <span>Registration</span>
//         </Nav.Link>
//         <Nav.Link as={NavLink} to="/setting">
//           <IoSettings className="sidebar-icon" /> <span>Settings</span>
//         </Nav.Link>
//       </Nav>

//       <div className="p-3 border-top">
//         <Button
//           onClick={handleLogout}
//           className="d-flex align-items-center w-100"
//           variant="outline-danger"
//         >
//           <TbLogout2 className="sidebar-icon" /> <span>Log out</span>
//         </Button>
//       </div>

//       {/* ✅ Resize handle */}
//       <div
//         className="resizer"
//         onMouseDown={startResizing}
//       ></div>
//     </aside>
//   );
// }
