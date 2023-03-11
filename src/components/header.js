import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./_header.module.scss"

const Header = () => {
   const data = useStaticQuery(
      graphql`
	 {
	    site {
	       siteMetadata {
		  title
	       }
	    }
	 }
      `
   )

   const ga = data.site.siteMetadata;
   return (
	 <header className={styles.header}>
	    <Link to="/" className={styles.ma}>
	       <span className={styles.icon}>wh</span>
	    </Link>
	 </header>
   )
}

export default Header
