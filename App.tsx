import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListsScreen from './screens/ListsScreen';
import ShopsScreen from './screens/ShopsScreen';
import StatsScreen from './screens/StatsScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Lists'>
        <Tab.Screen name='Lists' 
                    component={ListsScreen} 
                    options={{
                      tabBarLabel: 'Lists',
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="th-list" color='black' size={20} />
                      ),
                    }}
        />
        <Tab.Screen name='Shops' 
                    component={ShopsScreen} 
                    options={{
                      tabBarLabel: 'Shops',
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="barcode" color='black' size={20} />
                      ),
                    }}
        />
        <Tab.Screen name='Stats' 
                    component={StatsScreen} 
                    options={{
                      tabBarLabel: 'Stats',
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="bar-chart" color='black' size={20} />
                      ),
                    }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;