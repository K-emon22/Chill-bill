import React from "react";

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "Maintenance Notice",
      date: "May 10, 2025",
      description:
        "Our website will be under maintenance on May 10th from 2:00 AM to 4:00 AM. Please plan accordingly.",
    },
    {
      id: 2,
      title: "System Downtime",
      date: "April 30, 2025",
      description:
        "Due to server updates, our system will be unavailable on April 30th from 11:00 PM to 12:00 AM.",
    },
    {
      id: 3,
      title: "New Features Update",
      date: "April 25, 2025",
      description:
        "We have released new features in our platform. Check out the latest updates in the settings page.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
        Recent Notices
      </h2>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="shadow-lg flex flex-col md:flex-row items-start bg-white p-6 rounded-lg  space-y-4 md:space-y-0 md:space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="bg-red-500 text-white  flex items-center justify-center rounded-full w-12 h-12">
                <span className="text-xl">!</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {notice.title}
              </h3>
              <p className="text-sm text-gray-500">{notice.date}</p>
              <p className="mt-2 text-gray-700 ">{notice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
