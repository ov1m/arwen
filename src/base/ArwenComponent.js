import React, { Component } from 'react';
import theme from '../theme/base';

class ArwenComponent extends Component {
	static contextTypes = {
		theme: React.PropTypes.object
	}

	static propTypes = {
		theme: React.PropTypes.object
	}

	static childContextTypes = {
		theme: React.PropTypes.object
	}

	getChildContext() {
		return {
			theme: this.props.theme ? this.props.theme : this.getTheme()
		};
	}

	getTheme() {
		return (this.props.theme ? this.props.theme : this.context.theme || theme);
	}

	render() {
		return this.props.children;
	}
}


export default ArwenComponent;