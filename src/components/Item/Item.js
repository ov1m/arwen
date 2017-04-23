import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View
} from '../../components';
import ArwenComponent from '../../base/ArwenComponent';
import Styles from './styles';


const Item = ({
	containerStyle,
	height,
	iconStyle,
	labelStyle,
  label,
  layout,
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
    layout === 'horizontal' ? Styles.layoutHorizontal : Styles.layoutVertical,
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

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Text style={style.label}>
        {label}
      </Text>
    )
  };

	return (
		<View>
      {renderLabel()}
		</View>
	)
};

Item.propTypes = {
	containerStyle: PropTypes.shape({}),
	imageStyle: PropTypes.shape({}),
	height: PropTypes.number,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  label: PropTypes.string,
	uri: PropTypes.string,
	size: PropTypes.number,
	width: PropTypes.number
};

Item.defaultProps = {
	height: 40,
  layout: 'horizontal',
	rounded: true,
	width: 40
};

Item.contextTypes = {
	theme: React.PropTypes.object,
};

export default Item;