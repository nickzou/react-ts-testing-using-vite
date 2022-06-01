import {render, screen, fireEvent} from '@testing-library/react'
import App from './../App'

test('Renders', async () => {
    //Setup
    render(<App />)

    const buttonCount = await screen.findByRole('button')
    const codeCount = await screen.queryByText(/The count is now:/)

    //Pre Expectations
    expect(buttonCount).toBeInTheDocument();
    expect(buttonCount.innerHTML).toBe('count is: 0')
    expect(codeCount).not.toBeInTheDocument()

    //Init
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);

    //Post Expectations
    expect(buttonCount.innerHTML).toBe('count is: 2')
    expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument()
})