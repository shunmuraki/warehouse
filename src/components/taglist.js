import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./_taglist.module.scss"

const TagPage = () => {
   const data = useStaticQuery( graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
          }
        }
      }
   ` )
   return (
      <div className={styles.menu}>
        <div className={styles.flex}>
          {data.allMarkdownRemark.group.map(tag => (
               <div key={tag.fieldValue} className={styles.box}>
                 <Link to={`/tags/${tag.fieldValue}/`} className={styles.linkin}>
	           {tag.fieldValue}
                 </Link>
               </div>
          ))}
        </div>
      </div>
   )
}


export default TagPage
