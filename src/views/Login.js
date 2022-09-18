
import React, { useEffect, useState } from "react";
import { axios } from "utility/httpreq";
// import {useNavigate} from "react-router-dom"

import {

  Button,
  Card,
  Form,

  Container,
  Row,
  Col,
} from "react-bootstrap";

const Login = (props) => {


  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  useEffect(() => {
    if(user) {
      props.history.push("/admin/dashboard");
    }
  },[user])
  const [info, setInfo] = useState({
    "email":"",
    "password": ""
  });

  const handleChange = (e) => {
    var { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios().post("/api/auth/login", info);
      localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      props.history.push("/admin/dashboard")
    }catch(err) {
      console.log("error ", err);
    }
  }
  return (
    <>
      <div className="login-page-wrapper">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-section">
                <Card className="pt-3 pb-3">
                  <Card.Header>

                    
                      <div className="logo-img text-center">
                        <img src={require("assets/img/logo-md.png")} alt="..." />
                      </div>
                    <Card.Title as="h4" className="text-center pt-3">
                      {" "}
                      Sign in to our platform{" "}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col className="pl-5 pr-5" md="12">
                          <Form.Group>
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <Form.Control
                              placeholder="Email"
                              type="email"
                              name="email"
                              value={info.email}
                              onChange={handleChange}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="pl-5 pr-5" md="12">
                          <Form.Group>
                            <label htmlFor="exampleInputPassword">
                              Password
                            </label>
                            <Form.Control
                              placeholder="Password"
                              type="password"
                              name="password"
                              value={info.password}
                              onChange={handleChange}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mt-4">
                        <Col className="pl-5 pr-5" md="12">
                          <Button
                            className="btn-fill btn-block"
                            type="submit"
                            variant="info"
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>

                      <div className="clearfix"></div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
