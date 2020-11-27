import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ padding: `3rem 0 1rem 0` }}> {/* TODO: styling */}
    <Link style={{ fontSize: `2rem`, fontWeight: `bold` }} to="/">digital garden</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
