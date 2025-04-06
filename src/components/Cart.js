import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItemCard from "./MenuItemCard";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.cartItems);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="cart w-[800px] mx-[auto] mt-[30px]">
			{cartItems.length !== 0 && (
				<div className="flex justify-center mb-[30px]">
					<h1 className="text-[30px] font-[500] py-[2.5px]">Cart</h1>
					<button
						className="absolute right-[400px] p-[10px] text-[19px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#e9e9e9] hover:cursor-pointer hover:bg-[#f2f2f2] hover:shadow-none hover:border-[none]"
						onClick={handleClearCart}>
						Clear Cart
					</button>
				</div>
			)}
			{cartItems.length === 0 && (
				<div className="flex flex-col items-center my-[30%]">
					<h1 className="text-[30px] pb-[10px] text-[#02060CCC] font-[600]">
						Your cart is empty
					</h1>
					<h2 className="text-[20px] font-[500]">
						Looks like you haven't made your choice yet...
					</h2>
				</div>
			)}
			<div className="cart-items">
				{cartItems.map((cartItem, index) => {
					if (cartItem.itemsInCart !== 0)
						return <MenuItemCard key={index} menuItem={cartItem} />;
				})}
			</div>
		</div>
	);
};

export default Cart;
