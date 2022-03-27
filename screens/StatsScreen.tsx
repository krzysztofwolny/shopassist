import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface StatsScreenProps {
    content: {}
};

const StatsScreen: React.FC<StatsScreenProps> = props => {

  return (
    <View style={styles.compStyles}>
        <Text>Stats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default StatsScreen;