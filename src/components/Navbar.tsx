import React from "react";
import { View, Text } from "react-native";

const Navbar: React.FC = () => {
  return (
    <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        padding: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
    }}>
        <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left',
        }}>
            Insta-dummy
        </Text>
    </View>
  );
};

export default Navbar;
