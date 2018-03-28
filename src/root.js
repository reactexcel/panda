import { StackNavigator } from 'react-navigation';
import LocationScreen from './component/locationScreen'
const Root = StackNavigator({
  Main: { screen: LocationScreen },
},
);
export default Root;