
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	StyleSheet,
	SliderIOS,
} = React;

class SliderItem extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			currentValue: this.props.disable ? 50 : this.props.start || 0,
		}
	}

	handleChange(value) {
		if (!this.props.disable) {
			this.setState({
				currentValue: value
			})
		}
	}

	render() {
		return (
			<SliderIOS
				minimumValue={0}
				maximumValue={100}
				maximumTrackTintColor='red'
				minimumTrackTintColor='#9e9e9e'
				style={[Helpers['e-slider'], this.props.style]}
				value={this.state.currentValue}
				onValueChange={this.handleChange.bind(this)} />
		);
	}
};

// Example:
// <SliderItem start={20} />

module.exports = SliderItem;