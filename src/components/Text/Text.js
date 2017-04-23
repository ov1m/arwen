import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextReactNative } from 'react-native';
import ArwenComponent from '../../base/ArwenComponent';
import Styles from './styles';

class Text extends ArwenComponent {

	static propTypes = {
		color: PropTypes.string,
		em: PropTypes.bool,
		strong: PropTypes.bool
	};

	static defaultProps = {
		em: false,
		strong: false
	};

	getStyles() {
		const {
			em,
			strong
		} = this.props;
		const themeStyles = this.getTheme().Text;
		const style = Object.assign({}, Styles.default, themeStyles.default);

		em && Object.assign(style, Styles.em, themeStyles.em);
		strong && Object.assign(style, Styles.strong, themeStyles.strong);

		console.debug('zzz', style)

		return style;
	}

	render() {
		return (
			<TextReactNative style={[this.getStyles()]}>{this.props.children}</TextReactNative>
		)
	}
}

export default Text;