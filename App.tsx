import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome';

import shopsReducer from './stores/shops/shopsReducer';

import ListsScreen from './screens/ListsScreen';
import ShopsScreen from './screens/ShopsScreen';
import StatsScreen from './screens/StatsScreen';

const composeEnhancers = compose;

const store = () => createStore(combineReducers(
  {
    shops: shopsReducer
  }
), composeEnhancers(
  applyMiddleware(thunk)
));

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Lists'>
          <Tab.Screen name='Lists' 
                      component={ListsScreen} 
                      options={{
                        tabBarLabel: 'Lists',
                        tabBarIcon: () => (
                          <Icon name="th-list" color='black' size={20} />
                        ),
                      }}
          />
          <Tab.Screen name='Shops' 
                      component={ShopsScreen} 
                      options={{
                        tabBarLabel: 'Shops',
                        tabBarIcon: () => (
                          <Icon name="barcode" color='black' size={20} />
                        ),
                      }}
          />
          <Tab.Screen name='Stats' 
                      component={StatsScreen} 
                      options={{
                        tabBarLabel: 'Stats',
                        tabBarIcon: () => (
                          <Icon name="bar-chart" color='black' size={20} />
                        ),
                      }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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