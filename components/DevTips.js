import React from 'react'
//These are Third party packages for smooth slideshow
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../styles/partials/DevTips.module.scss'

const DevTips = () => {
  const tips = [
    {
      title: 'Dev Tip #1',
      tip: 'If you are UX (designer), make sure you learn enough about DX (developer) so that you can effectively communicate and understand the process. If you are DX, make sure you learn enough about UX so that you can effectively communicate and understand the process as well.  Separation of concerns does not mean the exclusion of communication and understanding! If you are UX (designer), make sure you learn enough about DX (developer) so that you can effectively communicate and understand the process. If you are DX, make sure you learn enough about UX so that you can effectively communicate and understand the process as well.  Separation of concerns does not mean the exclusion of communication and understanding!',
    },
    {
      title: 'Dev Tip #2',
      tip: 'This is a tip for testing purposes.',
    },
  ]
  return (
    <article className="blog-page-post-wrapper">
      <h2 className="index-article-latest-header pb-10 text-left text-6xl font-bold">
        <span className="circle-sketch-highlight text-gray-500 dark:text-gray-100">Dev Tips</span>
      </h2>
      <Fade arrows={false} height="auto" duration="1500" transitionDuration="1000">
        {tips.map((tip, index) => (
          <div className="dev-tips-wrapper slide-container" key={index}>
            <div className="h-full w-full text-center">
              <h2 className="slider-top-heading text-2xl font-bold leading-8 tracking-tight">
                {tip.title}
              </h2>
              <p>{tip.tip}</p>
            </div>
          </div>
        ))}
      </Fade>
    </article>
  )
}

export default DevTips
