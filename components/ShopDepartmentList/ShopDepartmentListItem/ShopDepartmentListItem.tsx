import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import productTypesInterface from '../../../dataInterfaces/productTypesInterface';

export interface ShopDepartmentListItemProps {
  item: productTypesInterface, 
  index: number, 
  move: () => {}, 
  moveEnd: () => {}, 
  isActive: boolean,
  deleteItem: (item: productTypesInterface) => void
};

const ShopDepartmentListItem: React.FC<ShopDepartmentListItemProps> = props => {
  const { item, index, move, moveEnd, isActive, deleteItem } = props;

  return (
    <TouchableOpacity
        style={{
          ...styles.touchableContainer,
          backgroundColor: isActive ? 'blue' : 'grey',
        }}
        onLongPress={move}
        onPressOut={moveEnd}>
        <Text style={styles.label}>{item.productTypeName}</Text>
        <Button title='Del' onPress={() => deleteItem(item)}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    touchableContainer: {
      height: 100, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    label: {
      fontWeight: 'bold', 
      color: 'white',
      fontSize: 32,
    }
});

export default ShopDepartmentListItem;