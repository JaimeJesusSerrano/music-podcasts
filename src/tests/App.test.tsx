import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'

import App from 'App'

test('Homepage', async () => {
  render(<App />)

  await waitFor(() => {
    const linkElement = screen.getByText(/Podcaster/i)
    expect(linkElement).toBeInTheDocument()
  })
})
