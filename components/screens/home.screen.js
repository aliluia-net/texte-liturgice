import React from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';

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
		const resizeMode = 'contain';
		return (
			<View style={{
				backgroundColor: "#000",
				display: 'flex',
				height: '100%',
				flexWrap: 'wrap',
				flexDirection: 'column'
			}}>
				<ImageBackground
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
					source={require('../../assets/mireni.jpg')}
					onClick={() =>
						navigate('Book', { name: 'rugaciuni' })
					}
				>
					<Button
						color="#333"
						title="Carte de rugăciuni"
						onPress={() =>
							navigate('Book', { name: 'slujbe' })
						}
					/>
				</ImageBackground>
				<ImageBackground
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
					source={require('../../assets/clerici.jpg')}
					onClick={() =>
						navigate('Book', { name: 'rugaciuni' })
					}
				>
					<Button
						color="#333"
						title="Slujbe bisericești"
						onPress={() =>
							navigate('Book', { name: 'slujbe' })
						}
					/>
				</ImageBackground>
			</View>
		);
	}
}

export default HomeScreen
