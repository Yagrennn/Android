import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Circle } from 'react-native-progress';

const CircularProgress = ({progress,label}) => {
  return (
    <View style={styles.container}>
      <Circle 
        size={100} 
        progress={progress} 
        showsText={true} 
        color={'#3b5998'}
        formatText={() => `${Math.round(progress * 100)}%`}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default CircularProgress