import React from 'react';
import {mount} from 'enzyme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

describe('material ui', () => {
    it('can use with in mocha on enzyme', () => {
        const muiTheme = getMuiTheme();
        const wrapper = mount(
            <RadioButton
                value="foo"
                label="bar"
            />,
            {
                context: {muiTheme},
                childContextTypes: {muiTheme: PropTypes.object}
            });
    });
});
