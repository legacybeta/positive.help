import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-green-light">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: `small`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#3D3D3D`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@1.3.4/dist/tailwind.min.css" rel="stylesheet"/>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
