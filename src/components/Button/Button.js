import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { Item, View } from '../../components';
import Styles from './styles';

const Button = ({
	em,
	strong,
	style,
	...rest
}, conButton) => {

  const mergedStyle = Object.assign(
    {},
    style,
    Styles.default,
    conButton.theme.View.default,
  );

  em && Object.assign(mergedStyle, Styles.em, themeStyles.em);
  strong && Object.assign(mergedStyle, Styles.strong, themeStyles.strong);

	return (
		<ButtonReactNative
			{...rest}
			style={mergedStyle}
		/>
	)
};


Button.propTypes = {
  color: PropTypes.string,
  em: PropTypes.bool,
  strong: PropTypes.bool,
  style: PropTypes.shape({})
};

Button.defaultProps = {
  em: false,
  strong: false,
  style: {}
};

Button.conButtonTypes = {
	theme: React.PropTypes.object,
};

export default Button;




/*



class Button extends ArwenComponent {

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
		const themeStyles = this.getTheme().Button;
		const style = Object.assign({}, Styles.default, themeStyles.default);

		em && Object.assign(style, Styles.em, themeStyles.em);
		strong && Object.assign(style, Styles.strong, themeStyles.strong);

		return style;
	}

	render() {
		return (
			<ButtonReactNative style={[this.getStyles()]}>{this.props.children}</ButtonReactNative>
		)
	}
}

export default Button;
*/