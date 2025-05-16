import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { clearCart } from "../store/cartSlice";
import MenuItemCard from "../components/MenuItemCard";
import { CHECKOUT_ICON_URL } from "../assets/assets";
import OnlineError from "../components/OnlineError";

const Cart = () => {
	const [tip, setTip] = useState("");

	const cartItems = useSelector((store) => store.cart.cartItems);

	const dispatch = useDispatch();

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OnlineError />;

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	let cartCount = 0;

	let itemTotal = 0;

	cartItems.forEach((cartItem) => {
		cartCount = cartCount + cartItem.itemsInCart;
		itemTotal =
			itemTotal +
			(cartItem.price / 100 || cartItem.defaultPrice / 100) * cartItem.itemsInCart;
	});

	let deliveryFee = 43;

	let tax = 0.12 * itemTotal;

	let totalPrice = itemTotal + deliveryFee + tax + Number(tip);

	const billRowStyles =
		"flex justify-between text-[18px] font-[500] text-[#02060CB3] max-[600px]:text-[15px] ";

	return cartCount !== 0 ? (
		<div className="cart-page flex justify-evenly mt-[20px] max-[1000px]:flex-col max-[1000px]:items-center max-[820px]:mt-[10px]">
			<div className="cart w-[800px] max-[820px]:w-[98%]">
				<div className="relative flex justify-center mb-[25px]">
					<h1 className="text-[30px] font-[500] max-[600px]:text-[20px]">Cart</h1>
					<button
						className="absolute right-[5%] p-[10px] text-[20px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] cursor-pointer md:hover:bg-[#F2F2F2] md:hover:shadow-none md:hover:border-[none] max-[600px]:text-[15px] max-[600px]:p-[5px]"
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
			<div className="bill w-[300px] min-[1000px]:mr-[20px] max-[1000px]:w-[760px] max-[1000px]:mt-[20px] max-[820px]:w-[95%] max-[600px]:w-[95%]">
				<h1 className="text-[20px] font-[600] text-[#02060C] mb-[10px]">Bill Details</h1>
				<h2 className={billRowStyles + "mb-[5px]"}>
					Item Total <p>₹{itemTotal.toFixed(2)}</p>
				</h2>
				<h2 className={billRowStyles}>
					Delivery Fee <p>₹{deliveryFee.toFixed(2)}</p>
				</h2>
				<hr className="border-1 border-[#E5E6E6] w-[100%] my-[30px] max-[600px]:my-[15px]"></hr>
				<h2 className={billRowStyles + "mb-[5px]"}>
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
							className="w-[50px] border-b-1 border-[#BFBFBF] focus:outline-none focus:border-none placeholder:text-[#A6A6A6] placeholder:font-[500] max-[600px]:w-[40px]"
						/>
					</div>
				</h2>
				<h2 className={billRowStyles}>
					GST & Other Charges <p>₹{tax.toFixed(2)}</p>
				</h2>
				<hr className="border-1 border-[#02060C] w-[100%] my-[30px] max-[600px]:my-[15px]"></hr>
				<h2 className="text-[18px] font-[700] text-[#02060C] flex justify-between">
					TO PAY <p>₹{totalPrice.toFixed(2)}</p>
				</h2>
				<button className="w-[100%] py-[10px] my-[30px] bg-[#1BA672] rounded-[0.1cm] cursor-pointer md:hover:bg-[#00C464]">
					<div className="flex justify-center">
						<h1 className="text-[20px] font-[500] max-[600px]:text-[15px]">CHECKOUT</h1>
						<img
							className="w-[30px] h-[30px] ml-[5px] max-[600px]:w-[20px] max-[600px]:h-[20px]"
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
		<div className="empty-cart h-[75vh] flex flex-col items-center justify-center">
			<h1 className="text-[30px] text-[#02060CCC] font-[600] pb-[10px] max-[600px]:text-[20px]">
				Your cart is empty
			</h1>
			<h2 className="text-[20px] text-[#02060C] font-[500] max-[600px]:text-[15px]">
				Looks like you haven't made your choice yet...
			</h2>
		</div>
	);
};

export default Cart;
