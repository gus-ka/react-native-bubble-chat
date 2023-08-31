import { TouchableOpacity, View } from "react-native";
import { SimpleRoundedStyles } from "../../styles";
import { SimpleRoundedProps } from "./simple-rounded.props";

export const SimpleRounded = ({
  children,
  isSender,
  containerStyle,
  bodyStyle,
  senderPoint,
  recieverPoint,
  roundedValue,
  roundedPointValue,
  minHeight,
  minWidth,
  backgroundColor,
  elevation,
  paddingHorizontal,
  paddingVertical,
  activeOpacity,
  onPressed,
}: SimpleRoundedProps) => {
  const style = SimpleRoundedStyles(
    isSender,
    senderPoint,
    recieverPoint,
    roundedValue,
    roundedPointValue,
    minHeight,
    minWidth,
    backgroundColor,
    elevation,
    paddingHorizontal,
    paddingVertical
  );

  return (
    <View style={[style.talkBubbleContainer, containerStyle]}>
      <TouchableOpacity
        activeOpacity={activeOpacity ? activeOpacity : 0.9}
        onPress={onPressed ? onPressed : undefined}
      >
        <View style={[style.talkBubbleBody, bodyStyle]}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};
