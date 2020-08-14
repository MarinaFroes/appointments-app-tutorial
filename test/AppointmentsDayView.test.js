import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/AppointmentsDayView';
import { AppointmentsDayView } from '../src/AppointmentsDayView';
import ReactTestUtils from 'react-dom/test-utils';

describe('Appointment', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  })

  const render = component => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer name', () => {
    customer = { firstName: 'Jordan' };

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch('Jordan');
  });

  it('renders customer last name', () => {
    customer = { lastName: 'Smith' };

    render(<Appointment customer={customer} />);
    
    expect(container.textContent).toMatch('Smith');
  });

  it('renders customer phone number', () => {
    customer = { phoneNumber: '+49 1512 9999999' };

    render(<Appointment customer={customer} />);
    
    expect(container.textContent).toMatch('+49 1512 9999999');
  });

  it('renders stylist', () => {
    customer = { stylist: 'Andrea Kuhl' };

    render(<Appointment customer={customer} />);
    
    expect(container.textContent).toMatch('Andrea Kuhl');
  });

  it('renders service', () => {
    customer = { service: 'Beard Trim' };

    render(<Appointment customer={customer} />);
    
    expect(container.textContent).toMatch('Beard Trim');
  });

  it('renders notes', () => {
    customer = { notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacinia risus, eget efficitur diam.' };

    render(<Appointment customer={customer} />);
    
    expect(container.textContent).toMatch('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacinia risus, eget efficitur diam.');
  });

  it('renders a heading with the time', () => {
    const today = new Date();
    const timestamp = today.setHours(9, 0, 0);

    render(<Appointment customer={customer} startsAt={timestamp}/>);
    
    expect(container.textContent).toMatch(`Today's appointment at 09:00`);
  });
});

describe('AppointmentsDayView', () => {
  let container;
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Ashley' }
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Jordan' }
    }
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('render a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('renders each appointment in an li', () => {
    render(<AppointmentsDayView
      appointments={appointments}
    />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
  });

  it('initially shows a message saying there are no appointments today', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch('There are no appointments scheduled for today.');
  });

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('has a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li > button')).toHaveLength(2);
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
  });

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll('button')[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch('Jordan');
  });
});