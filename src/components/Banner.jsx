import { useState } from "react";

import "../css/Banner.css";
import { WarningTriangleIcon, CloseIcon } from "@iconicicons/react";
import meta from "../../package.json";

// const LOCAL_STORAGE_KEY = "seen_banner_2024";
// const BANNER_EXPIRATION_DATE = new Date("2025-03-01");

export default function Banner() {
  // const isExpired = new Date() >= BANNER_EXPIRATION_DATE;
  // const [show, setShow] = useState(
  //   !localStorage.getItem(LOCAL_STORAGE_KEY) && !isExpired
  // );

  // if (!show) return null;

  // const handleClose = () => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, true);
  //   setShow(false);
  // };

  return (
    <div id="banner" aria-label="Announcement">
      <WarningTriangleIcon />
      <span>
        HSCPastPapers.com is shutting down on 20 Oct 2025. Please use the{" "}
        <a
          href="https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers"
          target="_blank"
          rel="noopener"
        >
          official NESA website
        </a>{" "}
        instead.{" "}
        <a
          href={
            meta.repository.url.replace(".git", "") +
            "?tab=readme-ov-file#hscpastpaperscom"
          }
          target="_blank"
          rel="noopener"
        >
          More&nbsp;info
        </a>
      </span>
      {/* <div class="spacer" />
      <button
        className="button close"
        aria-label="Close"
        onClick={handleClose}
        autoFocus
      >
        <CloseIcon />
      </button> */}
    </div>
  );
}
