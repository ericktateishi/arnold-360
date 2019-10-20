import React from 'react';
import {
  asset,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Image source={asset('of-a-little-girl-vector-19308459.png')} style={styles.girl}/>
        <View style={styles.dialog}>
          <Text style={styles.textDialog}>
            Olá, estou aqui para te contar um pouca mais sobre uma realidade muito triste que acontece aqui na minha cidade
          </Text>
        </View>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row'
  },
  dialog: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    width: 300,
    height: 200,
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10
  },
  textDialog: {
    color: "#333",
    fontSize: 26
  },
  girl: {
    width: 800,
    height: 300
  }
});