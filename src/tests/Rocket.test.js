import {
  fireEvent,
  getByTestId,
  render,
} from "@testing-library/react";
import {Rocket} from "../../__mocks__/components/RocketMock";
import store from "../redux/store";
import {Provider} from "react-redux";

describe("Testing react component", () => {
  const RocketComponent = (
    <Rocket
      id="1n2nwek4"
      imgURL="http://imgURL.com/Rocket-1.png"
      title="Rocket 1"
      description="Rocket destined to the moon"
    />
  );

  it("should match snapshot", () => {
    expect(RocketComponent).toMatchSnapshot();
  });
});

describe("Affirming the existence of button element", () => {

  it("should modify the button text content", () => {
      const {container} = render(
      <Provider store={store}>
        <Rocket
          id="2ej3e"
          imgURL="img.com" 
          title="rocket"
          description="the rocket"
        />
      </Provider>
    );
    const button = container.getElementsByClassName('reserve')[0]
    fireEvent.click(button);
    expect(button).toHaveTextContent('Cancel Reservation');
  });

});

describe('Affirming the badge is changed on click', () => {
  it('should display the badge', () => {
    const {container} = render(
      <Provider store={store}>
        <Rocket
          id="2ej3e"
          imgURL="img.com" 
          title="rocket"
          description="the rocket"
        />
      </Provider>
    );

    const button = container.getElementsByClassName('reserve')[0]
    
    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent('Cancel Reservation');
  })
})