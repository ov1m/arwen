import React from 'react';
import PropTypes from 'prop-types';
import { View } from './../../../components';
import Styles from './styles';

const Footer = ({
	style,
	...rest
}, context) => {

  const mergedStyle = Object.assign(
    {},
    style,
    Styles.default,
    context.theme.Footer.default,
  );

	return (
		<View
			{...rest}
			style={mergedStyle}
		/>
	)
};


Footer.propTypes = {
  style: PropTypes.shape({})
};

Footer.defaultProps = {
  style: {}
};

Footer.contextTypes = {
	theme: React.PropTypes.object,
};

export default Footer;
