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
      <h1 className="text-sm m-0">
        <Link to="/" className="no-underline text-black font-bold">
          {siteTitle}
        </Link>
      </h1>
    </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
