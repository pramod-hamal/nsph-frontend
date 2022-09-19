import React, { useEffect, useState } from "react";
// react-bootstrap components
import { Link, Redirect } from "react-router-dom";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { axios } from "utility/httpreq";
import auth from "utility/auth";

const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const runAsync = async function () {
      try {
        const response = await axios(true).get("/api/user/list");
        setUsers(response.data);
      } catch (err) {
        console.log("error is", err);
      }
    };

    runAsync();
  }, []);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  let content = (
    <>
      <Container fluid>
        <Row className="mb-2">
          <Col md="12">
            <div className="add-btn text-right">
              <Link to="/admin/user/add" className="btn btn-brand">
                Add
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"> Users List </Card.Title>
                {/* <p className="card-category">
              Here is a subtitle for this table
            </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">SN</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>Admin</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
  if (auth(user)?.isRole("Admin") || auth(user)?.isUserAllowed("view_user")) {
    return content;
  } else {
    return <Redirect to="/admin/dashboard" />;
  }
};

export default Users;
