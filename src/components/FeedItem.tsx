import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Card, FAB, Text, TextInput } from "react-native-paper";
import myTheme from "../styles/global";
import CommentSection from "./CommentSection";

interface FeedItemProps {
	post: Post;
	handlePress: () => void;
}

const FeedItem: React.FC<FeedItemProps> = (props) => {
	const [userImg, setUserImg] = React.useState("asset:/avatar.png");
	const [postImg, setPostImg] = React.useState("asset:/avatar.png");

	useEffect(() => {
		getImg(props.post.user_img).then((res) => setUserImg(res));
		getImg(props.post.img).then((res) => setPostImg(res));
	}, []);

	const getImg = async (url: string) => {
		const res = await fetch(url).then((res) => res.url);
		return res;
	};

	const leftContent = () => (
		<Avatar.Image size={40} source={{ uri: userImg }} />
	);

	const getLikesNum = () => {
		return props.post.likes.length;
	};

	const getCommentsNum = () => {
		return props.post.comments.length;
	};

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
				title={props.post.username}
				subtitle={props.post.location}
				left={leftContent}
			/>
			<Card.Cover source={{ uri: postImg }} />
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
				<View className="flex flex-row mb-1">
					<Text variant="bodyMedium" className="">
						{getLikesNum()}
					</Text>
					<Text variant="bodyMedium"> Likes</Text>
					{/* <Text variant="bodyMedium" className="ml-4">
						{getCommentsNum()}
					</Text>
					<Text variant="bodyMedium"> Comments</Text> */}
				</View>
				<Text className="mb-4 text-lg" variant="bodyMedium">
					{props.post.desc}
				</Text>
				<FlatList
					data={props.post.comments}
					renderItem={({ item }) => (
						<CommentSection
							username={item.username}
							desc={item.msg}
						/>
					)}
				/>
				<TextInput
					label="Add a comment..."
					mode="outlined"
					outlineColor={myTheme.colors.background}
					className="mt-3"
				/>
			</Card.Content>
		</Card>
	);
};

export default FeedItem;
