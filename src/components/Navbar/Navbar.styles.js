import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 4rem;
  max-width: 100%;
  height: 4.5rem;

`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ContentButton = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700; 
`;


export const ImageNav = styled.img`
width: 3rem;
border-radius: 0px;
` 

export const ButtonNav = styled.button`
background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  border-bottom: ${({ativo}) => ativo ? `2px solid white` : 'none'}; 
  line-height: 3.5rem;





  &:hover {
    opacity: 0.7;
  }
  font-size: 1.4rem;
`;