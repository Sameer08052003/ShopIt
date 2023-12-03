import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Circle from '../Components/Circle';
import {CheckOut, DetailPage} from '../Components/Strings';

const ProductDetail = ({route, navigation}) => {
  const {itemData} = route.params;
  console.log(itemData);
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </Pressable>
        <View style={styles.detailViewContainer}>
          <Text style={styles.detailText}>{DetailPage}</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.imageViewContainer}>
          <Image style={styles.image} source={itemData.image1} />
        </View>
        <View style={styles.tittleViewContainer}>
          <Text style={styles.tittleText}>{itemData.title}</Text>
        </View>
        <Circle item={itemData}></Circle>
        <View style={styles.priceViewContainer}>
          <Text style={styles.priceText}>{itemData.price}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </Text>
        </View>
        <Pressable style={styles.checkOutButtonView}>
          <Text style={styles.checkOutButtonText}>{CheckOut}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailViewContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  imageViewContainer: {
    height: 400,
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '90%',
  },
  tittleViewContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  tittleText: {
    left: 5,
    fontSize: 20,
    fontWeight: '500',
    fontVariant: 'bold',
    color: 'black',
  },
  priceViewContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  priceText: {
    left: 5,
    fontSize: 20,
    fontWeight: '500',
    fontVariant: 'bold',
    color: 'black',
  },
  detailView: {
    height: 50,
    width: '100%',
  },
  detailText: {
    left: 5,
    color: 'black',
  },
  checkOutButtonView: {
    height: 50,
    width: '80%',
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOutButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
