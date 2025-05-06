import React from "react";

const Endsection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Save on Utility Bills",
      description:
        "Discover practical tips and strategies to reduce your monthly utility bills and save money.",
      img: "https://i.ibb.co.com/qFrqg6FR/Save-money-on-utility-bills.png",
    },
    {
      id: 2,
      title: "Top 5 Reasons to Pay Bills Online",
      description:
        "Explore the benefits of paying your bills online—quick, secure, and convenient.",
      img: "https://i.ibb.co.com/mC87Z28Y/images.jpg",
    },
    {
      id: 3,
      title: "Why You Should Track Your Bill Payments",
      description:
        "Tracking your bill payments ensures you're never late, helping you avoid penalties and fees.",
      img: "https://i.ibb.co.com/mryZN2k2/Online-Bill-Pay-Conveniently-Settle-Your-Debts-Automatically-Keeping-Track-of-Your-Payments.webp",
    },
  ];

  return (
    <section className="py-12 px-2 rounded-lg bg-gray-100">
      <div className="container ">
        <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border p-6 rounded-lg shadow-lg"
            >
              <img
                src={post.img}
                alt={post.title}
                className=" w-full aspect-[4/3] rounded-lg mx-auto h-fit px-2 py-1"
              />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <span className="text-blue-500 hover:underline font-medium">
                Read More
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endsection;
