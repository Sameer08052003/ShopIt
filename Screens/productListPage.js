import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ProductListGrid from '../Components/gridItem';
import ListItem from '../Components/listItem';
import {Filter, Grid, List, CheckOut, DetailPage} from '../Components/Strings';

const ProductList = ({navigation}) => {
  const [isGrid, setISGrid] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.filerContainer}>
          <AntDesign name="filter" size={20} color="grey" />
          <Text style={styles.filterText}>{Filter}</Text>
        </View>
        <View>
          <Text style={{fontWeight: '500'}}>8 Products</Text>
        </View>
        {isGrid ? (
          <Pressable
            onPress={() => setISGrid(!isGrid)}
            style={styles.listContainer}>
            <Feather name="list" size={20} color="grey" />

            <Text style={styles.listText}>{List}</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setISGrid(!isGrid)}
            style={styles.gridContainer}>
            <Feather name="grid" size={20} color="grey" />

            <Text style={styles.gridText}>{Grid}</Text>
          </Pressable>
        )}
      </View>
      {isGrid ? (
        <ProductListGrid navigation={navigation}></ProductListGrid>
      ) : (
        <ListItem navigation={navigation}></ListItem>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 50,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filerContainer: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
  gridContainer: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gridText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
    left: 2,
  },
  listContainer: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
    left: 2,
  },
});
