import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

const imageProfileGit = 'https://avatars.githubusercontent.com/u/88985964?v=4';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'#0D1117'} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfileGit}} />
        <Text style={style.defaultText}> Amanda Santos</Text>
        <Text style={style.defaultText}>🌈 👩‍💻 🚀</Text>
        <Text style={style.defaultText}>
          👩‍🎓 Estudante de Sistemas para Internet na FIAP.{'\n'}
          📚 Sou uma pessoa curiosa que adora aprender coisas novas.{'\n'}
          💻 Sou apaixonada por tecnologia.{'\n'}
          😄 Pronomes: Ela / Dela.
        </Text>
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
});
