import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { 
  flex: 1, 
  justifyContent: "center", 
  position: 'relative',
  marginLeft: 20,
  height: 8, 
  backgroundColor: "#eaeaea" ,
  borderRadius: 4,
  
}
const TITLE_LEFT: ViewStyle = { 
  position: 'absolute',
  // marginLeft: 20,
  height: 8, 
  width: 40,
  backgroundColor: "#7BCCD6" ,
  borderRadius: 4,
  zIndex:20
}

const TITLE_RIGHT: ViewStyle = { 

  // color: '#454545'
  // color: '#454545',
  // position: 'absolute',
  marginLeft: 20,
  marginRight: -20,
  // height: 8, 
  // width: 40,
  // backgroundColor: "#7BCCD6" ,
  // borderRadius: 4,
  // zIndex:20
}


const TITLE_TEXT: TextStyle = { color: '#454545'}
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || "------------------"

  return (
    <View style={{ ...ROOT, ...style }}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      {/* <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
      </View> */}
      <View style={TITLE_MIDDLE}>
        <View style={TITLE_LEFT}>
        </View>
      </View>
      <View style={TITLE_RIGHT}>
        <Text style={TITLE_TEXT} text={'1/8'} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
