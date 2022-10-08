import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalProp } from "../utils/constants/constant";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Product from "../pages/shop/product";
import Coach from "../pages/coach";
import Login from "../pages/login";
import SignUpAs from "../components/Modal/SignUpAs";
import SignUpAsCoach from "../pages/signup/coach";
import SignUpAsPlayer from "../pages/signup/player";
import Player from "../pages/player";

const AppRouter = () => {
  const state = useSelector((state: ModalProp) => state.isModalOpen.value);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<Product />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up/coach" element={<SignUpAsCoach />} />
          <Route path="/sign-up/player" element={<SignUpAsPlayer />} />
          <Route path="/player-profile" element={<Player />} />
        </Routes>
        <SignUpAs isOpen={state} />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
