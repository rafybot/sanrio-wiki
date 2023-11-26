import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

export function PompompurinScreen() {
  const [fontsLoaded] = useFonts({
    'Vag-Rounded-Thin': require('../assets/fonts/VAGRoundedStd-Thin.otf'),
    'Vag-Rounded-Regular': require('../assets/fonts/VAGRoundedBT-Regular.otf'),
    'Vag-Rounded-Black': require('../assets/fonts/VAGRoundedStd-Black.otf'),
  });

  return(
    <View style={styles.container}>
      <Image source={require('../assets/img/pompompurin.png')} style={styles.characterImage} />
      <Text style={styles.title}>
        Pompompurin
      </Text>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>
          <b>Aniversário:</b> 16 de Abril
        </Text>
        <Text style={styles.paragraph}>
          O Pompompurin é um tranquilo filhotinho Golden Retriever que tem um enorme talento para cochilar. Ele ama a frase “vamos sair”, tanto quanto odeia a palavra “ficar”. Faz amizade com todos que encontra, e tem um sonho de ser realmente grande. Seu hobby é colecionar os sapatos de seus donos e tem seu próprio esconderijo secreto.
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
    height: 150
  },
  title: {
    marginTop: 16,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#69371B',
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

