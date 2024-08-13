import { Route, Routes } from "react-router-dom";
import HomeCP from "./components/HomeCP/HomeCP";
import YandexMap from "./components/ui/YandexMap/YandexMap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeCP />} />
      <Route path="/map" element={<YandexMap />} />
    </Routes>
  );
}

export default App;
