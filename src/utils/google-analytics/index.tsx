import ReactGA4 from "react-ga4";
const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
};

const TrackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };