import { useState } from "react";

import retroImg from "../assets/retro.png";
import dustyImg from "../assets/dusty.png";
import zooImg from "../assets/zoo.png";

export default function CardBest() {
  const [selectedId, setSelectedId] = useState(null);

  const bestSeller = [
    {
      id: 1,
      title: "Air Zoo Structure 18",
      desc: "Nike Air Zoom Structure 18 dibuat untuk kenyamanan lari jarak jauh.",
      imageUrl: zooImg,
      btn: "Buy Now",
      bgColor: "#07a3db",
    },
    {
      id: 2,
      title: "Air Jordan Retro 7",
      desc: "Air Jordan Retro 7 hadir dengan desain ikonik dan nyaman dipakai.",
      imageUrl: retroImg,
      btn: "Buy Now",
      bgColor: "#60629e",
    },
    {
      id: 3,
      title: "Air Max 270 Dusty",
      desc: "Air Max 270 dengan bantalan empuk dan tampilan modern.",
      imageUrl: dustyImg,
      btn: "Buy Now",
      bgColor: "#05939f",
    },
  ];

  return (
    <div className="flex gap-6 p-10 justify-center">
      {bestSeller.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedId(item.id)}
          style={{ backgroundColor: item.bgColor }}
          className={`
            relative w-[380px] h-[500px]
            rounded-2xl p-6 text-white
            overflow-hidden cursor-pointer
            transition-all duration-300
            ${
              selectedId === item.id
                ? "scale-105 ring-4 ring-white"
                : "hover:scale-102"
            }
          `}
        >
          <h1 className="text-2xl font-bold mb-2">
            {item.title}
          </h1>

          <p className="text-sm opacity-90 max-w-[220px]">
            {item.desc}
          </p>

          <img
            src={item.imageUrl}
            alt={item.title}
            className={`
              absolute right-[40px] top-[45px]
              w-[320px]
              drop-shadow-2xl
              transition-all duration-300
              ${
                selectedId === item.id
                  ? "rotate-0 scale-110"
                  : "rotate-[-20deg]"
              }
            `}
          />

          <button
            className="
              absolute bottom-6 left-6
              bg-white/20 backdrop-blur
              px-6 py-2 rounded-full
              text-sm font-semibold
              hover:bg-white/30 transition
              active:scale-95
            "
          >
            {selectedId === item.id ? "Selected ✓" : item.btn}
          </button>
        </div>
      ))}
    </div>
  );
}
