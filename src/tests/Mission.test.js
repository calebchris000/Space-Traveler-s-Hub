import React from 'react';
import { Mission } from '../../__mocks__/components/MissionMock';

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
