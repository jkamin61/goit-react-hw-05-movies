"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[385],{7567:function(e,i,n){var a=n(7689),s=n(184);i.Z=function(){var e=(0,a.s0)();return(0,s.jsxs)("div",{className:"movie-header",children:[(0,s.jsx)("p",{className:"movie-header__home",onClick:function(){e("/goit-react-hw-05-movies")},children:"Home"}),(0,s.jsx)("p",{className:"movie-header__movies",onClick:function(){e("/movies")},children:"Movies"})]})}},6385:function(e,i,n){n.r(i),n.d(i,{default:function(){return l}});var a=n(9439),s=n(7689),t=n(2791),c=n(1243),o=n(184),r=function(){var e=(0,s.s0)(),i=(0,t.useState)([]),n=(0,a.Z)(i,2),r=n[0],u=n[1];(0,t.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("2d700e8ba323a7e3c0af25b2bd411244","&language=en-US&page=1")).then((function(e){u(e.data.results)}))}),[]);return(0,o.jsxs)("div",{className:"homepage",children:[(0,o.jsx)("h4",{className:"homepage__heading",children:"Trending today:"}),(0,o.jsx)("ul",{className:"homepage__list",children:r.map((function(i){return(0,o.jsx)("li",{className:"homepage__item",onClick:function(){return n=i.id,void e("/movies/".concat(n));var n},children:i.title},i.id)}))})]})},u=n(7567),l=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{}),(0,o.jsx)(r,{})]})}}}]);
//# sourceMappingURL=385.548439e1.chunk.js.map