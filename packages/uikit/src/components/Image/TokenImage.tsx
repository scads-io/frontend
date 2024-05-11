import styled from "styled-components";
import Image from "./Image";

const TokenImage = styled(Image)`
  &:before {
    border-radius: 50%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  }
`;

export default TokenImage;
