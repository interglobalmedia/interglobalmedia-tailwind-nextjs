export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_UNIVERSAL_ANALYTICS_TRACKING_ID

export const pageView = (url, title) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
