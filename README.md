# React Native Expo

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

## Debug Javascript

```bash
expo install expo-dev-client
adb shell input keyevent 82
```
