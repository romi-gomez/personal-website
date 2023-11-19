import * as React from "react"
import Layout from "../components/Layout"
import { usePageQuery, graphql } from "gatsby";

const IndexPage = (data) => {
 
  return (
    <Layout >
      <h1>
        {console.log("data", data)}
      </h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
