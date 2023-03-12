import React from "react"
import { Link } from "gatsby"
import kebabCase from "ldash/kebabCase"

const Categories = categories => {
   <div className="categories">
      {(categories || []).map(category => (
         <Link to={`/categories/${kebabCase(category)}/`}>
            <span className="post-category">{category}</span>
         </Link>
      ))}
   </div>     
}

export default Categories
