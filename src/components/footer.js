import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./_footer.module.scss"

const Footer = () => {
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
	 <footer className={styles.footer}>
	    <p>© 2023 {ga.title} All Rights Reserved.</p>
	 </footer>
   )
}

export default Footer
