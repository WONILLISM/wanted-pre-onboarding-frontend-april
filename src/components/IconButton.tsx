import React, { ButtonHTMLAttributes, Children } from "react";
import styled from "styled-components";

const RootStyle = styled.button`
  all: unset;
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestid?: string;
  icon?: React.ReactNode;
}

const IconButton = ({ dataTestid, icon, ...rest }: Props) => {
  return (
    <RootStyle data-testid={dataTestid} {...rest}>
      {icon}
    </RootStyle>
  );
};

export default IconButton;
