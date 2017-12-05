import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

// const PostsListHeader = () => {

//   return (
//     <div>
//       <div className="posts-list-header">
//         <div className="posts-list-header-categories">
//           <Components.CategoriesList />
//         </div>
//         <Components.PostsViews />
//         <Components.SearchForm/>
//       </div>
//     </div>
//   )
// }

const PostsListHeader = () => {

  return (
    <div>
      <div className="posts-list-header">
        <div className="posts-list-header-categories">
        <Components.CategoriesList />
        </div>
        <Components.SearchForm/>
        <Components.PostsViews />
      </div>
    </div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

registerComponent('PostsListHeader', PostsListHeader);
