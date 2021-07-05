import styled from "styled-components";

const StyledBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.greyScales.medium};
  margin: ${({ theme }) => theme.spacing.medium};
`;

export { StyledBox };
