import { client, xml } from "@xmpp/client";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import auth from "utility/auth";
import debug from "@xmpp/debug";

//const sendTo = 'facillator1@chat.leanq.com.np';
const sendTo = "rajendra15@chat.leanq.com.np";
let xmpp = {};
let iqCaller = null;
localStorage.setItem("message", JSON.stringify({}));



const Chat = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [showModal, setShowModal] = React.useState(false);
  const messages = JSON.parse(localStorage.getItem("message") || {});
  const username = user?.email?.split("@")[0] || "testuser";
  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState();
  // const [messages, setMessages] = React.useState(dummyMessages);

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  useEffect(() => {
    xmpp = client({
      service: "wss://chat.leanq.com.np:5281/xmpp-websocket",
      domain: "chat.leanq.com.np",
      resource: "chat.leanq.com.np",
      username: username,
      password: "12345678",
    });

    iqCaller = xmpp.iqCaller;
    // debug(xmpp, true)
    //  iqCaller = xmpp.iqCaller;
    xmpp.on("error", (err) => {
      // console.error(err);
    });

    xmpp.on("offline", () => {
      // console.log("offline");
    });

    xmpp.on("stanza", async (stanza) => {
      //console.log('stanza')
      // console.log(stanza.toString());
      try {
        if (stanza.is("message")) {

          let msg = stanza.children[0].children[0];
          console.log("message is", msg);
          await xmpp.send(xml("presence", { type: "available" }));

          // await xmpp.stop()
        }
      } catch (err) {
        console.log("error is", err);
      }
    });

    xmpp.on("online", async (address) => {
      // Makes itself available
      await xmpp.send(xml("presence"));
      // console.log("stanza");
      // Sends a chat message
      // const message_send = xml(
      //   "message",
      //   { type: "chat", to: sendTo },
      //   xml("body", {}, messages)
      // );
      // await xmpp.send(message_send);
    });
    xmpp.start().catch(function (err) {
      // console.log("This is error", err)
    });
  }, []);

  const sendMessage = async () => {
    if (!message) return;
    console.log("message_send", message);

    const message_xml = xml(
      "message",
      { type: "chat", to: sendTo },
      xml("body", {}, message)
    );

    
    await xmpp.send(message_xml);

    const response = await iqCaller.request(
      xml("iq", { type: "get" }, xml(username, `${username}:${sendTo}`)),
      30 * 1000, // 30 seconds timeout - default
    );
    const foo = response.getChild(username, `${username}:${sendTo}`);
    console.log(foo);

    // let messageObj = {
    //   originId: messages.length + 1,
    //   isSender: true,
    //   message_send,
    // };
  };




  
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
                        <div className="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Sam Smith
                        </a>
                        <div className="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Milo Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Melody Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                        <div className="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Sam Smith
                        </a>
                        <div className="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Milo Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Melody Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                        <div className="avatar-status bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Sam Smith
                        </a>
                        <div className="fw-semibold text-muted">sam@smith.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Milo Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          mili@altbox.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex user-list py-2">
                    <div className="info-section d-flex">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">M</span>
                        <div className="avatar-status bg-danger start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
                      </div>
                      <div className="ml-3">
                        <a href="#" className="chat-username">
                          Melody Macy
                        </a>
                        <div className="fw-semibold text-muted">
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
                  <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                      <div className="avatar-box bg-light-danger">
                        <span className="avatar-label">S</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ml-3">
                      <span className="chat-username-sm">Bertha Martin</span>
                      <div className="text-muted small">
                        <em> Online </em>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        className="mr-2 voice-call-btn d-md-inline-block btn btn-info"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </button>
                      {/* <button
                    type="button"
                    className="mr-2 video-call-btn d-md-inline-block btn btn-info"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather"
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
                        className="mr-2 more-btn d-md-inline-block btn btn-info"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather"
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Sam Smith</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Administrator</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Sam Smith</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Administrator</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Sam Smith</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Administrator</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">S</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Sam Smith</span>
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
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-box bg-light-danger">
                          <span className="avatar-label">A</span>
                        </div>
                        <div className="ml-3">
                          <span className="chat-username">Administrator</span>
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
                  className="form-control form-control-flush mb-3"
                  rows="2"
                  name="message"
                  onChange={handleChange}
                  placeholder="Type a message"
                  value={message}
                  spellCheck="false"
                ></textarea>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={sendMessage}
                    className="btn btn-brand"
                    type="button"
                  >
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

  return auth(user).isRole("Facilitator") ||
  auth(user).isUserAllowed("view_chat") ? (
  contents
) : (
  <Redirect to="/admin/dashboard" />
);


};

export default Chat;
