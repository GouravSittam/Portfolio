"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Get the LENIS instance from the window object
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      setLenis(lenisInstance);
    }
  }, []);

  return lenis;
} 