import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blogData.json';
import HeroSection from '../utils/heroSection';

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = blogData.posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const Hero = {
    subtitle: post.subtitle,
    title: post.title,
    paragraph: post.description,
    background: post.heroImage
  }

  return (
    <div className="blog-post">
      <HeroSection hero={Hero} />
      <section className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></section>
    </div>
  );
};

export default BlogPost;
