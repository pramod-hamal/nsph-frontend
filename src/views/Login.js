import React from "react";

import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="login-page-wrapper">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-section">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4" className="text-center">
                      {" "}
                      Sign in to our platform{" "}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col className="pl-5 pr-5" md="12">
                          <Form.Group>
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <Form.Control
                              placeholder="Email"
                              type="email"
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
