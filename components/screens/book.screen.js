import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#000',
	alignItems: 'center',
	justifyContent: 'center',
},
});


class BookScreen
extends React.Component {
	render() {
		const navigation = this.props.navigation;
		const bookName = navigation.getParam('name', 'NO-ID');
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
					<Text style={{color: '#f00'}}>Texte Liturgice Ortodoxe</Text>
			</View>
		);
	}

	getTitle () {
		return 'test';
	}
}

export default BookScreen
