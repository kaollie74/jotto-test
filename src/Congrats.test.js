import React from 'react';
import { shallow } from 'enzyme'

import { findByTestAttribute, checkProps } from '../test/testUtils';
import Congrats from './Congrats';



const defaultProps = {success: false}
/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
}

test('functon component renders without error', () => {
  const wrapper = setup()
  const component= findByTestAttribute(wrapper, 'component-congrats')
  expect(component.length).toBe(1); 

})

test('renders not text when `success` prop is false', () => {
  const wrapper = setup({success: false})
  const component= findByTestAttribute(wrapper, 'component-congrats')
  expect(component.text()).toBe(''); 
})

test('render non-empty congrats message when success prop is true', () => {
  const wrapper = setup({success: true})
  const message= findByTestAttribute(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0); 
})

test('does not throw warning with expected props', () => {
  const expectedProps = {success: false}
  checkProps(Congrats, expectedProps); 
})