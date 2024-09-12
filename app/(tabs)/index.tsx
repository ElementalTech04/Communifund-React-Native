import {Image, ImageBackground, Text, View} from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {Colors} from "@/constants/Colors";
import {styled} from "nativewind";
import {UserData} from "@/constants/model";

const StyledImageBackground = styled(ImageBackground);
const StyledText = styled(Text);

export default function Index() {

    const [fundTotal, setFundTotal] = React.useState(0);
    const [userData, setUserData] = React.useState<UserData>(null);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: Colors.light.background, dark: Colors.dark.background}}
            headerChildren={
                <StyledImageBackground
                    source={require('@/assets/images/partial-react-logo.png')}
                    className="w-full h-64 justify-center items-center"
                >
                    <StyledText className="text-black text-3xl mt-2 font-bold ">Hello, {userData?.firstName}!</StyledText>
                    <StyledText className="text-black text-xl mt-2 font-bold">Your total community fund is</StyledText>
                    <StyledText className="text-black text-3xl mt-2  font-bold">{fundTotal}</StyledText>
                </StyledImageBackground>
            }>

            <Text>Welcome Home!</Text>
        </ParallaxScrollView>
    );
}



