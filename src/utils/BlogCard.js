import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.subtitle}</p>
      <p>{post.description}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;