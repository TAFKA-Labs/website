(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{317:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(413),{page:e.exports.default}})},413:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(47),o=6e4;function u(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();t.setSeconds(0,0);var r=t.getTime()%o;return n*o+r}var l=36e5,s=6e4,d=2,c={dateTimeDelimiter:/[T ]/,plainTime:/:/,timeZoneDelimiter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function m(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},r=null==n.additionalDigits?d:function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a=function(e){var t,n={},r=e.split(c.dateTimeDelimiter);c.plainTime.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],c.timeZoneDelimiter.test(n.date)&&(n.date=e.split(c.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length)));if(t){var a=c.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e),i=function(e,t){var n,r=c.YYY[t],a=c.YYYYY[t];if(n=c.YYYY.exec(e)||a.exec(e)){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=c.YY.exec(e)||r.exec(e)){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}(a.date,r),o=i.year,m=function(e,t){if(null===t)return null;var n,r,a,i;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=c.MM.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,y(t,a)?(r.setUTCFullYear(t,a),r):new Date(NaN);if(n=c.DDD.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return function(e,t){if(t<1)return!1;var n=v(e);if(n&&t>366)return!1;if(!n&&t>365)return!1;return!0}(t,o)?(r.setUTCFullYear(t,0,o),r):new Date(NaN)}if(n=c.MMDD.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var u=parseInt(n[2],10);return y(t,a,u)?(r.setUTCFullYear(t,a,u),r):new Date(NaN)}if(n=c.Www.exec(e))return i=parseInt(n[1],10)-1,p(t,i)?f(t,i):new Date(NaN);if(n=c.WwwD.exec(e)){i=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return p(t,i,l)?f(t,i,l):new Date(NaN)}return null}(i.restDateString,o);if(isNaN(m))return new Date(NaN);if(m){var h,g=m.getTime(),D=0;if(a.time&&(D=function(e){var t,n,r;if(t=c.HH.exec(e))return w(n=parseFloat(t[1].replace(",",".")))?n%24*l:NaN;if(t=c.HHMM.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),w(n,r)?n%24*l+r*s:NaN;if(t=c.HHMMSS.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return w(n,r,a)?n%24*l+r*s+1e3*a:NaN}return null}(a.time),isNaN(D)))return new Date(NaN);if(a.timezone){if(h=function(e){var t,n,r;if(t=c.timezoneZ.exec(e))return 0;if(t=c.timezoneHH.exec(e))return b(r=parseInt(t[2],10))?(n=r*l,"+"===t[1]?-n:n):NaN;if(t=c.timezoneHHMM.exec(e)){r=parseInt(t[2],10);var a=parseInt(t[3],10);return b(r,a)?(n=r*l+a*s,"+"===t[1]?-n:n):NaN}return 0}(a.timezone),isNaN(h))return new Date(NaN)}else{var M=g+D,N=new Date(M);h=u(N);var P=new Date(M);P.setDate(N.getDate()+1);var T=u(P)-u(N);T>0&&(h+=T)}return new Date(g+D+h)}return new Date(NaN)}function f(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}var h=[31,28,31,30,31,30,31,31,30,31,30,31],g=[31,29,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400==0||e%4==0&&e%100!=0}function y(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var r=v(e);if(r&&n>g[t])return!1;if(!r&&n>h[t])return!1}return!0}function p(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function w(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}function b(e,t){return null==t||!(t<0||t>59)}function D(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=m(e,n),a=m(t,n),i=r.getTime()-a.getTime();return i<0?-1:i>0?1:i}function M(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=function(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=m(e,n),a=m(t,n);return r.getTime()-a.getTime()}(e,t,n)/1e3;return r>0?Math.floor(r):Math.ceil(r)}function N(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=m(e,n),a=m(t,n),i=D(r,a,n),o=Math.abs(function(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=m(e,n),a=m(t,n);return 12*(r.getFullYear()-a.getFullYear())+(r.getMonth()-a.getMonth())}(r,a,n));r.setMonth(r.getMonth()-i*o);var u=i*(o-(D(r,a,n)===-i));return 0===u?0:u}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var Y={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function W(e){return function(t,n){var r=n||{},a=r.width?String(r.width):e.defaultWidth;return("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues?e.formattingValues[a]||e.formattingValues[e.defaultFormattingWidth]:e.values[a]||e.values[e.defaultWidth])[e.argumentCallback?e.argumentCallback(t):t]}}function S(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var l,s=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?d.findIndex(function(e){return e.test(r)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,function(e){return e.test(r)}),l=e.valueCallback?e.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:r.slice(s.length)}}}var j,k={formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof P[e]?P[e]:1===t?P[e].one:P[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:function(e,t,n,r){return x[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:W({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:W({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:W({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:W({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:W({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(j.matchPattern);if(!a)return null;var i=a[0],o=n.match(j.parsePattern);if(!o)return null;var u=j.valueCallback?j.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},F=1440,C=2520,E=43200,A=86400;function H(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=n||{},a=r.locale||k;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=D(e,t,r);if(isNaN(i))return"Invalid Date";var o,l,s=function(e){e=e||{};var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(r);s.addSuffix=Boolean(r.addSuffix),s.comparison=i,i>0?(o=m(t,r),l=m(e,r)):(o=m(e,r),l=m(t,r));var d,c=M(l,o,r),f=(u(l)-u(o))/1e3,h=Math.round((c-f)/60);if(h<2)return r.includeSeconds?c<5?a.formatDistance("lessThanXSeconds",5,s):c<10?a.formatDistance("lessThanXSeconds",10,s):c<20?a.formatDistance("lessThanXSeconds",20,s):c<40?a.formatDistance("halfAMinute",null,s):c<60?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",1,s):0===h?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",h,s);if(h<45)return a.formatDistance("xMinutes",h,s);if(h<90)return a.formatDistance("aboutXHours",1,s);if(h<F){var g=Math.round(h/60);return a.formatDistance("aboutXHours",g,s)}if(h<C)return a.formatDistance("xDays",1,s);if(h<E){var v=Math.round(h/F);return a.formatDistance("xDays",v,s)}if(h<A)return d=Math.round(h/E),a.formatDistance("aboutXMonths",d,s);if((d=N(l,o,r))<12){var y=Math.round(h/E);return a.formatDistance("xMonths",y,s)}var p=d%12,w=Math.floor(d/12);return p<3?a.formatDistance("aboutXYears",w,s):p<9?a.formatDistance("overXYears",w,s):a.formatDistance("almostXYears",w+1,s)}var q=n(9);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return V});var Q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListPosts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blogPosts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"EnumValue",value:"createdAt_DESC"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"abstract"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:125,source:{body:"query ListPosts {\n  blogPosts(orderBy: createdAt_DESC) {\n    id\n    createdAt\n    title\n    abstract\n    slug\n    tags\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,z(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement("div",{style:{maxWidth:600,margin:"0 auto"}},a.a.createElement(i.Query,{query:Q},function(e){var t=e.data,n=e.error,r=e.loading;return n?a.a.createElement(q.h,null,"Error:",JSON.stringify(n)):r?a.a.createElement(q.h,null,"Loading..."):t&&t.blogPosts?(console.log("data: ",t),t.blogPosts.map(function(e){return a.a.createElement(q.e,$({key:e.id,date:H(e.createdAt,new Date,{addSuffix:!0})},e))})):a.a.createElement(q.h,null,"Hmm, something went wrong. Try again?")}))}}])&&J(n.prototype,o),u&&J(n,u),t}()}},[[317,1,0]]]);