import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import HomeKA from "./Pages/ka/Home.jsx";
import HomeEN from "./Pages/en/Home.jsx";

function Root() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : "ka";

  return (
    <Routes>
      <Route path="/" element={<HomeKA lang={lang} />} />
      <Route path="/en" element={<HomeEN lang={lang} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}