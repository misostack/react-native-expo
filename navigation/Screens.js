import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  // TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Button,
  Alert,
  StatusBar
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { Images } from '../constants';

const Stack = createNativeStackNavigator();

function Onboarding(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('App')} />
    </View>
  );
}
function AppStack(props) {
  const { navigation } = props;

  useEffect(() => {
    console.log('test 1');
  });

  useEffect(() => {
    console.log('test 2');
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Example" onPress={() => navigation.navigate('Example')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Example(props) {
  const { navigation } = props;
  const orientation = useDeviceOrientation();
  return (
    <View style={ExampleStyles.container}>
      <View style={{ flex: 4 }}>
        <SafeAreaView>
          <Button title="Go to Example" onPress={() => navigation.goBack()} />
          <TouchableHighlight>
            <Text>SplashScreen Demo 23! 👋</Text>
          </TouchableHighlight>
          <Text>{JSON.stringify(orientation)}</Text>
          <TouchableWithoutFeedback onPress={() => console.log('image tab')}>
            <Image source={Images.Logo} />
          </TouchableWithoutFeedback>
          <TouchableHighlight
            onPress={() => {
              console.log('image opacity');
            }}>
            <Image source={{ uri: Images.StaticRandom }} style={styles.staticRandomImage} />
          </TouchableHighlight>
          <TouchableNativeFeedback>
            <View style={{ width: 300, height: 70, backgroundColor: 'blue' }} />
          </TouchableNativeFeedback>
          <Button
            title={'Submit' + StatusBar.currentHeight}
            style={[{ backgroundColor: 'green' }, { color: 'white' }]}
            onPress={() =>
              Alert.alert('title', 'press', [
                { text: 'Yes', onPress: () => "console.log('yes');" },
                { text: 'No', onPress: () => "console.log('no');" }
              ])
            }
          />
        </SafeAreaView>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const ExampleStyles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    flex: 1
  }
});
const styles = StyleSheet.create({
  staticRandomImage: {
    width: 300,
    height: 200
  }
});

export default function ApplicationStacks(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: false
      }}
      initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
  );
}
