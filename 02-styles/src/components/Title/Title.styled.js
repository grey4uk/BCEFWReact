import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: ${(props) => {
    console.log("props :>> ", props);
    const { boldStyle } = props;
    return boldStyle ? "36px" : "24px";
  }};
  font-weight: ${({ boldStyle }) =>
    boldStyle ? 700 : 400};
  &:hover {
    font-size: 48px;
  }
`;
