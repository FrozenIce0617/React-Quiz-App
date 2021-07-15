import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  to: string;
}

const Button: React.FC<IProps> = ({ title, to }) => {
  return <ButtonWrapper to={to} className="button-link" >{title}</ButtonWrapper>;
};

export default React.memo(Button)

const ButtonWrapper = styled(Link)`
  color: white;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 2rem;
`;
