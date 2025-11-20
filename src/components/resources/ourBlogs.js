"use client";

import { useState } from "react";
import Image from "next/image";
import { blogs } from "../../components/blogData"; // Import the data

export default function OurBlogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => setSelectedBlog(blog);
  const closeModal = () => setSelectedBlog(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold font-outfit text-gray-900 mb-12">
          <span className="text-[#0A175C]">OUR</span>{" "}
          <span className="text-[#F05023]">BLOGS</span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="aspect-square w-full mb-5 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-base font-semibold font-outfit text-[#0A175C] mb-2">
                {blog.title}
              </h3>
              <button
                onClick={() => openModal(blog)}
                className="text-base text-orange-500 font-medium font-outfit inline-flex items-center gap-1 hover:underline"
              >
                Read More <span>↗</span>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-[#0A175C] mb-4">
                {selectedBlog.title}
              </h3>
              <p className="text-gray-700 mb-6">{selectedBlog.description}</p>
              <a
                href={selectedBlog.link}
                className="text-orange-500 font-semibold hover:underline"
              >
                Go to full article
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
