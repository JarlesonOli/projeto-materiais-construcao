import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextPlaceHolder from "../components/TextPlaceHolder"

export default class CalcularConcreto extends Component {
    constructor() {
        super();
        this.state = {
          alturaCeramica: "",
          larguraCeramica: "",
          areaPiso: "",
          rejunte: "",
          ceramicas: "",
          argamassa: "",
          resultado: false
        };
      }
      

    alturaCeramica(alturaCeramica){
        this.setState({alturaCeramica: alturaCeramica})
    }
    larguraCeramica(larguraCeramica){
        this.setState({larguraCeramica: larguraCeramica})
    }
    areaPiso(areaPiso) {
      this.setState({areaPiso: areaPiso})
    }
    rejunte(rejunte){
        this.setState({rejunte: rejunte})
    }
    ceramicas(ceramicas){
        this.setState({ceramicas: ceramicas})
    }
    argamassa(argamassa) {
      this.setState ({argamassa: argamassa})
    }

    calcular() {
      var argamassa = (parseFloat ((5 * this.state.areaPiso.category)))
      argamassa = argamassa + 0.1 * argamassa
      var ceramicas = (parseFloat(1 / ((this.state.alturaCeramica.category / 100) * (this.state.larguraCeramica.category / 100))) * this.state.areaPiso.category)
      var rejunte = (parseFloat((this.state.alturaCeramica.category * 10 + this.state.larguraCeramica.category * 10) * 3 * 2 * 1.58) / ((this.state.alturaCeramica.category * 10) * (this.state.larguraCeramica.category * 10)) * this.state.areaPiso.category)
      this.setState({argamassa: argamassa})
      this.setState({ceramicas: ceramicas})
      this.setState({rejunte: rejunte})
      this.setState({resultado: true})
    }

    render(){
        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
                <View style={styles.card}>
                    <Text style={styles.textIsideCard}> Medidas da Cerâmica</Text>
                    <TextPlaceHolder input={"Altura (cm)"} callbackFromParent={(value) => this.alturaCeramica(value)}/>
                    <TextPlaceHolder input={"largura (cm)"} callbackFromParent={(value) => this.larguraCeramica(value)}/>

                    <Text style={styles.textIsideCard}>Área do piso</Text>
                    <TextPlaceHolder input={"Área (m2)"} callbackFromParent={(value) => this.areaPiso(value)}/>
  
                    {
                      this.state.resultado ? 
                      <View style={{height: "30%", width: "80%"}}>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Rejunte
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.rejunte} Kg</Text>
                          </View>
                        </View>
                        
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Cerâmicas
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.ceramicas} unidades</Text>
                          </View>
                        </View>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Argamassa
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.argamassa} kg</Text>
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
    fontSize: 15,
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
