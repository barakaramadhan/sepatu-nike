import Logo from "../assets/logo.png";
export default function Navigasi() {
  return (
    <div id="navigasi" className="bg-[#43b4de] ">
      <div
        className="flex justify-around items-center pt-5 pb-5"
        id="pembungkus"
      >
        <div id="logo" className="">
          <img src={Logo} alt="" className="w-[45px]" />
        </div>

        <div>
          <ul className="flex gap-[50px]">
            <li className="transform transition duration-300 hover:scale-110
">
              <a
                href="#"
                className="font-jakarta text-[20px] text-white tracking-[0.5px] font-semibold"
              >
                Home
              </a>
            </li>
            <li className="transform transition duration-300 hover:scale-110">
              <a href="#" className="font-jakarta text-[20px] text-white tracking-[0.5px] font-semibold">About</a>
            </li>
            <li className="transform transition duration-300 hover:scale-110">
              <a href="#" className="font-jakarta text-[20px] text-white tracking-[0.5px] font-semibold">Contact</a>
            </li>
          </ul>
        </div>

        <div id="icon" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
