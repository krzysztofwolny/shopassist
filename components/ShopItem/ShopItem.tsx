import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gridItemStyles } from '../../reusableStyles/gridItemStyles';

import ShopDataInterface from '../../dataInterfaces/shopDataInterface';

const ShopItem: React.FC<ShopDataInterface> = props => {
  const { itemId, itemName } = props;

  return (
    <View style={gridItemStyles.itemContainer}>
        <Text>{itemName}</Text>
    </View>
  );
};

export default ShopItem;