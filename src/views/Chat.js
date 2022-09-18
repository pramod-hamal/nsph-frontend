import React from "react";

import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";

const Chat = () => {
  const [showModal, setShowModal] = React.useState(false);
  let contents = (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"> Messages </Card.Title>
              </Card.Header>
              <Card.Body className="">
                <div className="scroll-y height-450">
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                        <div class="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Sam Smith
                        </a>
                        <div class="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Milo Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Melody Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                        <div class="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Sam Smith
                        </a>
                        <div class="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Milo Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Melody Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                        <div class="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Sam Smith
                        </a>
                        <div class="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Milo Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div class="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div class="ml-3">
                        <a href="#" class="chat-username">
                          Melody Macy
                        </a>
                        <div class="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="chatbox-header">
                <Card.Title>
                  <div class="d-flex align-items-center py-1">
                    <div class="position-relative">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                      </div>
                    </div>
                    <div class="flex-grow-1 ml-3">
                      <span class="chat-username-sm">Bertha Martin</span>
                      <div class="text-muted small">
                        <em> Online </em>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        class="mr-2 voice-call-btn d-md-inline-block btn btn-info"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </button>
                      {/* <button
                    type="button"
                    class="mr-2 video-call-btn d-md-inline-block btn btn-info"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </button> */}
                      <button
                        type="button"
                        class="mr-2 more-btn d-md-inline-block btn btn-info"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Card.Title>
              </Card.Header>
              <Card.Body className="conversation-text">
                <div className="scroll-y height-288">
                  <div className="d-flex justify-content-start mb-5">
                    <div className="d-flex flex-column align-items-start">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Sam Smith</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start">
                        How likely are you to recommend our company to your
                        friends and family ?
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-5">
                    <div className="d-flex flex-column align-items-end">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Administrator</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-start">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-5">
                    <div className="d-flex flex-column align-items-start">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Sam Smith</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start">
                        How likely are you to recommend our company to your
                        friends and family ?
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-5">
                    <div className="d-flex flex-column align-items-end">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Administrator</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-start">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-5">
                    <div className="d-flex flex-column align-items-start">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Sam Smith</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start">
                        How likely are you to recommend our company to your
                        friends and family ?
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-5">
                    <div className="d-flex flex-column align-items-end">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Administrator</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-start">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-5">
                    <div className="d-flex flex-column align-items-start">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Sam Smith</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start">
                        How likely are you to recommend our company to your
                        friends and family ?
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-5">
                    <div className="d-flex flex-column align-items-end">
                      <div class="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div class="ml-3">
                          <span class="chat-username">Administrator</span>
                        </div>
                      </div>
                      {/* Message Box */}
                      <div className="p-2 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-start">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="send-help">
                <textarea
                  class="form-control form-control-flush mb-3"
                  rows="2"
                  placeholder="Type a message"
                  spellcheck="false"
                ></textarea>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-brand" type="button">
                    Send
                  </button>
                </div>
              </Card.Footer>
            </Card>

            {/* Mini Modal */}
            <Modal
              className="modal-mini modal-primary"
              show={showModal}
              onHide={() => setShowModal(false)}
            >
              <Modal.Header className="justify-content-center">
                <div className="modal-profile">
                  <i className="nc-icon nc-bulb-63"></i>
                </div>
              </Modal.Header>
              <Modal.Body className="text-center">
                <p>Always have an access to your profile</p>
              </Modal.Body>
              <div className="modal-footer">
                <Button
                  className="btn-simple"
                  type="button"
                  variant="link"
                  onClick={() => setShowModal(false)}
                >
                  Back
                </Button>
                <Button
                  className="btn-simple"
                  type="button"
                  variant="link"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Modal */}
          </Col>
        </Row>
      </Container>
    </>
  );

  return contents;
};

export default Chat;
