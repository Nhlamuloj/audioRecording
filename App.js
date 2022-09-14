import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Audio } from 'expo-av';


export default function App() {
  const [recording, setRecording] = React. useState();
  const [recordings , setRecordings] = React.useState({});
  const [message, setMessage] = React.useState('');

  async function startRacoding(){
    try{
      const permission = await Audio.requestPermissionAsync();

      if(permission.status ==="granted"){
        await Audio.setAudioModeAsync({
          allowsRecordingIOS:true,
          playsInSilentModeIOS:true,
        });

        const {recording} = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      }else{
        setMessage("Please grant permission to app access Microphone")
      }
    } catch(err){
      console.error('Failed to start recording',err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.StopAndUnloadAsync ();

    let updatedRecordings =[... recording];
    const {sound, status} =await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound:sound,
      duration:getDurationFormatted(status.durationMillis),
      file:recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis){
    const minutes =millis/100/60
    const minutesDisplay = Math.floor()
    const seconds = Math.round ((minutes - minutesDisplay)*60);
    const secondsDisplay = seconds < 10 ? `0${seconds}`: seconds;
    return `${minutesDisplay}: ${secondsDisplay}`;
  }

  function getr



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
