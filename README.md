# React Native Expo

## Getting start

```bash
yarn start
```

## Splash Screen

```bash
expo install expo-splash-screen
yarn expo-splash-screen -p android -b "#E1E1E1" -i ./assets/images/splash.png -r cover
```

## Debug

Ctrl + M in virtual device (window + android emulator)

```bash
yarn add react-devtools -D
yarn react-devtools
```

- https://reactnative.dev/docs/debugging#chrome-developer-tools

## Scheme

```bash
npx uri-scheme add https
npx uri-scheme list
```

## Debug Javascript

```bash
expo install expo-dev-client
adb shell input keyevent 82
```

## Screen Orientation

```bash
yarn add @react-native-community/hooks
```

```js
import { useDeviceOrientation } from '@react-native-community/hooks';

const orientation = useDeviceOrientation();
```

## Navigation

- [React navigation](https://reactnavigation.org/docs/getting-started)

```bash
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native @react-navigation/native-stack
```

## Eslint

```bash
yarn add eslint -D
yarn eslint --init
yarn add -D eslint-plugin-react-native @react-native-community/eslint-config @react-native-community @babel/eslint-parser prettier
```

## Husky

```bash
yarn add husky -D
yarn husky install
# add this line to package.json scripts
# "prepare": "husky install"
yarn husky add .husky/pre-commit "yarn lint && yarn test"
```
