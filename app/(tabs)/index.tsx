import {Image, Text} from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ImageStyles} from "@/constants/Styles";

export default function Index() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={ImageStyles.reactLogo}
                />
            }>

            <Text>Welcome Home!</Text>
        </ParallaxScrollView>
    );
}



