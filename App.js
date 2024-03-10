import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  Pressable,
  ActivityIndicator,
  Alert
} from 'react-native';
import {useState} from "react";
import Greet from "./components/Greet";
const logo = require('./assets/adaptive-icon.png')

export default function App() {
  const [modal, setModal] = useState(false)
  return (
    <ScrollView>
      <StatusBar backgroundColor='red' barStyle='light-content' />
      <ImageBackground source={{uri: 'https://picsum.photos/150'}}>
        <View style={styles.container}>
          <Image style={styles.img} source={logo} />
          <Pressable onPress={() => console.log('click')}><Text>Click</Text></Pressable>
          <Text style={styles.text}>Lets go</Text>
          <Image style={styles.img} source={{uri: 'https://picsum.photos/150'}} />
          <Button title='Modal' onPress={() => setModal(true)}/>
          <Modal
            visible={modal}
            animationType={'slide'}
            onRequestClose={() => setModal(false)}
            presentationStyle={'pageSheet'}
          >
            <View style={styles.modal}>
              <Text style={styles.text}>Lets go</Text>
              <Button title={'Close'} onPress={() => setModal(false)} />
            </View>
          </Modal>
        </View>
      </ImageBackground>
      <ActivityIndicator color={'black'} size={'large'}/>
      <Button title={'Alert'} onPress={() => Alert.alert('error')}/>
      <Button title={'Alert 2'} onPress={() => Alert.alert('error', 'text error', [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel')
        },
        {
          text: 'Ok',
          onPress: () => console.log('ok')
        },
      ])}/>
      <Greet name={'Bekzat'}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100
  },
  block: {
    flex: 1,
    width: 200,
    height: 200,
    margin: 100,
  },
  text: {
    color: 'white'
  },
  img: {
    width: 150,
    height: 150
  },
  modal: {
    flex: 1,
    backgroundColor: 'red',
    padding: 50
  }
});
