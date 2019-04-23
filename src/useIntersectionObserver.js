import { useState, useEffect } from "react";

export const useIntersectionObserver = (ref, options) => {
  const [state, setState] = useState({
    inView: false,
    triggered: false,
    entry: undefined
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      if (entries[0].intersectionRatio > 0) {
        setState({
          inView: true,
          triggered: true,
          entry: observerInstance
        });
        observerInstance.unobserve(ref.current);
      }
      return;
    },
    {
      threshold: options.threshold || 1,
      root: options.root || null,
      rootMargin: options.rootMargin || "0%"
    }
  );

  useEffect(() => {
    if (ref.current) {
      !state.triggered && observer.observe(ref.current);
    }
  });

  return [state.inView, state.entry];
};
