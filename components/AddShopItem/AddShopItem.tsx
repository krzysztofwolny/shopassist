import React, { ReactPropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gridItemStyles } from '../../reusableStyles/gridItemStyles';

//import { addShop } from '../../stores/shops/shopsActions';

interface addShopItemProps {
  navigation: () => {}
}

const AddShopItem: React.FC<addShopItemProps> = props => {
  //const dispatch = useDispatch();

  const onPressHandler = () => {
    //dispatch(addShop({ itemId: 1, itemName: 'netto' }));
    props.navigation();
  }

  return (
    <TouchableOpacity style={gridItemStyles.itemContainer} onPress={onPressHandler}>
        <Text>Add Shop Item</Text>
    </TouchableOpacity>
  );
};

export default AddShopItem;