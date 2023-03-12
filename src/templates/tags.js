import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Componentsi
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

// Reactコンポーネントの実装例
const TagPageTemplate = ({ data, pageContext, location }) => {
  // creataPage の context に設定した tag を参照する
  const tag = pageContext.tag
  // GraphQLの実行結果を参照する
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
    <div className="right_flex lis">
	       {posts.map(post => {
		  return (
		     <div key={post.fields.slug} className="box">
			      <h2 class="tp">
			      <Link to={post.fields.slug} itemProp="url" className="linkin">
				 <span itemProp="headline">{post.frontmatter.title}</span>
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
   </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
      site {
	 siteMetadata {
	    title
	 }
      }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } })
      {
      totalCount
      nodes {
	  excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
	    date(formatString: "MMM DD, YYYY")
          }
        }
      }
  }
`

