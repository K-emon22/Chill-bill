import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {GrPrevious, GrNext} from "react-icons/gr";
import {FaStar, FaRegStar} from "react-icons/fa";

const ReviewSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = [
    {
      id: 1,
      name: "Jhankar Dorbesh",
      img: "https://i.ibb.co.com/gLvLZ85M/images-2.jpg",
      review: "Great experience! The signup process was easy to follow.",
      stars: 4,
    },
    {
      id: 2,
      name: "Nadim Abdullah",
      img: "https://i.ibb.co.com/W4nnGfVh/lawyer-ahmednadimabdullah-barrister-senior-associate-fmassociates.jpg",
      review:
        "Excellent customer support! The password recovery process was quick and effective.",
      stars: 5,
    },
    {
      id: 3,
      name: "Shakil Ahmed",
      img: "https://i.ibb.co.com/gMq3jtWQ/banner-img-1.png ",
      review:
        "Profile update was easy but could use a bit more customization options.",
      stars: 3,
    },
    {
      id: 4,
      name: "Rafiq Hossain",
      img: "https://i.ibb.co.com/q3Z0bkFQ/lawyer-barrister-wazedjamil-associate-fmassociates.jpg",
      review:
        "User interface is intuitive, but I'd like to see more advanced features.",
      stars: 4,
    },
    {
      id: 5,
      name: "Wazed Jamil",
      img: "https://i.ibb.co.com/23CMFqXF/Ashique-Sadman-Bin-Saleh.jpg",
      review: "I love the mobile app! It's smooth and very responsive.",
      stars: 5,
    },
    {
      id: 6,
      name: "Deepesh Ojha",
      img: "https://i.ibb.co.com/cKSYTGMm/deepesh-ojha1630409931-thumb.webp",
      review: "The service is good, but the loading time could be improved.",
      stars: 3,
    },
  ];

  return (
    <div className=" mx-auto p-4">
      <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
        Customer Reviews
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              <div className="border rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-white h-full">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) =>
                    i < review.stars ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
                <p className=" text-gray-700 ">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-6">
        <button
          onClick={scrollPrev}
          className="p-3 border hover:text-white rounded-full hover:bg-black  transition"
        >
          <GrPrevious size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 hover:bg-black border rounded-full  hover:text-white transition"
        >
          <GrNext size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
