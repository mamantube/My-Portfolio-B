import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./layout/Dashboard";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Dashboard}>
          <Route path="/" Component={Home}/>
          <Route path="/resume" Component={Resume}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}