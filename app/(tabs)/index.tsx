import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#b70808ff', dark: '#005e86ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BUSCAQUI</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu App de transportes</ThemedText>
      </ThemedView>
      <ThemedView style={styles.login}>
        <TouchableOpacity style={styles.botao} onPress={() => alert("Teste")}>
          <Text style={styles.texto}>LOGIN</Text>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.register}>
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginBottom: -20,
  },
  stepContainer: {
    gap: 1,
    marginBottom: 1,
  },
  login:{

  },
  register:{

  },
  botao:{

  },
  texto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECEDEE',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
