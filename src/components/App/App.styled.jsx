import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 320px;

  ${props => props.theme.media.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${props => props.theme.media.desktop} {
    width: 1024px;
  }
`;
