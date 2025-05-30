import {
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useEffect } from 'react';
import { HomeScreenStyles } from './HomeScreenStyles';
import { SvgXml } from 'react-native-svg';
import { ColorCarrot } from '../../Assets/images/ColorCarrot';
import { LocationIcon } from '../../Assets/images/LocationIcon';
import { searchIcon } from '../../Assets/images/searchIcon';
import HomeScreenVM from './HomeScreenVM';
import { plusIcon } from '../../Assets/images/plus';
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from '../../Helpers/Utilities/Utilities';

const HomeScreen = () => {
  useEffect(() => {
    vm.testGetProducts(); // Fetch data when screen mounts
    vm.getCategory();
  }, []);
  const vm = HomeScreenVM();

  return (
    <View style={HomeScreenStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={HomeScreenStyles.productContainer}
      >
        <View style={HomeScreenStyles.carrotLogo}>
          <SvgXml xml={ColorCarrot} height={'100%'} width={'100%'}></SvgXml>
        </View>
        <View style={HomeScreenStyles.locationContainer}>
          <View style={HomeScreenStyles.locationIcon}>
            <SvgXml xml={LocationIcon} height={'100%'} width={'100%'}></SvgXml>
          </View>
          <Text>Dhaka, Banassre</Text>
        </View>
        <View style={HomeScreenStyles.searchContainer}>
          <View style={HomeScreenStyles.searchIcon}>
            <SvgXml xml={searchIcon} height={'100%'} width={'100%'}></SvgXml>
          </View>
          <TextInput
            placeholderTextColor={'#7C7C7C'}
            placeholder="Search Store"
            autoCorrect={true}
            cursorColor={'#7C7c'}
            style={HomeScreenStyles.searchInput}
          ></TextInput>
        </View>
        <View style={HomeScreenStyles.carouselContainer}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('../../Assets/images/banner.png')}
          />
        </View>
        <View style={HomeScreenStyles.divisionContainer}>
          <Text style={HomeScreenStyles.divisionText1}>Best Selling</Text>
          <Text style={HomeScreenStyles.divisionText2}>Sell all</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: getWidthEquivalent(24),
            paddingRight: getWidthEquivalent(9),
          }}
          showsHorizontalScrollIndicator={false}
          style={HomeScreenStyles.productList}
          horizontal={true}
        >
          {vm.products.map((product, index) => {
            return (
              <Pressable
                onPress={() => {
                  console.log(product);
                }}
                key={index}
                style={HomeScreenStyles.productCard}
              >
                <Image
                  resizeMode="contain"
                  style={HomeScreenStyles.productImage}
                  source={require('../../Assets/images/egg.png')}
                ></Image>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productNameText}
                >
                  {product.productName}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productDescriptionText}
                >
                  {product.productDescription}
                </Text>
                <Text style={HomeScreenStyles.productPriceText}>
                  ${product.productPrice}
                </Text>
                <TouchableOpacity style={HomeScreenStyles.addToCartContainer}>
                  <View
                    style={{
                      width: getHeightEquivalent(17),
                      height: getHeightEquivalent(17),
                    }}
                  >
                    <SvgXml
                      xml={plusIcon}
                      height={'100%'}
                      width={'100%'}
                    ></SvgXml>
                  </View>
                </TouchableOpacity>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={HomeScreenStyles.divisionContainer}>
          <Text style={HomeScreenStyles.divisionText1}>Best Selling</Text>
          <Text style={HomeScreenStyles.divisionText2}>Sell all</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: getWidthEquivalent(24),
            paddingRight: getWidthEquivalent(9),
          }}
          style={[
            HomeScreenStyles.productList,
            {
              //marginBottom: getHeightEquivalent(50),
            },
          ]}
          horizontal={true}
        >
          {vm.products.map((product, index) => {
            return (
              <Pressable
                onPress={() => {
                  console.log(product);
                }}
                key={index}
                style={HomeScreenStyles.productCard}
              >
                <Image
                  resizeMode="contain"
                  style={HomeScreenStyles.productImage}
                  source={require('../../Assets/images/egg.png')}
                ></Image>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productNameText}
                >
                  {product.productName}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productDescriptionText}
                >
                  {product.productDescription}
                </Text>
                <Text style={HomeScreenStyles.productPriceText}>
                  ${product.productPrice}
                </Text>
                <TouchableOpacity style={HomeScreenStyles.addToCartContainer}>
                  <View
                    style={{
                      width: getHeightEquivalent(17),
                      height: getHeightEquivalent(17),
                    }}
                  >
                    <SvgXml
                      xml={plusIcon}
                      height={'100%'}
                      width={'100%'}
                    ></SvgXml>
                  </View>
                </TouchableOpacity>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={HomeScreenStyles.divisionContainer}>
          <Text style={HomeScreenStyles.divisionText1}>Best Selling</Text>
          <Text style={HomeScreenStyles.divisionText2}>Sell all</Text>
        </View>
          <ScrollView
          horizontal={true}
           contentContainerStyle={{
            paddingLeft: getWidthEquivalent(24),
            paddingRight: getWidthEquivalent(9),
          }}
          showsHorizontalScrollIndicator={false}
          style={HomeScreenStyles.categoryList}>
             {
              vm.category.map((value,ind)=>{
                return(
                  <Pressable onPress={()=>{console.log(value)}} key={ind} style={HomeScreenStyles.categoryCard}>
                    <Text>{value.name}</Text>
                  </Pressable>
                )
              })
             }
          </ScrollView>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: getWidthEquivalent(24),
            paddingRight: getWidthEquivalent(9),
          }}
          showsHorizontalScrollIndicator={false}
          style={[HomeScreenStyles.productList,{
            marginBottom: getHeightEquivalent(50),
          }]}
          horizontal={true}
        >
          {vm.products.map((product, index) => {
            return (
              <Pressable
                onPress={() => {
                  console.log(product);
                }}
                key={index}
                style={HomeScreenStyles.productCard}
              >
                <Image
                  resizeMode="contain"
                  style={HomeScreenStyles.productImage}
                  source={require('../../Assets/images/egg.png')}
                ></Image>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productNameText}
                >
                  {product.productName}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={HomeScreenStyles.productDescriptionText}
                >
                  {product.productDescription}
                </Text>
                <Text style={HomeScreenStyles.productPriceText}>
                  ${product.productPrice}
                </Text>
                <TouchableOpacity style={HomeScreenStyles.addToCartContainer}>
                  <View
                    style={{
                      width: getHeightEquivalent(17),
                      height: getHeightEquivalent(17),
                    }}
                  >
                    <SvgXml
                      xml={plusIcon}
                      height={'100%'}
                      width={'100%'}
                    ></SvgXml>
                  </View>
                </TouchableOpacity>
              </Pressable>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
