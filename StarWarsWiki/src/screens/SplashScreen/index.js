import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoImage from '../../../assets/LogoSplash.png'

export const SplashScreen = () =>  {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo}/>
      <Text style={styles.titleText}>StarWars - Wiki</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center', //HORIZONTAL
    justifyContent: 'center', //VERTICAL
  },
  logo:{
    height: 64,
    width: 64
  },
  titleText:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12
  }
});
