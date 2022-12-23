import React from "react";

const DiscordButton = ({ styles }) => (
  <a href="https://discord.gg/pdzKbzRJjd">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Join Discord
  </button>
  </a>
);

export default DiscordButton;
