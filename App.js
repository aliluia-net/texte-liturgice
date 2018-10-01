import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import packageData from './package.json'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/screens/home.screen'
import BookScreen from './components/screens/book.screen'

const App = createBottomTabNavigator({
	Home: { screen: HomeScreen },
	Book: { screen: BookScreen }
},{
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'Home') {
			  iconName = `ios-information-circle${focused ? '' : '-outline'}`;
			} else if (routeName === 'Settings') {
			  iconName = `ios-options${focused ? '' : '-outline'}`;
			}

			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			return <Ionicons name={iconName} size={25} color={tintColor} />;
		},
	}),
	initialRouteName: 'Home',
	tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	}
})

export default App;


// export default class App extends React.Component {
// 	render() {
// 		return (
// 		<View style={styles.container}>
// 			<Image source={require('./assets/logo.png')} />
// 			<Text style={{color: '#fff'}}>Texte Liturgice Ortodoxe</Text>
// 			<Text style={{color: '#fff'}}>V {packageData.version}</Text>
// 		</View>
// 		);
// 	}
// }
//
// const styles = StyleSheet.create({
// container: {
// 	flex: 1,
// 	backgroundColor: '#000',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// },
// });
