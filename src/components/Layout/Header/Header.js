import React from 'react';
import PropTypes from 'prop-types';
import { View } from './../../../components';
import Styles from './styles';

const Header = ({
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
		<View
			{...rest}
			style={mergedStyle}
		/>
	)
};


Header.propTypes = {
  style: PropTypes.shape({})
};

Header.defaultProps = {
  style: {}
};

Header.contextTypes = {
	theme: React.PropTypes.object,
};

export default Header;
