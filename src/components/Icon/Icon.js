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
	icon,
	iconFontName,
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
	console.log('aaaaaa   ', iconFontName, IconComponent)

	return (
		<View>
      <Text>ICON FONT</Text>
			<IconComponent name='bus' />
		</View>
	)
};

Icon.propTypes = {
  iconFontName: PropTypes.oneOf([
		'Entypo', 'EvilIcons', 'FontAwesome', 'Foundation', 'Ionicons',
		'MaterialIcons', 'Octicons', 'Zocial', 'PlainText'
	])
};

Icon.defaultProps = {
  iconFontName: 'FontAwesome',
	name: 'plus',
};

Icon.contextTypes = {
	theme: React.PropTypes.object,
};

export default Icon;