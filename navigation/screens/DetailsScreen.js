import React, { useState, useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";

let currentQuestion = 0;
let questionnaireNum = 26;

const ProgressBar = ({ progress }) => {
  const [rectangleHeight, setRectangleHeight] = useState(0);
  const { width } = Dimensions.get("window");
  const animatedProgress = useRef(new Animated.Value(0)).current;

  // Sets the size of the progress bar depending on screen size
  useEffect(() => {
    const screenHeight = Dimensions.get("window").height;
    const rectangleHeightPercentage = 1; // set the percentage value for rectangle height
    const rectangleHeight = (screenHeight * rectangleHeightPercentage) / 100;
    setRectangleHeight(rectangleHeight);
  }, []);

  const onPressNextQuestion = () => {
    if (currentQuestion < questionnaireNum) {
      currentQuestion = currentQuestion + 1;
      const containerWidth = width * 0.8;
      progress = (containerWidth / questionnaireNum) * currentQuestion;
      console.log(currentQuestion);
      console.log(progress);

      Animated.timing(animatedProgress, {
        toValue: progress,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }

    if (currentQuestion == questionnaireNum) {
      console.log("Questionnaire Completed!");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
      }}
    >
      <View
        style={{
          marginTop: "10%",
          width: "80%",
          height: rectangleHeight,
          backgroundColor: "#CECECE",
          borderRadius: 10,
          position: "relative",
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            width: animatedProgress, // set the width based on the animatedProgress ref
            height: rectangleHeight,
            backgroundColor: "red",
            borderRadius: 5,
          }}
        />
      </View>
      <TouchableOpacity onPress={onPressNextQuestion}>
        <View style={{ backgroundColor: "blue", padding: 16 }}>
          <Text style={{ color: "white" }}>Next Question</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProgressBar;
