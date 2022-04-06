import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import {ShopsScreenContext} from '../../screens/ShopsScreenContext';

interface FlatListNavProps {
    navigation: {
        [key: string]: (arg0: string) => {}
    }
}

const FlatListGrid: React.FC<FlatListNavProps> = (props) => {
  const context = useContext(ShopsScreenContext);
  let newData, FirstItem, Item, data;

  if(context) {
    FirstItem = context.FirstItem;
    Item = context.Item;
    data = context.data;
  }

  if(context && context.data) {
    newData = [...context.data];
    newData.unshift({ itemId: 0, itemName: 'add' });
  }

  const navigationHandler = () => {
    props.navigation.navigate('addShop')
  }

  return (
    <View style={styles.mainView}>
        <FlatList
            data={newData}
            renderItem={({ item, index }) => {
                if(index === 0) {
                    return <FirstItem navigation={navigationHandler}/>
                } else {
                    return <Item itemId={item.itemId} itemName={item.itemName} />
                }
            }}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 5,
    }
});

export default FlatListGrid;