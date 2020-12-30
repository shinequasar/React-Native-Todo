import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 42}}>ToDo list</Text>
        <Text style={{padding: 10, fontSize: 22}}>일단 투두리스트부터 만들고</Text>
        <Text style={{padding: 10, fontSize: 22}}>변형해봐야겠다</Text>
        <Text  style={{padding: 10, fontSize: 15}}>shinequasar</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type here!"
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
