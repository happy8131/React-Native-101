import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

//view는 컨테이너고 항상 임포트를 해야한다 , 그리고 text는 모든 text component에 들어d가야한다.
/*
 
  
 */
