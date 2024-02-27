import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import next from "../../assets/next.png";

export default class ListCell extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render(){
    return (
      <View style={styles.container}>
            <Text style={styles.text}>{ this.props.listItem.title }
            </Text>
          <Image style={styles.imageIcon} source={next}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5F9F9F',
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "row",
    margin: "5%",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
  text: {
    width: "70%",
    height: "100%",
    textAlign: "left",
    fontSize: 25,
    padding: "5%",
    marginLeft: "5%",
    color: "white",
    fontWeight: "bold"
  },
  imageIcon: {
    width: "30%", 
    height: "50%",
    marginRight: "5%",
    opacity: 0.3
    }
});