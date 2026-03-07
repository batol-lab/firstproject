import React from 'react'
import { ArticleType } from '../_types/newnews.type';


const NewNewsComponents = (props:ArticleType) => {
  return (
    <div>
      {props.title}
      <p>{props.description}</p>
      <p>{props.content}</p>
      <p>{props.author}</p>
      <p>{props.urlToImage}</p>;
    </div>
  );
 
}

export default NewNewsComponents