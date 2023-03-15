import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FloatingActionJackson } from './components/FloatingActionJackson';

export default function App() {

  const [counter, setCounter] = useState(0)

  const [mlist, setList] = useState([])
  const incCounter = () => {
        let c = counter;

        setCounter(c+1);
  };

  const addList = (month) => { 
    let current = mlist;

    setList(current.push(month));
  }

  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title} >Action jackson coming at cha </Text>
      <Text style={styles.text}> press the typewriter to get started </Text>
      <Text>{counter}</Text>

      <Text>{mlist.map((item) =>{
        return( <Text> {item}</Text>)
      })}</Text>
      <FloatingActionJackson pressHandler={addList} />
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});
