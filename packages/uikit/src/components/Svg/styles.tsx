import styled from "styled-components";

export const StyledIconContainer = styled.div`
    background: transparent;
`;

export const StyledAnimatedIconComponent = styled.div<{
  isActive: boolean;
  height?: string;
  width?: string;
  hasFillIcon: boolean;
}>`
  position: relative;
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => `width: ${width || "100%"}`};

  div:first-child {
    ${({ height }) => height && `height: ${height}`};
    ${({ width }) => `width: ${width || "100%"}`};
    z-index: 0;
  }
  ${({ hasFillIcon }) =>
    hasFillIcon &&
    `
    div, svg {
      position: absolute;
      left: 0;
      bottom: 0;
      overflow:hidden;
    }

    div:last-child {
      height: 0;
      z-index: 5;
      transition: height 0.25s ease;
    }
  `}

  ${({ isActive, height, width, hasFillIcon }) =>
    isActive &&
    `
    div:last-child {
      ${height && hasFillIcon && `height:${height}`};
      ${`width: ${width || "100%"}`};
    }
  `}
`;
