import styled from "styled-components";

export const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;
export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",

  placeholder: props.pH || "placeHolder",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px solid aqua;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export const PasswordInput = styled(Input).attrs({
    type: "password",
  })`
  border: 2px solid aqua;
`;



export const Button = styled.button`
     margin: 1em;
     padding: 0.25em 1em;
     border-radius: 3px;
     color: ${props => props.theme.main};
     border: 2px solid ${props =>props.theme.main}

`;

