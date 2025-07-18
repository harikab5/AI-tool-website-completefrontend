import React from "react";
import { useParams } from "react-router-dom";

const posts = {
  1: {
    title: "Top 5 AI Tools in 2025",
    content: "Here are the top AI tools you should know about...",
    sidebar: "Related: AI Trends, Productivity"
  },
  2: {
    title: "How AI is Changing Business",
    content: "AI is transforming industries by...",
    sidebar: "Related: Automation, Case Studies"
  },
  3: {
    title: "Open Source AI Projects to Watch",
    content: "Explore the top open source AI projects that are shaping the future of innovation...",
    sidebar: "Related: Open Source, Community, Innovation"
  }
};

const BlogDetails = (props) => {
  const params = useParams();
  const id = props.id || params.id;
  const post = posts[id];

  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[700px] md:min-h-[800px] w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">Blog Details</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium max-w-3xl mx-auto">Read the full story and insights from our latest blog post.</p>
        </div>
      </section>
      {/* Existing content below */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <aside className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
          <h2 className="font-semibold">Sidebar</h2>
          <p>{post.sidebar}</p>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;