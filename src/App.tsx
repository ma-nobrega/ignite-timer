import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button/index";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button />
    </ThemeProvider>
  );
}
