import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ArticleItem } from './'

const data = {
  userId: 1,
  title: 'Nota 1',
  body: 'texto nota 1'
}

describe('Render Article', () => {
  beforeEach(() =>
    render(
      <ArticleItem
        title={data.title}
        userId={data.userId}
        body={data.body}
      />
    )
  )

  it('Render Title', () => {
    expect(screen.getByText(data.title)).toBeInTheDocument()
  })
  it('Render User Id', () => {
    expect(screen.getByText(data.userId.toString())).toBeInTheDocument()
  })
  it('Render Body', () => {
    expect(screen.getByText(data.body)).toBeInTheDocument()
  })
})
