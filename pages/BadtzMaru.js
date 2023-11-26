import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

export function BadtzMaruScreen() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('../assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('../assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('../assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return(
    <View style={styles.container}>
      <Image source={require('../assets/img/badtz_maru.png')} style={styles.characterImage} />
      <Text style={styles.title}>
        Badtz-Maru
      </Text>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>
          <b>Aniversário:</b> 1° de Abril
        </Text>
        <Text style={styles.paragraph}>
          O Badtz-Maru é um pinguim muito radical, que curte a sua vida “bem humorada” em Gorgeoustown. Ele atrai muita atenção quando anda com seu jacaré de estimação, o Pochi. E, também toca violino e piano, mas só finge, pois não é muito bom nisso.
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
    color: '#0e0e0e',
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
