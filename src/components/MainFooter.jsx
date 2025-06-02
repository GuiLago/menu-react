import { ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MainFooter() {
  const navigate = useNavigate();

  function onCartBtnClick() {
    navigate(`/cart`);
  }

  return (
    <>
      <footer className="bg-red-500 p-4 flex justify-center items-center">
        <button
          onClick={onCartBtnClick}
          className="text-1xl text-white font-medium flex hover:scale-110 duration-500 cursor-pointer rounded-md bg-zinc-200/20 p-3"
        >
          My Cart
          <ShoppingCartIcon className="text-white p-1" />
        </button>
      </footer>
    </>
  );
}
