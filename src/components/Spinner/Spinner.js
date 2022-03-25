import { BeatLoader } from "react-spinners";
import colors from "../../utils/colors";

const style = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => (
  <BeatLoader size={15} color={colors.royalBlue} css={style} />
);

export default Spinner;
