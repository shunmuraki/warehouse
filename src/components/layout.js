import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import TagPage from "../components/taglist"
import * as styles from "./_layout.module.scss"

const Layout = ({ children }) => {
	return (
	   <div>
	        <Header />
	         <div className={styles.wh}>
	           <TagPage />
		   {children}
	         </div>
	        <Footer />
	  </div>
	);
};

export default Layout
