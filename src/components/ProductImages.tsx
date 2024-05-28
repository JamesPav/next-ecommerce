"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://www.topcloset.gr/wp-content/uploads/2024/03/2100K1.jpg",
  },
  {
    id: 2,
    url: "https://www.topcloset.gr/wp-content/uploads/2024/03/2100K2.jpg",
  },
  {
    id: 3,
    url: "https://www.topcloset.gr/wp-content/uploads/2024/02/5501B.look2_.jpg",
  },
  {
    id: 4,
    url: "https://www.topcloset.gr/wp-content/uploads/2023/08/2010Br-595x893.jpg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[600px] w-[400px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-2  w-[400px] ">
        {images.map((img, i) => (
          <div
            className="w-[80px] h-24 relative gap-2 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
