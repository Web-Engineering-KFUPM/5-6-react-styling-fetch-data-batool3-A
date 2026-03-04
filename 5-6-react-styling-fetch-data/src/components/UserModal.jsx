import React from "react";
import { Modal, Button } from "react-bootstrap";

function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
    <>
      {/* TODO 3.2: Replace this placeholder with a React-Bootstrap <Modal> */}
      {/* TODO 3.2: Modal must use show={show} and onHide={onHide} */}
      {/* TODO 3.2: Must include Header/Title/Body/Footer + Close button */}
      {/* TODO 3.2: Body must show avatar (user-avatar-large) + name/email/phone/website */}
      <Modal show={show} onHide={onHide}>
              <Modal.Header closeButton>
                <Modal.Title>{user.name}</Modal.Title>
              </Modal.Header>

              <Modal.Body className="text-center">
                <img
                  src={`https://i.pravatar.cc/150?img=${user.id}`}
                  alt={user.name}
                  className="user-avatar-large mb-3"
                />

                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
}

export default UserModal;