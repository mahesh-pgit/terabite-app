const APP_LOGO_URL =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX///8AAAAAlojr6+vw8PD8/Pzj4+NmZmYAkoO1tbW5ubnU1NT4+Pj09PQAj4Dt7e2kpKTc3NzQ0NARERGQkJDKysqbm5uHh4czMzOhoaHe3t4fHx87OztycnKwsLDAwMBYWFhISEiKiop3d3dPT09gYGA4ODgqKiodHR0PDw9DQ0Pq9vV/f39/wbkenZC23NjK6OWbzsjd8O5htKtyu7OMyMA6pJnB4N2n0840pJhPrKF3yEGIAAAJC0lEQVR4nO2caXfaOhCGY4xtNpsdTIAAgYQslCZNm97k//+wi2ZkW96woHEsfOb50pIAZwZp3lmkcHVFEARBEARBEARBEARBEARBEARBEARBEERZeTWKtiBnfjlvRZuQMz9qzo+ibciV50ql4vxXtBV58uocXKy9FG1GjuwrjH151ebFAQ9rv4s2JDd+1MDDivO3aEvyouKxL9qSnOCblO3TP0Xbkg/eJmU8F21MLrwHDtZKmfd/VUTKuIh/HcFB57Voc3LgT01cwzKm/beQh075ajfjXXSwjFrzXIlQtEFfznMt7KBTOjX95UQ8LF1xGvOwdJ3wS8TD8tWm0TUsX5f4q1Z2D6PZonwJ8XlfdqW5+gxv0/Jli1ADXMqMf/UzLKYfRdvz9YSlppQN4mdISsu3ScNNfvkqGkDMFwlL2LLbZnc4bF7rtn2hE4BAa5yf4d/ovdF6s9V8pqv5YGFeoJteSgxVbMZwvNISmc0X1cJsleXlz9v7x8fnH5zK8Nq0JmSK3rqf7B5n2SjIcile3hyH++TsYV/CPq19eNvP7oju9d2NNR+P19ZyNhWdHJsF+nCMnx+OWMU4n0xcXp1K7Z2rTHvgO+FanV4o7PRmff3k/9rqFuFABi+fkX6wUtuji28teEJr8OhtxMl1K/E9zLrl+ThXbR2N35FuMHCRz0kbXDmnI/3YG9n1DfdxoJayvkUXEF389H7fXqLZT8Ps9+rOuY/JC10Uf/dJPnrFaANNXkn4xxixJ2+v87P2LIzXStxHvExj7MC/rWweGLNnb9o5Gnsmz6/7kJhWajVo63WMrJ3kpjPuQGkwCq8HuZl7FsZfPyEeMqLzG7KE+cAsfuxJvod+DzKDD3qadpOTrefz8vr2vt9/fP7gQ4smLOCdrDD24OkLfNBh/5eM3cJAi6X32g0klCY+wHg8mlyKBx2U3mm3kFFQY2yMx9xM+xquxT2XiQEVjYUPTIjHUW6mfQ12/5RA0l1hQzeFz6azy8e8L+DplBVEn3jOhHh8wPr7EI6dfOz7Z3anxGAdcgrXGIjHFXTDLQjHZk4m/huLU1QUGqsn1M0WxOMcKgTcuiO1qnBOlQXhUvLJqDHoR1WIx1B6VA1m9IMt9dT2NqYxGI9COKrWL15dDeVltNkXAhadwrjDcNTx7ZQT1Kl0ugaN6fO6VYhHTI9Ygk/UUxsoKaX2KPh0z2szEE4LNWYWbF1Q5XVOpp5Hqy+bKCyhMK8KfUXz0Q/H1kY9B2FXzSSe14aiYIwP0Cn8XOpBOJpbBeu31jYoT47RnAoaIzglhuNQyYTB5jKz7CwNPmk94cEMNWYepEcI6CnObBTqhpdSUQgDp6nX/w39eKzC1r2Fn4LGPIFkGUs56foOTFZiZo1lcKGW/kq3vY3dhZWts/+2YAiJScecKhSMbHGyEnR1JWgMo83XvRFsXdMNNAbqt21OBp+Mm52fu6LG4E9AT4xBEI6ixuB4Q5XjDJ1Zc/wpC1FjEKY0Ji7VHexwcEpDjYGRzUqZw8Wb8PZLAIfa4WKapX4DMilqDDj1BE4Zy6B+U4K7jJobNeYuLEW2JylraOgNYQ6lBynfVkNNmT1HlNTeaAmLPAildV3UmKB+M/uyg+VcYQO2Tfqvu7Ai0cmLfnDD9T+WXt93SmynDtIz+Xp7T2dxNAxRIGOb2BKVFTUG1RjCcQbh2NUUmZ8OjhU0kwSN4T9+8h8tfI3BlO+NUJmefrm5Z8CWIy1xraGOiQUpJA/hNR0unGKPeFCfw/6eqpAxWLGSfNhQhRWJVzuLWGRCzcbDsS7xzt+Lm/ZJX7tJGsPrtIQGF8NRWFrLrwAKxT7UY7OkZJHW6HWCzOe9hakbvEd0xQQ4zki034TeT04W2OjFh4K3IQeN3gCv1WzhHytUx4w0qb46b5jiLeM/xsPAWEmCAzUvNO0RbGSfyMS8c0ylvw/m4V30h3gYuI5VlvpKdKQTuvwlagxSTwzjbyfJw3bKMCk0Czb5rS93cNNoTJYJKUddD9NOHzpifYPK+TDybpmY8bwwSVjXAogrDTiyja1IC1oMl2sPCI42OTr7UERpqtFskXIBqAvjX95D2TgYzkjnimSLSMZP615xh/LQ1OUO7RXJ+OHaKkVj7KUYgqEDbtl3LhCx8h4m247ztBXPjqAx/ewpkzKVt9Ct3yRqjG6JOxSrs5XE2jCVPtJafx8LP2nhBaCo7RiBLh83GsKhfQY9TZEOuOuFFx4GRn7bg5ZPG3PpscWLehmwZKHEFMPARQtdAPLQwWvt3psXNxOrsxTYait0ECxMyHxMvEobSKt4oJYJa8seVBAaBA/nQ7Z31+if5QcmnhLK3rLoqSI0ANou1DH+HfxV4LV4wC3BWI26G8CbWlqHr449nKzQPe0+KLqq4gG3BMZUkYqGsdA8tk8roafdCO1FqHGSgRUP7tfbeib6TovxsBOjEqqak2b0liq5gqOPVqJ7s/EwNMCAwyf3lBqzyl6hjpIC9rAztixrPbgZRv9ENHLALcNtQvWgLNXZaRoDr9HUSvdH6QoXg6RhS7jMw5ocQKE9sVU3z3hNUaDGnHpbdK5UPXOUMzTmiq/7RURh7BKNHC32KsXuJiaTfMCdDRSwav29ZTJnacwVn4WodjkxCbyod/qNdJiYKzG9yAA0ZnP6rR+4YeWqc1sojbQD7uwXQuyqcqEtnbQD7kwM9zKCMOUSTTb27MxP5puBCenjGfN4E45MFftr5zj4x+rxA+5scOmVdxC/TuGcimRyGQ7ya9uzky8VVvF0Q4GbCZng4eCp1Wjj8Vx1KgI+Cj5B802c8szU+5u8FPAWgraR3Kre9H+nfiXjo/Nvb1kuso32pv9T9fN8CP4FLpo7OrrzjAb/LLTbS2iXQhj+t0StOilOthb+tyjdXUwEilRv/W/66s87vaowRW3Z1/Xbmeb7dxETiySqk8AL9kV71nq3G+9286V4Ya+/U7+TOILR22V8I92NYqP7MzCGt9sU96z65bvHaQ0n1uxB2Jnb5aBxkeJyHP262TvQ7JoXlxkIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIef4HmjR88PeXS5gAAAAASUVORK5CYII=";

const SWIGGY_API_URL =
	"https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3908459&lng=78.56111670000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const SWIGGY_MEDIA_ASSETS_URL =
	"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const SWIGGY_API_MENU_URL =
	"https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3956556&lng=78.556148&restaurantId=";

const MENU_ICON_URL = "https://img.icons8.com/ios/100/restaurant-menu.png";

const UP_ARROW_SVG = (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
	</svg>
);

const DOWN_ARROR_SVG = (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
		<path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
	</svg>
);

const CART_ICON_URL = "https://img.icons8.com/ios/100/shopping-bag--v1.png";

const CHECKOUT_ICON_URL = "https://img.icons8.com/ios/100/circled-right-2.png";

const GITHUB_LOGO_URL = "https://img.icons8.com/plasticine/100/github.png";

const LINKEDIN_LOGO_URL = "https://img.icons8.com/stickers/100/linkedin.png";

const GMAIL_LOGO_URL = "https://img.icons8.com/doodle/50/gmail-new.png";

const WHATSAPP_LOGO_URL = "https://img.icons8.com/scribby/50/whatsapp.png";

const INSTAGRAM_LOGO_URL = "https://img.icons8.com/pulsar-color/48/instagram-new.png";

const X_LOGO_URL = "https://img.icons8.com/ios-filled/50/twitterx--v1.png";

const REDDIT_LOGO_URL = "https://img.icons8.com/doodle/50/reddit--v4.png";

const STACK_OVERFLOW_LOGO_URL = "https://img.icons8.com/color-glass/48/stackoverflow.png";

export {
	APP_LOGO_URL,
	SWIGGY_API_URL,
	SWIGGY_MEDIA_ASSETS_URL,
	SWIGGY_API_MENU_URL,
	MENU_ICON_URL,
	UP_ARROW_SVG,
	DOWN_ARROR_SVG,
	CART_ICON_URL,
	CHECKOUT_ICON_URL,
	GITHUB_LOGO_URL,
	LINKEDIN_LOGO_URL,
	GMAIL_LOGO_URL,
	WHATSAPP_LOGO_URL,
	INSTAGRAM_LOGO_URL,
	X_LOGO_URL,
	REDDIT_LOGO_URL,
	STACK_OVERFLOW_LOGO_URL,
};
