import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HelloKittyScreen } from './pages/HelloKitty';
import { KeroppiScreen } from './pages/Keroppi';
import { MyMelodyScreen } from './pages/MyMelody';
import { KuromiScreen } from './pages/Kuromi';
import { CinnamorollScreen } from './pages/Cinnamoroll';
import { PompompurinScreen } from './pages/Pompompurin';
import { LittleTwinScreen } from './pages/LittleTwin';
import { BadtzMaruScreen } from './pages/BadtzMaru';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Sanrio Wiki
        </Text>
        <Text style={styles.paragraph}>
          Clique no personagem para saber mais sobre ele!
        </Text>
        <View style={styles.characterCards}>
          <Card style={styles.card} onPress={() => navigation.navigate('Hello Kitty')}>
            <Image source={require('./assets/img/hello_kitty.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Hello Kitty
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Keroppi')}>
          <Image source={require('./assets/img/keroppi.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Keroppi
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('My Melody')}>
            <Image source={require('./assets/img/my_melody.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              My Melody
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Kuromi')}>
            <Image source={require('./assets/img/kuromi.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Kuromi
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Cinnamoroll')}>
            <Image source={require('./assets/img/cinnamoroll.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Cinnamoroll
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Pompompurin')}>
            <Image source={require('./assets/img/pompompurin.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Pompompurin
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Little Twin Stars')}>
          <Image source={require('./assets/img/little_twin.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Little Twin Stars
            </Text>
          </Card>
          <Card style={styles.card} onPress={() => navigation.navigate('Badtz-Maru')}>
            <Image source={require('./assets/img/badtz_maru.png')} style={styles.characterImage} />
            <Text style={styles.titleCard}>
              Badtz-Maru
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('./assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('./assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('./assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          height: 50,
          backgroundColor: '#06C7FE',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Vag-Rounded-Regular'
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Hello Kitty" component={HelloKittyScreen} />
        <Stack.Screen name="Keroppi" component={KeroppiScreen} />
        <Stack.Screen name="My Melody" component={MyMelodyScreen} />
        <Stack.Screen name="Kuromi" component={KuromiScreen} />
        <Stack.Screen name="Cinnamoroll" component={CinnamorollScreen} />
        <Stack.Screen name="Pompompurin" component={PompompurinScreen} />
        <Stack.Screen name="Little Twin Stars" component={LittleTwinScreen} />
        <Stack.Screen name="Badtz-Maru" component={BadtzMaruScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9FDCF8',
  },
  title: {
    marginTop: 20,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E00019',
    fontFamily: 'Vag-Rounded-Black'
  },
  paragraph: {
    marginHorizontal: 32,
    fontSize: 14,
    textAlign: 'center',
    color: '#2e2e2e',
    fontFamily: 'Vag-Rounded-Regular'
  },
  characterCards:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '2%',
    marginTop: 14
  },
  card: {
    width: '45%',
    margin: 4,
    padding: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 15
  },
  characterImage: {
    width: null,
    resizeMode: 'contain',
    height: 110
  },
   titleCard: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0273D9',
    fontFamily: 'Vag-Rounded-Black'
  },
});

