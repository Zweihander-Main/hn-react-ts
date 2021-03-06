# HN-React-TS

> TypeScript implementation of Hacker News clone originally by [tylermcginnis](https://github.com/tylermcginnis/) with some useful additions. [Live demo](https://hn-react-ts.zweisolutions.com)

### Added features:

-   Nested comments
-   Collapsible comment trees
-   Infinite scrolling/lazy loading of post lists and comments
-   State handover between post lists and individual listings (reduces API requests)
-   Other available story type listings
-   Links back to original HN submissions
-   Added Jest snapshot testing for all of the components

### Tech stack:

-   TypeScript
-   React + Hooks
-   React-router
-   PostCSS
-   Jest
-   React Testing Library
-   Webpack

### Live demo:

[Available at hn-react-ts.zweisolutions.com](https://hn-react-ts.zweisolutions.com)

### Instructions

1. Run `npm install` in the main directory (package.json should be accurate)
    - Special Notes:
    - Source/Dev: app folder, Production: dist folder
2. Run one of the commands from the [Scripts](#scripts) section. You'll most likely want `npm run dev` for development and `npm run build` for production.

### Scripts

-   `npm run dev`: Create development build and serve it on dev server
-   `npm run build`: Build application for production (build directory: dist)
-   `npm run build-win`: Build application for production in Windows
-   `npm run test`: Run tests
-   `npm run testWatch`: Run tests in watch mode

### Current TODOs:

-   None as of now

## Available for Hire

I'm available for freelance, contracts, and consulting both remotely and in the Hudson Valley, NY (USA) area. [Some more about me](https://www.zweisolutions.com/about.html) and [what I can do for you](https://www.zweisolutions.com/services.html).

Feel free to drop me a message at:

```
hi [a+] zweisolutions {●} com
```

## License

[MIT](./LICENSE)
