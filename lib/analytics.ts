// Google Analytics 4 configuration and event tracking

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event tracking functions
export const trackCTAClick = (buttonText: string, location: string) => {
  trackEvent('click', 'CTA', `${buttonText} - ${location}`);
};

export const trackContactFormSubmit = (success: boolean) => {
  trackEvent('form_submit', 'Contact', success ? 'Success' : 'Error');
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('view', 'Service', serviceName);
};

export const trackMarketView = (marketName: string) => {
  trackEvent('view', 'Market', marketName);
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'File', fileName);
};

export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'Outbound Link', url);
};