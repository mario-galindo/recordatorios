import React from 'react';
import { StyleSheet, View, FlatList, Text, Modal, TextInput } from 'react-native';

//CUSTOM COMPONENTS
import Item from './components/item'
import Button from './components/Button'
import Input from './components/Input'
import datos from './datos'

export default class App extends React.Component {

  state = {
    data: [],
    isVisible: false,
    text: ''
  }

  handlePress = () => {
    this.setState({ isVisible: true })
  }

  handleChange = text => this.setState({ text })

  handleSave = () => {
    const { text, data } = this.state
    const datos = [{ key: Math.random().toString(), title: text }].concat(data);
    this.setState({
      data:datos,
      isVisible:false,
      text:''
    })

  }

  render() {

    const { data } = this.state;

    return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>
        </View>
        <View style={styles.view}>
          <Button title="Agregar" onPress={this.handlePress}></Button>
        </View>
        <FlatList data={data} renderItem={Item}></FlatList>
        <Modal visible={this.state.isVisible} animationType="slide">
          <View style={[styles.container, styles.center]}>
            <Text style={styles.ModalTitle}>Ingrese Recordatorio</Text>
            <Input placeholder="Recordatorio" onChangeText={this.handleChange} value={this.state.text}>

            </Input>
            <Button title="Guardar" onPress={this.handleSave}></Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 28
  },
  view: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  gray: {
    backgroundColor: '#eee'
  },
  ModalTitle: {
    fontSize: 28
  }
});
