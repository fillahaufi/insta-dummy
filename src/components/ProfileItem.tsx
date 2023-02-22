import React from "react";
import { View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

type Props = {
	id: number;
	src: string;
	likes: number;
	comments: number;
};

const ProfileItem: React.FC<Props> = (props) => {
	return (
		<View className="w-1/3 p-1">
			<Card className="w-full">
				<Card.Cover source={{ uri: props.src }} />
			</Card>
			<View className="absolute bottom-2 right-2 flex flex-col">
				<View className="flex flex-row justify-end">
					<Text className="text-white">{props.likes}</Text>
					<Avatar.Icon
						className=""
						size={20}
						icon="heart"
						style={{
							backgroundColor: "transparent",
						}}
					/>
				</View>
				<View className="flex flex-row justify-end">
					<Text className="text-white">{props.comments}</Text>
					<Avatar.Icon
						className=""
						size={20}
						icon="comment"
						style={{
							backgroundColor: "transparent",
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default ProfileItem;
