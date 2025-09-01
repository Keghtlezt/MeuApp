
import { StyleSheet, Text, TextInput, View } from 'react-native';



import { useState } from 'react';

const MyMultilineInput = () => {
  const [text, setText] = useState('');

  return (
    
    <View style={styles.caixa}>
        <Text style={styles.letra}>Nome completo:</Text>
        
        <TextInput
            style={styles.input}
            placeholder="Enter your text here..."
            multiline={true} // Enables multi-line input
            numberOfLines={4} // Suggests an initial height (optional)
            onChangeText={newText => setText(newText)}
            value={text}
        />
        <Text style={styles.letra1}>Email:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your text here..."
            multiline={true} // Enables multi-line input
            numberOfLines={4} // Suggests an initial height (optional)
            onChangeText={newText => setText(newText)}
            value={text}
        />
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    width: 400,
    height: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    minHeight: 50, // Ensures a minimum height for the input
    textAlignVertical: 'top', // Aligns text to the top for multi-line input
    color: '#fff',
  },
  caixa: {
    marginTop:110,
  },
  letra: {
    fontSize: 20,
    color: 'rgba(243, 243, 245, 0.87)',
    marginLeft: 25,
  },
  letra1: {
    fontSize: 20,
    color: 'rgba(243, 243, 245, 0.87)',
    marginLeft: 25,
    marginTop:1,
  }
});

export default MyMultilineInput;
