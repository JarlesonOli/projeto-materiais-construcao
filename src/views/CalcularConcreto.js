import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextPlaceHolder from "../components/TextPlaceHolder"

export default class CalcularConcreto extends Component {
    constructor() {
        super();
        this.state = {
          volumeConhecido: "",
          quantidade: "",
          cimento: "",
          areia: "",
          brita: "",
          agua: "",
          resultado: false
        };
      }
      

    volumeConhecido(volumeConhecido){
        this.setState({volumeConhecido: volumeConhecido})
    }
    quantidade(quantidade){
        this.setState({quantidade: quantidade})
    }
    cimento(cimento) {
      this.setState({cimento: cimento})
    }
    areia(areia){
        this.setState({areia: areia})
    }
    brita(brita){
        this.setState({brita: brita})
    }
    agua(agua) {
      this.setState ({agua: agua})
    }

    calcular() {
      var cimento = (parseFloat(this.state.volumeConhecido.category) * parseInt(this.state.quantidade.category) * 6.9)
      var areia = (parseFloat(this.state.volumeConhecido.category) * parseInt(this.state.quantidade.category) * 0.522)
      var brita = (parseFloat(this.state.volumeConhecido.category) * parseInt(this.state.quantidade.category) * 1.6512)
      var agua = (parseFloat(this.state.volumeConhecido.category) * parseInt(this.state.quantidade.category) * 210)
      this.setState({cimento: cimento})
      this.setState({areia: areia})
      this.setState({brita})
      this.setState({agua: agua})
      this.setState({resultado: true})
    }

    render(){
        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
                <View style={styles.card}>
                    <Text style={styles.textIsideCard}> Volume Conhecido</Text>
                    <TextPlaceHolder input={"Volume (m2)"} callbackFromParent={(value) => this.volumeConhecido(value)}/>

                    <Text style={styles.textIsideCard}>Quantidade</Text>
                    <TextPlaceHolder input={"Unitário"} callbackFromParent={(value) => this.quantidade(value)}/>
  
                    {
                      this.state.resultado ? 
                      <View style={{height: "30%", width: "80%"}}>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Cimento
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.cimento} Sacos</Text>
                          </View>
                        </View>
                        
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Areia
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.areia} m3</Text>
                          </View>
                        </View>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Brita
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.brita} m3</Text>
                          </View>
                        </View>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Água
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.agua} Litros</Text>
                          </View>
                        </View>
                      </View>

                      :<TouchableOpacity style={styles.button} onPress={() => this.calcular()}>
                        <Text style={styles.TextButton}>Calcular</Text>
                      </TouchableOpacity>
                    }

                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: "80%",
    height: "90%",
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textIsideCard: {
      color: "#FFC0A2",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "left",
      width: "80%",
      marginBottom: "5%",
      marginTop: "10%"
  },
  TextButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    height: "100%",
    padding: "6%"
  },
  button: {
    width: "80%",
    height: "10%",
    marginBottom: "8%",
    marginTop: "20%",
    backgroundColor: '#FFC0A2',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
  resultContainer: {
    width: "100%",
    height: "60%",
    marginBottom: "2%",
    backgroundColor: '#FFC0A2',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
});
