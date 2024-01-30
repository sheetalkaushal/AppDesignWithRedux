import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale} from 'react-native-size-matters';
import {style} from './HomePageStyle';
import imagePath from '../../constants/imagePath';
const DATA = [
  {
    id: 1,
    image: imagePath.BananaImg,
    title1: 'Banana Smoothie',
    starImg: imagePath.Rating,
    rupee: '$11',
    Add: '+',
  },
  {
    id: 2,
    image: imagePath.BananaImg,
    title1: 'Blueberry Smoothie',
    starImg: imagePath.Rating,
    rupee: '$13',
    Add: '+',
  },
  {
    id: 3,
    image: imagePath.BananaImg,
    title1: 'Blueberry Smoothie',
    starImg: imagePath.Rating,
    rupee: '$12',
    Add: '+',
  },
  {
    id: 4,
    image: imagePath.BananaImg,
    title1: 'Blueberry Smoothie',
    starImg: imagePath.Rating,
    rupee: '$16',
    Add: '+',
  },
];
const HomePage = () => {
  return (
    <KeyboardAwareScrollView style={style.mainConatiner}>
      <View style={style.navContainer}>
        <View style={style.navbar}>
          <TouchableOpacity>
            <Image style={style.imgStyle} source={imagePath.menu} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.image} />
          </TouchableOpacity>
        </View>
        <View style={style.SomeiView}>
          <Text style={style.Smoothetxt}>Smoothies</Text>
        </View>
        <View style={style.sreachView}>
          <TouchableOpacity>
            <Image style={style.imgStyle} source={imagePath.filter} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.WHITE,
              borderWidth: 1,
              color: colors.BLACK,
              width: '60%',
              borderRadius: 20,
            }}>
            <Text
              style={{
                marginLeft: moderateScale(15),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.cart} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{margin: 3}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <>
              <View style={style.orderitem}>
                <TouchableOpacity style={{marginHorizontal: 5}}>
                  <Image source={item.image} />
                  <View style={{marginTop: moderateScale(5)}}>
                    <Text
                      style={{
                        marginLeft: moderateScale(2),
                        color: colors.BLACK,
                        fontSize: 15,
                      }}>
                      {item.title1}
                    </Text>
                    <Image source={item.starImg} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: colors.BLACK}}>{item.rupee}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default HomePage;
