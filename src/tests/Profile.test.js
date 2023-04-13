import ProfileMock from '../../__mocks__/components/ProfileMock';

describe('Testing the profile', () => {
  const component = <ProfileMock />;

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
