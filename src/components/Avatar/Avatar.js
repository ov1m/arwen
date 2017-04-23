import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Avatar = ({
	containerStyle,
	height,
	imageStyle,
	uri,
  rounded,
  size,
	width
}, context) => {

	const style = {
		container: {},
		image: {}
	};

	let roundedBorderRadiusSize;
  if (size) {
    roundedBorderRadiusSize = size;
  } else if (height && width) {
    roundedBorderRadiusSize = height >= width ? height : width;
  } else if (height) {
    roundedBorderRadiusSize = height;
  }else if(width) {
    roundedBorderRadiusSize = width;
  }
  const borderRadiusStyle = { borderRadius: roundedBorderRadiusSize };

	style.container = Object.assign(
		{},
		style.container,
		Styles.container,
		context.theme.Avatar.container,
		containerStyle || {},
    rounded ? borderRadiusStyle : {},
    height ? { height: height } : {},
    width ? { width: width } : {},
    size ? { height: size, width: size} : {}
	);

	style.image = Object.assign(
		{},
		style.image,
		Styles.image,
		context.theme.Avatar.image,
    imageStyle || {},
    height ? { height: height } : {},
    width ? { width: width } : {},
    size ? { height: size, width: size} : {}
	);

  console.log('0000  ', style.container, style.image)

	return (
		<View style={style.container}>
			<Image
				style={style.image}
        source={{uri}}
			/>
      <Text>as</Text>
		</View>
	)
};

Avatar.propTypes = {
	containerStyle: PropTypes.shape({}),
	imageStyle: PropTypes.shape({}),
	height: PropTypes.number,
	uri: PropTypes.string,
	size: PropTypes.number,
	width: PropTypes.number
};

Avatar.defaultProps = {
	height: 40,
  rounded: true,
	width: 40
};

Avatar.contextTypes = {
	theme: React.PropTypes.object,
};

export default Avatar;