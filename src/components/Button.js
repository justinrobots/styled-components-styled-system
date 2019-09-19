import styled from "styled-components";
import { color } from "styled-system";

const Button = styled("button")`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.textColor || "var(--text-normal)"};
  background: var(--success);
  border: none;
  border-radius: 3px;
  /* provide access to props in theme object */
  ${color}
`;

export default Button;
