import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
//import ProductGrid from '~/components/ProductGrid'
import ItemInfo from '~/components/testItem'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to Jewelers</h1>
    <p>Purchase this Ring</p>
    <ItemInfo />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
