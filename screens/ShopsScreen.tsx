import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ShopsScreenProps {
    content: {}
};

const ShopsScreen: React.FC<ShopsScreenProps> = props => {

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

export default ShopsScreen;