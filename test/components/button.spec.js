// importamos la funcion que vamos a testear
import Button from '../../src/components/button.js';

describe('Button', () => {
  it('should have the correct structure', () => {
    const element = document.createElement('div');
    element.innerHTML = Button({ title: 'Text', id: 1 });

    expect(element).toMatchSnapshot();
  });

  it('should call handleClick on button is clicked', () => {
    global.handleClick = jest.fn();
    const element = document.createElement('div');
    element.innerHTML = Button({ title: 'Text', id: 1 });

    const button = element.querySelector('button');
    button.click();

    expect(global.handleClick.mock.calls).toHaveLength(1);
  });
});
