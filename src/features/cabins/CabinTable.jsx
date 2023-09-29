import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useCabins } from "./useCabins";
import Pagination from "../../ui/Pagination";

function CabinTable() {
  const { isLoading, cabins, count } = useCabins();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resourceName='cabins' />;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          data={cabins}
        />

        <Table.Footer>
          <Pagination count={count} perPage={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CabinTable;
