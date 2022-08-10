import Carousel from 'components/Carousel'
import React from 'react'
import { SectionTitle } from './style'

export default function Section({ title }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <Carousel />
    </section>
  )
}
