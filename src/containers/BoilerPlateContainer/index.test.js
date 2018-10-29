import React from 'react';
import { shallow } from 'enzyme';
import {
  mapDispatchToProps,
  mapStateToProps,
  BoilerPlateContainer
} from './index';
import * as actions from '../../actions';

describe('BoilerPlateContainer', () => {
  let wrapper, mockTestMiddleware;
  beforeEach(() => {
    mockTestMiddleware = jest.fn();
    wrapper = shallow(
      <BoilerPlateContainer user={{}} testMiddleware={mockTestMiddleware} />
    );
  });
  it('should have a handleOnChange method', () => {
    const mockEvent = {
      target: {
        value: 'test',
        name: 'inputValue'
      }
    };

    wrapper.instance().handleOnChange(mockEvent);

    expect(wrapper.state('inputValue')).toEqual('test');
  });

  it('should have a handleOnClick method', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.instance().handleOnClick(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockTestMiddleware).toHaveBeenCalledWith(
      wrapper.state('inputValue')
    );
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('should map an action getUserInfo to testMiddleware', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      const mockUsername = 'jsweet314';
      mapped.testMiddleware(mockUsername);
      expect(mockDispatch).toHaveBeenCalledWith(
        actions.getUserInfo(mockUsername)
      );
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {
      user: {
        login: 'jsweet314',
        error: null
      }
    };
    it('should map the user object from state', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped).toHaveProperty('user', mockState.user);
    });

    it('should map the error (if any) associated with the user', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped).toHaveProperty('error', mockState.user.error);
    });
  });
});
