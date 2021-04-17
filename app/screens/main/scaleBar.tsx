import React, { useRef } from "react";
import { Animated, View, Image, StyleSheet, PanResponder, ViewStyle, Text } from "react-native";

const defaultImage = require("./scale.jpg")

const ScaleBar = (props) => {
  const {
    onMove
  } = props
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (e, gestureState) =>{
        onMove(pan.x._value);
        Animated.event([null, {
          dx: pan.x
        }])(e, gestureState); // <<--- INVOKING HERE!
      },
      onPanResponderRelease: () => {
        // onMove();
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={VERTICAL_BAR}></View>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <Image source={defaultImage} style={styles.box} />

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    alignItems: "center",
    zIndex:1
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    color: 'red'
  },
  box: {
    height: 50,
    width: 375,
    borderRadius: 5
  }
});

const VERTICAL_BAR: ViewStyle = {
  backgroundColor: '#7BCCD6',
  position: 'absolute',
  width: 6,
  height: 50,
  bottom: -70,
  borderRadius: 3,
  zIndex: 9999,
  elevation: 10

}
export default ScaleBar;