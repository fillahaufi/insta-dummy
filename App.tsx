import AppNavigator from "./src/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import myTheme from "./src/styles/global";

export default function App() {
	return (
		<PaperProvider theme={myTheme}>
			<AppNavigator />
		</PaperProvider>
	);
}
