import styled from "styled-components";

const ModalSection = styled.section`
  position: fixed;
  top: 5%;
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border-radius: 1rem;
  padding: 1rem;
  border: solid 0.5rem white;
  box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.5);
  background: linear-gradient(46deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 1) 20%, #444444 52%, #3a3a3a 75%, rgba(34, 34, 34, 1) 100%);
  overflow: auto;
  overflow-x: hidden;
`;

export default ModalSection