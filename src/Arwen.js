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
				<Item
					icon="bus"
          label="test"
          direction="horiontal"
				/>
	    </View>
    );
  }
}

export default Arwen;