import { StackNavigator } from 'react-navigation';

import LocationScreen from './component/locationScreen'
import DistanceScreen from './component/distanceScreen'
import MainScreen from './component/mainScreen';

const Root = StackNavigator({
    Main: { screen: MainScreen },
    Location: { screen: LocationScreen },
    distancescreen: { screen: DistanceScreen }
  },
);
export default Root;