# vue-js-boilerplate

### Main features:

<div>
  <ul>
    <li>Predefined Login/Register/404 page</li>
    <li>Predefined route guards</li>
    <li>Predefined auth service for handling Login/Register.</li>
    <li>Modular store</li>
    <li>Basic SCSS preconfiguration with utility classes</li>
    <li>Define global components in global-components.js</li>
    <li>Define global aliases using webpack in ./build/webpack.base.conf.js</li>
    <li><a href="https://kazupon.github.io/vue-i18n/" target="_blank">Vue i18n</a></li>
    <li><a href="https://logaretm.github.io/vee-validate/" target="_blank">Vee Validate</a> (Define additional rules in vee-validate.js)</li>
    <li>  <a href="https://euvl.github.io/vue-js-modal/" target="_blank">Vue Modal</a></li
  </ul> 
</div>

 ### Define a global alias:
  ```
     alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        '@apiServices': resolve('src/api-services')
      }
  ```
  
 ### Modal adding example:  
  ```
  import AppModal from '@/components/modals/AppModal'

  components: {
    AppModal
  },
  
  created () {
    this.ADD_LAYERED_MODALS({
      modals: [AppModal]
    })
  },

  methods: {
    ...mapMutations('modals', ['ADD_LAYERED_MODALS'])
  }
  ```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
