import React, { Component } from 'react';
import {
	Avatar,
	Text,
	View
} from './components';
import Theme from './base/ArwenComponent';

class Arwen extends Component {
  render() {
    return (
			<Theme>
				<Avatar
				/>
				<Text
					strong={true}
					em={true}
				>
					Arwenasd
				</Text>
	    </Theme>
    );
  }
}

export default Arwen;