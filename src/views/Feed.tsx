import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import myTheme from "../styles/global";
import FeedItem from "../components/FeedItem";

const Feed = () => {
	return (
		<View
			className="flex-1 items-center justify-center"
			style={{
				backgroundColor: myTheme.colors.background,
			}}
		>
			<View
				className="absolute top-0 h-1/6 w-full"
				style={{
					backgroundColor: myTheme.colors.primary,
					borderBottomLeftRadius: 50,
					borderBottomRightRadius: 50,
					padding: 20,
				}}
			>
				<Text className="text-white text-2xl font-bold mt-6">
					Pinstagram
				</Text>
			</View>
			<View className="w-full">
				<FeedItem></FeedItem>
			</View>
		</View>
	);
};

export default Feed;
