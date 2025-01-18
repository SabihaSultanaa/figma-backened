import { type SchemaTypeDefinition } from 'sanity'

import hero from './landingPage-Sections/hero'
import side from './landingPage-Sections/side'
import pick from './landingPage-Sections/pick'
import arrival from './landingPage-Sections/arrival'
import blog from './landingPage-Sections/blog'
import shopPage from './shopPage-Section/productPage'
import shopProducts from './shopPage-Section/cardsSection'


import cardsSection from './shopPage-Section/cardsSection'
import productPage from './shopPage-Section/productPage'

import dynamic from './shopPage-Section/dynamic'
import landingPage from './landingPage'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product]
}
// landingPage, hero, side, pick, arrival, blog, cardsSection,productPage ,dynamic