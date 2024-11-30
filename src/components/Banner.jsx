import { useState } from "react";

import "../css/Banner.css";
import { AnnouncementIcon, CloseIcon } from "@iconicicons/react";

const LOCAL_STORAGE_KEY = "seen_banner_2024";
const BANNER_EXPIRATION_DATE = new Date("2025-03-01");

export default function Banner() {
  const isExpired = new Date() >= BANNER_EXPIRATION_DATE;
  const [show, setShow] = useState(
    !localStorage.getItem(LOCAL_STORAGE_KEY) && !isExpired
  );

  if (!show) return null;

  const handleClose = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, true);
    setShow(false);
  };

  return (
    <div id="banner" aria-label="Announcement">
      <AnnouncementIcon />
      2024 papers are now available
      <div class="spacer" />
      <button
        className="button close"
        aria-label="Close"
        onClick={handleClose}
        autoFocus
      >
        <CloseIcon />
      </button>
    </div>
  );
}
