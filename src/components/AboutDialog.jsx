import { useRef } from "react";

import "../css/AboutDialog.css";
import { CloseIcon, TrashIcon } from "@iconicicons/react";

import meta from "../../package.json";
import logoUrl from "../../img/icon.svg";

export default function AboutDialog() {
  const ref = useRef(null);

  const handleClose = () => {
    ref.current.classList.add("hide");
    const close = () => {
      ref.current.classList.remove("hide");
      ref.current.close();
      ref.current.removeEventListener("animationend", close);
    };
    ref.current.addEventListener("animationend", close);
  };

  const handleClearCache = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <dialog id="about-dialog" aria-label="About" ref={ref}>
      <button
        className="button close"
        aria-label="Close"
        onClick={handleClose}
        autoFocus
      >
        <CloseIcon />
      </button>

      <img src={logoUrl} width="60" height="60" aria-hidden />
      <h2>HSCPastPapers.com</h2>
      <p>
        Version {meta.version}
        <br />
        Data updated <span id="timestamp">—</span>
      </p>

      <p>
        Copyright &copy; 2017&ndash;{new Date().getFullYear()} Sidney Alcantara.
        Licensed under the{" "}
        <a
          href={meta.repository.url.replace(".git", "/blob/main/LICENSE")}
          target="_blank"
          rel="noopener"
        >
          MIT License
        </a>
        .
      </p>

      <div className="button-row">
        <button className="button" onClick={handleClearCache}>
          <TrashIcon className="start" />
          Clear cache
        </button>
        <a
          className="button"
          href={meta.repository.url.replace(".git", "")}
          target="_blank"
          rel="noopener"
        >
          <svg
            preserveAspectRatio="xMidYMid"
            viewBox="1 1 22 22"
            width="18"
            height="18"
            className="start"
            style={{ marginRight: "0.5em" }}
          >
            <path
              d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
              fill="currentColor"
            ></path>
          </svg>
          View on GitHub
        </a>
      </div>

      <div className="copyright-notice">
        <h3>Disclaimer and Copyright Notice</h3>

        <p>
          This web app is not affiliated with the NSW Education Standards
          Authority (NESA). All documents linked to by this web app are owned by
          the State of New South Wales, provided by NESA.
        </p>
        <p>
          This web app does not store copies of any NESA documents. No ownership
          is claimed over them. This web app was built for informational
          purposes only.
        </p>
        <p>
          On 15 June 2018, changes were made to this web app to comply with{" "}
          <a
            href="http://educationstandards.nsw.edu.au/wps/portal/nesa/mini-footer/copyright"
            target="_blank"
            rel="noopener"
          >
            NESA Copyright Policy
          </a>
          . Learn more about the changes made due to copyright{" "}
          <a
            href={meta.repository.url.replace(
              ".git",
              "/blob/main/copyright-changes.md"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </dialog>
  );
}
