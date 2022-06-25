import React from 'react'
//These are Third party packages for smooth slideshow
import { Fade } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
import servicesSliderData from '@/data/servicesSliderData'
import '../styles/partials/ServicesSlider.module.scss'

const ServicesSlider = () => {
  return (
    <section className="blog-page-post-wrapper">
      <h2 className="index-article-latest-header pb-10 text-left text-6xl font-bold">
        <span className="circle-sketch-highlight text-gray-500 dark:text-gray-100">
          Specialties
        </span>
      </h2>
      <Fade arrows={false} height="auto" duration="1500" transitionDuration="1000">
        {servicesSliderData.map((each, index) => (
          <div className="react-slideshow-services-wrapper slide-container" key={index}>
            {each.url.length > 0 && each.caption.length > 0 && (
              <div className="grid gap-2 space-y-2 xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
                <div className="xl:row-span-2">
                  <h2 className="slider-top-heading text-2xl font-bold leading-8 tracking-tight">
                    {each.title}
                  </h2>
                  <Image
                    className="w-3/4 object-cover shadow-xl"
                    src={each.url}
                    alt=""
                    width={1280}
                    height={720}
                    layout="responsive"
                  />
                </div>
                <h2 className="slider-bottom-heading text-2xl font-bold leading-8 tracking-tight">
                  {each.title}
                </h2>
                <p>{each.caption}</p>
              </div>
            )}
          </div>
        ))}
      </Fade>
    </section>
  )
}

export default ServicesSlider
