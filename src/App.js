import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChatMainPage from "./pages/chatMainPage/ChatMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<ChatMainPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
