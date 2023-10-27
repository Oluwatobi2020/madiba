import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "../components/helpers/theme";


export const metadata = {
  title: "Madiba Homes & Apartments",
  description: "Created By Oluwatobi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
      <body >{children}</body>

      </ThemeProvider>
      
    </html>
  );
}
