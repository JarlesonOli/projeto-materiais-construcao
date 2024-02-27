import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextPlaceHolder from "../components/TextPlaceHolder"

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
          area: "",
          abertura: "",
          demaos: "",
          rendimento: "", 
          latas: "",
          resultado: false
        };
      }
      

    area(area){
        this.setState({area: area})
    }
    abertura(abertura){
        this.setState({abertura: abertura})
    }
    demaos(demaos) {
      this.setState({demaos: demaos})
    }
    rendimento(rendimento){
        this.setState({rendimento: rendimento})
    }
    latas(latas){
        this.setState({latas: latas})
    }

    calcular() {
      var latas = (parseFloat((this.state.area.category - this.state.abertura.category) / (this.state.rendimento.category / this.state.demaos.category)))
      this.setState({latas: latas})
      this.setState({resultado: true})
    }

    render(){
        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
                <View style={styles.card}>
                    <Text style={styles.textIsideCard}>Área</Text>
                    <TextPlaceHolder input={"Área (m2)"} callbackFromParent={(value) => this.area(value)}/>

                    <Text style={styles.textIsideCard}>Abertura</Text>
                    <TextPlaceHolder input={"Abertura (m2)"} callbackFromParent={(value) => this.abertura(value)}/>

                    <Text style={styles.textIsideCard}>Demaos</Text>
                    <TextPlaceHolder input={"Unitário"} callbackFromParent={(value) => this.demaos(value)}/>

                    <Text style={styles.textIsideCard}>Rendimento da Tinta</Text>
                    <TextPlaceHolder input={"Área(m2)"} callbackFromParent={(value) => this.rendimento(value)}/>

                    {
                      this.state.resultado ? 
                      <View style={{height: "30%", width: "80%"}}>
                        <View style={{width: "100%", height: "50%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Latas
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.latas} Latas</Text>
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
