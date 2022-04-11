import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import ShopDepartmentListItem, { ShopDepartmentListItemProps } from './ShopDepartmentListItem/ShopDepartmentListItem';

import productTypesConfig from '../../config/productTypesConfig';
import productTypesInterface from '../../dataInterfaces/productTypesInterface';

interface ShopDepartmentListProps {
  choosenDepartments: productTypesInterface[] | [],
  departmentsToChoose: productTypesInterface[] | [],
  setChoosenDepartments: (a: productTypesInterface[] | []) => productTypesInterface[] | [],
  setDepartmentsToChoose: (a: productTypesInterface[] | []) => productTypesInterface[] | []
};

const ShopDepartmentList: React.FC<ShopDepartmentListProps> = props => {
  const { choosenDepartments, departmentsToChoose, setChoosenDepartments, setDepartmentsToChoose } = props;

  const onSelectHandler = ((selectedItem: productTypesInterface, index: number): void => {
    const newChoosen = [...choosenDepartments],
          newToChoose = [... departmentsToChoose];

    setChoosenDepartments([...newChoosen, selectedItem]);
    const filteredToChoose = newToChoose.filter( el => el.productTypeId !== selectedItem.productTypeId);
    setDepartmentsToChoose(filteredToChoose);
  });

  const deleteItemHandler = (item: productTypesInterface): void => {
    const newChoosen = [...choosenDepartments],
          newToChoose = [... departmentsToChoose];

    setDepartmentsToChoose([...newToChoose, item]);
    const filteredChoosen = newChoosen.filter( el => el.productTypeId !== item.productTypeId);
    setChoosenDepartments(filteredChoosen);
  }

  return (
    <View style={styles.container}>
        <SelectDropdown
          data={departmentsToChoose}
          onSelect={(selectedItem, index) => onSelectHandler(selectedItem, index)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.productTypeName
          }}
          rowTextForSelection={(item, index) => {
            return item.productTypeName
          }}
        />
        <View style={styles.draggable}>
          <DraggableFlatList
            data={choosenDepartments}
            renderItem={({ item, index, move, moveEnd, isActive } : ShopDepartmentListItemProps) => <ShopDepartmentListItem 
              item={item} 
              index={index}
              move={move}
              moveEnd={moveEnd}
              isActive={isActive}
              deleteItem={(id) => deleteItemHandler(id)}
            />}
            keyExtractor={(item: productTypesInterface) => item.productTypeId}
            scrollPercent={5}
            onMoveEnd={( data: { data: productTypesInterface[] } ) => setChoosenDepartments(data.data)}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: '90%',
        padding: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10
    },
    draggable: {
        flex:1,
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10
    }
});

export default ShopDepartmentList;