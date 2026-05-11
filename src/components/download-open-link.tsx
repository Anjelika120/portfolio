"use client";

import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type DownloadOpenLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
  href: string;
  children: ReactNode;
};

export function DownloadOpenLink({
  href,
  children,
  onClick,
  download,
  rel,
  ...props
}: DownloadOpenLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    window.open(href, "_blank", "noopener,noreferrer");

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download =
      typeof download === "string" ? download : href.split("/").pop() ?? "resume.pdf";
    downloadLink.rel = rel ?? "noreferrer";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <a href={href} onClick={handleClick} rel={rel} {...props}>
      {children}
    </a>
  );
}
