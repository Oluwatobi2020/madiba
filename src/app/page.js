"use client"
import LandingPage from "@/components/pages/LandingPage";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "../components/helpers/theme"

export default function Home() {
  return (
    <ThemeProvider theme={theme} >
      <LandingPage/>
    </ThemeProvider>
  )
}
