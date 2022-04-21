import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, Text, View } from 'react-native';
import React from 'react'

export default function App() {

  const [quote, setQuote] = React.useState();
  const [author, setAuthor]= React.useState();
  const [getNew, setGetNew] = React.useState(0);

  React.useEffect(()=>{
    fetch("https://api.quotable.io/random")
      .then(response =>response.json())
      .then(data => { setQuote(data.content), setAuthor(data.author)})
  },[getNew])

  const getNewQuote = function(){
    setGetNew(Math.random());
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.quote}>{quote}</Text>
      <Text style={styles.author}>-{author}</Text>
      <Button title="Get another quote" onPress={getNewQuote}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote:{
    color: "#4b61d1",
    margin: 50,
    fontSize: 25
  },
  author:{
    color: "red",
    marginBottom: 15
  },
});
