import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />

        <Modal>
          <Modal.Open
            renderItem={(open) => <button onClick={open}>Add new cabin</button>}
            opens='create'
          />
          <Modal.Window
            renderItem={(closeModal) => (
              <CreateCabinForm onCloseModal={closeModal} />
            )}
            name='create'
          />
        </Modal>
      </Row>
    </>
  );
}

export default Cabins;
