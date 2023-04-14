import React from 'react';
import {
  fireEvent,
  render,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { Mission } from '../../__mocks__/components/MissionMock';
import store from '../redux/store';

describe('Mission', () => {
  const component = (
    <Mission
      id="1"
      mission="Moon"
      description="the moon"
    />
  );

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Affirming that the status badge changes', () => {
  it('Should modify the badge on click', () => {
    const { container } = render(
      <Provider store={store}>
        <Mission
          id="839ruijkf"
          mission="moon"
          description="to the moon"
        />
      </Provider>,
    );

    const button = container.getElementsByClassName(
      'missionButton',
    )[0];
    const status = container.getElementsByClassName(
      'member',
    )[0];
    fireEvent.click(button);

    expect(status).toHaveTextContent(
      'ACTIVE MEMBER',
    );

    expect(button).toHaveTextContent('Leave Mission');
  });
});
