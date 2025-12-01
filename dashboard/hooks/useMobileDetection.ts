"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const dismissModal = () => {
    setIsDismissed(true);
  };

  return {
    isMobile,
    showMobileWarning: isMobile && !isDismissed,
    dismissModal,
  };
}
