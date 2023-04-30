"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[354],{8354:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var n=t(9439),s=t(7689),c=t(2791),a=t(1243),o=t(184),r=function(){var e=(0,s.UO)().movieId,i=(0,c.useState)([]),t=(0,n.Z)(i,2),r=t[0],d=t[1],l=(0,s.s0)();return(0,c.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("2d700e8ba323a7e3c0af25b2bd411244","&language=en-US")).then((function(e){d(e.data)}))}),[e]),(0,o.jsxs)("ul",{className:"cast-list",hidden:!0,children:[(0,o.jsx)("button",{onClick:function(){document.querySelector(".cast-list").hidden=!0,l("/movies/".concat(e))},children:"Close cast"}),r.cast&&r.cast.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:e.profile_path&&"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:"160px",height:"220px"}),(0,o.jsx)("p",{children:e.name}),(0,o.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))]})},d=t(3540),l=function(){var e=(0,c.useState)([]),i=(0,n.Z)(e,2),t=i[0],r=i[1],l=(0,s.UO)().movieId,h=(0,s.s0)();return(0,c.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/movie/".concat(l,"/reviews?api_key=").concat("2d700e8ba323a7e3c0af25b2bd411244","&language=en-US")).then((function(e){r(e.data)}))}),[l]),(0,o.jsxs)("ul",{className:"reviews",hidden:!0,children:[(0,o.jsx)("button",{onClick:function(){document.querySelector(".reviews").hidden=!0,h("/movies/".concat(l))},children:"Close reviews"}),t.results&&0===t.results.length&&(0,o.jsx)("p",{children:"No reviews"}),t.results&&t.results.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h5",{children:(0,d.ZP)(e.author)}),(0,o.jsx)("p",{children:(0,d.ZP)(e.content)})]},e.id)}))]})},h=t(7567),u=function(){var e=(0,c.useState)([]),i=(0,n.Z)(e,2),t=i[0],d=i[1],u=(0,s.UO)().movieId,m=(0,s.s0)();(0,c.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/movie/".concat(u,"?api_key=").concat("2d700e8ba323a7e3c0af25b2bd411244","&language=en-US")).then((function(e){d(e.data)}))}),[u]);return t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{}),(0,o.jsxs)("div",{className:"movie-abouts",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:t.poster_path&&"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title,className:"movie-abouts__image"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:t.title}),(0,o.jsx)("p",{children:"User Score: ".concat((10*t.vote_average).toFixed(2),"%")}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:t.overview}),(0,o.jsx)("h4",{children:"Genres"}),(0,o.jsx)("ul",{children:t.genres&&t.genres.map((function(e){return(0,o.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,o.jsxs)("div",{className:"additionalInfo",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"movie-abouts__additional-info",children:"Additional Information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:function(){document.querySelector(".cast-list").hidden=!1,document.querySelector(".reviews").hidden=!0,m("/movies/".concat(u,"/cast"))},children:"Cast"}),(0,o.jsx)("li",{onClick:function(){document.querySelector(".reviews").hidden=!1,document.querySelector(".cast-list").hidden=!0,m("/movies/".concat(u,"/reviews"))},children:"Reviews"})]})]}),(0,o.jsx)(r,{}),(0,o.jsx)(l,{})]})]})}},7567:function(e,i,t){var n=t(7689),s=t(184);i.Z=function(){var e=(0,n.s0)();return(0,s.jsxs)("div",{className:"movie-header",children:[(0,s.jsx)("p",{className:"movie-header__home",onClick:function(){e("/goit-react-hw-05-movies")},children:"Home"}),(0,s.jsx)("p",{className:"movie-header__movies",onClick:function(){e("/movies")},children:"Movies"})]})}}}]);
//# sourceMappingURL=354.5c663cde.chunk.js.map