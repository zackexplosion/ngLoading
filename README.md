# zackexplosion.ng-loading

simple angualrjs http loading effect

![](http://i.imgur.com/OzH16jz.gifv)

## installation

### via bower

```
bower install zackexplosion-ngLoading
```

in your angular module


### via rails-assets

source 'https://rails-assets.org' do
  gem 'rails-assets-zackexplosion-ngLoading'
end

in application.js

```
//= require zackexplosion-ngLoading
```

in application.css.scss

```
@import "zackexplosion-ngLoading";
```


remember the injection

```
angular
.module('blog', [
    'zackexplosion-ngLoading',
])
```

put this tag in your root html file, after body tag

```
<body>
<div id="zackexplosion-ng-loading" data-ng-show="zackexplosion_loading" class="whirly-loader">Loading…</div>
  
  
  
....
...

```




## development
```
npm install
```

```
gulp
```


then , open the bower with `http://localhost:8080/`


just try to edit the *sass/zackexplosion.ng-loading.scss* !
