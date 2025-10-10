import Image from "next/image";
import blog1 from "../../../public/resources/dummyr1.png";
import blog2 from "../../../public/resources/dummyr1.png";
import blog3 from "../../../public/resources/dummyr1.png";
import blog4 from "../../../public/resources/dummyr1.png";
import blog5 from "../../../public/resources/dummyr1.png";
import blog6 from "../../../public/resources/dummyr1.png";
const blogs = [
  {
    id: 1,
    title: "Why Strong Supply Chain Planning Matters",
    image: blog1,
    link: "#",
  },
  {
    id: 2,
    title: "The Role of Technology in Modern Logistics",
    image: blog2,
    link: "#",
  },
  {
    id: 3,
    title: "The Future of Inventory Management",
    image: blog3,
    link: "#",
  },
  {
    id: 4,
    title: "Building Trust Through Quality Assurance",
    image: blog4,
    link: "#",
  },
  {
    id: 5,
    title: "End-to-End Manufacturing: A Game Changer",
    image: blog5,
    link: "#",
  },
  {
    id: 6,
    title: "Project Management in Supply Chain Success",
    image: blog6,
    link: "#",
  },
];

export default function OurBlogs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold font-outfit text-gray-900 mb-12">
        <span className="text-[#0A175C]">OUR</span> <span className="text-[#F05023]">BLOGS</span>
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
              <a
                href={blog.link}
                className="text-base text-orange-500 font-medium font- outfit  inline-flex items-center gap-1 hover:underline"
              >
                Read More <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
