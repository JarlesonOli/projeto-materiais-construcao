import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import ListCell from "./ListCell";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
        keysOnStorage: [""],
        storage: false,
        dataOnStorage: [],
        data:[]
    };
  }

  selectListItem(item) {
    if(typeof(item) == "string") {
        this.props.navigation.push(item, {
          key: item
        })
    }
  }

  componentDidMount(){
    if(this.props.route.name == "Quantitativo"){
      this.setState({data: ["Parede", "Piso", "Concreto", "Pintura"]})
    } else if(this.props.route.name == "Parede"){
      this.setState({data: ["Tijolos"]})
    } else if(this.props.route.name == "Piso"){
      this.setState({data: ["Ceramica"]})
    } else if(this.props.route.name == "Concreto"){
      this.setState({data: ["Bloco de Concreto"]})
    } else if(this.props.route.name == "Pintura"){
      this.setState({data: ["Tinta"]})
    }

  }

  render(){
    return (
      <View style={styles.container}>
          <StatusBar style="dark" />

          <SafeAreaView style={styles.safeArea}>
            <FlatList 
                data={ this.state.data }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index, separators}) => 
                <TouchableHighlight
                    onPress={() => this.selectListItem(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                        <ListCell 
                            key={{key:true}} 
                            listItem={{title: item}}/>
                </TouchableHighlight>}
            />
          </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: "5%",
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
  safeArea: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});