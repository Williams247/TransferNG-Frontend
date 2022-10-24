import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalProp } from "../utils/constants/constant";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Product from "../pages/shop/product";
import Coach from "../pages/coach";
import CoachLogin from "../pages/login/coach";
import PlayerLogin from "../pages/login/player";
import SignUpAs from "../components/Modal/SignUpAs";
import LoginAs from "../components/Modal/LoginAs";
import SignUpAsCoach from "../pages/signup/coach";
import SignUpAsPlayer from "../pages/signup/player";
import Player from "../pages/player";

const AppRouter = () => {
  const state = useSelector((state: ModalProp) => state.isModalOpen.value);
  const state2 = useSelector((state: ModalProp) => state.isModalOpen.value2);
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
        <SignUpAs isOpen={state} />
        <LoginAs isOpen={state2} />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
