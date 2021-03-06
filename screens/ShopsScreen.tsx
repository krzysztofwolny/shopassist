import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListGrid from '../components/FlatListGrid/FlatListGrid';
import ShopItem from '../components/ShopItem/ShopItem';
import AddShopItem from '../components/AddShopItem/AddShopItem';
import AddShopScreen from './AddShopScreen';
import { ShopsScreenContext } from './ShopsScreenContext';

import globalStateInterface from '../dataInterfaces/globalStateInterface';

const Stack = createNativeStackNavigator();

const ShopsScreen: React.FC = () => {
  const shopsState = useSelector((state: globalStateInterface) => state.shops);
  const PropsForGrid = {
    FirstItem: AddShopItem,
    Item: ShopItem,
    data: shopsState
  };

  useEffect(() => {
    console.log('shopsstate', shopsState)
  }, [shopsState])

  return (
    <ShopsScreenContext.Provider value={PropsForGrid}>
      <Stack.Navigator>
        <Stack.Screen name='List' component={FlatListGrid} />
        <Stack.Screen name='addShop' component={AddShopScreen} />
      </Stack.Navigator>
    </ShopsScreenContext.Provider>
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