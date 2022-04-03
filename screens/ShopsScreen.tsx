import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

import FlatListGrid from '../components/FlatListGrid/FlatListGrid';
import ShopItem from '../components/ShopItem/ShopItem';
import AddShopItem from '../components/AddShopItem/AddShopItem';

import globalStateInterface from '../dataInterfaces/globalStateInterface';

const ShopsScreen: React.FC = () => {
  const shopsState = useSelector((state: globalStateInterface) => state.shops);

  return (
    <View style={styles.mainView}>
      <FlatListGrid 
          FirstItem={AddShopItem}
          Item={ShopItem}
          data={shopsState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 5,
    }
});

export default ShopsScreen;