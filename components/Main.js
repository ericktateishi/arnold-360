import React from 'react';
import {
  asset,
  StyleSheet,
  Image,
  Text,
  View,
  VrButton,
  Environment,  
} from 'react-360';

export default class Hello360 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  changePage = () => {
    Environment.setBackgroundImage(asset('032_hdrmaps_com_free.jpg'))
    this.setState({page: 1})
  }

  render() {
    return (
      <View style={styles.panel}>
        {this.state.page === 0 && 
          <React.Fragment>
            <View style={styles.panelMap}>
              <Text style={styles.title}>
                Escolha um estado para conhecer mais sobre a realidade do nosso país.
              </Text>
              
              <Image source={asset('sp.png')} style={styles.map}/>
              <VrButton onClick={() => this.changePage()} style={styles.button}/>
            </View>
          </React.Fragment>
        }
        {this.state.page === 1 && 
          <React.Fragment>
            <Image source={asset('of-a-little-girl-vector-19308459.png')} style={styles.girl}/>
            <View style={styles.dialog}>
              <Text style={styles.textDialog}>
                Olá, estou aqui para te contar um pouca mais sobre uma realidade muito triste que acontece aqui na minha cidade
              </Text>
            </View>
          </React.Fragment>
        }
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
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  panelMap: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative'
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    transform:[{translate: [70, -340, 0]}],
    position:'absolute'
  },
  map: {
    width: 500,
    height: 500
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
    width: 400,
    height: 500
  }
});