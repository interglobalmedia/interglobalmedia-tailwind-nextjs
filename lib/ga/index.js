// log the pageview with their URL
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_UNIVERSAL_ANALYTICS_TRACKING_ID

export const pageview = (url, title) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_UNIVERSAL_ANALYTICS_TRACKING_ID, {
    page_path: url,
    page_title: title,
  })
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
