import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TipCalculator from './components/TipCalculator';
import ContributionCalculator from './components/ContributionCalculator';
import AboutScreen from './components/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Calculator" 
          component={TipCalculator}
          options={{ title: 'Propina' }} />
        <Tab.Screen 
          name="Contribution" 
          component={ContributionCalculator}
          options={{ title: 'Contribución' }} />
        <Tab.Screen
          name="AboutScreen" 
          component={AboutScreen}
          options={{ title: 'Acerca de', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
