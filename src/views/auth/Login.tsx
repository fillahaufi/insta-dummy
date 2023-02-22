import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import myTheme from "../../styles/global";

interface LoginScreenProps {
	navigation: any;
}

const Login: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
	const handleLogin = () => {
		props.navigation.navigate("Home");
	};

	const goToRegister = () => {
		props.navigation.navigate("Register");
	};

	return (
		<View
			className="flex-1 items-center justify-center"
			style={{
				backgroundColor: myTheme.colors.primary,
				width: Dimensions.get("window").width,
			}}
		>
			<View
				className="h-3/4 absolute bottom-0"
				style={{
					backgroundColor: myTheme.colors.tertiary,
					width: Dimensions.get("window").width,
					borderTopRightRadius: 50,
					borderTopLeftRadius: 50,
				}}
			>
				<Text className="text-center mt-6 text-xl font-medium">
					Login to your account
				</Text>
				<View
					className="h-5/6 absolute bottom-0"
					style={{
						backgroundColor: myTheme.colors.background,
						width: Dimensions.get("window").width,
						borderTopRightRadius: 50,
						borderTopLeftRadius: 50,
						padding: 20,
					}}
				>
					<TextInput
						label="Username"
						className="mt-10"
						mode="outlined"
					/>
					<TextInput
						secureTextEntry={true}
						label="Password"
						className="mt-2 mb-5"
						mode="outlined"
					/>
					<Button
						className="mt-3"
						mode="contained"
						onPress={handleLogin}
					>
						Login
					</Button>
					<View className="flex flex-row">
						<Text className="mt-3">Don't have an account?</Text>
						<Text
							className="mt-3 ml-2 underline underline-offset-8"
							onPress={goToRegister}
						>
							Register
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Login;
