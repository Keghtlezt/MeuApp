import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() { 
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#b70808ff', dark: '#1382b2ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/iconapp1.png')}
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
        <TouchableOpacity style={styles.botao} onPress={() => router.navigate('./login')}>
          <Text style={styles.texto}>ENTRAR</Text>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.register}>
        <TouchableOpacity style={styles.botao} onPress={() => router.navigate('./register')}>
          <Text style={styles.texto}>REGISTRO</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    marginTop: 30,
  },
  register:{
    alignItems: 'center',
    marginTop: 1,
  },
  botao: {
    backgroundColor: "#005e86ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: 140,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
