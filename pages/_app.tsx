import { createTheme, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1a73eb",
      },
      secondary: {
        main: "#f6b718",
      },
    },
    typography: {
      fontFamily: "vp",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
