import React, {useState} from 'react';
import {
  AppRegistry,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Circle from './Circle';
import {NEWSEASON} from './Strings';
import {Data} from './Data';
const ProductListGrid = ({navigation}) => {
  const [plpData, setPlpData] = useState(Data);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {plpData.length > 0 ? (
        <FlatList
          data={plpData}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('ProductDetailPage', {itemData: item})
                }
                style={styles.listContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.image1} />
                  <View style={styles.seasonView}>
                    <Text style={styles.seasonText}>{NEWSEASON}</Text>
                    <View style={styles.cartContainer}>
                      <Feather name="shopping-cart" size={20} color="black" />
                    </View>
                  </View>
                </View>
                <View style={styles.heartContainer}>
                  <AntDesign name="hearto" size={20} color="black" />
                </View>
                <View style={styles.detailsContainer}>
                  <Circle item={item}></Circle>
                  <Text style={styles.tittleText}>{item.title}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </Pressable>
            );
          }}></FlatList>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            Data not Availabe
          </Text>
        </View>
      )}
    </View>
  );
};

export default ProductListGrid;

const styles = StyleSheet.create({
  listContainer: {
    height: 350,
    width: '45%',
    borderColor: 'grey',
    margin: '2.5%',
  },
  imageContainer: {
    height: 280,
    width: '100%',
    backgroundColor: '#e6e8e7',
    justifyContent: 'flex-end',
  },
  image: {
    height: 240,
    width: '100%',
    resizeMode: 'contain',
  },
  seasonView: {
    position: 'absolute',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
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
  cartContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  heartContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 30,
    width: 30,
    top: 5,
  },
  detailsContainer: {
    height: 90,
    width: '100%',
  },
  tittleText: {
    color: '#323233',
    fontSize: 14,
    paddingLeft: 5,
    fontWeight: '400',
  },
  priceText: {
    color: '#323233',
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 5,
  },
});
