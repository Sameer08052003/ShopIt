import React from 'react';
import {View, StyleSheet} from 'react-native';

const Circle = ({item}) => {
  const colors = item.color;

  return (
    <View style={styles.circleContainer}>
      {colors.map((color, index) => (
        <View key={index} style={styles.color}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: color,
              borderRadius: 20,
            }}></View>
        </View>
      ))}
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circleContainer: {
    left: 5,
    height: 30,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  color: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
  },
});
