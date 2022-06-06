import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Button,
  Alert,
  StatusBar,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDeviceOrientation } from "@react-native-community/hooks";

const Stack = createNativeStackNavigator();

function Onboarding() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Onboarding Screen</Text>
    </View>
  );
}
function AppStack() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Example() {
  const orientation = useDeviceOrientation();
  return (
    <View style={ExampleStyles.container}>
      <View style={{ flex: 4 }}>
        <SafeAreaView>
          <TouchableHighlight>
            <Text>SplashScreen Demo 23! 👋</Text>
          </TouchableHighlight>
          <Text>{JSON.stringify(size)}</Text>
          <Text>{JSON.stringify(orientation)}</Text>
          <TouchableWithoutFeedback onPress={() => console.log("image tab")}>
            <Image source={Images.Logo} />
          </TouchableWithoutFeedback>
          <TouchableHighlight
            onPress={() => {
              console.log("image opacity");
            }}
          >
            <Image
              source={{ uri: Images.StaticRandom }}
              style={styles.staticRandomImage}
            />
          </TouchableHighlight>
          <TouchableNativeFeedback>
            <View
              style={{ width: 300, height: 70, backgroundColor: "blue" }}
            ></View>
          </TouchableNativeFeedback>
          <Button
            title={"Submit" + StatusBar.currentHeight}
            style={[{ backgroundColor: "green" }, { color: "white" }]}
            onPress={() =>
              Alert.alert("title", "press", [
                { text: "Yes", onPress: () => "console.log('yes');" },
                { text: "No", onPress: () => "console.log('no');" },
              ])
            }
          />
        </SafeAreaView>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const ExampleStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

export default function ApplicationStacks(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
  );
}
