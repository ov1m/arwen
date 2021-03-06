import React from 'react';
import PropTypes from 'prop-types';
import { View as ViewReactNative } from 'react-native';
import Styles from './styles';

const View = ({
	style,
	...rest
}, context) => {

	const mergedStyle = Object.assign(
		{},
    style,
		Styles.default,
    context.theme.View.default,
	);

	return (
		<ViewReactNative
			{...rest}
      style={mergedStyle}
		/>
	)
};

View.propTypes = {
  style: PropTypes.shape({})
};

View.defaultProps = {
  style: {}
};

View.contextTypes = {
	theme: React.PropTypes.object,
};

export default View;