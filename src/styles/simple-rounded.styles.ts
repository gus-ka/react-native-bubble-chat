import {StyleSheet} from 'react-native';
import {RecieverPoint, SenderPoint} from '../types';

export const SimpleRoundedStyles = (
  isSender?: boolean,
  senderPoint?: SenderPoint,
  recieverPoint?: RecieverPoint,
  roundedValue?: number,
  roundedPointValue?: number,
  minHeight?: number,
  minWidth?: number,
  backgroundColor?: string,
  elevation?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
) => {
  const MIN_HEIGHT = minHeight ? minHeight : 40;
  const MIN_WIDTH = minWidth ? minWidth : 120;
  const BACKGROUND_COLOR = backgroundColor ? backgroundColor : 'white';
  const PADDING_HORIZONTAL = paddingHorizontal ? paddingHorizontal : 10;
  const PADDING_VERTICALL = paddingVertical ? paddingVertical : 7;
  const ELEVATION = elevation ? elevation : 4;

  const ROUNDED_VALUE = roundedValue ? roundedValue : 15;
  const ROUNDED_POINT_VALUE = roundedPointValue ? roundedPointValue : 5;

  const IS_SENDER_TOP_POINT =
    senderPoint === 'RIGHT-TOP' || senderPoint === 'TOP';
  const IS_SENDER_BOTTOM_POINT =
    senderPoint === 'RIGHT-BOTTOM' || senderPoint === 'BOTTOM';

  const IS_RECIEVER_TOP_POINT =
    recieverPoint === 'LEFT-TOP' || recieverPoint === 'TOP';
  const IS_RECIEVER_BOTTOM_POINT =
    recieverPoint === 'LEFT-BOTTOM' || recieverPoint === 'BOTTOM';

  const borderRadius = {
    borderTopLeftRadius:
      !isSender && IS_RECIEVER_TOP_POINT ? ROUNDED_POINT_VALUE : ROUNDED_VALUE,
    borderTopRightRadius:
      isSender && IS_SENDER_TOP_POINT ? ROUNDED_POINT_VALUE : ROUNDED_VALUE,
    borderBottomLeftRadius:
      !isSender && IS_RECIEVER_BOTTOM_POINT
        ? ROUNDED_POINT_VALUE
        : ROUNDED_VALUE,
    borderBottomRightRadius:
      isSender && IS_SENDER_BOTTOM_POINT ? ROUNDED_POINT_VALUE : ROUNDED_VALUE,
  };

  const styles = StyleSheet.create({
    talkBubbleContainer: {
      backgroundColor: 'transparent',
    },
    talkBubbleBody: {
      minHeight: MIN_HEIGHT,
      minWidth: MIN_WIDTH,
      backgroundColor: BACKGROUND_COLOR,
      paddingHorizontal: PADDING_HORIZONTAL,
      paddingVertical: PADDING_VERTICALL,
      justifyContent: 'center',
      elevation: ELEVATION,
      ...borderRadius,
    },
  });

  return styles;
};
