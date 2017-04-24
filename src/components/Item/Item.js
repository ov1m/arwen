import React from 'react';
import PropTypes from 'prop-types';
import {
	Icon,
	Text,
	View
} from '../../components';
import { View as VRN } from 'react-native';
import Styles from './styles';


const Item = ({
	containerStyle,
	direction,
  gap,
	height,
	icon,
	iconFontName,
  iconStyle,
	labelStyle,
  labelUppercase,
  label,
  reverse,
	width
}, context) => {

  const style = {
    container: {},
    label: {},
    icon: {}
  };

  style.container = Object.assign(
    {},
    style.container,
    Styles.container,
		direction === 'horizontal' ? Styles.directionHorizontal : Styles.directionVertical,
    context.theme.Item.container,
    containerStyle || {}
  );

  style.label = Object.assign(
    {},
    style.label,
    Styles.label,
    context.theme.Item.label,
    containerStyle || {}
  );

  console.debug('zzzz zz z z z', style.container)

  const renderLabel = () => {
    if (!label) return null;
    const labelText = labelUppercase ? label.toUpperCase() : label;
    return (
      <Text style={style.label}>
        {labelText}
      </Text>
    )
  };

  const renderIcon = () => {
    if (!icon) return null;
    const renderIconComponent = typeof icon === 'string' ? (
      <Icon
        style={style.label}
        name={icon}
      />
    ) : (
      {label}
    );

    return renderIconComponent;
  };

	return (
		<View style={style.container}>
      {renderIcon()}
      {renderLabel()}
		</View>
	)
};

Item.propTypes = {
	containerStyle: PropTypes.shape({}),
	direction: PropTypes.oneOf(['horizontal', 'vertical']),
	height: PropTypes.number,
	imageStyle: PropTypes.shape({}),
	icon: PropTypes.oneOfType([
	  PropTypes.string,
    PropTypes.node
  ]),
	iconFontName: PropTypes.string,
  iconStyle: PropTypes.shape({
    container: PropTypes.shape({}),
    icon: PropTypes.shape({})
  }),
  label: PropTypes.string,
  labelUppercase: PropTypes.bool,
	uri: PropTypes.string,
	size: PropTypes.number,
	width: PropTypes.number
};

Item.defaultProps = {
	direction: 'horizontal',
	height: 40,
  labelUppercase: true,
	rounded: true,
	width: 40
};

Item.contextTypes = {
	theme: React.PropTypes.object,
};

export default Item;