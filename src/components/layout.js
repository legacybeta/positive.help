/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);

  // const sendbutton = (
  //     <div><a className="sendButton typeform-share button" href="https://legacybeta.typeform.com/to/cK0Ztb" data-mode="popup"
  //             target="_blank">Send Us Some Positivity </a>
  //         </div>
  // );

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="mainContent">{children}</main>

        <section className="mt-1 mr-1 fixed right-0 top-0">

            <div className="block mr-1 float-right pb-1 px-1 border border-solid border-teal-darkest rounded leading-tight">
            <a className="text-xs text-teal-darkest no-underline" href="https://github.com/legacybeta/positive.help" target="_blank" rel="noopener noreferrer" >
                <span className="content-center">On GitHub </span>
                <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" className="inline"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>
            </div>

            <div className="block mr-1 float-right pb-1 px-1 border border-solid border-teal-darkest rounded leading-tight">
              <a className="align-middle text-xs text-teal-darkest no-underline" href="https://legacybeta.typeform.com/to/cK0Ztb" data-mode="popup"
                                                                                                     target="_blank" rel="noopener noreferrer" >Add Positivity </a>
            </div>

        </section>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
