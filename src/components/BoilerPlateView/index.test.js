import React from 'react';
import BoilerPlateView from './index';
import { shallow } from 'enzyme';

describe('BoilerPlateView', () => {
  let wrapper, mockError, mockUser, mockTestMiddleware;

  beforeEach(() => {
    mockTestMiddleware = jest.fn();
    mockUser = {
      login: 'jsweet314'
    };
    mockError = 'Error - GitHub User Not Found';
    wrapper = shallow(
      <BoilerPlateView
        testMiddleware={mockTestMiddleware}
        user={mockUser}
        error={mockError}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
