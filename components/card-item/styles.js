import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerButtonSee = styled.div`
  display: flex;
  opacity: ${({ showButton }) => showButton ? 1 : 0};
  ${({showButton}) => showButton && 'transition: opacity 0.2s ease-in-out;'};
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 45px;

  width: 100%;
  margin-bottom: 10px;
`;

const Content = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 350px;
`;

const Text = styled.div`
  color: #333333;
`;

export {
  Container,
  ContainerButtonSee,
  Content,
  Image,
  Text,
};
