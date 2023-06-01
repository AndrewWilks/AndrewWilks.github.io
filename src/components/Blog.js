import React from 'react';

import BlogCard from '../utils/BlogCard';
import blogData from '../data/blogData.json';

import '../assets/css/Home.css';
import '../assets/css/Blog.css';
import { HeroSection_Blog as HeroSection } from '../utils/heroSection';

const Blog = () => {
  const Hero = {
    subtitle: "Tales from the Digital Frontier",
    title: "My Blog",
    paragraph: "Howdy, welcome to my digital campfire, where I share stories and insights from my adventures in the digital outback. From wrangling code to exploring the latest developments in technology, I have plenty of tales to tell. I'll also be sharing my thoughts on everything from the latest tech trends to the cultural impact of technology. So, grab a billy and join me by the fire as we swap stories, ideas and insights. Who knows, you might just learn something new about the frontier of technology!"
  }

  const { categories, posts } = blogData;


  return (
    <div className="blog">
      <HeroSection hero={Hero} />
      <main>
        <section className="container">
          {categories.map((category) => (
            <div key={category.name} className="category">
              <h2>{category.title}</h2>
              <h3>{category.subtitle}</h3>
              <p>{category.description}</p>
              <div className="blog-cards">
                {posts
                  .filter((post) => post.category === category.name)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div >
  );
};

export default Blog;