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


class ListScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
					<Text style={{color: '#f00'}}>Texte Liturgice Ortodoxe</Text>
			</View>
		);
	}
}

export default ListScreen
