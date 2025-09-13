import styled from "styled-components"

const CircleButtonSt = styled.button`
position: fixed;
top: 12%;
right: 8%;
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
`

export default CircleButtonSt