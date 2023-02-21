import React from "react";
import { Card, Text, Button, IconButton } from "react-native-paper";
import myTheme from "../styles/global";
import { View } from "react-native";

const FeedItem = () => {
	const handlePress = () => alert("Pressed");
	return (
		<Card
			className="w-full"
			mode="elevated"
			onPress={handlePress}
			style={{
				backgroundColor: myTheme.colors.background,
			}}
		>
			{/* <Card.Title title="Card Title" subtitle="location" /> */}
			<Card.Content className="mb-3">
				<Text variant="titleLarge">Card title</Text>
				<Text variant="bodyMedium">Card content</Text>
			</Card.Content>
			<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
			<View className="flex flex-row justify-center">
				<IconButton size={30} icon={"heart-outline"} className="mr-0" />
				<IconButton
					size={30}
					icon={"comment-outline"}
					className="mx-0"
				/>
				<IconButton size={30} icon={"share-outline"} className="mx-0" />
				<IconButton
					size={30}
					icon={"bookmark-outline"}
					className="mx-0 ml-auto"
				/>
			</View>
			<Card.Content className="my-3">
				<Text variant="bodyMedium">Card content</Text>
			</Card.Content>
			{/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions> */}
		</Card>
	);
};

export default FeedItem;
