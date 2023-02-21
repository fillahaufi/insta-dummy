import React from "react";
import { View } from "react-native";
import { Avatar, Card, FAB, Text } from "react-native-paper";
import myTheme from "../styles/global";

interface FeedItemProps {
	handlePress: () => void;
}

const FeedItem: React.FC<FeedItemProps> = (props) => {
	const leftContent = () => (
		<Avatar.Image size={40} source={{ uri: "https://picsum.photos/700" }} />
	);
	return (
		<Card
			className="w-full my-1"
			mode="elevated"
			onPress={props.handlePress}
			style={{
				backgroundColor: myTheme.colors.background,
			}}
		>
			<Card.Title
				title="Username"
				subtitle={"lalala"}
				left={leftContent}
			/>
			<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
			<View className="flex flex-row justify-center mx-3 -mt-5">
				<FAB
					size="small"
					mode="elevated"
					icon="heart-outline"
					className="rounded-full mx-1"
					onPress={() => console.log("Pressed")}
				/>
				<FAB
					size="small"
					mode="elevated"
					icon="comment-outline"
					className="rounded-full mx-1"
					onPress={() => console.log("Pressed")}
				/>
				<FAB
					size="small"
					mode="elevated"
					icon="share-outline"
					className="rounded-full mx-1"
					onPress={() => console.log("Pressed")}
				/>
				<FAB
					size="small"
					mode="elevated"
					icon="bookmark-outline"
					className="ml-auto"
					style={{
						backgroundColor: myTheme.colors.secondary,
					}}
					onPress={() => console.log("Pressed")}
				/>
			</View>
			<Card.Content className="mt-3">
				<Text variant="bodyMedium">Card content</Text>
				<View className="flex flex-row mt-5">
					<Text variant="bodyMedium" className="ml-auto">
						0
					</Text>
					<Text variant="bodyMedium"> Likes</Text>
					<Text variant="bodyMedium" className="ml-4">
						0
					</Text>
					<Text variant="bodyMedium"> Comments</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

export default FeedItem;
