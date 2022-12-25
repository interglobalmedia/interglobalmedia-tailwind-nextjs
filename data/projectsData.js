const projectsData = [
	{
		id: 1,
		title: 'OMDB API Next.js',
		repository: 'https://github.com/interglobalmedia/omdb-api-nextjs',
		website: 'https://omdb-api-nextjs.vercel.app/',
		summary:
			'An app which implements the OMDB API Using Next.js, protects your API key, and deploys to vercel.com.',
		imgSrc: '/static/images/projects/img/webp/omdb-api-nodejs-app.webp',
		href: '/blog/projects/omdb-api-nodejs',
		tags: [
			'async-await',
			', ',
			'css animation',
			', ',
			'custom next.js _error.js page',
			', ',
			'dotenv',
			', ',
			'environment variables',
			', ',
			'eslint',
			', ',
			'fetch api',
			', ',
			'husky',
			', ',
			'invalid search keywords error handling production',
			', ',
			'lint-staged',
			', ',
			'local scripts',
			', ',
			'modern javascript',
			', ',
			'next.js',
			', ',
			'next/router hooks',
			', ',
			'node.js',
			', ',
			'node modules',
			', ',
			'omdb api',
			', ',
			'pagination',
			', ',
			'prettier',
			', ',
			'react hooks',
			', ',
			'required boolean attribute',
			', ',
			'sass',
			', ',
			'scss',
			', ',
			'scroll-down button',
			', ',
			'scroll-up button',
			', ',
			'server side rendering',
			', ',
			'stacktrace error-handing development',
			', ',
			'stylelint',
			', ',
			'vercel',
		],
		more: 'https://github.com/interglobalmedia/omdb-api-nodejs',
	},
	{
		id: 2,
		title: 'Welcome To The Groove',
		repository: 'https://github.com/interglobalmedia/jukebox',
		website: 'https://interglobalmedia.github.io/jukebox/',
		summary: `An audio player in the form of a jukebox created with es6-javascript, html5-audio, oop, and includes a search-in-text searchbar.`,
		imgSrc: '/static/images/projects/img/webp/welcome-to-the-groove.webp',
		href: '/blog/projects/welcome-to-the-groove',
		tags: [
			'audio web api',
			', ',
			'metadata',
			', ',
			'object oriented javascript',
			', ',
			'object oriented javascript',
			', ',
			'progress bar',
			', ',
			'search',
			', ',
			'thumb slider',
		],
		more: `https://github.com/interglobalmedia/jukebox`,
	},
	{
		id: 3,
		title: 'Rockin Synth',
		repository: 'https://github.com/interglobalmedia/rockin-synth',
		website: 'https://interglobalmedia.github.io/rockin-synth/',
		summary:
			'A piano deyboard application built with JavaScript, es6 modules, the Web Audio API, event delegation, Sass, and more.',
		imgSrc: '/static/images/projects/img/webp/rockin-synth.webp',
		href: '/blog/projects/rockin-synth',
		tags: [
			'babel',
			', ',
			'e.keyCode',
			', ',
			'e.which',
			', ',
			'es6 modules',
			', ',
			'eslint',
			', ',
			'event delegation',
			', ',
			'event listeners',
			', ',
			'kbd tags',
			', ',
			'prettier',
			', ',
			'transitions',
			', ',
			'web audio api',
		],
		more: 'https://github.com/interglobalmedia/rockin-synth',
	},
	{
		id: 4,
		title: 'Cat Whisperer',
		repository: 'https://github.com/interglobalmedia/the-cat-whisperer',
		website: 'https://interglobalmedia.github.io/the-cat-whisperer/',
		summary:
			'A little text to speech app I created so that cat lovers could be inspired to write about their cats using the Speech Synthesis API while being inspired by the app’s cat image slideshow',
		imgSrc: '/static/images/projects/img/webp/cat-whisperer-app.webp',
		href: '/blog/projects/cat-whisperer',
		tags: [
			'text to speech',
			', ',
			'speech synthesis api',
			', ',
			'audio web api',
			', ',
			'session storage',
			', ',
			'file downloads',
		],
		more: 'https://github.com/interglobalmedia/the-cat-whisperer',
	},
	{
		id: 5,
		title: 'Trump Talks',
		repository: `https://github.com/interglobalmedia/trump-talks-nextjs`,
		website: `https://trump-talks-nextjs.vercel.app/`,
		summary:
			'A Random Quote API Application using the What Does Trump Think? API.',
		imgSrc: '/static/images/projects/img/webp/trump-talks-nextjs.webp',
		href: '/blog/projects/trump-talks-trash',
		tags: [
			'fetch api',
			'nextjs',
			'react',
			'file based routing',
			'user-router',
			'router-push',
			'pre rendering',
			'server side rendering',
			'random quote api',
		],
		more: `https://trump-talks-nextjs.vercel.app/`,
	},
	{
		id: 6,
		title: 'Web Audio API AJAX',
		repository: 'https://github.com/interglobalmedia/web-audio-api-ajax',
		website: 'https://interglobalmedia.github.io/web-audio-api-ajax/',
		summary:
			'A Web Audio API app which uses AJAX to retrieve a locally hosted audio file.',
		imgSrc: '/static/images/projects/img/webp/web-audio-api-ajax.webp',
		href: '/blog/projects/web-audio-api-ajax',
		tags: [
			'ajax',
			', ',
			'babel 7',
			', ',
			'buffer',
			', ',
			'canvas',
			', ',
			'cdnjs',
			', ',
			'code refactor',
			', ',
			'confetti-js',
			', ',
			'eslint 8',
			', ',
			'gh-pages',
			', ',
			'modern javascript',
			', ',
			'node-sass',
			', ',
			'npm',
			', ',
			'prettier',
			', ',
			'random colors',
			', ',
			'scripts',
			', ',
			'web audio api',
			', ',
			'webpack 5',
			', ',
			'workflow refactor',
		],
		more: 'https://github.com/interglobalmedia/web-audio-api-ajax',
	},
	{
		id: 7,
		title: 'Custom HTML5 Video Player',
		repository:
			'https://github.com/interglobalmedia/custom-html5-video-player',
		website:
			'https://interglobalmedia.github.io/custom-html5-video-player/',
		summary:
			'An app which creates a custom HTML5 video player using the Shadow DOM so that the video player can go full screen without issue.',
		imgSrc: '/static/images/projects/img/webp/custom-html5-video-player.webp',
		href: '/blog/projects/custom-html5-video-player-and-shadow-dom',
		tags: [
			'fullscreen api',
			', ',
			'html5 video',
			', ',
			'html5',
			', ',
			'cross-browser issues',
			', ',
			'cascading stylesheets',
			', ',
			'shadow dom',
			', ',
			'user-agent stylesheets',
			', ',
			'pseudo elements',
			', ',
			'javascript',
		],
		more: 'https://www.interglobalmedianetwork.com/blog/2017-01-04-creating-a-custom-html5-video-player-and-the-shadow-dom/',
	},
	{
		id: 8,
		title: 'Making Music in the Browser',
		repository:
			'https://github.com/interglobalmedia/making-music-in-the-browser',
		website:
			'https://interglobalmedia.github.io/making-music-in-the-browser/',
		summary:
			"An app which makes sounds on the web page when clicking it or dragging the computer's or mobile device's pointing device around the screen.",
		imgSrc: '/static/images/projects/img/webp/making-music-in-browser.webp',
		href: '/blog/projects/making-music-in-the-browser',
		tags: [
			'css animation',
			', ',
			'css attr',
			', ',
			'css in js',
			', ',
			'css keyframes',
			', ',
			'css pseudo selectors',
			', ',
			'gh-pages',
			', ',
			'javascript',
			', ',
			'mobile friendly',
			', ',
			'node sass',
			', ',
			'npm',
			', ',
			'touch events',
			', ',
			'web audio api',
		],
		more: 'https://github.com/interglobalmedia/making-music-in-the-browser',
	},
	{
		id: 9,
		title: 'Guess the Keys',
		repository: 'https://github.com/interglobalmedia/guess-the-keys',
		website: 'https://interglobalmedia.github.io/guess-the-keys/',
		summary: 'A fun little game made with JavaScript, SCSS/CSS3, and HTML.',
		imgSrc: '/static/images/projects/img/webp/guess-the-keys.webp',
		href: '/blog/projects/guess-the-keys',
		tags: [
			'appendChild method',
			', ',
			'arguments object',
			', ',
			'babel 7',
			', ',
			'browser compatibility',
			', ',
			'createDocumentFragment method',
			', ',
			'createElement method',
			', ',
			'css in js',
			', ',
			'es5 function class',
			', ',
			'es6 modules',
			', ',
			'eslint 8',
			', ',
			'event listeners',
			', ',
			'game',
			', ',
			'input validation',
			', ',
			'keycode',
			', ',
			'keypress event',
			', ',
			'modern javascript',
			', ',
			'prettier',
			', ',
			'scss',
			', ',
			'setProperty method',
			', ',
			'split method',
			', ',
			'String.fromCharCode method',
			', ',
			'unicode characters',
			', ',
			'unicaode values',
			', ',
			'webpack 5',
		],
		more: 'https://www.mariadcampbell.com/blog/guess-the-keys/',
	},
	{
		id: 10,
		title: 'LetsBCoding WordPress',
		repository: 'https://github.com/interglobalmedia/letsbcoding',
		website: 'https://letsbcoding.com',
		summary:
			'An idea I had been brewing for a while where students could join, save information from classes and collaborate.',
		imgSrc: '/static/images/projects/img/webp/letsbcoding.webp',
		href: '/blog/projects/letsbcoding-wordpress',
		tags: [
			'advanced custom fields',
			', ',
			'automated git deployments',
			', ',
			'composer',
			', ',
			'custom mu plugins',
			', ',
			'custom wordpress themes',
			', ',
			'local by flywheel',
			', ',
			'modern javascript',
			', ',
			'nodejs',
			', ',
			'node sass',
			', ',
			'php7',
			', ',
			'phpcs',
			', ',
			'phpdotenv',
			', ',
			'siteground hosting',
			', ',
			'wordpress',
			', ',
			'wordpress custom plugins',
			', ',
			'wordpress plugin creation',
			', ',
			'workflow refactor',
			', ',
			'wordpress rest api',
			', ',
			'wordpress scripts',
		],
		more: 'https://letsbcoding.com',
	},
	{
		id: 11,
		title: 'Dragging Bubbles',
		repository: 'https://github.com/interglobalmedia/dragging-bubbles',
		website: 'https://interglobalmedia.github.io/dragging-bubbles/',
		summary:
			'I have always wanted to closely tie audio and audio volume controls with visual and creating multiple audio sources, which I tie to one input of type range. So what better way than with the HTML5 Web Audio and HTML5 Canvas 2D APIs!',
		imgSrc: '/static/images/projects/img/webp/dragging-bubbles.webp',
		href: '/blog/projects/dragging-bubbles',
		tags: [
			'ajax',
			', ',
			'canvas 2D',
			', ',
			'click event',
			', ',
			'create buffer source',
			', ',
			'create gain',
			', ',
			'create media element source',
			', ',
			'input event',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'pointerdown event',
			', ',
			'pointermove event',
			', ',
			'pointerout event',
			', ',
			'pointerover event',
			', ',
			'pointerup event',
			', ',
			'node sass',
			', ',
			'set at target time',
			', ',
			'touch friendly',
			', ',
			'web audio api',
		],
		more: 'https://interglobalmedia.github.io/dragging-bubbles/',
	},
	{
		id: 12,
		title: 'Canvas 2D Breakout Game',
		repository: 'https://github.com/interglobalmedia/2d-breakout-game-mdn',
		website: 'https://interglobalmedia.github.io/2d-breakout-game-mdn/',
		summary:
			'I always had wanted to be able to create games using the HTML5 Canvas 2D API, so I built (and refactored) a Canvas 2D Breakout Game inspired by one I came across on MDN.',
		imgSrc: '/static/images/projects/img/webp/canvas-2d-breakout-game.webp',
		href: '/blog/projects/canvas-2d-breakout-game',
		tags: [
			'babel 7',
			', ',
			'canvas 2D',
			', ',
			'eslint 8',
			', ',
			'innerhtml property',
			', ',
			'keydown event',
			', ',
			'keyup event',
			', ',
			'modern javascript',
			', ',
			'mousemove event',
			', ',
			'node sass',
			', ',
			'webpack 5',
		],
		more: 'https://interglobalmedia.github.io/2d-breakout-game-mdn/',
	},
	{
		id: 13,
		title: 'Wikipedia Viewer',
		repository: 'https://github.com/interglobalmedia/wikipedia-viewer',
		website: 'https://interglobalmedia.github.io/wikipedia-viewer/',
		summary:
			'An application I created at the height of the COVID-19 pandemic as part of the course content of a Dynamic Web 1 (JavaScript) course I was (and still am) teaching. We had just migrated to online learning, and I wanted to create an application that visualized what we were all feeling. I selected images that expressed those feelings, and synched the animations with the beat of music I chose. It was a rough time, but my students for that class were really amazing. I was truly inspired by them.',
		imgSrc: '/static/images/projects/img/webp/wikipedia-viewer.webp',
		href: '/blog/projects/wikipedia-viewer',
		tags: [
			'appendChild',
			', ',
			'css in js animation',
			', ',
			'css keyframes',
			', ',
			'css transitions',
			', ',
			'DOMContentLoaded event',
			', ',
			'event listeners',
			', ',
			'getElementsByTagName',
			', ',
			'innerhtml property',
			', ',
			'input event',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'node sass',
			', ',
			'web audio api',
		],
		more: 'https://interglobalmedia.github.io/wikipedia-viewer/',
	},
	{
		id: 14,
		title: 'Poke API App',
		repository: 'https://github.com/interglobalmedia/pokemon-api',
		website: 'https://interglobalmedia.github.io/pokemon-api/',
		summary:
			'An application which utilizes the Poke API based on Pokemon characters and utilizes both the fetch API and AJAX, JavaScript promise chaining, the map method, creates most elements rendered to the html pages, checks for non-existent images and removes them or or sets their display properties to none, uses pointer events to replace touch and mouse events, custom build script, and Modern JavaScript in general.',
		imgSrc: '/static/images/projects/img/webp/poke-api.webp',
		href: '/blog/projects/poke-api-app',
		tags: [
			'ajax',
			', ',
			'animated magnifying glass icon search input',
			', ',
			'code refactor',
			', ',
			'create element',
			', ',
			'css transforms',
			', ',
			'css transitions',
			', ',
			'design refactor',
			', ',
			'fetch api',
			', ',
			'innerhtml property',
			', ',
			'keydown event',
			', ',
			'load event',
			', ',
			'manipulating the dom',
			', ',
			'map method',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'nested map methods',
			', ',
			'nested api objects',
			', ',
			'node sass',
			', ',
			'onerror property',
			', ',
			'parallax',
			', ',
			'pointer events',
			', ',
			'poke api',
			', ',
			'promise chaining',
			', ',
			'window pageOffset',
			', ',
			'window scroll',
		],
		more: 'https://interglobalmedia.github.io/pokemon-api/',
	},
	{
		id: 15,
		title: 'Monsters API App',
		repository: 'https://github.com/interglobalmedia/monsters-api',
		website: 'https://interglobalmedia.github.io/monsters-api/',
		summary:
			'This little search application utilizes two APIs. One is for the text called {JSON} Placeholder, and the other API is for the images called Robohash. The app also utilizes the fetch API method, the map() method, event listeners, createElement, appendChild, JavaScript array of objects, template string literal interpolation, Modern JavaScript, and more!',
		imgSrc: '/static/images/projects/img/webp/monsters-api-app.webp',
		href: '/blog/projects/monsters-api-app',
		tags: [
			'e.keyCode',
			', ',
			'e.which',
			', ',
			'fetch api',
			', ',
			'innerhtml property',
			', ',
			'json placeholder api',
			', ',
			'javascript array of objects',
			', ',
			'keydown event',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'node sass',
			', ',
			'promise chaining',
			', ',
			'robohash api',
			', ',
			'template string literal interpolation',
		],
		more: 'https://interglobalmedia.github.io/monsters-api/',
	},
	{
		id: 16,
		title: 'Audio Visual Slider',
		repository:
			'https://github.com/interglobalmedia/basic-audio-visual-slider',
		website:
			'https://interglobalmedia.github.io/basic-audio-visual-slider/',
		summary:
			'An application I created at the height of the COVID-19 pandemic as part of the course content of a Dynamic Web 1 (JavaScript) course I was (and still am) teaching. We had just migrated to online learning, and I wanted to create an application that visualized what we were all feeling. I selected images that expressed those feelings, and synched the animations with the beat of music I chose. It was a rough time, but my students for that class were really amazing. I was truly inspired by them.',
		imgSrc: '/static/images/projects/img/webp/audio-visual-slider-app.webp',
		href: '/blog/projects/audio-visual-slider',
		tags: [
			'appendChild',
			', ',
			'css in js animation',
			', ',
			'css keyframes',
			', ',
			'css transitions',
			', ',
			'DOMContentLoaded event',
			', ',
			'event listeners',
			', ',
			'getElementsByTagName',
			', ',
			'innerhtml property',
			', ',
			'input event',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'node sass',
			', ',
			'web audio api',
		],
		more: 'https://interglobalmedia.github.io/basic-audio-visual-slider/',
	},
	{
		id: 17,
		title: 'OMDB API JS App',
		repository: 'https://github.com/interglobalmedia/omdb-api-js',
		website: 'https://interglobalmedia.github.io/omdb-api-js/',
		summary:
			'I originally created this client slide application using the OMDB API before creating my OMDB API Node.js version. After I created that one, and discovered potential built-in API errors in the Node.js version, I applied and transformed them into their client-side rendition. I felt it important to introduce my students to application error handling and thus a basic form of "testing", if you will.',
		imgSrc: '/static/images/projects/img/webp/omdb-api-js-app.webp',
		href: '/blog/projects/omdb-api-js-app',
		tags: [
			'ajax',
			', ',
			'api error handling',
			', ',
			'css in js',
			', ',
			'event listeners',
			', ',
			'getElementsByTagName',
			', ',
			'innerhtml property',
			', ',
			'javascript object',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'mousedown event',
			', ',
			'node sass',
			', ',
			'template string literal interpolation',
			', ',
			'this',
			', ',
			'vanilla javascript',
		],
		more: 'https://interglobalmedia.github.io/omdb-api-js/',
	},
	{
		id: 18,
		title: 'Monsters Rolodex 2022 (Classes)',
		repository: 'https://github.com/interglobalmedia/monsters-rolodex-2022',
		website: 'https://interglobalmedia.github.io/monsters-rolodex-2022/',
		summary:
			'I recently upgraded this project to React 18 using a top-level React class component AND functional components. The class component contains the state, and the other components contain the props. I use the react-lazy-load-image-component package to implement lazy loading of my Robohash images fetched from the Robohash API, some of which sometimes did not load immediately and left an image placeholder. Then I would literally have to manually clear the browser cache and reload the page to fetch those straggler images from the API. With the react-lazy-load-image-component package, images are loaded from the top down instead of the other way around, and this resulted in much faster and successful loading of all the images from the API.  In addition, I use yarn, create-react-app, try catch for error handling, async/await, scss modules using dart sass, and hosted the project on gh-pages.',
		imgSrc: '/static/images/projects/img/webp/monsters-rolodex-2022-app.webp',
		href: '/blog/projects/monsters-rolodex-2022-classes',
		tags: [
			'apis',
			', ',
			'api error handling',
			', ',
			'create-react-app',
			', ',
			'css grid',
			', ',
			'css in js',
			', ',
			'(dart) sass',
			', ',
			'es6 class constructor method',
			', ',
			'es6 superclass constructor method',
			', ',
			'fetch api',
			', ',
			'flexbox',
			', ',
			'javascript object',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'npx',
			', ',
			'react 18',
			', ',
			'react event handlers',
			', ',
			'react image lazy loading',
			', ',
			'react virtual dom',
			', ',
			'setState() method',
			', ',
			'template string literal interpolation',
			', ',
			'this',
			', ',
			'yarn',
		],
		more: 'https://interglobalmedia.github.io/monsters-rolodex-2022/',
	},
	{
		id: 19,
		title: 'Monsters Rolodex 2022 (Hooks)',
		repository: 'https://github.com/interglobalmedia/monsters-rolodex-2022',
		website:
			'https://interglobalmedia.github.io/monsters-rolodex-2022-functional-components-hooks/',
		summary:
			'I recently upgraded this project to React 18 using functional React components AND hooks. For state I use the useState hook, for side effects the useEffect Hook, and the useCallback hook to prevent infinite function calls to the function created to fetch the data from the JSONPlaceholder API.',
		imgSrc: '/static/images/projects/img/webp/monsters-rolodex-2022-app.webp',
		href: '/blog/projects/monsters-rolodex-2022-hooks',
		tags: [
			'apis',
			', ',
			'api error handling',
			', ',
			'create-react-app',
			', ',
			'css grid',
			', ',
			'css in js',
			', ',
			'(dart) sass',
			', ',
			'fetch api',
			', ',
			'flexbox',
			', ',
			'javascript object',
			', ',
			'manipulating the dom',
			', ',
			'mobile friendly',
			', ',
			'modern javascript',
			', ',
			'npx',
			', ',
			',react 18',
			', ',
			'react event handlers',
			', ',
			'react image lazy loading',
			', ',
			'react virtual dom',
			', ',
			'setState() method',
			', ',
			'template string literal interpolation',
			', ',
			'yarn',
		],
		more: 'https://interglobalmedia.github.io/monsters-rolodex-2022/',
	},
	{
		id: 20,
		title: 'Mobile first responsive HTML5 resume',
		repository:
			'https://github.com/interglobalmedia/responsive-html5-resume',
		website:
			'https://interglobalmedia.github.io/example-portfolio-site-namecheap/resume.html',
		summary:
			'During this final COMD2451 Web Design 1 class I am teaching/taught at the New York City College of Technology ( aka CityTech) in Brooklyn, I finally took out the time to refactor the CSS code for a mobile first HTML5 resume we built for our professional portfolio sites and make it a 100% mobile first deigned HTML5 page. I had originally refactored a responsive HTML5 resume I had found on Codepen, and made it as "dry" as possible within my time constraints. But since this was going to be my last class I was teaching at CityTech, I thought a great way of "wrapping things up" and "tying up loose ends" would be to make the design 100% "mobile first". Because the original CSS code was NOT. It was a great and challenging refactoring experience, and I also updated the slide deck for the class session to reflect those changes. It was also a great experience and take way for the students!',
		imgSrc: '/static/images/projects/img/webp/pexels-ready-made-3850512.webp',
		href: '/blog/projects/mobile-first-responsive-html5-resume',
		tags: [
			'html5',
			', ',
			'semantic html',
			', ',
			'seo',
			', ',
			'responsive design',
			', ',
			'mobile first design',
			', ',
			'stylelint',
			', ',
			'husky',
		],
		more: 'https://interglobalmedia.github.io/responsive-html5-resume/responsive-html5-resume.html#/',
	},
]

export default projectsData
