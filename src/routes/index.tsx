import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProp } from "../utils/constants/types";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Product from "../pages/shop/product";
import Coach from "../pages/coach";
import CoachLogin from "../pages/login/coach";
import PlayerLogin from "../pages/login/player";
import SignUpAsCoach from "../pages/signup/coach";
import SignUpAsPlayer from "../pages/signup/player";
import Player from "../pages/player";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<Product />} />
          <Route path="/profile/coach" element={<Coach />} />
          <Route path="/login/coach" element={<CoachLogin />} />
          <Route path="/login/player" element={<PlayerLogin />} />
          <Route path="/sign-up/coach" element={<SignUpAsCoach />} />
          <Route path="/sign-up/player" element={<SignUpAsPlayer />} />
          <Route path="/profile/player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
