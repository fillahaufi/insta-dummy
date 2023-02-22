import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
	username: string;
	desc: string;
};

const CommentSection: React.FC<Props> = (props) => {
	return (
		<View className="flex flex-row">
			<Text className="font-bold">{props.username}</Text>
			<Text className="ml-2">{props.desc}</Text>
		</View>
	);
};

export default CommentSection;
