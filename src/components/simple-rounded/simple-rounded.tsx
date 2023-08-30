import {TouchableOpacity, View} from 'react-native';
import {SimpleRoundedStyles} from '../../styles';
import {SimpleRoundedProps} from './simple-rounded.props';

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
    paddingVertical,
  );

  return (
    <View style={[style.talkBubbleContainer, containerStyle]}>
      <TouchableOpacity
        activeOpacity={activeOpacity ? activeOpacity : 0.9}
        onPress={onPressed ? onPressed : undefined}>
        <View style={[style.talkBubbleBody, bodyStyle]}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

// export const SimpleRounded = () => {
//   return (
//     <View style={[styles.talkBubble, {elevation: 100}]}>
//       <View style={styles.talkBubbleSquare} />
//       <View style={styles.talkBubbleTriangle} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   talkBubble: {
//     backgroundColor: 'green',
//     elevation: 100, // Atur elevation pada kontainer
//   },
//   talkBubbleSquare: {
//     width: 120,
//     height: 80,
//     backgroundColor: 'lightgrey',
//     borderRadius: 10,
//   },
//   talkBubbleTriangle: {
//     position: 'absolute',
//     left: -26,
//     top: 26,
//     width: 0,
//     height: 0,
//     borderTopColor: 'green',
//     borderTopWidth: 13,
//     borderRightWidth: 26,
//     borderRightColor: 'lightgrey',
//     borderBottomWidth: 13,
//     borderBottomColor: 'green',
//   },
// });
