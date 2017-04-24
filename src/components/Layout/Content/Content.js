import React from 'react';
import PropTypes from 'prop-types';
import { View } from './../../../components';
import Styles from './styles';

const Container = ({
	style,
	...rest
}, context) => {

  const mergedStyle = Object.assign(
    {},
    style,
    Styles.default,
    context.theme.Container.default,
  );

	return (
		<View
			{...rest}
			style={mergedStyle}
		/>
	)
};


Container.propTypes = {
  style: PropTypes.shape({})
};

Container.defaultProps = {
  style: {}
};

Container.contextTypes = {
	theme: React.PropTypes.object,
};

export default Container;
