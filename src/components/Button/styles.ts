import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant: ButtonVariant;
}

export const Container = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme["green-500"]};
`;
