import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = id => container.querySelector(`form[id="${id}"]`);

  const expectToBeInputFieldOfTypeText = formElement => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text');
  };

  const firstNameField = () => form('customer').elements.firstName;
  
  it('renders a form', () => {
    render(<CustomerForm />);

    expect(form("customer")).not.toBeNull();
  });

  it('renders the first name field as a text box', () => {
    render(<CustomerForm />);

    const field = firstNameField();
    expectToBeInputFieldOfTypeText(field);
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName="Ashley" />);
    const field = firstNameField();
    expect(field.value).toEqual('Ashley');
  });
});