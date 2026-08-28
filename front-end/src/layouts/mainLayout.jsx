import { use, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PremiumAtmosphere from "../components/ui/PremiumAtmosphere";
import PremiumCelebration from "../components/ui/PremiumCelebration";
import { ThemeContext } from "../contexts/ThemeContext";
import useEventSelection from "../hooks/useEventSelection";

const MainLayout = ({ isPremium = false }) => {
  const { theme, setTheme } = use(ThemeContext);
  const { isPremium: hasPremiumSelection, selectedCount } =
    useEventSelection();
  const previousSelectedCount = useRef(selectedCount);
  const isPremiumPreview =
    import.meta.env.DEV &&
    new URLSearchParams(window.location.search).get("premiumPreview") === "1";
  const [celebrationActive, setCelebrationActive] = useState(isPremiumPreview);
  const premiumActive = isPremium || hasPremiumSelection || isPremiumPreview;

  useEffect(() => {
    const premiumWasJustUnlocked =
      previousSelectedCount.current < 3 && selectedCount === 3;
    previousSelectedCount.current = selectedCount;

    if (!premiumWasJustUnlocked) return;

    if (theme === "light") setTheme("dark");

    setCelebrationActive(true);
  }, [selectedCount, setTheme, theme]);

  useEffect(() => {
    if (!celebrationActive) return undefined;

    const celebrationTimer = window.setTimeout(() => {
      setCelebrationActive(false);
    }, 2000);

    return () => window.clearTimeout(celebrationTimer);
  }, [celebrationActive]);

  return (
    <div
      className={`evently-shell relative isolate flex min-h-screen flex-col overflow-x-hidden bg-evently-bg text-evently-text transition-colors duration-1000 ${
        premiumActive ? "evently-premium" : ""
      }`}
    >
      <PremiumAtmosphere />
      <PremiumCelebration active={celebrationActive} />
      <Header isPremium={premiumActive} />
      <main className="relative z-10 flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
