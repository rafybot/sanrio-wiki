import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

export function HelloKittyScreen() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('../assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('../assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('../assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return(
    <View style={styles.container}>
      <Image source={require('../assets/img/hello_kitty.png')} style={styles.characterImage} />
      <Text style={styles.title}>
        Hello Kitty
      </Text>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>
          <b>Aniversário:</b> 1° de Novembro
        </Text>
        <Text style={styles.paragraph}>
          A Hello Kitty é uma garota feliz e divertida, que adora espalhar alegria pelo mundo. Ela mora com seus pais e sua irmã gêmea, Mimmy, em Londres, na Inglaterra. Seu lema é: <b>“Muitos amigos nunca são demais!”</b> Por isso, ela está sempre cercada de amigos e adora fazer novas amizades.
        </Text>
      </Card>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9FDCF8',
  },
  characterImage: {
    width: null,
    resizeMode: 'contain',
    height: 160
  },
  title: {
    marginTop: 16,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E00019',
    fontFamily: 'Vag-Rounded-Black'
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#3371C1',
    fontFamily: 'Vag-Rounded-Regular'
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    color: '#5D6390',
    fontFamily: 'Vag-Rounded-Thin',
    letterSpacing: 1.05
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 22,
    padding: 22,
    backgroundColor: '#fafafa',
    borderRadius: 22
  }
});

