import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ComponentNameProps {
    content: {}
};

const ComponentName: React.FC<ComponentNameProps> = props => {

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

export default ComponentName;