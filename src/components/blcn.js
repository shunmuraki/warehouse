import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./_blcn.module.scss"

const Bloglist = () => {

   const data = useStaticQuery(
      graphql`
      query {
	 site {
	    siteMetadata {
	       title
	    }
	 }
	 allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
	    nodes {
	       excerpt
	       fields {
		  slug
	       }
	       frontmatter {
		  date(formatString: "MMM DD, YYYY")
		  title
		  description
	       }
	    }
	 }
      }`
   )

   const siteTitle = data.site.siteMetadata?.title || `Title`
   const posts = data.allMarkdownRemark.nodes

   return (
      <div class="right_flex lis">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.fields.slug} className="box">
                  <h2 className="tp">
                    <Link to={post.fields.slug} itemProp="url" className="linkin">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
		    className="cont"
                  />
            </div>
          )
        })}
      </div>
   )
}

export default Bloglist
