import {ViewStyle} from 'react-native';
import {RecieverPoint, SenderPoint} from '../../types';

export interface SimpleRoundedProps {
  isSender?: boolean;
  containerStyle?: ViewStyle;
  bodyStyle?: ViewStyle;
  children?: React.ReactNode;
  senderPoint?: SenderPoint;
  recieverPoint?: RecieverPoint;
  roundedValue?: number;
  roundedPointValue?: number;
  elevation?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  minWidth?: number;
  minHeight?: number;
  backgroundColor?: string;
  activeOpacity?: number;
  onPressed?: () => void;
}
