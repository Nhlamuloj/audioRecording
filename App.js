import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {
  const [recording, setRecording] = React. useState();
  const [recordings , setRecordings] = React.useState({});
  const [message, setMessage] = React.useState('');

  async function startRacoding(){
    try{
      const permission = await Audio.requestPermissionAsync();
    }
  }

  async function stopRecording(){

  }



  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button
      title={recording ? 'stop Recoding': 'Start Recording'}
      onPress={recording ? stopRecording: StartRecording}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
