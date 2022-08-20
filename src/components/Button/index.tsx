import { ButtonVariant, Container } from "./styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <Container variant={variant}>Enviar</Container>;
}
