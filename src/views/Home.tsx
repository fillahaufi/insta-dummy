import React from "react";
import { BottomNavigation } from "react-native-paper";
import Feed from "./Feed";
import Profile from "./Profile";
import Search from "./Search";
import Notification from "./Notification";
import AddPost from "./AddPost";

interface Props {
	navigation: any;
}

const Home = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "home",
			title: "Home",
			focusedIcon: "home",
			unfocusedIcon: "home-outline",
		},
		{
			key: "search",
			title: "Search",
			focusedIcon: "magnify",
			unfocusedIcon: "magnify",
		},
		{
			key: "add",
			title: "Add",
			focusedIcon: "plus",
			unfocusedIcon: "plus",
		},
		{
			key: "heart",
			title: "Notification",
			focusedIcon: "heart",
			unfocusedIcon: "heart-outline",
		},
		{
			key: "profile",
			title: "Profile",
			focusedIcon: "account",
			unfocusedIcon: "account-outline",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		home: Feed,
		search: Search,
		add: AddPost,
		heart: Notification,
		profile: Profile,
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
};

export default Home;
