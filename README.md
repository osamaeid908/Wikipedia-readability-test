<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>a plugin for <a href="https://github.com/spencermountain/wtf_wikipedia/">wtf_wikipedia</a></div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/wtf-plugin-wikivoyage">
    <img src="https://img.shields.io/npm/v/wtf-plugin-wikivoyage.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/wtf-plugin-wikivoyage/builds/wtf-plugin-wikivoyage.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/wtf-plugin-wikivoyage/master/builds/wtf-plugin-wikivoyage.min.js" />
  </a>
   <hr/>
</div>

<div align="center">
  <code>npm install wtf-plugin-wikivoyage</code>
</div>

A work-in-progress plugin that provides support for infoboxes and templates from the wikivoyage project.

```js
const wtf = require('wtf_wikipedia')
wtf.extend(require('wtf-plugin-wikivoyage'))
;(async () => {
  await wtf.fetch('Toronto','wikivoyage').json()
})()
```

MIT