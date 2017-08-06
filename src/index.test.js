import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from 'index';

describe('<index />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Smiley diameter="500" percentage="50" />, div);
    });
});
