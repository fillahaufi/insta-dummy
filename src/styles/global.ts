import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { MD3Theme } from "react-native-paper/lib/typescript/types";
// const MyTheme: Theme = {
//   dark: false,
//   colors: {
//     primary: 'rgb(204, 214, 166)',
//     secondary: 'rgb(218, 226, 182)',
//     bgPrimary: 'rgb(244, 234, 213)',
//     bgSecondary: 'rgb(255, 251, 233)',
//     text: 'rgb(82, 87, 65)',
//   },
// };

const myTheme: MD3Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(204, 214, 166)',
    onPrimary: 'rgb(82, 87, 65)',
    // primaryContainer: 'rgb(244, 234, 213)',
    // onPrimaryContainer: 'rgb(82, 87, 65)',
    secondary: 'rgb(218, 226, 182)',
    onSecondary: 'rgb(82, 87, 65)',
    secondaryContainer: 'rgb(204, 214, 166)',
    onSecondaryContainer: 'rgb(82, 87, 65)',
    tertiary: 'rgb(244, 234, 213)',
    onTertiary: 'rgb(82, 87, 65)',
    tertiaryContainer: 'rgb(255, 251, 233)',
    background: 'rgb(255, 251, 233)',
    onBackground: 'rgb(82, 87, 65)',
    surface: 'rgb(255, 251, 233)',
    onSurface: 'rgb(82, 87, 65)',
  },
};

export default myTheme;