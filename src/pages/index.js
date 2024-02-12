import * as React from "react"
import Layout from "../components/Layout"
import Artwork from "../components/Artwork"
import { usePageQuery, graphql } from "gatsby";

const IndexPage = (data) => {
 
  return (
    <Layout >
      <Artwork />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
