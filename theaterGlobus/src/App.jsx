// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomeKA from "./Pages/ka/Home.jsx";
import HomeEN from "./Pages/en/Home.jsx";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          {/* Georgian */}
          <Route path="/" element={<HomeKA />} />

          {/* English */}
          <Route path="/en" element={<HomeEN />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;