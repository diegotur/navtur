import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './scr/Navigators/ShopNavigator';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(()=>{

    if (loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded])
  
  if (!loaded){
    return null
  }

  return (
    <View style={styles.container}>
      <ShopNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
