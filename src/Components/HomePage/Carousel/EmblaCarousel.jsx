import React, {useEffect, useState, useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
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

  return (
    <div className="w-full  mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-none w-4/5   p-4">
            <div className=" bg-cover bg-center border-2 shadow-xl bg-[url('https://i.ibb.co.com/3m6Vh7sB/Mobile-Banking.jpg')] h-48 sm:h-60 md:h-70 lg:h-90 flex items-center  rounded-lg ">




            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> In a few minutes You can create Your account.</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>





            </div>
          </div>
          <div className="flex-none w-4/5 p-4">
            <div className=" h-48 bg-cover bg-center  border-2 shadow-xl bg-[url('https://i.ibb.co.com/KjtZPnds/people-using-mobile-bank-remittance-money-74855-6617-jpg.jpg')] flex sm:h-60 md:h-70 lg:h-90 items-center  rounded-lg ">
            


            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> In a few minutes You can create Your account.</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>




            </div>
          </div>
          <div className="flex-none w-4/5 p-4">
            <div className="bg-cover bg-center  border-2 shadow-xl bg-[url('https://i.ibb.co.com/3XXw9Tb/istockphoto-1163111044-612x612.jpg')] h-48 sm:h-60 md:h-70 lg:h-90 flex items-center  rounded-lg ">


            
            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> No Worries of paying another bill .</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>



            </div>
          </div>
          <div className="flex-none w-4/5 p-4">
            <div className="bg-cover bg-center  border-2 shadow-xl bg-[url('https://i.ibb.co.com/yjgCwcz/online-payment-companies-jpeg.webp')] h-48 sm:h-60 md:h-70 lg:h-90 flex items-center rounded-lg ">





           
            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> In a few minutes You can create Your account.</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>


            </div>
          </div>
          <div className="flex-none w-4/5 p-4">
            <div className="bg-cover bg-center  border-2 shadow-xl bg-[url('https://i.ibb.co.com/Fqkpvf2J/b8cecf6dc98c431bf536f827a3837141-120945-png-w700wp.webp')] h-48 sm:h-60 md:h-70 lg:h-90 flex items-center  rounded-lg ">



           
            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> In a few minutes You can create Your account.</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>



            </div>
          </div>
          <div className="flex-none w-4/5 p-4 ">
            <div className="bg-cover bg-center border-2 shadow-xl bg-[url('https://i.ibb.co.com/DPn3HdrL/bank-atm-people-1284-26195-jpg.jpg')] h-48 sm:h-60 md:h-70 lg:h-90 flex items-center rounded-lg ">




            
            <div className="text-start p-1 md:p-5 md:space-y-5 bg-black/20 space-y-2 ml-2 md:w-4/6 lg:w-fit w-1/2 shadow shadow-gray-600 rounded-lg">
            <h1 className="  sm:font-bold md:text-2xl  text-white   "> In a few minutes You can create Your account.</h1>
            <button className=" font-normal  sm:font-bold text-white btn btn-primary"> Create Account </button>
            </div>






            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={scrollPrev}
          disabled={isPlaying}
          className={`${
            isPlaying
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } text-white py-2 px-4 rounded-md shadow`}
        >
          Prev
        </button>

        <button
          onClick={scrollNext}
          disabled={isPlaying}
          className={`${
            isPlaying
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } text-white py-2 px-4 rounded-md shadow`}
        >
          Next
        </button>

        <button
          onClick={toggleAutoplay}
          className={`${
            isPlaying
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white py-2 px-6 rounded-md shadow`}
        >
          {isPlaying ? "Stop Autoplay" : "Start Autoplay"}
        </button>
      </div>
    </div>
  );
};
