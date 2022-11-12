import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./components/Chat";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
