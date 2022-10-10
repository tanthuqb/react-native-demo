import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default function Header() {
  const {textStyling, viewStyling} = styles;
  return (  
    <View style={viewStyling}>
      <Text style={textStyling}>Cars</Text>
    </View>
  );
}

const styles = {
  textStyling: {
    fontSize: 22,
  },
  viewStyling: {
    backgroundColor: 'grey',

  }
};
