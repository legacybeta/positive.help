import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import { Helmet } from "react-helmet"

const IndexPage = ({
                     data: {
                       allMarkdownRemark: { edges },
                     },
                   }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)

  return (
    <Layout>
      <Helmet>
        <body className="bg-green-light"/>
      </Helmet>
      <SEO title="positive.help"/>
      <h1 className="text-4xl font-bold font-sans text-black">Just Positive Vibes</h1>
      <div>{Posts}</div>

    </Layout>
  )


}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`