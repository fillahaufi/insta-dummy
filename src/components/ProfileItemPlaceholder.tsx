import React from "react";
import { FlatList, View } from "react-native";
import { Fade, Placeholder, PlaceholderMedia } from "rn-placeholder";

type Props = {
	isVisible: boolean;
};

const ProfileItemPlaceholder: React.FC<Props> = (props) => {
	const dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<View className="w-full p-1">
			<FlatList
				data={dataSource}
				className={`${props.isVisible ? "" : "hidden"}`}
				renderItem={({ item }) => (
					<Placeholder className="w-1/3 mb-3 p-1" Animation={Fade}>
						<PlaceholderMedia className="h-40 w-full" />
					</Placeholder>
				)}
				numColumns={3}
				keyExtractor={(item, index) => index.toString()}
			/>
			{/* <Placeholder className="w-1/3 h-64" Animation={Fade}>
				<PlaceholderMedia size={100} />
			</Placeholder> */}
		</View>
	);
};

export default ProfileItemPlaceholder;
