import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import ShopDepartmentListItem from './ShopDepartmentListItem/ShopDepartmentListItem';

import productTypesConfig from '../../config/productTypesConfig';
import productTypesInterface from '../../dataInterfaces/productTypesInterface';

interface ShopDepartmentListProps {
    content?: {}
};

const ShopDepartmentList: React.FC<ShopDepartmentListProps> = props => {
  const [departmentsToChoose, setDepartmentsToChoose] = useState<productTypesInterface[] | []>([...productTypesConfig]);
  const [choosenDepartments, setChoosenDepartments] = useState<productTypesInterface[] | []>([]);

  useEffect(() => {
    //console.log('state',choosenDepartments)
  }, [choosenDepartments])

  const onSelectHandler = ((selectedItem: productTypesInterface, index: number): void => {
    const newList = [...choosenDepartments];
    setChoosenDepartments([...newList, selectedItem])
  });

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
            renderItem={ShopDepartmentListItem}
            keyExtractor={(item: productTypesInterface) => item.productTypeId}
            scrollPercent={5}
            onMoveEnd={( data: {} ) => console.log(data)}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10
    },
    draggable: {
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10
    }
});

export default ShopDepartmentList;