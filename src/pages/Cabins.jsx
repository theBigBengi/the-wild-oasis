import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";

import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Row wrap='true' type='horizontal'>
        <Heading as='h1'> cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
