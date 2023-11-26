import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

export function KeroppiScreen() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('../assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('../assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('../assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return(
    <View style={styles.container}>
      <Image source={require('../assets/img/keroppi.png')} style={styles.characterImage} />
      <Text style={styles.title}>
        Keroppi
      </Text>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>
          <b>Aniversário:</b> 10 de Julho
        </Text>
        <Text style={styles.paragraph}>
          O Keroppi é um sapinho que mora com sua família em uma grande casa a beira do lago Donut. Ele e seus amigos adoram jogos, especialmente beisebol e bumerangue. Na maior parte do tempo, ele está com seu melhor amigo, a lesminha Denden.
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
    color: '#00945E',
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
