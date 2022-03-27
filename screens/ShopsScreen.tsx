import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ShopsScreenProps {
    content: {}
};

const ShopsScreen: React.FC<ShopsScreenProps> = props => {

  return (
    <View style={styles.compStyles}>
        <Text>Shops</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default ShopsScreen;