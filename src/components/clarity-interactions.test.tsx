// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { InputStoryExplorer } from "@/components/clarity-interactions";

const stories = [
  {
    id: "api",
    label: "API",
    title: "API product logic",
    preview: "API preview",
    body: "API story body",
    points: ["API point"]
  },
  {
    id: "webhooks",
    label: "Webhooks",
    title: "Webhook product logic",
    preview: "Webhook preview",
    body: "Webhook story body",
    points: ["Webhook point"]
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    title: "AI automation product logic",
    preview: "AI automation preview",
    body: "AI automation story body",
    points: ["AI automation point"]
  }
] as const;

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("InputStoryExplorer", () => {
  it("wraps arrow-key focus without changing the selected story", async () => {
    const user = userEvent.setup();
    render(<InputStoryExplorer stories={stories} />);

    const firstTab = screen.getByRole("tab", { name: "API" });
    const lastTab = screen.getByRole("tab", { name: "AI Automation" });

    firstTab.focus();
    await user.keyboard("{ArrowLeft}");

    expect(document.activeElement).toBe(lastTab);
    expect(lastTab.tabIndex).toBe(0);
    expect(lastTab.getAttribute("aria-selected")).toBe("false");
    expect(firstTab.getAttribute("aria-selected")).toBe("true");
    expect(screen.getByRole("tabpanel", { name: "API" })).not.toBeNull();

    await user.keyboard("{ArrowRight}");

    expect(document.activeElement).toBe(firstTab);
    expect(firstTab.getAttribute("aria-selected")).toBe("true");
  });

  it.each([
    ["ArrowDown", "{ArrowDown}", "Webhooks"],
    ["ArrowUp", "{ArrowUp}", "AI Automation"]
  ])("moves roving focus with %s without activating the destination", async (_label, key, destinationLabel) => {
    const user = userEvent.setup();
    render(<InputStoryExplorer stories={stories} />);

    const firstTab = screen.getByRole("tab", { name: "API" });
    const destination = screen.getByRole("tab", { name: destinationLabel });

    firstTab.focus();
    await user.keyboard(key);

    expect(document.activeElement).toBe(destination);
    expect(destination.getAttribute("aria-selected")).toBe("false");
    expect(firstTab.getAttribute("aria-selected")).toBe("true");
  });

  it.each([
    ["Enter", "{Enter}"],
    ["Space", " "]
  ])("activates the focused tab with %s and retains tab focus", async (_label, key) => {
    const user = userEvent.setup();
    render(<InputStoryExplorer stories={stories} />);

    const firstTab = screen.getByRole("tab", { name: "API" });
    const secondTab = screen.getByRole("tab", { name: "Webhooks" });

    firstTab.focus();
    await user.keyboard("{ArrowRight}");
    expect(firstTab.getAttribute("aria-selected")).toBe("true");

    await user.keyboard(key);

    expect(document.activeElement).toBe(secondTab);
    expect(secondTab.getAttribute("aria-selected")).toBe("true");
    expect(firstTab.getAttribute("aria-selected")).toBe("false");
    expect(screen.getByRole("tabpanel", { name: "Webhooks" })).not.toBeNull();
  });

  it("allows Tab to move from the selected tab into the displayed panel", async () => {
    const user = userEvent.setup();
    render(<InputStoryExplorer stories={stories} />);

    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("tab", { name: "API" }));

    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("tabpanel", { name: "API" }));
  });
});
