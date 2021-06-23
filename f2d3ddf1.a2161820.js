(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(203)),s=(n(204),{id:"index-caching",title:"Caching with Redis and Express Middleware",sidebar_label:"Caching",slug:"/develop/node/nodecrashcourse/caching"}),i={unversionedId:"develop/node/node-crash-course/caching/index-caching",id:"develop/node/node-crash-course/caching/index-caching",isDocsHomePage:!1,title:"Caching with Redis and Express Middleware",description:"We want to provide our users with up to date weather for each of our locations\u2026 so we've partnered with a company that provides a weather API.",source:"@site/docs/develop/node/node-crash-course/caching/index-caching.mdx",slug:"/develop/node/nodecrashcourse/caching",permalink:"/develop/node/nodecrashcourse/caching",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/caching/index-caching.mdx",version:"current",sidebar_label:"Caching",sidebar:"docs",previous:{title:"Managing Success with Redis",permalink:"/develop/node/nodecrashcourse/managingsuccess"},next:{title:"Scaling an Express Application with Redis as a Session Store",permalink:"/develop/node/nodecrashcourse/sessionstorage"}},c=[{value:"Hands-on Exercise",id:"hands-on-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],l={toc:c};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UtB_eHmnz1Y",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"We want to provide our users with up to date weather for each of our locations\u2026 so we've partnered with a company that provides a weather API."),Object(o.b)("p",null,"Our use of this API is metered and rate limited, so ideally we don't want to keep making the same requests to it over and over again.  This is wasteful, could cost us money, and will slow down responses to our users."),Object(o.b)("p",null,"Redis can be used as a cache to help here.  Keys in Redis can be given an expiry time, after which Redis will delete them.  We'll use this capability to cache the results of weather API calls as Redis Strings, keeping them for an hour to achieve a balance between users seeing the absolute latest weather report for a location and the load we're placing on the API provider's servers."),Object(o.b)("p",null,"We'll use an extra Express middleware function to check if we've got the weather for a location in the Redis cache, and only go get it from the API provider if necessary."),Object(o.b)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),Object(o.b)("p",null,"In this exercise, you'll use Postman to see how caching with Redis makes an API call faster while also saving us from incurring costs associated with using a third-party service."),Object(o.b)("p",null,"You'll be using the \"/location/:locationId/weather\" route for this exercise.  The code for this route takes a location ID, retrieves that location's latitude and longitude from its Redis Hash, then calls the OpenWeather API with those coordinates to retrieve weather data as a JSON document.  "),Object(o.b)("p",null,"This document is returned to the user and cached in Redis for an hour.  Subsequent requests for the same location's weather within the hour are handled by the middleware function that sits in front of this route's logic.  It returns the cached value without making a request to the OpenWeather servers."),Object(o.b)("p",null,"To use OpenWeather's API, you'll first need to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://home.openweathermap.org/users/sign_up"}),"sign up for a free API key on their website"),"."),Object(o.b)("p",null,"Once you have your API key, stop the API server component (Ctrl-C), and set an environment variable containing your key as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ export WEATHER_API_KEY=my_api_key\n")),Object(o.b)("p",null,"Then start the server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm run dev\n")),Object(o.b)("p",null,"Now start Postman, and click the + button to create a new request:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Postman Plus Button",src:n(641).default})),Object(o.b)("p",null,"Set the URL to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:8081/api/location/99/weather")," and make sure you have a GET request selected from the dropdown of available HTTP verbs:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Postman set URL and verb",src:n(642).default})),Object(o.b)("p",null,'Click "Send", and you should see the weather report JSON for location 99 appear in the "Response" panel.  Make a note of the overall response time that Postman reports for this request (509 milliseconds here):'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Origin Request",src:n(643).default})),Object(o.b)("p",null,"Take a look at the output from the API server in your terminal window, you should see that no value for location 99 was found in the cache, so the data was requested from OpenWeather and then added to the cache in Redis:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"debug: Cache miss for location 99 weather.\n")),Object(o.b)("p",null,'Click "Send" in Postman again to repeat the request... This time the response will be served from Redis and will be noticeably faster. No call to the OpenWeather API was made.  Note the difference in response times when the result comes from cache (just 6 milliseconds here!):'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Cached Request",src:n(644).default})),Object(o.b)("p",null,"Checking the output from the API server's terminal window shows that this request was served from cache:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"debug: Cache hit for location 99 weather.\n")),Object(o.b)("p",null,"Finally, take a look at the cached data in Redis.  Use RedisInsight or redis-cli to take a look at the key ",Object(o.b)("inlineCode",{parentName:"p"},"ncc:weather:99"),".  The ",Object(o.b)("inlineCode",{parentName:"p"},"TTL")," command shows the number of seconds remaining before Redis deletes this key from the cache:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ redis-cli\n127.0.0.1:6379> GET ncc:weather:99\n127.0.0.1:6379> TTL ncc:weather:99\n")),Object(o.b)("p",null,"If you're using RedisInsight, you can see the remaining TTL (in seconds) in the browser view:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"TTL in Redis Insight",src:n(645).default})),Object(o.b)("p",null,"The key ",Object(o.b)("inlineCode",{parentName:"p"},"ncc:weather:99")," will be deleted an hour after it was originally written to Redis, causing the next request after that deletion for location 99's weather to be a cache miss.  If you want to speed up this process, delete the key ",Object(o.b)("inlineCode",{parentName:"p"},"ncc:weather:99")," using the trash can icon in RedisInsight, or the ",Object(o.b)("inlineCode",{parentName:"p"},"DEL")," command in redis-cli:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> DEL ncc:weather:99\n")),Object(o.b)("p",null,"Then try your request in Postman again and see what happens."),Object(o.b)("h2",{id:"external-resources"},"External Resources"),Object(o.b)("p",null,"If you'd like to learn more about caching API responses in a Node.js application with Redis, check out Justin's excellent video:"),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hRecenOBYlE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(21),a=n(212);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,i=void 0!==s&&s,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},212:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},641:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman_plus_button-e6188dceb86e12bfe874c5dae8bd413a.png"},642:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman_set_url-0ac44c38b5f87ff1adf4a26766aa1877.png"},643:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman_origin_request-88b0b2c8e3771c81fc57e0f18cb8919a.png"},644:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/postman_cached_request-9a7559f082552c2a3f37d45095d74c2e.png"},645:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/insight_ttl-e270ed2349bed7d821b82e83cb9fe1bd.png"}}]);