import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface AddShopScreenProps {
    content?: {}
};

const AddShopScreen: React.FC<AddShopScreenProps> = props => {

  return (
    <View style={styles.compStyles}>
        <Text>Add shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default AddShopScreen;