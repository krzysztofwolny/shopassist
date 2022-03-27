import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ListsScreenProps {
    content?: {}
};

const ListsScreen: React.FC<ListsScreenProps> = props => {

  return (
    <View style={styles.compStyles}>
        <Text>This is Lists screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    compStyles: {
        padding: 20
    }
});

export default ListsScreen;