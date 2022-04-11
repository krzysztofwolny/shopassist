import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gridItemStyles } from '../../reusableStyles/gridItemStyles';

interface addShopItemProps {
  navigation: () => {}
}

const AddShopItem: React.FC<addShopItemProps> = props => {

  const onPressHandler = () => {
    props.navigation();
  }

  return (
    <TouchableOpacity style={gridItemStyles.itemContainer} onPress={onPressHandler}>
        <Text>Add Shop Item</Text>
    </TouchableOpacity>
  );
};

export default AddShopItem;