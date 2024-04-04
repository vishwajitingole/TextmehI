import { Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
import Video from "./pages/Video";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomid" element={<Room />} />
        <Route path="/videoroom/:roomid" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
