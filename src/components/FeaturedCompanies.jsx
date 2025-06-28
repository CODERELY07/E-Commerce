import React from "react";

const featuredBrands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 5,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 6,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    id: 9,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 12,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

import Marquee from "react-fast-marquee";

const FeaturedCompanies = () => {
  return (
    <div className=" py-10 ">
      <div className=" max-w-[1200px] mx-auto ">
        <Marquee pauseOnHover gradient={false} speed={40}>
          {featuredBrands.map((brand) => (
            <div
              key={brand.id}
              className="mx-20 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
