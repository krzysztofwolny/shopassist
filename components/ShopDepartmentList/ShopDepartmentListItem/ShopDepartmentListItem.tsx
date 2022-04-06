import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ShopDepartmentListItemProps {
    content: {}
};

const ShopDepartmentListItem: React.FC<ShopDepartmentListItemProps> = props => {

  return (
    <View style={styles.compStyles}>
        
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default ShopDepartmentListItem;