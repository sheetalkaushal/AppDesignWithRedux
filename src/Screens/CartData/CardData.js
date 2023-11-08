import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './CartDataStyle';
import imagePath from '../../constants/imagePath';
import colors from '../../style/colors';
import {moderateScale} from 'react-native-size-matters';
import {AsyncRemoveData, AsyncSendData} from '../../utilis/utilis';
import {useSelector} from 'react-redux';
import strings from '../../constants/lang';

const CardData = ({navigation}) => {
  const {Data} = useSelector(state => state.status);
  const subgrandtotal = useSelector(state => state.status.subgrandtotal);
  const [allCartData, setAllCartData] = useState([]);
  return (
    <ScrollView style={style.Conatiner}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.WHITE}
        translucent={true}
      />
      <View style={style.headerContainer}>
        <View style={style.header}>
          <TouchableOpacity
            style={style.leftArrowView}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image style={style.leftArrow} source={imagePath.icLEFTARROW} />
          </TouchableOpacity>
          <View style={style.CartView}>
            <Text style={style.carttxt}>{strings.CART}</Text>
          </View>
        </View>
        {/* CartData */}
        <View style={{marginTop: moderateScale(33)}}>
          <View style={{backgroundColor: colors.LIGHT_GREY}}>
            <FlatList
              contentContainerStyle={style.listitem}
              showsVerticalScrollIndicator={false}
              data={allCartData}
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
                          <TouchableOpacity
                            onPress={() => itemIncremnet(index)}>
                            <Text style={style.DataAdd}>{strings.ADD}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <Text style={style.grandtotal}>{strings.BILL_SUMMARY}</Text>
        <View style={style.subtotalView}>
          <View style={style.totalgrand}>
            <View style={style.totalitem}>
              <Text style={style.subtotal}>{strings.SUBTOTAL}</Text>
              <Text style={style.subgrand}>{subgrandtotal}</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <>
                  <View>
                    <Image source={item.timewatch} />
                    <Text>{item.time}</Text>
                  </View>
                </>
              )}
            />
          </View>
          <View style={style.gstcharges}>
            <Text style={style.gstRent}>GSt charges</Text>
            <Image style={style.chargesimg} source={imagePath.icEmergency} />
            <Text>$00.00</Text>
          </View>
          <View style={style.grandview}>
            <Text style={style.grandcharge}>Grandtotal</Text>
            <Text>$00.00</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 12}}
        onPress={() =>AsyncRemoveData("userData")}>
        <Text style={{color:colors.PURPLECOLOR,fontSize:23,fontWeight:"500"}}>{strings.SignOut}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardData;
