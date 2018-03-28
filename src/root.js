import { StackNavigator } from 'react-navigation';
import MainScreen from './component/mainScreen';
import LocationScreen from './component/locationScreen';

const Root = StackNavigator({
    Main: { screen: MainScreen },
  },
);
export default Root;