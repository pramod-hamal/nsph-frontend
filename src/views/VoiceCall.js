import React from "react";

import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/fontawesome-free-solid";

const VoiceCall = () => {
  
  let contents = (
    <>
      <div className="voice-call-page">
        <div className="call-header">
          <p class="font-weight-bold"> Ongoing Call </p>

        </div>

        <div class="d-flex align-items-center py-1 flex-column call-body">
          <div class="position-relative">
            <div className="avatar-box bg-light-danger">
              <span className="avatar-label">BM</span>
            </div>
          </div>
          <div class="flex-grow-1">
            <span class="chat-username-sm">Bertha Martin</span>
            <div class="text-muted small text-center">
              <strong> 01: 30 </strong>
            </div>
          </div>
        </div>
                
        <div className="call-control-btns d-flex justify-content-center w-100">
              <button
                type="button"
                class="mr-4 btn-circle btn-start-call d-md-inline-block btn"
              >
                {/* <FontAwesomeIcon icon="fas fa-phone-alt" /> */}
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <button
                type="button"
                class="mr-4 btn-circle btn-end-call d-md-inline-block btn"
              >
                {/* <FontAwesomeIcon icon="fas fa-phone-alt" /> */}
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

      </div>
    </>
  );

  return contents;
};

export default VoiceCall;
