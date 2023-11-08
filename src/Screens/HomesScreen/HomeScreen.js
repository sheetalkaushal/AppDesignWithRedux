import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {style} from './HomeStyle';
import imagePath from '../../constants/imagePath';
import open from 'react-native-open-maps';
import colors from '../../style/colors';
import strings from '../../constants/lang';
import React, {useCallback, useState} from 'react';
import CardData from '../CartData/CardData';
import ServicesProvide from '../ServicesProvide/ServicesProvide';

const HomeScreen = ({navigation}) => {
  const [list, setList] = useState([
    {
      id: 1,
      image: imagePath.icIMAGE1,
      Content: 'Tree Lounged',
      location: imagePath.icLOCATIONARROW,
      meters: '0.2 km | 30 mins',
      star: imagePath.icSTAR,
      rating: '4.5',
      open: 'Open',
    },
    {
      id: 2,
      image: imagePath.icIMAGE2,
      Content: 'Azzaro Unisex Salon',
      location: imagePath.icLOCATIONARROW,
      meters: '0.2 km | 30 mins',
      star: imagePath.icSTAR,
      rating: '4.5',
      open: 'Open',
    },
    {
      id: 3,
      image: imagePath.icIMAGE3,
      Content: 'Akram Hussain Salon & Spa',
      location: imagePath.icLOCATIONARROW,
      meters: '0.2 km | 30 mins',
      star: imagePath.icSTAR,
      rating: '4.5',
      open: 'Open',
    },
  ]);

  // const SalonComponent = useCallback((item, index) => {
  //   return (
  //     <View key={index} style={style.MainView}>
  //       <TouchableOpacity
  //         onPress={item => navigation.navigate('ServicesProvide', {item})}>
  //         <Image style={{width:"100%"}} source={item.image} />
  //         <TouchableOpacity style={style.nameView}>
  //           <Text style={style.contenttxt}>{item.Content}</Text>
  //           <View style={style.ratingView}>
  //             <Image style={style.starimg} source={item.star} />
  //             <Text style={style.rating}>{item.rating}</Text>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={style.locationView}>
  //           <View style={style.location}>
  //             <Image style={style.locationImg} source={item.location} />
  //             <Text style={style.countArea}>{item.meters}</Text>
  //           </View>
  //           <Text style={style.Opentxt}>{item.open}</Text>
  //         </TouchableOpacity>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // });
  return (
    <ScrollView style={style.MainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.WHITE}
        translucent={true}
      />
      <View style={style.Container}>
        <View style={style.bannercontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={style.leftArrowView}>
            <Image style={style.leftArrow} source={imagePath.icLEFTARROW} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.arrowView}
            onPress={() =>
              open({latitude: 30.71923776993991, longitude: 76.81066575861746})
            }>
            <Image
              style={style.locationarrow}
              source={imagePath.icLOCATIONICON}
            />
            <Text style={style.Locationtxt}>{strings.CHANDIGARH}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={item => navigation.navigate('CartData')}
            style={style.cartView}>
            <Image style={style.cart} source={imagePath.icCART} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.SearchTopView}>
          <TouchableOpacity style={style.searchView}>
            <Text style={style.Searchtxt}>{strings.SEARCH_HERE}</Text>
            <Image style={style.searchicon} source={imagePath.icSREACHICON} />
          </TouchableOpacity>
          <Image style={style.filterIcon} source={imagePath.icFILTER} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={style.listView}
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={style.MainView}>
                <TouchableOpacity
                  onPress={item =>
                    navigation.navigate('ServicesProvide', {item})
                  }>
                  <Image style={style.image} source={item.image} />
                  <TouchableOpacity style={style.nameView}>
                    <Text style={style.contenttxt}>{item.Content}</Text>
                    <View style={style.ratingView}>
                      <Image style={style.starimg} source={item.star} />
                      <Text style={style.rating}>{item.rating}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.locationView}>
                    <View style={style.location}>
                      <Image style={style.locationImg} source={item.location} />
                      <Text style={style.countArea}>{item.meters}</Text>
                    </View>
                    <Text style={style.Opentxt}>{item.open}</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* <View style={style.listView}>
          {list.map((item, index) => {
            return SalonComponent(item, index);
          })}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
