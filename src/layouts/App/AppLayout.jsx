import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "@context/CustomTheme";
import { GlobalStyle } from "@themes";
import { Navbar } from "@components";
import { Rotas } from "@routes";


export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <Rotas />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};
