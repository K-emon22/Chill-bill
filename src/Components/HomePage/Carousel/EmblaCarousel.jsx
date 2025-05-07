import React, {useEffect, useState, useCallback, useContext} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {AuthContext} from "../../ContexFile/Context";
import {Link} from "react-router";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";
import {FiPlay} from "react-icons/fi";
import {IoPause} from "react-icons/io5";
export const EmblaCarousel = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const {user, loding} = useContext(AuthContext);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
    Autoplay({delay: 3000, playOnInit: false}),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());

    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false));
  }, [emblaApi]);

  const slides = [
    {
      image:
        "https://i.ibb.co.com/Fqkpvf2J/b8cecf6dc98c431bf536f827a3837141-120945-png-w700wp.webp",
      text: "Pay all kinds of bills instantly online.",
    },
    {
      image: "https://i.ibb.co.com/3m6Vh7sB/Mobile-Banking.jpg",
      text: "Create your account easily within minutes.",
    },

    {
      image: "https://i.ibb.co.com/3XXw9Tb/istockphoto-1163111044-612x612.jpg",
      text: "Track and manage all your bill payments.",
    },
    {
      image: "https://i.ibb.co.com/yjgCwcz/online-payment-companies-jpeg.webp",
      text: "Use your card anytime for quick payments.",
    },

    {
      image: "https://i.ibb.co.com/DPn3HdrL/bank-atm-people-1284-26195-jpg.jpg",
      text: "Skip standing in long lines for Payment.",
    },
    {
      image:
        "https://i.ibb.co.com/KjtZPnds/people-using-mobile-bank-remittance-money-74855-6617-jpg.jpg",
      text: "Earn points every time you make payments.",
    },
  ];

  return (
    <div className="w-full mx-auto  relative">
      <div className="overflow-hidden  " ref={emblaRef}>
        <div className="flex ">
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full ">
              <div
                className="h-56 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg flex items-center justify-center relative shadow-xl border-2"
                style={{backgroundImage: `url(${slide.image})`}}
              >
                <div className="bg-black/15   shadow-2xl  p-2 sm:p-6 rounded-lg text-center w-3/4 space-y-2 sm:py-10 lg:py-20 sm:space-y-4">
                  <h1 className="text-white  sm:text-xl md:text-2xl font-semibold sm:font-bold">
                    {slide.text}
                  </h1>
                  <button className="btn btn-primary w-[150px] text-white font-semibold">
                    {loding ? (
                      <span className="loading  loading-spinner loading-xl"></span>
                    ) : user ? (
                      <Link to={"/bills"}> Start Now</Link>
                    ) : (
                      <Link to={"/login"}> Create Account</Link>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="   w-5/10 mt-5 mx-auto bg-black/30 flex space-x-4 border-2 border-black/30 rounded-full py-2 px-4  justify-between">
        <button
          onClick={scrollPrev}
          disabled={isPlaying}
          className={`group relative ${
            isPlaying
              ? "text-white cursor-not-allowed"
              : "text-black cursor-pointer"
          } flex flex-col  items-center`}
        >
          <GrPrevious size={24} />

          {isPlaying || (
            <span className="absolute bottom-full mb-1 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Previous
            </span>
          )}
        </button>

        <button
          onClick={toggleAutoplay}
          className={`group relative ${
            isPlaying
              ? "text-black cursor-pointer"
              : "text-white cursor-pointer"
          } flex flex-col items-center ml-1  `}
        >
          {isPlaying ? <IoPause size={24} /> : <FiPlay size={24} />}
          <span className="absolute bottom-full mb-1 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {isPlaying ? " Pause" : "AutoPlay"}
          </span>
        </button>

        <button
          onClick={scrollNext}
          disabled={isPlaying}
          className={`group relative ${
            isPlaying
              ? "text-white cursor-not-allowed"
              : "text-black cursor-pointer"
          } flex flex-col items-center`}
        >
          <GrNext size={24} />
          {isPlaying || (
            <span className="absolute bottom-full mb-1 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Next
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
