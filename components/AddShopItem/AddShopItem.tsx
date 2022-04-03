import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gridItemStyles } from '../../reusableStyles/gridItemStyles';
import { useDispatch } from 'react-redux';

import { addShop } from '../../stores/shops/shopsActions';

const AddShopItem: React.FC = () => {
  const dispatch = useDispatch();

  const onPressHandler = () => {
    dispatch(addShop({ itemId: 1, itemName: 'netto' }));
  }

  return (
    <TouchableOpacity style={gridItemStyles.itemContainer} onPress={onPressHandler}>
        <Text>Add Shop Item</Text>
    </TouchableOpacity>
  );
};

export default AddShopItem;