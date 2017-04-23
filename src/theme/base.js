import { Platform } from 'react-native';
import colors from './colors';

const base = {
	//FONTS DEFAULT STYLING
	fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
	fontSizeBase: 16,
	lineHeight: 24,

	//COLOR DEFAULT STYLING
	brandPrimary : '#5067FF',
	brandSecondary : 'peru',
	brandInfo: '#5bc0de',
	brandSuccess: '#5cb85c',
	brandDanger: '#d9534f',
	brandWarning: '#f0ad4e',

};

const theme = {
	Avatar: {
		container: {},
		image: {}
	},
	Button: {
		fontSize: base.fontSizeBase
	},
	Item: {
		container: {},
		icon: {},
		label: {}
	},
	Text: {
		default: {
			fontSize: base.fontSizeBase,
			fontFamily: base.fontFamily,
			lineHeight: base.lineHeight
		},
		em: {

		},
		strong: {

		}
	},

	View: {

	}
};

export default theme;