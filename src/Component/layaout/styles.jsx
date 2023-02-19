
import styled from 'styled-components'

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
`

export const Input = styled.input.attrs({
    type: "checkbox"
})``;

const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
`
export const LabelText =  styled.span`

`