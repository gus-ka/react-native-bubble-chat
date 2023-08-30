# React Native Bubble Chat

`react-native-bubble-chat` is a versatile and customizable chat bubble component for React Native applications. It provides a range of options to create stylish chat bubbles with ease. You can use this component to build chat interfaces in your mobile app.

## Installation

You can install `react-native-bubble-chat` using npm or yarn:

```bash
npm install react-native-bubble-chat --save
# or
yarn add react-native-bubble-chat
```
## Usage
To use react-native-bubble-chat, import the component and integrate it into your React Native code:

```Typescript
import React from 'react';
import { View, Text } from 'react-native';
import { SimpleRounded } from 'react-native-bubble-chat';

const App = () => {
  return (
    <View>
      <SimpleRounded
        isSender={false}
        senderPoint="BOTTOM"
        recieverPoint="BOTTOM">
        <Text>Hello, I'm a chat bubble!</Text>
      </SimpleRounded>
    </View>
  );
};

export default App;
```

## Props
The BubbleChat component accepts the following props:
| Prop Name | Type | Default Value | Description |
|---|---|---|---|
| isSender | boolean | false | Determines the position of the chat bubble. If set to true, the bubble will appear on the right; if false, it will appear on the left. |
| containerStyle | ViewStyle | undefined | A style object to customize the container of the chat bubble. |
| bodyStyle | ViewStyle | undefined | A style object to customize the appearance of the chat bubble itself. |
| senderPoint | string | undefined | Sets the position of the rounded tip of the bubble when the sender is true. Possible values include 'TOP', 'RIGHT-TOP', 'RIGHT-CENTER', 'RIGHT-BOTTOM', and 'BOTTOM'. |
| receiverPoint | string | undefined | Sets the position of the rounded tip of the bubble when the sender is false. Possible values include 'TOP', 'LEFT-TOP', 'LEFT-CENTER', 'LEFT-BOTTOM', and 'BOTTOM'. |
| roundedValue | number | 15 | Defines the border radius value for the main body of the bubble. |
| roundedPointValue | number | 5 | Sets the border radius value for the tip of the bubble. |
| minHeight | number | 40 | Specifies the minimum height of the chat bubble. |
| minWidth | number | 120 | Specifies the minimum width of the chat bubble. |
| backgroundColor | string | 'white | Sets the background color of the chat bubble. |
| elevation | number | 4 | Adds a shadow effect to the bubble based on the specified elevation value. |
| paddingHorizontal | number | 10 | Sets the horizontal padding inside the bubble. |
| paddingVertical | number | 7 | Sets the vertical padding inside the bubble. |
| activeOpacity | number (0 - 1) | 0.9 | Controls the opacity of the bubble when it is pressed. |
| onPressed | function | undefined | Allows you to define a custom function to be executed when the bubble is pressed. |

## License
This library is open-source and available under the [MIT License](https://link-url-here.org](https://github.com/gus-ka/react-native-bubble-chat/blob/main/LICENSE)).

## Acknowledgments
Thanks to the React Native community for inspiration and support.
This README provides an overview of the react-native-bubble-chat library and its usage. You can further customize and integrate this chat bubble component into your React Native projects to create engaging chat interfaces.

For more details, examples, and updates, please refer to the library's documentation and repository.

Enjoy using react-native-bubble-chat in your mobile applications!
