import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { HeroSection_Blog as HeroSection } from '../utils/heroSection';
import '../assets/css/Blog.css';

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
      <main>
        <div className="container">
          <div className="post-categories"><div className="post-category">{post.category}</div></div>
          <div className="post-keywords">
            {post.keywords.map((keyword) => (
              <div className="post-keyword">{keyword}</div>
            ))}
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </main>
    </div >
  );
};

export default BlogPost;
