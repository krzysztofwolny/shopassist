import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { addShop } from '../stores/shops/shopsActions';

import globalStateInterface from '../dataInterfaces/globalStateInterface';

interface AddShopScreenProps {
  navigation: {
    [key: string]: (arg0: string) => {}
  }
};

const AddShopScreen: React.FC<AddShopScreenProps> = props => {
  const dispatch = useDispatch();
  const shopsState = useSelector((state: globalStateInterface) => state.shops);
  const [shopNameInput, setShopNameInput] = useState<string>('');

  const saveShopHandler = (): void => {
    const nextId: number = shopsState.length + 1;
    dispatch(addShop({ itemId: nextId, itemName: shopNameInput }));
    props.navigation.goBack('List');
  }

  return (
    <View style={styles.compStyles}>
        <TextInput
          onChangeText={setShopNameInput}
          value={shopNameInput}
          placeholder="Enter Shop Name"
        />
        <Button title='Save' onPress={saveShopHandler}>Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default AddShopScreen;