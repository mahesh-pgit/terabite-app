import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/constants";

const MenuItemCard = ({ menuItem }) => {
	const { name, description, imageId, price, defaultPrice, ratings } = menuItem?.card?.info;
	return (
		<div>
			<div className="menu-item-card">
				<div className="menu-item-info">
					<h3>{name}</h3>
					<h4>₹{price || defaultPrice ? price / 100 || defaultPrice / 100 : null}</h4>
					<h5>
						{ratings.aggregatedRating.rating
							? `⭐${ratings.aggregatedRating.rating}`
							: null}{" "}
						{ratings.aggregatedRating.ratingCountV2
							? `(${ratings.aggregatedRating.ratingCountV2})`
							: null}
					</h5>
					<p>
						{description
							? description.length < 155
								? description
								: description.slice(0, 155) + "..."
							: null}
					</p>
				</div>
				<div className="menu-item-img-container">
					{imageId ? (
						<img
							className="menu-item-img"
							src={SWIGGY_MEDIA_ASSETS_URL + imageId}
							alt={name}
						/>
					) : null}
					<button className="add-to-cart-btn">ADD</button>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default MenuItemCard;
