import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation  from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial  from 'react-native-vector-icons/Zocial';


import Styles from './styles';

const Icon = ({
  containerStyle,
	icon,
	iconFontName,
  iconStyle,
  ...rest
}, context) => {

	const iconFontsList = {
		Entypo: IconEntypo,
		EvilIcons: IconEvilIcons,
		FontAwesome: IconFontAwesome,
		Foundation: IconFoundation,
		Ionicons: IconIonicons,
		MaterialIcons: IconMaterialIcons,
		Octicons: IconOcticons,
		Zocial: IconZocial
	};

	const IconComponent = iconFontsList[iconFontName];
  const style = {
    container: {},
    icon: {}
  };

  style.container = Object.assign(
    {},
    style.container,
    Styles.container,
    context.theme.Icon.container,
    containerStyle
  );

  style.icon = Object.assign(
    {},
    style.icon,
    Styles.icon,
    context.theme.Icon.icon,
    containerStyle
  );

	return (
		<View style={style.container}>
			<IconComponent
        name={icon}
        {...rest}
        {...style.icon}
      />
		</View>
	)
};

Icon.propTypes = {
  containerStyle: PropTypes.shape({}),
	icon: PropTypes.string,
  iconFontName: PropTypes.oneOf([
		'Entypo', 'EvilIcons', 'FontAwesome', 'Foundation', 'Ionicons',
		'MaterialIcons', 'Octicons', 'Zocial', 'PlainText'
	]),
  iconStyle: PropTypes.shape({})
};

Icon.defaultProps = {
	icon: 'plus',
  iconFontName: 'FontAwesome',
};

Icon.contextTypes = {
	theme: React.PropTypes.object,
};

export default Icon;