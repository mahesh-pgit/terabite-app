import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItemCard from "./MenuItemCard";
import { CHECKOUT_ICON_URL } from "../utils/assets";

const Cart = () => {
	const [tip, setTip] = useState("");

	const cartItems = useSelector((store) => store.cart.cartItems);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	let cartCount = 0;
	cartItems.forEach((cartItem) => {
		cartCount = cartCount + cartItem.itemsInCart;
	});

	let itemTotal = 0;
	cartItems.forEach((cartItem) => {
		itemTotal =
			itemTotal +
			(cartItem.price / 100 || cartItem.defaultPrice / 100) * cartItem.itemsInCart;
	});

	let deliveryFee = 43;

	let tax = 0.12 * itemTotal;

	let totalPrice = itemTotal + deliveryFee + tax + Number(tip);

	return cartCount !== 0 ? (
		<div className="flex justify-evenly mt-[30px]">
			<div className="cart w-[800px]">
				<div className="flex justify-center mb-[30px]">
					<h1 className="text-[30px] font-[500] py-[2.5px]">Cart</h1>
					<button
						className="absolute right-[620px] p-[10px] text-[19px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] hover:cursor-pointer hover:bg-[#F2F2F2] hover:shadow-none hover:border-[none]"
						onClick={handleClearCart}>
						Clear Cart
					</button>
				</div>
				<div className="cart-items">
					{cartItems.map((cartItem) => {
						if (cartItem.itemsInCart !== 0)
							return <MenuItemCard key={cartItem.id} menuItem={cartItem} />;
					})}
				</div>
			</div>
			<div className="bill w-[300px]">
				<h1 className="text-[20px] font-[600] text-[#02060C] mb-[10px]">Bill Details</h1>
				<h2 className="text-[18px] font-[500] text-[#02060CB3] flex justify-between mb-[5px]">
					Item Total <p>₹{itemTotal.toFixed(2)}</p>
				</h2>
				<h2 className="text-[18px] font-[500] text-[#02060CB3] flex justify-between">
					Delivery Fee <p>₹{deliveryFee.toFixed(2)}</p>
				</h2>
				<hr className="border-1 border-[#E5E6E6] w-[300px] my-[30px]"></hr>
				<h2 className="text-[18px] font-[500] text-[#02060CB3] flex justify-between mb-[5px]">
					Delivery Tip
					<div>
						₹
						<input
							type="text"
							value={tip}
							onChange={(e) => {
								setTip(e.target.value.replace(/\D/g, "").slice(0, 3));
							}}
							placeholder="0"
							className="w-[50px] border-b-1 border-[#BFBFBF] focus:outline-0 focus:border-0 placeholder:text-[#A6A6A6] placeholder:font-[500]"
						/>
					</div>
				</h2>
				<h2 className="text-[18px] font-[500] text-[#02060CB3] flex justify-between">
					GST & Other Charges <p>₹{tax.toFixed(2)}</p>
				</h2>
				<hr className="border-1 border-[#02060C] w-[300px] my-[30px]"></hr>
				<h2 className="text-[18px] font-[700] text-[#02060C] flex justify-between">
					TO PAY <p>₹{totalPrice.toFixed(2)}</p>
				</h2>
				<button className="w-[300px] py-[10px] my-[30px] bg-[#1BA672] rounded-[0.1cm] hover:cursor-pointer hover:shadow-[0px_5px_10px_#02060CB3]">
					<div className="flex mx-[80px]">
						<h1 className="text-[20px] font-[500]">CHECKOUT</h1>
						<img
							className="w-[30px] h-[30px] ml-[5px]"
							src={CHECKOUT_ICON_URL}
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
							alt="circled-right"
						/>
					</div>
				</button>
			</div>
		</div>
	) : (
		<div className="empty-cart flex flex-col items-center my-[15%]">
			<h1 className="text-[30px] text-[#02060CCC] font-[600] pb-[10px]">
				Your cart is empty
			</h1>
			<h2 className="text-[20px] text-[#02060C] font-[500]">
				Looks like you haven't made your choice yet...
			</h2>
		</div>
	);
};

export default Cart;
