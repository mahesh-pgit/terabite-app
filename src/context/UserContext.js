import { createContext, useState, useContext } from "react";

const UserContext = createContext({
	userInfo: null,
});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);

	return (
		<UserContext.Provider value={{ userInfo: userInfo, setUserInfo }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);
