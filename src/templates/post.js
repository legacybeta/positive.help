import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return <Layout>
        <Helmet>
            <body className="bg-green-light"/>
        </Helmet>
        <div className="container mx-auto ">
            <div className="blog-post">
                <div className="text-black font-sans mainTxt mainTxtPad">{frontmatter.title}</div>
            </div>
        </div>
        <div className="text-black bottomTxt fixed pin-r pin-b">{frontmatter.date}</div>
    </Layout>
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`