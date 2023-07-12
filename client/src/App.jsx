import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/panelControl/panelComponents/panelSections/Login";
import PanelHome from "./components/panelControl/routes/PanelHome";
import PanelBlog from "./components/panelControl/panelComponents/panelSections/PanelBlog";
import PanelComment from "./components/panelControl/panelComponents/panelSections/PanelComment";
import Upload from "./components/panelControl/panelComponents/panelSections/Upload";
import DataContextProvider from "./Context/DataContext";

function App() {
  return (
    <>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panelhome" element={<PanelHome />} />
          <Route path="/panelblog" element={<PanelBlog />} />
          <Route path="/panelcomment" element={<PanelComment />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </DataContextProvider>
    </>
  );
}

export default App;
