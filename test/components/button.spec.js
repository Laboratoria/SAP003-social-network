// importamos la funcion que vamos a testear
import Button from '../../src/components/button.js';

describe('Button', () => {
  it('should have the correct structure', () => {
    expect(Button({ title: 'Text' })).toMatchSnapshot();
  });

  it('should call handleClick on button is clicked', () => {
    const onClick = jest.fn();
    const button = Button({ title: 'Text', onClick });
    button.click();

    expect(onClick.mock.calls).toHaveLength(1);
  });
});
