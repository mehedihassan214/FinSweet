import React from 'react';
import Container from '../Components/Layouts/Container';
import BlogCard from '../Components/subComponent/BlogCard';

const Blog = () => {
  return (
    <section className="pb-[128px] pt-8 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wide">Our Blog</h2>
          <h1 className="text-gray-800 font-pop font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-4">
            Stay Updated with Our Latest News <span className='block'>and Articles</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Discover the latest insights, stories, and advice from our team to keep you ahead of the curve.
          </p>
        </div>

        <div>
          <BlogCard />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
