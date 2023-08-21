import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const alunosEquipe = [
    { nome: 'Felipe Veiga Velloso da Silva', matricula: '202104478763' },
    { nome: 'Bruno da Veiga Ramos', matricula: '202002457309' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresa XPTO</Text>
      <Image
        source={require('./assets/LogoXPTO.jpg')}
        style={styles.logo}
      />
      <Text style={styles.label}>Cadastramento de Clientes</Text>
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="UF"
        value={uf}
        onChangeText={setUf}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert('Você clicou no botão')}>
        <Text style={styles.buttonText}>Clique</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {alunosEquipe.map((aluno, index) => (
          <Text key={index} style={styles.aluno}>
            Nome: {aluno.nome}, Matrícula: {aluno.matricula}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
    maxHeight: 200,
    borderWidth: 1,
    borderColor: 'gray',
  },
  aluno: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
