import React from "react";
import { View, FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import {
	Placeholder,
	Fade,
	PlaceholderMedia,
	PlaceholderLine,
} from "rn-placeholder";

type Props = {
	isVisible: boolean;
};

const FeedItemPlaceholder: React.FC<Props> = (props) => {
	const dataSource = [1, 2, 3, 4, 5];
	return (
		<View
			className="w-full p-1 absolute bottom-0"
			style={{
				height: "90%",
				paddingTop: 10,
			}}
		>
			<FlatList
				data={dataSource}
				className={`${props.isVisible ? "" : "hidden"}`}
				renderItem={({ item }) => (
					<Card className="w-full mb-2">
						<Placeholder
							className="w-full my-3 p-1"
							Animation={Fade}
						>
							<View className="flex flex-row px-2">
								<PlaceholderMedia className="h-10 w-10 rounded-full" />
								<View className="flex flex-col ml-3">
									<PlaceholderLine className="w-40 h-4" />
									<PlaceholderLine className="w-20 h-4" />
								</View>
							</View>
							<View>
								<PlaceholderMedia className="h-40 w-full" />
								<View className="px-2">
									<PlaceholderLine className="w-40 h-4 mt-3" />
									<PlaceholderLine className="w-20 h-4" />
								</View>
							</View>
						</Placeholder>
					</Card>
				)}
				numColumns={3}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default FeedItemPlaceholder;
