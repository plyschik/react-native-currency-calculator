import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CurrencyCalculatorScreen from './containers/CurrencyCalculatorScreen';
import AboutApplicationScreen from './components/AboutApplicationScreen';

const ApplicationTabNavigation = TabNavigator({
    CurrencyCalculator: { screen: CurrencyCalculatorScreen },
    AboutApplication: { screen: AboutApplicationScreen }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#123456'
        }
    }
});

const ApplicationNavigation = StackNavigator({
    Application: { screen: ApplicationTabNavigation }
});

ApplicationTabNavigation.navigationOptions = {
    title: 'Kalkulator walut (plyschik, 2017)',
    headerTitleStyle: {
        color: '#fff'
    },
    headerStyle: {
        backgroundColor: '#123456'
    }
};

AppRegistry.registerComponent('Application', () => ApplicationNavigation);

export default ApplicationNavigation;