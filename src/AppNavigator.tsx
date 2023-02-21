import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./views/auth/Login";
import Home from "./views/Home";
import Register from "./views/auth/Register";
import PostDetail from "./views/PostDetail";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Navigator initialRouteName="Login">
				<Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="Register"
					component={Register}
					options={{
						headerShown: false,
					}}
				/>
				<Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Screen name="PostDetail" component={PostDetail} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
