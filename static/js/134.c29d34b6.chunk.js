"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{7567:function(e,t,n){var i=n(7689),a=n(184);t.Z=function(){var e=(0,i.s0)();return(0,a.jsxs)("div",{className:"movie-header",children:[(0,a.jsx)("p",{className:"movie-header__home",onClick:function(){e("/goit-react-hw-05-movies")},children:"Home"}),(0,a.jsx)("p",{className:"movie-header__movies",onClick:function(){e("/movies")},children:"Movies"})]})}},1134:function(e,t,n){n.r(t);var i=n(9439),a=n(7567),s=n(1243),c=n(2791),o=n(7689),r=n(184);t.default=function(){var e=(0,o.s0)(),t=(0,c.useState)(),n=(0,i.Z)(t,2),u=n[0],l=n[1],h=(0,c.useState)(),m=(0,i.Z)(h,2),v=m[0],f=m[1],d=(0,c.useState)(),_=(0,i.Z)(d,2),p=_[0],x=_[1];(0,c.useEffect)((function(){u&&s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("2d700e8ba323a7e3c0af25b2bd411244","&language=en-US&query=").concat(u,"&page=1&include_adult=false")).then((function(e){x(e.data.results)})).catch((function(e){console.error(e)}))}),[u]);return(0,r.jsxs)("div",{className:"Movies",children:[(0,r.jsx)(a.Z,{}),(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(v)},children:[(0,r.jsx)("input",{className:"movie-search",type:"text",onChange:function(e){e.preventDefault(),f(e.target.value)},onSubmit:function(e){e.preventDefault()}}),(0,r.jsx)("button",{type:"submit",children:"Search"})]}),p&&0===p.length&&(0,r.jsx)("p",{children:"No movies"}),(0,r.jsx)("ul",{className:"movie-search__list",children:p&&p.map((function(t){return(0,r.jsx)("li",{className:"movie-search__item",onClick:function(){return n=t.id,void e("/movies/".concat(n));var n},children:t.title},t.id)}))})]})}}}]);
//# sourceMappingURL=134.c29d34b6.chunk.js.map