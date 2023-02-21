import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import myTheme from "../../styles/global";
import { Button, TextInput } from "react-native-paper";

interface LoginScreenProps {
	navigation: any;
}

const Register: React.FC<LoginScreenProps> = (props) => {
	const goToLogin = () => {
		props.navigation.navigate("Login");
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
				<Text className="text-center mt-7 text-xl font-medium">
					Register your new account
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
						label="Email"
						className="mt-10"
						mode="outlined"
					/>
					<TextInput
						secureTextEntry={true}
						label="Password"
						className="mt-2"
						mode="outlined"
					/>
					<TextInput
						secureTextEntry={true}
						label="Repeat Password"
						className="mt-2 mb-5"
						mode="outlined"
					/>
					<Button
						className="mt-3"
						mode="contained"
						onPress={() => {}}
					>
						Register
					</Button>
					<View className="flex flex-row">
						<Text className="mt-3">Don't have an account?</Text>
						<Text
							className="mt-3 ml-2 underline underline-offset-8"
							onPress={goToLogin}
						>
							Login
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Register;
