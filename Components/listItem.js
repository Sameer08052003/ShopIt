import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Circle from './Circle';
import {NEWSEASON} from './Strings';
import {Data} from './Data';

const ListItem = ({navigation}) => {
  const [plpData, setPlpData] = useState(Data);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <FlatList
        data={plpData}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('ProductDetailPage', {itemData: item})
              }>
              <View style={styles.listContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.image1} />
                </View>
                <View style={styles.detailsContainer}>
                  <View style={styles.tittleContainer}>
                    <Text style={styles.tittleText}>{item.title}</Text>
                    <Text style={styles.tittleText}>{item.price}</Text>
                  </View>
                  <Circle item={item}></Circle>
                  <View style={styles.detailBottomContainer}>
                    <Text style={styles.seasonText}>{NEWSEASON}</Text>
                    <View style={styles.cartConatiner}>
                      <Feather name="shopping-cart" size={20} color="black" />
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}></FlatList>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    height: 130,
    width: 350,
    backgroundColor: '#e6e8e7',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    height: 120,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    height: 127,
    width: 220,
    justifyContent: 'space-between',
  },
  tittleContainer: {
    marginTop: 3,
    height: 40,
    width: 220,
    justifyContent: 'space-evenly',
  },
  tittleText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
  },
  detailBottomContainer: {
    flexDirection: 'row',
    height: 40,
    width: 220,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seasonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
    height: 17,
    width: 70,
    backgroundColor: '#f2f3f5',
    opacity: 0.8,
    left: 4,
  },
  cartConatiner: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
});
