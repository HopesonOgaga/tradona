import React, { useEffect, useRef, memo } from "react";

const LiveMarket = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light", // ✅ White background
      isTransparent: false,
      locale: "en",
      width: "100%",
      height: 550,
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // ✅ Clear duplicates
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export default LiveMarket;
