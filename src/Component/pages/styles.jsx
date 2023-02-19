import styled from 'styled-components'

 const Button = styled.button`

  display: inline-block;
  color: ${props => props.inputColor || "palevioletred"};
  &:hover {
   color: yellow;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 5px solid palevioletred;
  border-radius: 3px;
  display: block;
  
  
`;

export const  TomatoButton= styled(Button)`
  color: ${props => props.inputColor || "palevioletred"};
  border-color: tomato;
`;
export const Title = styled.h1

export const ConstButtonStylePrimary   = styled.button`
  background: ${props =>props.Primary ? "white" : "palevioletred"};
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;

export const ConstButtonStyleHereda = styled(ConstButtonStylePrimary)`
   color: tomato;
   border-color: tomato;
   `;
export const Input = styled.input`
     padding: 0.5em;
     margin: 0.5em;
     color: ${props => props.InputColor || "palevioletred"};
     background: papayawhip;
     border: none;
     border-radius: 3px;
   `;



