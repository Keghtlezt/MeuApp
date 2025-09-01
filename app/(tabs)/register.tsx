
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const MyMultilineInput = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const formatarData = (text) => {
        // Remove todos os caracteres que não são números
        const numeros = text.replace(/\D/g, '');
        
        // Aplica a máscara DD/MM/AAAA
        if (numeros.length <= 2) {
            return numeros;
        } else if (numeros.length <= 4) {
            return `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
        } else {
            return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}/${numeros.slice(4, 8)}`;
        }
    };
    const handleDataChange = (text) => {
        const dataFormatada = formatarData(text);
        setDataNascimento(dataFormatada);
    };
    const handleSubmit = () => {
        if (!nome || !email || !senha || !dataNascimento) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        if (dataNascimento.length < 10) {
            Alert.alert('Erro', 'Data de nascimento inválida');
            return;
        }
        Alert.alert('Sucesso', 'Registro realizado com sucesso!');
        console.log('Dados:', { nome, email, senha, dataNascimento });
    };
    return (
        
    <View style={styles.caixa}>
        <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Registro</ThemedText>
        </ThemedView>
        <Text style={styles.letra}>Nome completo</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999" // Cor do placeholder mais visível
            multiline={false} // Nome geralmente é uma linha só
            onChangeText={newText => setNome(newText)}
            value={nome}
        />

        <Text style={styles.letra}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="seuemail@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address" // Teclado otimizado para email
            autoCapitalize="none" // Sem capitalização automática
            multiline={false} // Email é uma linha só
            onChangeText={newText => setEmail(newText)}
            value={email}
        />

        <Text style={styles.letra}>Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={true} // Oculta o texto da senha
            multiline={false} // Senha é uma linha só
            onChangeText={newText => setSenha(newText)}
            value={senha}
        />
        
        <Text style={styles.letra}>Data de Nascimento</Text>
            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#999"
                keyboardType="numeric" // Teclado numérico
                maxLength={10} // Limita a 10 caracteres (DD/MM/AAAA)
                multiline={false}
                onChangeText={handleDataChange}
                value={dataNascimento}
                
            
        />
        {/* Botão de registro */}
        <TouchableOpacity style={styles.botaoRegistro} onPress={handleSubmit}>
            <Text style={styles.textoBotao}>REGISTRAR</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    titleContainer:{
        color:'#ef0000ff',
    },
    container: {
        padding: 20,
        marginTop: 10,
        width: 400,
        height: 0,
        backgroundColor: '#0093d2ff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        minHeight: 50, // Ensures a minimum height for the input
        textAlignVertical: 'top', // Aligns text to the top for multi-line input
        color: '#fff',
        borderRadius:8,
        fontSize: 16,
    },
    caixa: {
        marginTop:110,
        margin:25,
    },
    letra: {
        marginTop:10,
        fontSize: 20,
        color: 'rgba(243, 243, 245, 0.87)',
        marginLeft: 12,
    },
    botaoRegistro: {
        backgroundColor: '#0093d2',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 25,
        // Sombra para o botão
        shadowColor: '#0093d2',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});

export default MyMultilineInput;
