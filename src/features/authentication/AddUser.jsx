import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import SignupForm from "./SignupForm";

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens='user-form'
          renderItem={(openModal) => (
            <Button onClick={openModal}>Add new cabin</Button>
          )}
        />
        <Modal.Window
          name='user-form'
          renderItem={(closeModal) => <SignupForm onCloseModal={closeModal} />}
        ></Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
