import styled from "styled-components";
import { useResponsive } from "../hooks/useResponsive";
import ButtonIcon from "./ButtonIcon";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import Modal from "./Modal";

const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function TableOperations({ children }) {
  const { isLaptopL } = useResponsive();

  return <StyledTableOperations>{children}</StyledTableOperations>;

  // return isLaptopL ? (
  //   <StyledTableOperations>{children}</StyledTableOperations>
  // ) : (
  //   <Modal>
  //     <Modal.Open
  //       opens='filters'
  //       renderItem={(openModal) => (
  //         <ButtonIcon onClick={openModal}>
  //           <HiAdjustmentsVertical />
  //         </ButtonIcon>
  //       )}
  //     />
  //     <Modal.Window
  //       name='filters'
  //       renderItem={(closeModal) => (
  //         <div
  //           style={{
  //             padding: "10px 0",
  //             display: "flex",
  //             flexDirection: "column",
  //             gap: 25,
  //           }}
  //         >
  //           {children}
  //         </div>
  //       )}
  //     />
  //   </Modal>
  // );
}

export default TableOperations;
