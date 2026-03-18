import { useState, useEffect, useCallback } from "react";


function useTabFromUrl({ param, defaultTab, tabs }) {
  const getTabFromUrl = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tabFromUrl = searchParams.get(param);
    return tabs.includes(tabFromUrl) ? tabFromUrl : defaultTab;
  }, [param, defaultTab, tabs]);

  const [tab, setTabState] = useState(getTabFromUrl);

  const setTab = useCallback(
    (newTab) => {
      if (!tabs.includes(newTab)) return;
      setTabState(newTab);
      const url = new URL(window.location.href);
      url.searchParams.set(param, newTab);
      window.history.pushState({}, "", url.toString());
    },
    [param, tabs]
  );

  // Sync tab when user hits browser back/forward
  useEffect(() => {
    const handlePopState = () => setTabState(getTabFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getTabFromUrl]);

  return { tab, setTab };
}

export default useTabFromUrl;
