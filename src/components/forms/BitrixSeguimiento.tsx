'use client'

import { useEffect } from 'react';

interface Props {
  formId: string;
  formVersion: string;
}

export const BitrixSeguimiento = ({ formId, formVersion }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://cdn.bitrix24.es/b14462031/crm/form/loader_${formId}.js?${Date.now() / 180000 | 0}`;
    script.setAttribute('data-b24-form', `auto/${formId}/${formVersion}`);
    script.setAttribute('data-skip-moving', 'true');
    script.id = 'bitrix-script';

    const container = document.getElementById('bitrix-form-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [formId, formVersion]);

  return (
    <div id="bitrix-form-container" className="bitrix-form-wrapper">
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://cdn.bitrix24.es/b14462031/crm/form/loader_${formId}.js`}
        />
      </noscript>
    </div>
  );
};
