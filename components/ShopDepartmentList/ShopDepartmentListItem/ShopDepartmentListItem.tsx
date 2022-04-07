import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import productTypesInterface from '../../../dataInterfaces/productTypesInterface';

interface ShopDepartmentListItemProps {
  item: productTypesInterface, 
  index: number, 
  move: () => {}, 
  moveEnd: () => {}, 
  isActive: boolean
};

const ShopDepartmentListItem: React.FC<ShopDepartmentListItemProps> = props => {
  const { item, index, move, moveEnd, isActive } = props;

  return (
    <TouchableOpacity
        style={{ 
          height: 100, 
          backgroundColor: isActive ? 'blue' : 'grey',
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onLongPress={move}
        onPressOut={moveEnd}>
        <Text style={{ 
          fontWeight: 'bold', 
          color: 'white',
          fontSize: 32,
        }}>{item.productTypeName}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default ShopDepartmentListItem;