---
title: 'Gatsby, gatsby-image, and Netlify CMS'
date: '07 10 2019'
summary: >-
  Adding Netlify CMS to a GatsbyJS website.
image: ['/img/pawel-czerwinski-knx8h8schdk-unsplash.webp']
tags:
  [
    'source-maps',
    'gatsbyjs',
    'terser',
    'npm-force-resolutions',
    'netlify-cms',
    'gatsby-image',
    'gatsby-plugin-netlify-cms',
  ]
categories: ['gatsbyjs', 'netlify-cms']
author: 'Maria D. Camcpbell'
draft: false
---

- Link to [Gatsby, gatsby-image, and Netlify CMS podcast on anchorfm](https://anchor.fm/maria-campbell/episodes/Gatsby--gatsby-image--and-Netlify-CMS-e4j887)

In my
[previous podcast](https://anchor.fm/maria-campbell/episodes/Gatsby--terser--and-source-maps-e4ip7k),
I talked about how I have been trying to add **Netlify CMS** to
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com), my
business website. Well, guess, what? I just completed implementing it a little
while ago today, and everything works beautifully.

It took a few workarounds, trial and error, asking for help from the **Netlfy
Community** (**_specifically_** and **_especially_** **NetlifyCMS** lead
developer **_Shawn Erquhart_**, @erquhart on **Twitter**) and experimentation,
but I finally brought it together!

## The terser issue: still in the picture

The **_terser issue_** is still in the picture. Every time I make a change to my
`package.json`, either **adding** or **removing** an **npm package**, I have to
repeat the following steps afterwards:

```js
rm -rf node_modules
npx npm-force-resolutions
npm i
```

Why? Because whenever I either **add** or **remove** a **package** **_related_**
to **Gatsby**, I receive **warnings** that various **peerDependencies** are
**_not installed_**, and that I have to install them myself. This behavior has
been part of npm since **version** npm@3.

According to **npmjs**,

> Trying to install another plugin with a conflicting requirement will cause an
> error. For this reason, make sure your plugin requirement is as broad as
> possible, and not to lock it down to specific patch versions.

Well, as you may remember if you listened to my previous podcast, I **_added_**
`terser 4.1.2` to my `resolutions` **object** in `package.json`. As I also
mentioned, this took care of the `source-maps` **issue** and made sure that all
packages using `terser` were compatible with this **version** which I added to
my `package.json`. And that is why I have to **_repeat_** my
`npm-force-resolutions` **ritual** every time I make **_Gatsby related_**
changes to my `package.json`. This is also why I decided to go with using `npx`
with the `gatsby-cli`, because I got so many warnings about missing
peerDependencies when I tried to install it globally. So until Gatsby has
resolved its **dependency/peerDependency** **_issues_** across the board, and
more specifically the **terser/source-maps** issue, I will continue executing
this pattern whenever I make changes to my `package.json`. It's a pain, but it
works.

## Source-maps still cause a break on build

In order to prevent a **break on build** due to the `source-maps` **issue**, I
still have a **custom webpack config** added to the bottom of my
`gatsby-node.js` file. Please refer to the **post transcript** of this podcast
on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com) to
view the code snippet.

```js
//turn off sourcemaps in production build no longer works
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
```

Things did not stop there, however. I had another issue to address. That of
**image upload** via **Netlify CMS** and the **_resulting_** **Netlify CMS
compatibility** with `gatsby-image` and **Gatsby** `grapql`. The **_original
structure_** of my **website** was definitely NOT compatible with **Netlify
CMS**. Each post had its own folder. The name of the folder was the post slug,
and the **markdown file** was named `index.md`. That was so that I would only
have one slug to deal with and not two. Naming `index.md` anything but
`index.md` would result in something like:

```html
https://www.interglobalmedianetwork.com/adding-new-content-to-hugo-gh-pages/adding-new-content-to-hugo-gh-pages/
```

By **_naming_** the markdown file `index.md`, the second post slug would be
removed.

```html
https://www.interglobalmedianetwork.com/adding-new-content-to-hugo-gh-pages/
```

But as I said, **Netlify CMS** does not work with posts contained in their own
individual folders containing the `index.md` markdown file and any **_images_**
used in the post.

I had to rename my **post markdown files** by replacing `index` with the
**post** `slug`. It ended up looking something like this:

```md
adapting-your-gatsby-site-to-the-limitations-of-gatsby-image.md
```

And I **_removed_** all the **post folders**. `content/blog` ended up only
containing the **markdown files** and **_nothing_** **else**. I **_moved_** the
**images** into the **static folder** within a **subfolder** called **_img_**.
Then I made the necessary **adjustments** to the **Netlify CMS** `config.yml`
related to **post images**, and made whatever **_image related_**
**adjustments** needed in `gatsby-config.js`.

**Gatsby** **_assumes_** that **images** are in the **_same location_** as the
**posts**. However, **Netlify CMS** **_places_** all **images** in **_one
place_**. In the **static folder**, and then possibly in a **subfolder**. In my
case, a **subfolder** called **img**. It is very important that you be
consistent across files about the path to your blog post image(s). Double,
triple check, and even quadruple check if you have to. I think that ended up
being part of my problem and why I threw certain errors.

For example, at one point towards the end of my **Netlify CMS** **_journey_**, I
was continuously getting the following error in Terminal on build:

```md
"Field "image" must not have a selection since type "String" has no subfields."
```

This **_can_** be a real bug, and I found in my research that some developers
used a **Gatsby plugin** called `gatsby-remark-relative-images` to fix the
issue. However, in my case, I found out that it was just an **_inconsistency_**
in my **Netlify CMS** **_image related paths_** across **configuration files**.

Once I made sure that all my **markdown image paths** were the **_same_** across
**configurations**, `static/admin/config.yml`, `gatsby-config.js`, and all the
`post markdown files`, everything worked as it should and resulted in a
**successful build** **_locally_** and **_remotely_**.

Then there is the `gatsby-plugin-netlify-cms-paths`. Why this plugin?
`gatsby-plugin-netlify-cms-paths` changes the file paths in your markdown files
to **Gatsby** friendly paths when using **Netlify CMS** to edit them.

When this plugin is used, I can embed an image in a markdown file in markdown
syntax:

```html
![Chemex](/img/chemex.jpg)
```

and still be able to access `gatsby-image's` "blur-up" behavior.

Suffice it to say, I am using **Netlify CMS** along with `npm-force-resolutions`
in production. It is working well thus far, and no problems on remote build. I
must say that I was **_not familiar_** with the **process** of **forcing
resolutions** in **_npm_**, but once I researched it further, and tested it on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com), I felt
comfortable to use it in production. Just be sure to go through the necessary
resolution steps each time you make a change to your package.json. And as I
mentioned in my
[previous podcast](https://anchor.fm/maria-campbell/episodes/Gatsby--terser--and-source-maps-e4ip7k),

> depending on what (other) packages you are using, it might not work equally
> across projects.

I will be **_embedding_** this **episode** of **Plugging in The Holes** along
with a **_transcript_** in the form of a post on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com) for your
**_hearing_** and **_reading_** pleasure. I will be including the **related
resource links** mentioned in the podcast of course. Always do. Bye for now!

## Related Resources

- [Gatsby, terser, and sourcemaps](https://www.interglobalmedianetwork.com/blog/gatsby-terser-sourcemaps/)

- [Gatsby and Netlify CMS](https://www.netlifycms.org/docs/gatsby/)

- [Cool Image Loading With GatsbyJS v2 and Netlify CMS v2](https://blog.rousek.name/2018/08/10/cool-image-loading-with-gatsbyjs-v2-and-netlify-cms-v2/)

- [NPM peerDependencies](https://blog.angularindepth.com/npm-peer-dependencies-f843f3ac4e7f)

- [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies)

- [Gatsby Plugin Netlify CMS Paths](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms-paths/)

- [interglobalmedia repo on Github](https://github.com/interglobalmedia/interglobalmedia)

- [Gatsby Remark Relative Images on Github](https://github.com/danielmahon/gatsby-remark-relative-images)
