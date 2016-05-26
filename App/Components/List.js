
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	ScrollView,
} = React;

class ListItem extends React.Component{
	render() {
		return (
			<View style={this.props.style}>
				{this.props.children}
			</View>
		);
	}
}

class List extends React.Component{
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={[
				Helpers['e-list'],
				this.props.style || null
			]}>
				{this.props.children.map(
					(listContent, index) => <ListItem key={"listItem" + index}>{listContent}</ListItem> 
				)}
			</View>
		);
	}
};

// Example:
// 1. Simple list
// <List>
// 	 <Text style={Colors['e-text-indigo-800']}>List Item 1</Text>
// 	 <Text style={Colors['e-text-indigo-800']}>List Item 2</Text>
// 	 <Text style={Colors['e-text-indigo-800']}>List Item 3</Text>
// 	 <Text style={Colors['e-text-indigo-800']}>List Item 4</Text>
// </List>
//
// 2. Single line list
// <List style={Helpers['e-shadow-2']}>
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<Text style={[Helpers['e-list-text']]}>List Item 1</Text>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<Text style={[Helpers['e-list-text']]}>List Item 2</Text>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<Text style={[Helpers['e-list-text']]}>List Item 3</Text>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<Text style={[Helpers["e-list-text"]]}>List Item 4</Text>
// 		</View>
// 	</TouchableHighlight>
// </List>
//
// 3. Two lines list
// <List style={Helpers['e-shadow-2']}>
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 1</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 1</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 2</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 2</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 3</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 3</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 4</Text>
// 				<Text style={[Helpers["e-list-text"]]}>List Item 4</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// </List>
//
// 4. Multi line list
// <List style={Helpers['e-shadow-2']}>
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 1</Text>
// 				<Text style={[Helpers['e-list-text'], Typography['em']]}>Subtitle Item 1</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 1</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 2</Text>
// 				<Text style={[Helpers['e-list-text'], Typography['em']]}>Subtitle Item 2</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 2</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 3</Text>
// 				<Text style={[Helpers['e-list-text'], Typography['em']]}>Subtitle Item 3</Text>
// 				<Text style={[Helpers['e-list-text']]}>List Item 3</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 
// 	<TouchableHighlight
//		underlayColor='#5C6BC0' 
// 		style={Helpers['e-list-item']}
// 		onPress={this.openLink.bind(this, 'http://www.google.com/')}>
// 		<View style={Helpers['e-list-content']}>
// 			<Image 
// 				style={Helpers['e-list-avatar']} 
// 				source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			<View>
// 				<Text style={[Helpers['e-list-text'], Typography['strong']]}>Title Item 4</Text>
// 				<Text style={[Helpers['e-list-text'], Typography['em']]}>Subtitle Item 4</Text>
// 				<Text style={[Helpers["e-list-text"]]}>List Item 4</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// </List>
//
// 5. List controls
// <List style={Helpers['e-shadow-2']}>
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Wi-Fi Network</Text>
// 		</View>
// 		<SwitchItem containerStyle={Helpers['e-right']} />
// 	</View>
// 
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Bluetooth settings</Text>
// 		</View>
// 		<SwitchItem checked={true} containerStyle={Helpers['e-right']} />
// 	</View>
// 
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Data usage</Text>
// 		</View>
// 	</View>
// </List>

module.exports = List;