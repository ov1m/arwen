import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextReactNative } from 'react-native';
import Styles from './styles';

const Text = ({
	em,
	strong,
	style,
	...rest
}, context) => {

  const mergedStyle = Object.assign(
    {},
    style,
    Styles.default,
    context.theme.View.default,
  );

  em && Object.assign(mergedStyle, Styles.em, themeStyles.em);
  strong && Object.assign(mergedStyle, Styles.strong, themeStyles.strong);

	return (
		<TextReactNative
			{...rest}
			style={mergedStyle}
		/>
	)
};


Text.propTypes = {
  color: PropTypes.string,
  em: PropTypes.bool,
  strong: PropTypes.bool,
  style: PropTypes.shape({})
};

Text.defaultProps = {
  em: false,
  strong: false,
  style: {}
};

Text.contextTypes = {
	theme: React.PropTypes.object,
};

export default Text;




/*



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

		return style;
	}

	render() {
		return (
			<TextReactNative style={[this.getStyles()]}>{this.props.children}</TextReactNative>
		)
	}
}

export default Text;
*/