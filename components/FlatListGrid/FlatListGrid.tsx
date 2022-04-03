import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ShopDataInterface from '../../dataInterfaces/shopDataInterface';

interface FlatListGridProps {
    FirstItem: React.FC;
    Item: React.FC<ShopDataInterface>;
    data: ShopDataInterface[] | [];
};

const FlatListGrid: React.FC<FlatListGridProps> = props => {
  const { FirstItem, Item, data } = props;

  const newData = [...data];
  newData.unshift({ itemId: 0, itemName: 'add' });

  return (
        <FlatList
            data={newData}
            renderItem={({ item, index }) => {
                if(index === 0) {
                    return <FirstItem />
                } else {
                    return <Item itemId={item.itemId} itemName={item.itemName} />
                }
            }}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
        />
  );
};

export default FlatListGrid;