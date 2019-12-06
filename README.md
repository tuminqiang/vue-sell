# sell

> sell app

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
vue踩坑记录：页面在渲染数据时，当出现三层表达式时，如info.support[0],在vue渲染机制中，异步数据先显示初始数据，再显示带数据的数据，它先读取info对象，发现他还是一个空对象，这是页面就会报错了，然后会将数组中的数据渲染进来，此时的页面内容没有问题，但是会显示报错，报错信息类似：“Error in render: "TypeError: Cannot read property '0' of undefined。此时需要在渲染这个数据的父标签中加上"v-if=info.support"，这里的info.support是这里的数据指代，具体情况具体表示。不能使用v-show，因为v-show的机制是在加载后，根据条件显示是否加载。
项目中头部组件中的点击产生的商品优惠信息页，页面中的星星是单独抽离的额一个start组件，作为headerContain的子组件，里面的显示星星的方法比较"秀"!
踩坑：不要在router-link中用v-bind绑定属性，可以将需要的属性绑定在v-router对应的router-view中。
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
