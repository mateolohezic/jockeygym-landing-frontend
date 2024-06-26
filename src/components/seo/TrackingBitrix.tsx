import Script from "next/script";

export const TrackingBitrix = () => {
    return (
        <>
          <Script
            strategy="afterInteractive"
            id="bitrix-tracker"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,u){
                  var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                  var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                })(window,document,'https://cdn.bitrix24.es/b14462031/crm/tag/call.tracker.js');
              `,
            }}
          />
        </>
    );
}
