import AirMax from "../assets/turfBlue.png";
export default function Header() {
  return (
    <>
      <div className="flex bg-[#43b4de] justify-center pt-10 items-center px-10">
        <div
          id="nike"
          className="relative flex items-center justify-center h-[500px] pr-[200px]"
        >
          {/* TEXT BACKGROUND */}
          <h1
            className="font-anton text-[450px] skew-x-[-12deg] tracking-[12px]
            text-white/90 absolute bottom-0 leading-none"
          >
            NIKE
          </h1>

          {/* SEPATU */}
          <img
            src={AirMax}
            alt=""
            className="z-10 w-[100%] translate-y-[-40px] pt-[150px]"
          />
        </div>

        <div id="desc">
          <h1 className="font-jakarta text-[40px] font-bold">Air Max Speed Turf Blue</h1>
          <p className="font-jakarta text-gray-700 pt-5 w-[500px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio aliquam distinctio vitae libero tempore illo eius hic quia facere molestias?</p>
          <div id="size">
            <h2 className="font-jakarta font-bold pt-5">Size</h2>
            <div id="size" className="flex gap-3 items-center">
              <p className="hover:bg-gray-900 px-2 py-1 rounded-full hover:text-white transform transition duration-300 scale-105">40</p>
              <p className="hover:bg-gray-900 px-2 py-1 rounded-full hover:text-white transform transition duration-300 scale-105">41</p>
              <p className="hover:bg-gray-900 px-2 py-1 rounded-full hover:text-white transform transition duration-300 scale-105">42</p>
              <p className="hover:bg-gray-900 px-2 py-1 rounded-full hover:text-white transform transition duration-300 scale-105">43</p>
            </div>
          </div>
         <button className="mt-5  bg-[#1c88eb] py-2 px-5  text-white text-jakarta font-semibold rounded-lg transition-transform duration-150hover:scale-105 active:scale-95">Buy Now</button>

        </div>
      </div>
    </>
  );
}
