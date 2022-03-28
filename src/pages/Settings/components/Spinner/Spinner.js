import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import colors from "../../../../utils/colors";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Spinner = () => (
  <Container>
    <BeatLoader size={20} margin={5} color={colors.royalBlue} />
  </Container>
);

export default Spinner;
