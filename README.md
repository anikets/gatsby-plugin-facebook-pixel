# gatsby-plugin-facebook-pixel

Easily add Facebook Pixel to your Gatsby site. At this time, 'ViewContent' event is triggered via onRouteUpdate.

'ViewContent' can be disabled by setting `disableViewContent` as `true` in gatsby-config.js plugin options.

## Install

`npm i -S @aniket/gatsby-plugin-facebook-pixel`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "pixel id here",
      disableViewContent: false,
    },
  },
];
```
