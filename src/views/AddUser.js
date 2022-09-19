import CustomizedButton from "components/common/CustomizedButton";
import React, { useEffect, useState } from "react";

import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { axios } from "utility/httpreq";
import notify from "utility/notify";

const AddUser = () => {
  const history = useHistory();
  const [isLogging, setIsLogging] = useState(false);
  const [roles, setRoles] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "", 
    role: "",
  });
  useEffect(() => {
    const runAsync = async function () {
      try {
        const response = await axios(true).get("/api/role/list");
        setRoles(response.data);
      } catch (err) {
        console.log("error is", err);
      }
    };
    runAsync();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLogging(true);
      await axios(true).post("/api/user/create", formData);
      setIsLogging(false);
      history.push("/admin/user");
      notify.showSuccess("User added successfully");
    } catch (error) {
      setIsLogging(false);
      notify.showError(error.response);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4"> Add User</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="First Name"
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          required
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                          name="lastname"
                          value={formData.lastname}
                          required
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          required
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputPassword">Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label htmlFor="typeSelect">Role</label>
                        <select
                          required
                          name="role"
                          className="form-control"
                          onChange={handleChange}
                        >
                          <option></option>
                          {roles &&
                            roles.map(function (role) {
                              return (
                                <option key={role._id} value={role._id}>
                                  {" "}
                                  {role.name}
                                </option>
                              );
                            })}
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col className="pr-1" md="12">
                      {/* <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                      >
                        Submit
                      </Button> */}
                      <CustomizedButton
                        isDisabled={isLogging}
                        classNames="btn-fill pull-right"
                      />
                    </Col>
                  </Row>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddUser;
