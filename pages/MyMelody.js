import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

export function MyMelodyScreen() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('../assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('../assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('../assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return(
    <View style={styles.container}>
      <Image source={require('../assets/img/my_melody.png')} style={styles.characterImage} />
      <Text style={styles.title}>
        My Melody
      </Text>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>
          <b>Aniversário:</b> 18 de Janeiro
        </Text>
        <Text style={styles.paragraph}>
          A My Melody nasceu na floresta de Mary Land. Ela é super legal e faz amizade facilmente. Sua marca registrada é um lindo capuz, que sua avó costurou especialmente para ela.
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
    color: '#EE64A9',
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
