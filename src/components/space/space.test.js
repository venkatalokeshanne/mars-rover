import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Space from './space'

test('Render Mars Rover', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Space />
        </Provider>
    )
    expect(getByText(/Mars Rover/i)).toBeInTheDocument();
})