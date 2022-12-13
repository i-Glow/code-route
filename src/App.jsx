import { invoke } from "@tauri-apps/api/tauri";
import Home from "./Components/Home/Home";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import Panneaux from "./Components/Courses/Panneaux/Panneaux";
import PanneauxTemplate from "./Components/Courses/Panneaux/PanneauxTemplate";
import OutletTemplate from "./Components/Courses/Panneaux/Danger/OutletTemplate";

function App() {
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/panneaux" exact element={<Panneaux />} />
        <Route path="/panneaux" element={<PanneauxTemplate />}>
          <Route path="dangers" element={<OutletTemplate />} />
          <Route path="interdictions" element={<OutletTemplate />} />
          <Route path="obligations" element={<OutletTemplate />} />
          <Route path="indications" element={<OutletTemplate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
