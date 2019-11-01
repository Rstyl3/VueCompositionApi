# Vue Composition Api pre-alpha

This project is to test how to work with the upcoming vue Composition Api. 

## Installation
Since Vue 3 is not out yet we need to install the compostion api as a dependency: 

```npm
npm install @vue/composition-api --save
```

## Usage
Add it to main.js 

```javascript
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
```

### Vue 2 normal way
Normally When you create a component you would write this on your script tag:

```javascript
export default {
    data() {
      return {
        val: '',
        breweries: [],
      };
    },
    methods: {
      async submitted() {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${this.val}`);
        const json = await response.json();
        this.breweries = json
      },
    },
}
```
### Compostion Api
And in the Composition Api you would do it like this:

```javascript
import {ref , reactive, toRefs} from '@vue/composition-api'

export default {
  setup() {
    const val = ref('')
    const breweries = reactive({list: []});    
    const submitted = async () => {
                      const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`);
                      const json = await response.json();
                      breweries.list = json;
                   };
    return {val, ...toRefs(breweries), submitted}; //this will expose it back to the template
  },
};
```
With Composition Api, you can start reusing your methods/computed functions on any component that needs it. For example:

<code>use-brew-list.js</code>

```javascript
import {ref , reactive, toRefs} from '@vue/composition-api'

export default function(){
    const val = ref('')
    const breweries = reactive({list: []});
    
    const submitted = async () => {
                      const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`);
                      const json = await response.json();
                      breweries.list = json;
                   };

    return {val, ...toRefs(breweries), submitted};
}
```
And we just import it to our component:

<code>Script tag</code>
```javascript
import useBrewList from '../composables/use-brew-list';

export default {
  setup() {
    const { val, list, submitted } = useBrewList();
    return { val, list, submitted }; //expose to template
  },
};
```

## Documentation


Source: https://github.com/vuejs/composition-api

Docs and explanation on why composition is better: https://vue-composition-api-rfc.netlify.com/#summary

API Reference: https://vue-composition-api-rfc.netlify.com/api.html#setup