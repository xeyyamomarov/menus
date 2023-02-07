import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Button } from "../components/Button";

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar=<div>
<Button onClick={handleClose} primary>I Accept</Button>
  </div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        Modal text
    </p>

  </Modal>
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open MOdal
      </Button>
      {showModal && modal}
    </div>
  );
};
