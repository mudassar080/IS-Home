import React from "react";

export const TextBlock = ({ children }) => (
  <p className="text-[#999] pt-5 text-[17px] font-light">{children}</p>
);

export const handleScroll = (ref, multiplier = 0.333) => {
    if (ref.current) {
      const scrollY = window.scrollY;
      ref.current.style.transform = `translate3d(0, ${scrollY * multiplier}px, 0)`;
    }
  };
