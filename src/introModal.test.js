import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import IntroModal from './introModal';

it('should build a header', () => {
    mount(<IntroModal />)
});
