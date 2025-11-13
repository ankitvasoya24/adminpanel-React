import React, { useState } from 'react'
import {Card,Button,Table,Form} from 'react-bootstrap';

const Users = () => {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('userdata'))) || [];
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  //Delete user
  const handleDelete = (index) => {
    
    window.confirm('are you sure you want to delete this user');
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
     localStorage.setItem('userdata', JSON.stringify(updatedUsers));
    }
  //Edit user
  const handleEditClick = (index) => {
     setEditIndex(index);
     setEditFormData({ ...users[index] });
    
  }
  
  //Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Save edited data
  const handleSaveClick = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editFormData;

    setUsers(updatedUsers);
    localStorage.setItem('userdata', JSON.stringify(updatedUsers));
    setEditIndex(null);
    
  };

  // Cancel editing
  const handleCancelClick = () => {
    setEditIndex(null);
  };

   return (
    <div>
      <h1>Users Data</h1>
      
      <div className='mt-4'>
          <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="fw-semibold">User Registration Data</div>
          <Button size="sm" variant="outline-primary">
            View all
          </Button>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0">
            <thead className="table-light">
              <tr>
                <th>#Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      {editIndex === index ? (
                        <>
                          <td>
                            <Form.Control
                              type="text"
                              name="name"
                              value={editFormData.name}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="email"
                              name="email"
                              value={editFormData.email}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="password"
                              value={editFormData.password}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Form.Select
                              name="role"
                              value={editFormData.role}
                              onChange={handleInputChange}
                            >
                              <option value="Admin">Admin</option>
                              <option value="User">User</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Button
                              variant="success"
                              size="sm"
                              className="me-2"
                              onClick={handleSaveClick}
                            >
                              Save
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={handleCancelClick}
                            >
                              Cancel
                            </Button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                          <td>{user.role}</td>
                          <td>
                            <Button
                              variant="warning"
                              size="sm"
                              className="me-2"
                              onClick={() => handleEditClick(index)}>
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDelete(index)}>
                              Delete
                            </Button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted">
                      <strong>No user data found!</strong>
                    </td>
                  </tr>
                )}
              </tbody>
          </Table>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Users