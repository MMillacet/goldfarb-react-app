import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layouts from "./layouts/Layouts"
import Avisos from "./components/Avisos"
import ListAvisos from "./views/ListAvisos"

export default function AppRouter() {

  return (
   <BrowserRouter>
   <Routes>
    <Route element= {<Layouts />}>
        <Route path="/" element={<Avisos />} index/>
        <Route path="/list-avisos" element={<ListAvisos />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
