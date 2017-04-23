import React, { Component } from 'react';
import {
	Avatar,
  Icon,
  Item,
	Text,
	View
} from './components';
import Theme from './base/ArwenComponent';

class Arwen extends Theme {
  render() {
    return (
			<View>
        <Icon />
				<Avatar
					uri="https://s-media-cache-ak0.pinimg.com/originals/e8/1f/98/e81f98b20cc216effaf25ab2a3e4db6e.jpg"
				/>
				<Item
          label="test"
				/>
	    </View>
    );
  }
}

export default Arwen;