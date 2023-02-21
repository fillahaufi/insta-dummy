import React from "react";
import { ScrollView, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import myTheme from "../styles/global";
import FeedItem from "../components/FeedItem";

const Feed = () => {
	const handlePostPress = () => {
		console.log("Pressed");
	};

	return (
		<View
			className="flex-1 items-center justify-center"
			style={{
				backgroundColor: myTheme.colors.background,
			}}
		>
			<View
				className="absolute top-0 h-20 px-5 pt-6 w-full justify-between flex flex-row"
				style={{
					backgroundColor: myTheme.colors.tertiary,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					// padding: 10,
					zIndex: 10,
				}}
			>
				<Text
					className="text-2xl font-bold mt-2"
					// style={{ color: myTheme.colors.background }}
				>
					Pinstagram
				</Text>
				<IconButton
					icon={"bookmark"}
					iconColor={myTheme.colors.onPrimary}
				/>
			</View>
			<ScrollView
				className="w-full absolute bottom-0"
				style={{
					height: "90%",
					paddingTop: 10,
				}}
				alwaysBounceVertical={true}
			>
				<FeedItem handlePress={handlePostPress}></FeedItem>
				<FeedItem handlePress={handlePostPress}></FeedItem>
				<FeedItem handlePress={handlePostPress}></FeedItem>
			</ScrollView>
		</View>
	);
};

export default Feed;
