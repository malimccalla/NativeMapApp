import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderColor: '#a8a8a8',
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
