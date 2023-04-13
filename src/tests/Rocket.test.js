import { Rocket } from '../../__mocks__/components/RocketMock';

describe('Testing react component', () => {
  const RocketComponent = (
    <Rocket
      id="1n2nwek4"
      imgURL="http://imgURL.com/Rocket-1.png"
      title="Rocket 1"
      description="Rocket destined to the moon"
    />
  );

  it('should match snapshot', () => {
    expect(RocketComponent).toMatchSnapshot();
  });
});
