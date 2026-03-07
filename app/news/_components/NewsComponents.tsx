import React from 'react'
import { ArticleType } from '../_types/news.types';

const NewsComponents = (props: ArticleType) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.content}</p>
      <p>{props.author}</p>
      <p>{props.urlToImage}</p>
    </div>
  );
};

export default NewsComponents