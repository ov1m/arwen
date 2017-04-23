import React from 'react';
import PropTypes from 'prop-types';
import { View as ViewReactNative } from 'react-native';
import ArwenComponent from '../../base/ArwenComponent';
import Styles from './styles';

class Text extends ArwenComponent {

	static propTypes = {

	};

	static defaultProps = {

	};

	getStyles() {
		const themeStyles = this.getTheme().View;
		const style = Object.assign({}, Styles.default, themeStyles.default);

		return style;
	}

	render() {
		return (
			<ViewReactNative style={[this.getStyles()]}>{this.props.children}</ViewReactNative>
		)
	}
}

export default Text;