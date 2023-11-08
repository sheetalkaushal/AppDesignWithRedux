import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import {style} from './ServicesProvideStyle';
import imagePath from '../../constants/imagePath';
import colors from '../../style/colors';
import {useSelector} from 'react-redux';

import {AsyncSendData, GetAsync} from '../../utilis/utilis';
import {
  decrease,
  increase,
  updateProductData,
} from '../../redux/actions/action';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import strings from '../../constants/lang';
const data = [
  {
    id: 1,
    content1: 'packages(05)',
  },
  {
    id: 2,
    content1: 'packages(03)',
  },
  {
    id: 3,
    content1: 'Nails(10)',
  },

  {id: 4, content1: 'packages(07)dhhdegd'},
];

const ServicesProvide = ({navigation, route}) => {
  // const item = route?.params?.item;
  // console.log(("itemmnss",item))


  const {Data} = useSelector(state => state.status);
  console.log(Data, 'DataDataDataDataData');
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    AsyncSendData('data', Data).then(res => {
      GetAsync('Data')
        .then(res => console.log(res))
        .catch(() => {});
    });
    setProductData(Data);
  }, [Data]);
  const itemIncremnet = async index => {
    increase(index);
  };

  return (
    <ScrollView style={style.mainContainer}>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={colors.BLACK}
        translucent={true}
      />
      <View>
        <ImageBackground imageStyle={style.backimg} source={imagePath.icIMAGE2}>
          <View style={style.content}>
            <TouchableOpacity style={style.leftArrowView}  onPress={() => {
              navigation.goBack();
            }}>
              <Image style={style.leftArrow} source={imagePath.icLEFTARROW} />
            </TouchableOpacity>
            <View style={style.treeimg}>
              <Image
                style={style.Treelounge}
                source={imagePath.icTREE_LOUNGE}
              />
            </View>
            <TouchableOpacity style={style.leftArrowView}>
              <Image style={style.leftArrow} source={imagePath.icSREACHICON} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.treedetails}>
            <TouchableOpacity style={style.nameView}>
              <Text style={style.contenttxt}>Treelounge</Text>
              <View style={style.ratingView}>
                <Image style={style.starimg} source={imagePath.icSTAR} />
                <Text style={style.rating}>4.5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.locationView}>
              <View style={style.location}>
                <Image
                  style={style.locationImg}
                  source={imagePath.icLOCATIONARROW}
                />
                <Text style={style.countArea}>0.2 km | 30 mins</Text>
              </View>
              <Text style={style.Opentxt}>{strings.OPEN}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </ImageBackground>
        <View style={style.packagesView}>
          <TouchableOpacity style={style.MenuView}>
            <Image style={style.leftArrow} source={imagePath.icMENUICON} />
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={style.listitem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={style.listView}>
                  <View style={style.flatitemView}>
                    <Text style={style.flatitemtxt}>{item.content1}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={style.salonlists}>
          <Text style={style.Servicetxt}>{strings.SERVICE}</Text>
          <FlatList
            contentContainerStyle={style.listitem}
            showsVerticalScrollIndicator={false}
            data={productData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={style.slaonitem}>
                  <View style={style.item}>
                    <Image source={item.img} />
                    <View>
                      <Text style={style.name}>{item.name}</Text>
                      <Text style={style.price}>{item.price}</Text>
                    </View>
                    <View style={style.selectdata}>
                      {item.qty > 0 ? (
                        <View style={style.Datacount}>
                          <TouchableOpacity
                            style={style.increment}
                            onPress={() => increase(index)}>
                            <Text style={style.contentincrement}>+</Text>
                          </TouchableOpacity>
                          <Text style={style.qantity}>{item.qty}</Text>
                          <TouchableOpacity onPress={() => decrease(index)}>
                            <Text style={style.decrmentcontent}>-</Text>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <TouchableOpacity onPress={() => itemIncremnet(index)}>
                          <Text style={style.DataAdd}>ADD</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View style={style.CartButton}>
            <View style={style.CartView}>
              <Text style={style.itemADDCart}>1 item | $8</Text>
              <TouchableOpacity
                style={style.cartView}
                onPress={() => {
                  navigation.navigate('CartData');
                }}>
                <Image style={style.cart} source={imagePath.icCART} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServicesProvide;
