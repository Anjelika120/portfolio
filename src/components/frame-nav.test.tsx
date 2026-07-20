// @vitest-environment jsdom

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FrameNav } from "@/components/frame-nav";

class IntersectionObserverStub {
  observe() {}
  disconnect() {}
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0);
    return 1;
  });
  HTMLElement.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, "", "/");
});

describe("FrameNav", () => {
  it("moves focus to the selected same-page section after closing the mobile menu", async () => {
    const user = userEvent.setup();

    render(
      <>
        <FrameNav isHomePage />
        <main>
          <section id="top" tabIndex={-1}>Overview</section>
          <section id="systems" tabIndex={-1}>Selected work destination</section>
        </main>
      </>
    );

    await user.click(screen.getByRole("button", { name: "Menu" }));
    const mobileNav = screen.getByRole("navigation", { name: "Mobile portfolio sections" });
    await user.click(within(mobileNav).getByRole("link", { name: /Selected work/ }));

    const destination = screen.getByText("Selected work destination");
    expect(screen.queryByRole("navigation", { name: "Mobile portfolio sections" })).toBeNull();
    expect(document.activeElement).toBe(destination);
    expect(destination.scrollIntoView).toHaveBeenCalledWith({ block: "start" });
    expect(window.location.hash).toBe("#systems");
  });

  it("does not mark a homepage section current on a case-study route", () => {
    window.history.replaceState(null, "", "/work/store-redemption-platform");

    render(<FrameNav isHomePage={false} />);

    expect(screen.queryByRole("link", { current: "location" })).toBeNull();
  });
});
