import React, { useState } from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle, PanResponder, Animated } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Text, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"
import ScaleBar from "./scaleBar"
// export const logoIgnite = require("./logo-ignite.png")
// export const heart = require("./heart.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
  // backgroundColor: 'red',
  paddingHorizontal: spacing[4],
  position: 'absolute', 
  top: 0, 
  bottom: 0, 
  left: 0, 
  right: 0,

}



const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE: TextStyle = {
  fontSize: 28,
  lineHeight: 38,
  textAlign: "left",
  marginBottom: spacing[5],
  color: '#535A61'
}

const MIDDLE: ViewStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 60,
}

const MIDDLE_CONTENT: ViewStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ECF4FB',
  position: 'relative',
  width: 80,
  height: 80,
  borderRadius: 40,
  paddingTop: 28

}

const MIDDLE_TITLE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 42,
  lineHeight: 42,
  marginBottom: spacing[4] + spacing[1],
}
const ARROW: ViewStyle = {
  backgroundColor: '#ECF4FB',
  position: 'absolute',
  width: 16,
  height: 16,
  bottom: -8,
  transform: [{ rotateY: "45deg" },{ rotateZ: "45deg" }]

}

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

const BAR: ViewStyle = {
}


const BOTTOM: ViewStyle = {
  position: 'absolute',
  bottom: 50,
  left: 40,
  height: 50,
  width: 300,
  borderRadius: 40,
}
const DEMO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[5],
  backgroundColor: "#7BCCD6",
  borderRadius: 40
}
const DEMO_TEXT: TextStyle = {
  fontSize: 18,
  letterSpacing: 2,
}


export const MainPage = observer(function MainPage() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const demoReactotron = React.useMemo(
    () => async () => {
      console.tron.log("Your Friendly tron log message")
      console.tron.logImportant("I am important")
      console.tron.display({
        name: "DISPLAY",
        value: {
          numbers: 1,
          strings: "strings",
          booleans: true,
          arrays: [1, 2, 3],
          objects: {
            deeper: {
              deeper: {
                yay: "👾",
              },
            },
          },
          functionNames: function hello() {
            /* dummy function */
          },
        },
        preview: "More control with display()",
        important: true,
        image: {
          uri:
            "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
        },
      })
      // make an API call for the demo
      // Don't do API like this, use store's API
      const demo = new Api()
      demo.setup()
      demo.getUser("1")
      // Let's do some async storage stuff
      await save("Cool Name", "Boaty McBoatface")
    },
    [],
  )
  const [count, setRandomCount] = useState(34);

  function clickHandler(num) {
    const newNum = Math.floor((0 -num) / 13) + 34
    setRandomCount(newNum);
  }

  return (
    <View testID="DemoScreen" style={FULL}>
      {/* <Wallpaper /> */}
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />

        <Text style={TITLE} preset="header" text={"How old are you?"} />

        <View style={MIDDLE}>
          <View style={MIDDLE_CONTENT}>
            <Text style={MIDDLE_TITLE} preset="header" text={'' + count} />
            <View style={ARROW}></View>
            <View style={VERTICAL_BAR}></View>
          </View>
        </View>

        <ScaleBar style={BAR} onMove={clickHandler} />
        
        <View style={BOTTOM}>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="demoScreen.reactotron"
            onPress={demoReactotron}
          />
        </View>

      </Screen>
    </View>
  )
})
