import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import FlatListGrid from '../components/FlatListGrid/FlatListGrid';
import ShopItem from '../components/ShopItem/ShopItem';
import AddShopItem from '../components/AddShopItem/AddShopItem';

import { dummyShops } from '../dummyData/dummyShops';

const ShopsScreen: React.FC = () => {

  return (
    <View style={styles.mainView}>
      <FlatListGrid 
          FirstItem={AddShopItem}
          Item={ShopItem}
          data={dummyShops}
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