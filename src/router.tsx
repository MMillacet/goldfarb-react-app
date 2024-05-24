import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layouts from "./layouts/Layouts"
import Avisos from "./components/Avisos"

export default function AppRouter() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element= {<Layouts />}>
        <Route path="/" element={<Avisos />} index/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
