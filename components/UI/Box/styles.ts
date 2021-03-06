import styled from "styled-components";

const StyledBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export { StyledBox };
