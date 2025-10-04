import styled from 'styled-components';

type ArrowButtonProps = {
  $left?: boolean;
}

const ArrowButtonSt = styled.button<ArrowButtonProps>`
  position: fixed;
  top: 50%;
  right: ${props => (props.$left ? 'auto' : '8%')};
  left: ${props => (props.$left ? '8%' : 'auto')};;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  font-size: 2rem;
  color: #343434;
  border: none;
  border-radius: 50%;
  padding: 0;
  background: white;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export default ArrowButtonSt;
