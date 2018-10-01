import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#000',
	alignItems: 'center',
	justifyContent: 'center',
},
});

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Acasă',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{
				backgroundColor: "#000",
				display: 'flex',
				height: '100%',
				flexWrap: 'wrap',
				flexDirection: 'column'
			}}>
				<View style={{
					flex: 1,
					backgroundColor: 'red',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Button
						title="Rugăciuni particulare"
						onPress={() =>
							navigate('Book', { name: 'rugaciuni' })
						}
					/>
				</View>
				<View style={{
					flex: 1,
					backgroundColor: 'blue',
					alignItems: 'center',
					justifyContent: 'center'
				}} >
					<Button
						title="Slujbe bisericești"
						onPress={() =>
							navigate('Book', { name: 'slujbe' })
						}
					/>
				</View>
			</View>
		);
	}
}

export default HomeScreen
