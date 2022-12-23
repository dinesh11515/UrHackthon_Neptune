import React from "react";

const SponsorButton = ({ styles }) => (
  <a href="https://forms.gle/ipPC9HGvN6AdP9jdA">
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px]  btn-grad rounded-[10px] outline-none ${styles}`}
    >
      Sponsor Us
    </button>
  </a>
);

export default SponsorButton;
