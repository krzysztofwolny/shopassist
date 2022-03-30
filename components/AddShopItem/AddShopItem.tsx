import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gridItemStyles } from '../../reusableStyles/gridItemStyles';

const AddShopItem: React.FC = () => {

  return (
    <View style={gridItemStyles.itemContainer}>
        <Text>Add Shop Item</Text>
    </View>
  );
};

export default AddShopItem;