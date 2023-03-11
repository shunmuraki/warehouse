import React from "react"
import { Link } from "gatsby"
import kebabCase from "ldash/kebabCase"

const Categories = categories => {
   <div class="categories">
      {(categories || [])}.map(category => (
	 <Link to={`/categories/${kebabCase(category)}/`}>
	    <span class="post-category">{category}</span>
	 </Link>
      ))}
   </div>     
}

export default Categories
