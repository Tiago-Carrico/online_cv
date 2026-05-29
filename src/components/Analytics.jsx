import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function Analytics() {
  const { content } = useLanguage();
  const { analytics } = content.site;

  useEffect(() => {
    if (!analytics || !analytics.enabled) return;

    // Check if the script is already injected
    if (document.querySelector(`script[src="${analytics.scriptUrl}"]`)) return;

    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', analytics.domain);
    script.src = analytics.scriptUrl;
    
    document.head.appendChild(script);

    return () => {
      // Optional: Remove script on unmount, but usually we leave it
      // document.head.removeChild(script);
    };
  }, [analytics]);

  return null;
}
