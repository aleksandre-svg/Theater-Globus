import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import HomeKA from "./Pages/ka/Home.jsx";
import HomeEN from "./Pages/en/Home.jsx";
import { lazy } from "react";

const Actors = lazy(() => import("./Actors/Actors.jsx"));
const Navbar = lazy(() => import("./Components/Navbar.jsx"));
const Footer = lazy(() => import("./Components/Footer.jsx"))
const ActorDetails = lazy(() => import("./Actors/ActorDetails.jsx"))

function Root() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : "ka";

  return (
    <Routes>
      <Route path="/" element={<HomeKA lang={lang} />} />
      <Route path="/en" element={<HomeEN lang={lang} />} />
      <Route path="/actors" element={<>
          <Actors />
          <Footer />
      </>} />
      <Route path="/actors/:id" element={<ActorDetails/>} />
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