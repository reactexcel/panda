import { StackNavigator } from 'react-navigation';
import LocationScreen from './component/locationScreen'
import DistanceScreen from './component/distanceScreen'


const Root = StackNavigator({
  Main: { screen: LocationScreen },
  distancescreen: { screen: DistanceScreen }
},
);
export default Root;