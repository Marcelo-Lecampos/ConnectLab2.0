import { CustomThemeProvider } from "@context/CustomTheme";
import { AppLayout } from "@layouts/App";
import { BrowserRouter } from "react-router-dom";
import { AutenticacaoProvider } from "@context/Autenticacao";
import { DevicesProvider } from "@context/DevicesContext";
import { ModalProvider } from "styled-react-modal";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
    <SkeletonTheme baseColor="gray" highlightColor="white">
        <BrowserRouter>
          <ModalProvider>
            <AutenticacaoProvider>
              <DevicesProvider>
                <CustomThemeProvider>
                  <AppLayout />
                </CustomThemeProvider>
              </DevicesProvider>
            </AutenticacaoProvider>
          </ModalProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
