import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
const AddToCartModal = () => {
  const { showModal } = useContext(CartContext);

  if (!showModal) return null;

  return (
   <div className="fixed inset-0 flex items-start mt-25 justify-center z-50  bg-opacity-30">
      <div className="bg-white text-green-600 text-lg font-semibold px-6 py-4 rounded-xl shadow-lg">
         Item added to cart!
      </div>
    </div>
  );
};

export default AddToCartModal;
