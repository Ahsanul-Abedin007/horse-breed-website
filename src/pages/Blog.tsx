import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '@/lib/seo';
import blogData from '@/data/blog.json';
import { BlogPost } from '@/types';

const Blog: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen py-24">
      <SEO 
        title="Equine Knowledge Hub | Horse Breeding & Market Insights" 
        description="Stay updated with the latest trends in horse breeding, market valuations, and breed-specific guides."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
            Knowledge Hub
          </span>
          <h1 className="font-serif text-6xl font-light text-ink">Insights & Articles</h1>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {(blogData as BlogPost[]).map((post, index) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className={`flex flex-col gap-8 md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="aspect-[16/9] overflow-hidden md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-1/2">
                  <div className="mb-4 flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                    <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                  <h2 className="mb-4 font-serif text-4xl font-medium text-ink group-hover:underline decoration-ink/20 underline-offset-8">
                    {post.title}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-ink/60">
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
                    Read Full Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
