import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const imageProfileGit = 'https://avatars.githubusercontent.com/u/88985964?v=4';
const urlToMyGithub = 'https://github.com/amdsantos';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'#0D1117'} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfileGit}} />
        <Text
          accessibilityLabel="Nome Amanda Santos"
          style={[style.defaultText, style.name]}>
          Amanda Santos
        </Text>
        <Text
          accessibilityLabel="Icone do arco-irís, um computtador e um foguete"
          style={[style.defaultText, style.nickname]}>
          🌈 👩‍💻 🚀
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Sistemas para Internet na FIAP. Sou uma pessoa curiosa que adora aprender coisas nova. Sou apaixonada por tecnologia. Pronomes: Ela / Dela."
          style={[style.defaultText, style.description]}>
          👩‍🎓 Estudante de Sistemas para Internet na FIAP.{'\n'}
          📚 Sou uma pessoa curiosa que adora aprender coisas novas.{'\n'}
          💻 Sou apaixonada por tecnologia.{'\n'}
          😄 Pronomes: Ela / Dela.
        </Text>
        <View style={style.teste2}>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
          <Text style={style.teste}> </Text>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={style.textButton}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default App;
const style = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    flex: 1, //Expandir para a tela inteira
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: '#C9D1D9',
    borderWidth: 2,
  },
  defaultText: {
    color: '#C9D1D9',
    lineHeight: 28,
  },
  name: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 20,
  },
  description: {
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#C9D1D9',
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  teste2: {
    flex: 1,
  },
  teste: {
    width: 15,
    height: 15,
    borderBottomColor: 'green',
    borderRadius: 5,
    backgroundColor: 'green',
  },
});
