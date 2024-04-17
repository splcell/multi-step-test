import { EndPage } from "@src/pages/EndPage"
import { FailPage } from "@src/pages/FailPage"
import { MainPage } from "@src/pages/MainPage"
import { TestPage } from "@src/pages/TestPage"
import { Routes, Route } from "react-router-dom"



export const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/steps/:step" element={<TestPage />}/>
      <Route path="/end" element={<EndPage />}/>
      <Route path="/fail" element={<FailPage />}/>
      <Route path="*" element={<MainPage />}/>
    </Routes>
  )
}