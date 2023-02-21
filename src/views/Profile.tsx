import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import ProfileItem from "../components/ProfileItem";
import myTheme from "../styles/global";

type Item = {
	id: number;
	src: string;
	likes: number;
	comments: number;
}[];

const Profile = () => {
	const [dataSource, setDataSource] = useState<Item>([]);

	useEffect(() => {
		let items = Array.apply(null, Array(60)).map((v, i) => {
			return {
				id: i,
				src: "https://picsum.photos/700",
				likes: Math.floor(Math.random() * 100),
				comments: Math.floor(Math.random() * 100),
			};
		});
		setDataSource(items);
	}, []);

	return (
		<View
			className="flex-1 items-center w-full"
			style={{
				backgroundColor: myTheme.colors.background,
			}}
		>
			<View className="flex flex-row w-full px-5 pt-10 justify-between items-center">
				<View>
					<Text className="text-xl font-bold">Username</Text>
					<View className="flex flex-row">
						<Text className="text-sm">Followers </Text>
						<Text className="text-sm">0</Text>
						<Text className="text-sm ml-4">Following </Text>
						<Text className="text-sm">0</Text>
					</View>
				</View>
				<Avatar.Image
					size={50}
					source={{ uri: "https://picsum.photos/700" }}
				/>
			</View>
			<View
				className="absolute w-full h-5/6 bottom-0 px-1"
				style={{
					backgroundColor: myTheme.colors.tertiary,
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					paddingTop: 20,
					zIndex: -1,
				}}
			>
				<Text className="text-center">Description</Text>
				<Button className="m-5" mode="contained" onPress={() => {}}>
					Edit Profile
				</Button>
				<FlatList
					data={dataSource}
					renderItem={({ item }) => (
						<ProfileItem
							id={item.id}
							src={item.src}
							likes={item.likes}
							comments={item.comments}
						/>
					)}
					numColumns={3}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		</View>
	);
};

export default Profile;
