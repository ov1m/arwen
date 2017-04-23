import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Avatar = ({
	containerStyle,
	height,
	imageStyle,
	uri,
	width
}, context) => {
	console.debug('000110',  context)

	const style = {
		container: {},
		image: {}
	};

	// console.log('adsasasddsadasdsadasasd', context.theme.Avatar.container)


	/*
	style.container = Object.assign(
		{},
		style.container,
		Styles.container,
		context.theme.Avatar.container,
		containerStyle || {}
	);

	style.image = Object.assign(
		{},
		style.image,
		Styles.image,
		context.theme.Avatar.image,
		imageStyle || {},
		height || {},
		width || {}
	);
	*/

	return (
		<View>
			<Image
				uri={uri}
			/>
		</View>
	)
};

Avatar.propTypes = {
	containerStyle: PropTypes.shape({}),
	imageStyle: PropTypes.shape({}),
	height: PropTypes.number,
	uri: PropTypes.string,
	width: PropTypes.number
};

Avatar.defaultProps = {
	height: 40,
	width: 40
};

/*

class Avatar extends ArwenComponent {

	static propTypes = {
		height: PropTypes.number,
		width: PropTypes.number
	};

	static defaultProps = {
		height: 40,
		width: 40
	};

	getStyles() {
		const style = {
			container: {},
			image: {}
		};

		// const style = Object.assign({}, Styles.default, themeStyles.default);

		return style;
	}

	getProps() {
		const {
			height,
			width,
			...rest
		} = this.props;

		return rest;
	}

	render() {
		return (
			<View style={[this.getStyles().container]}>
				<Image
					style={[this.getStyles()].image}
				/>
			</View>
		)
	}
}
*/

export default Avatar;