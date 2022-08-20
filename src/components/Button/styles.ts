import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const Container = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => buttonVariants[props.variant]};
`;
