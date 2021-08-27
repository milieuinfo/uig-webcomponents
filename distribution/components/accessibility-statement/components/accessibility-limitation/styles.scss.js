const styles = `:root {
  --vl-theme-primary-color: #ffe615;
  --vl-theme-primary-color-60: #fff073;
  --vl-theme-primary-color-70: #ffee5b;
  --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
  --vl-theme-fg-color: #333332;
  --vl-theme-fg-color-60: #858584;
  --vl-theme-fg-color-70: #707070;
}

.vl-vi::before, .vl-vi::after {
  font-family: "vlaanderen-icon" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  text-decoration: none;
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
}
.vl-vi.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg);
  vertical-align: middle;
}

.vl-vi-u-xs::before {
  font-size: 0.8rem;
}

.vl-vi-u-s::before {
  font-size: 1.3rem;
}

.vl-vi-u-m::before {
  font-size: 1.7rem;
}

.vl-vi-u-l::before {
  font-size: 2rem;
}

.vl-vi-u-xl::before {
  font-size: 2.2rem;
}

.vl-vi-u-90deg::before {
  display: inline-block;
  transform: rotate(90deg);
}

.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg);
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

strong {
  font-weight: 500;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  background: transparent;
}

img {
  max-width: 100%;
}

button::-moz-focus-inner {
  border: 0;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: inherit;
}

html {
  min-height: 100%;
  font-family: "Flanders Art Sans", sans-serif;
  font-size: 62.5%;
}

body {
  width: 100%;
  min-height: 100%;
  background: #fff;
  color: #333332;
  font-size: 1.8rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
}
@media screen and (max-width: 767px) {
  body {
    font-size: 1.6rem;
    line-height: 1.33;
  }
}
body::before {
  display: none;
  content: "large";
}
@media screen and (max-width: 1023px) {
  body::before {
    content: "medium";
  }
}
@media screen and (min-width: 767px) {
  body::before {
    content: "medium-up";
  }
}
@media screen and (max-width: 767px) {
  body::before {
    content: "small";
  }
}
@media screen and (max-width: 500px) {
  body::before {
    content: "xsmall";
  }
}
@media screen and (min-width: 1600px) {
  body::before {
    content: "xlarge";
  }
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Light.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Regular.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Medium.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Bold.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Light.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Light.woff") format("woff");
  font-weight: 300;
  font-style: italic;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Regular.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Regular.woff") format("woff");
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Medium.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Medium.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: "Flanders Art Sans";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Bold.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Bold.woff") format("woff");
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: "Flanders Art Serif";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Light.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Serif";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Regular.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Serif";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Medium.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Flanders Art Serif";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Bold.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "vlaanderen-icon";
  src: url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.23/vlaanderen-icon.woff2") format("woff2"), url("https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.23/vlaanderen-icon.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.vl-vi-add::before {
  content: "\f101";
}

.vl-vi-add--after::after {
  content: "\f101";
}

.vl-vi-addressbook::before {
  content: "\f102";
}

.vl-vi-addressbook--after::after {
  content: "\f102";
}

.vl-vi-airplane::before {
  content: "\f103";
}

.vl-vi-airplane--after::after {
  content: "\f103";
}

.vl-vi-alarm-silent::before {
  content: "\f104";
}

.vl-vi-alarm-silent--after::after {
  content: "\f104";
}

.vl-vi-alarm::before {
  content: "\f105";
}

.vl-vi-alarm--after::after {
  content: "\f105";
}

.vl-vi-alert-circle-filled::before {
  content: "\f106";
}

.vl-vi-alert-circle-filled--after::after {
  content: "\f106";
}

.vl-vi-alert-circle::before {
  content: "\f107";
}

.vl-vi-alert-circle--after::after {
  content: "\f107";
}

.vl-vi-alert-small::before {
  content: "\f108";
}

.vl-vi-alert-small--after::after {
  content: "\f108";
}

.vl-vi-alert-triangle-filled::before {
  content: "\f109";
}

.vl-vi-alert-triangle-filled--after::after {
  content: "\f109";
}

.vl-vi-alert-triangle::before {
  content: "\f10a";
}

.vl-vi-alert-triangle--after::after {
  content: "\f10a";
}

.vl-vi-align-center::before {
  content: "\f10b";
}

.vl-vi-align-center--after::after {
  content: "\f10b";
}

.vl-vi-align-justify::before {
  content: "\f10c";
}

.vl-vi-align-justify--after::after {
  content: "\f10c";
}

.vl-vi-align-left::before {
  content: "\f10d";
}

.vl-vi-align-left--after::after {
  content: "\f10d";
}

.vl-vi-align-right::before {
  content: "\f10e";
}

.vl-vi-align-right--after::after {
  content: "\f10e";
}

.vl-vi-area::before {
  content: "\f10f";
}

.vl-vi-area--after::after {
  content: "\f10f";
}

.vl-vi-arrange-1-to-9::before {
  content: "\f110";
}

.vl-vi-arrange-1-to-9--after::after {
  content: "\f110";
}

.vl-vi-arrange-9-to-1::before {
  content: "\f111";
}

.vl-vi-arrange-9-to-1--after::after {
  content: "\f111";
}

.vl-vi-arrange-a-to-z::before {
  content: "\f112";
}

.vl-vi-arrange-a-to-z--after::after {
  content: "\f112";
}

.vl-vi-arrange-amount-large-to-small::before {
  content: "\f113";
}

.vl-vi-arrange-amount-large-to-small--after::after {
  content: "\f113";
}

.vl-vi-arrange-amount-small-to-large::before {
  content: "\f114";
}

.vl-vi-arrange-amount-small-to-large--after::after {
  content: "\f114";
}

.vl-vi-arrange-z-to-a::before {
  content: "\f115";
}

.vl-vi-arrange-z-to-a--after::after {
  content: "\f115";
}

.vl-vi-arrow-bottom::before {
  content: "\f116";
}

.vl-vi-arrow-bottom--after::after {
  content: "\f116";
}

.vl-vi-arrow-down-fat::before {
  content: "\f117";
}

.vl-vi-arrow-down-fat--after::after {
  content: "\f117";
}

.vl-vi-arrow-down-thin::before {
  content: "\f118";
}

.vl-vi-arrow-down-thin--after::after {
  content: "\f118";
}

.vl-vi-arrow-down::before {
  content: "\f119";
}

.vl-vi-arrow-down--after::after {
  content: "\f119";
}

.vl-vi-arrow-freemove::before {
  content: "\f11a";
}

.vl-vi-arrow-freemove--after::after {
  content: "\f11a";
}

.vl-vi-arrow-left-fat::before {
  content: "\f11b";
}

.vl-vi-arrow-left-fat--after::after {
  content: "\f11b";
}

.vl-vi-arrow-left-thin::before {
  content: "\f11c";
}

.vl-vi-arrow-left-thin--after::after {
  content: "\f11c";
}

.vl-vi-arrow-left::before {
  content: "\f11d";
}

.vl-vi-arrow-left--after::after {
  content: "\f11d";
}

.vl-vi-arrow-right-fat::before {
  content: "\f11e";
}

.vl-vi-arrow-right-fat--after::after {
  content: "\f11e";
}

.vl-vi-arrow-right-thin::before {
  content: "\f11f";
}

.vl-vi-arrow-right-thin--after::after {
  content: "\f11f";
}

.vl-vi-arrow-right::before {
  content: "\f120";
}

.vl-vi-arrow-right--after::after {
  content: "\f120";
}

.vl-vi-arrow-thin::before {
  content: "\f121";
}

.vl-vi-arrow-thin--after::after {
  content: "\f121";
}

.vl-vi-arrow-up-fat::before {
  content: "\f122";
}

.vl-vi-arrow-up-fat--after::after {
  content: "\f122";
}

.vl-vi-arrow-up-thin::before {
  content: "\f123";
}

.vl-vi-arrow-up-thin--after::after {
  content: "\f123";
}

.vl-vi-arrow-up::before {
  content: "\f124";
}

.vl-vi-arrow-up--after::after {
  content: "\f124";
}

.vl-vi-arrow::before {
  content: "\f125";
}

.vl-vi-arrow--after::after {
  content: "\f125";
}

.vl-vi-asterisk::before {
  content: "\f126";
}

.vl-vi-asterisk--after::after {
  content: "\f126";
}

.vl-vi-audio-description::before {
  content: "\f127";
}

.vl-vi-audio-description--after::after {
  content: "\f127";
}

.vl-vi-back::before {
  content: "\f128";
}

.vl-vi-back--after::after {
  content: "\f128";
}

.vl-vi-ban::before {
  content: "\f129";
}

.vl-vi-ban--after::after {
  content: "\f129";
}

.vl-vi-bell::before {
  content: "\f12a";
}

.vl-vi-bell--after::after {
  content: "\f12a";
}

.vl-vi-bike-closed-criterium::before {
  content: "\f12b";
}

.vl-vi-bike-closed-criterium--after::after {
  content: "\f12b";
}

.vl-vi-bike-open-criterium::before {
  content: "\f12c";
}

.vl-vi-bike-open-criterium--after::after {
  content: "\f12c";
}

.vl-vi-bike::before {
  content: "\f12d";
}

.vl-vi-bike--after::after {
  content: "\f12d";
}

.vl-vi-bin::before {
  content: "\f12e";
}

.vl-vi-bin--after::after {
  content: "\f12e";
}

.vl-vi-binoculars::before {
  content: "\f12f";
}

.vl-vi-binoculars--after::after {
  content: "\f12f";
}

.vl-vi-boat-ship::before {
  content: "\f130";
}

.vl-vi-boat-ship--after::after {
  content: "\f130";
}

.vl-vi-bold::before {
  content: "\f131";
}

.vl-vi-bold--after::after {
  content: "\f131";
}

.vl-vi-book::before {
  content: "\f132";
}

.vl-vi-book--after::after {
  content: "\f132";
}

.vl-vi-bookmark-alt-1::before {
  content: "\f133";
}

.vl-vi-bookmark-alt-1--after::after {
  content: "\f133";
}

.vl-vi-bookmark-alt-2::before {
  content: "\f134";
}

.vl-vi-bookmark-alt-2--after::after {
  content: "\f134";
}

.vl-vi-bookmark::before {
  content: "\f135";
}

.vl-vi-bookmark--after::after {
  content: "\f135";
}

.vl-vi-breadcrumb-separator::before {
  content: "\f136";
}

.vl-vi-breadcrumb-separator--after::after {
  content: "\f136";
}

.vl-vi-briefcase::before {
  content: "\f137";
}

.vl-vi-briefcase--after::after {
  content: "\f137";
}

.vl-vi-building-big::before {
  content: "\f138";
}

.vl-vi-building-big--after::after {
  content: "\f138";
}

.vl-vi-building::before {
  content: "\f139";
}

.vl-vi-building--after::after {
  content: "\f139";
}

.vl-vi-bullet::before {
  content: "\f13a";
}

.vl-vi-bullet--after::after {
  content: "\f13a";
}

.vl-vi-burger-alt::before {
  content: "\f13b";
}

.vl-vi-burger-alt--after::after {
  content: "\f13b";
}

.vl-vi-burger::before {
  content: "\f13c";
}

.vl-vi-burger--after::after {
  content: "\f13c";
}

.vl-vi-burgerprofiel::before {
  content: "\f13d";
}

.vl-vi-burgerprofiel--after::after {
  content: "\f13d";
}

.vl-vi-bus::before {
  content: "\f13e";
}

.vl-vi-bus--after::after {
  content: "\f13e";
}

.vl-vi-business-graph-bar::before {
  content: "\f13f";
}

.vl-vi-business-graph-bar--after::after {
  content: "\f13f";
}

.vl-vi-business-graph-pie::before {
  content: "\f140";
}

.vl-vi-business-graph-pie--after::after {
  content: "\f140";
}

.vl-vi-cake::before {
  content: "\f141";
}

.vl-vi-cake--after::after {
  content: "\f141";
}

.vl-vi-calculator::before {
  content: "\f142";
}

.vl-vi-calculator--after::after {
  content: "\f142";
}

.vl-vi-calendar-add::before {
  content: "\f143";
}

.vl-vi-calendar-add--after::after {
  content: "\f143";
}

.vl-vi-calendar-check::before {
  content: "\f144";
}

.vl-vi-calendar-check--after::after {
  content: "\f144";
}

.vl-vi-calendar-subtract::before {
  content: "\f145";
}

.vl-vi-calendar-subtract--after::after {
  content: "\f145";
}

.vl-vi-calendar::before {
  content: "\f146";
}

.vl-vi-calendar--after::after {
  content: "\f146";
}

.vl-vi-calendar_check::before {
  content: "\f147";
}

.vl-vi-calendar_check--after::after {
  content: "\f147";
}

.vl-vi-calendar_date::before {
  content: "\f148";
}

.vl-vi-calendar_date--after::after {
  content: "\f148";
}

.vl-vi-camera::before {
  content: "\f149";
}

.vl-vi-camera--after::after {
  content: "\f149";
}

.vl-vi-car::before {
  content: "\f14a";
}

.vl-vi-car--after::after {
  content: "\f14a";
}

.vl-vi-chat-bubble-square-alt::before {
  content: "\f14b";
}

.vl-vi-chat-bubble-square-alt--after::after {
  content: "\f14b";
}

.vl-vi-chat-bubble-square::before {
  content: "\f14c";
}

.vl-vi-chat-bubble-square--after::after {
  content: "\f14c";
}

.vl-vi-chat-help::before {
  content: "\f14d";
}

.vl-vi-chat-help--after::after {
  content: "\f14d";
}

.vl-vi-chat::before {
  content: "\f14e";
}

.vl-vi-chat--after::after {
  content: "\f14e";
}

.vl-vi-check-circle::before {
  content: "\f14f";
}

.vl-vi-check-circle--after::after {
  content: "\f14f";
}

.vl-vi-check-filled::before {
  content: "\f150";
}

.vl-vi-check-filled--after::after {
  content: "\f150";
}

.vl-vi-check-small::before {
  content: "\f151";
}

.vl-vi-check-small--after::after {
  content: "\f151";
}

.vl-vi-check-thin::before {
  content: "\f152";
}

.vl-vi-check-thin--after::after {
  content: "\f152";
}

.vl-vi-check::before {
  content: "\f153";
}

.vl-vi-check--after::after {
  content: "\f153";
}

.vl-vi-child::before {
  content: "\f154";
}

.vl-vi-child--after::after {
  content: "\f154";
}

.vl-vi-clock::before {
  content: "\f155";
}

.vl-vi-clock--after::after {
  content: "\f155";
}

.vl-vi-close-light::before {
  content: "\f156";
}

.vl-vi-close-light--after::after {
  content: "\f156";
}

.vl-vi-close-small::before {
  content: "\f157";
}

.vl-vi-close-small--after::after {
  content: "\f157";
}

.vl-vi-close::before {
  content: "\f158";
}

.vl-vi-close--after::after {
  content: "\f158";
}

.vl-vi-cloud-download::before {
  content: "\f159";
}

.vl-vi-cloud-download--after::after {
  content: "\f159";
}

.vl-vi-cloud-upload::before {
  content: "\f15a";
}

.vl-vi-cloud-upload--after::after {
  content: "\f15a";
}

.vl-vi-cloud::before {
  content: "\f15b";
}

.vl-vi-cloud--after::after {
  content: "\f15b";
}

.vl-vi-code-branch::before {
  content: "\f15c";
}

.vl-vi-code-branch--after::after {
  content: "\f15c";
}

.vl-vi-coffee-cup::before {
  content: "\f15d";
}

.vl-vi-coffee-cup--after::after {
  content: "\f15d";
}

.vl-vi-cog::before {
  content: "\f15e";
}

.vl-vi-cog--after::after {
  content: "\f15e";
}

.vl-vi-coin-stack::before {
  content: "\f15f";
}

.vl-vi-coin-stack--after::after {
  content: "\f15f";
}

.vl-vi-compass::before {
  content: "\f160";
}

.vl-vi-compass--after::after {
  content: "\f160";
}

.vl-vi-computer-screen::before {
  content: "\f161";
}

.vl-vi-computer-screen--after::after {
  content: "\f161";
}

.vl-vi-confluence::before {
  content: "\f162";
}

.vl-vi-confluence--after::after {
  content: "\f162";
}

.vl-vi-construction-crane::before {
  content: "\f163";
}

.vl-vi-construction-crane--after::after {
  content: "\f163";
}

.vl-vi-construction-shack::before {
  content: "\f164";
}

.vl-vi-construction-shack--after::after {
  content: "\f164";
}

.vl-vi-contacts::before {
  content: "\f165";
}

.vl-vi-contacts--after::after {
  content: "\f165";
}

.vl-vi-content-book-favorite-star::before {
  content: "\f166";
}

.vl-vi-content-book-favorite-star--after::after {
  content: "\f166";
}

.vl-vi-content-book::before {
  content: "\f167";
}

.vl-vi-content-book--after::after {
  content: "\f167";
}

.vl-vi-content-box::before {
  content: "\f168";
}

.vl-vi-content-box--after::after {
  content: "\f168";
}

.vl-vi-content-filter::before {
  content: "\f169";
}

.vl-vi-content-filter--after::after {
  content: "\f169";
}

.vl-vi-content-note::before {
  content: "\f16a";
}

.vl-vi-content-note--after::after {
  content: "\f16a";
}

.vl-vi-content-view-column::before {
  content: "\f16b";
}

.vl-vi-content-view-column--after::after {
  content: "\f16b";
}

.vl-vi-contract::before {
  content: "\f16c";
}

.vl-vi-contract--after::after {
  content: "\f16c";
}

.vl-vi-control-cross-over::before {
  content: "\f16d";
}

.vl-vi-control-cross-over--after::after {
  content: "\f16d";
}

.vl-vi-copy-paste::before {
  content: "\f16e";
}

.vl-vi-copy-paste--after::after {
  content: "\f16e";
}

.vl-vi-copyright::before {
  content: "\f16f";
}

.vl-vi-copyright--after::after {
  content: "\f16f";
}

.vl-vi-credit-card::before {
  content: "\f170";
}

.vl-vi-credit-card--after::after {
  content: "\f170";
}

.vl-vi-crop::before {
  content: "\f171";
}

.vl-vi-crop--after::after {
  content: "\f171";
}

.vl-vi-cross-thin::before {
  content: "\f172";
}

.vl-vi-cross-thin--after::after {
  content: "\f172";
}

.vl-vi-cross::before {
  content: "\f173";
}

.vl-vi-cross--after::after {
  content: "\f173";
}

.vl-vi-cursor-arrow-big::before {
  content: "\f174";
}

.vl-vi-cursor-arrow-big--after::after {
  content: "\f174";
}

.vl-vi-cursor-arrow-small::before {
  content: "\f175";
}

.vl-vi-cursor-arrow-small--after::after {
  content: "\f175";
}

.vl-vi-cursor-finger-down::before {
  content: "\f176";
}

.vl-vi-cursor-finger-down--after::after {
  content: "\f176";
}

.vl-vi-cursor-finger-left::before {
  content: "\f177";
}

.vl-vi-cursor-finger-left--after::after {
  content: "\f177";
}

.vl-vi-cursor-finger-right::before {
  content: "\f178";
}

.vl-vi-cursor-finger-right--after::after {
  content: "\f178";
}

.vl-vi-cursor-finger-up::before {
  content: "\f179";
}

.vl-vi-cursor-finger-up--after::after {
  content: "\f179";
}

.vl-vi-cursor-hand::before {
  content: "\f17a";
}

.vl-vi-cursor-hand--after::after {
  content: "\f17a";
}

.vl-vi-cursor-hold::before {
  content: "\f17b";
}

.vl-vi-cursor-hold--after::after {
  content: "\f17b";
}

.vl-vi-dashboard::before {
  content: "\f17c";
}

.vl-vi-dashboard--after::after {
  content: "\f17c";
}

.vl-vi-data-download::before {
  content: "\f17d";
}

.vl-vi-data-download--after::after {
  content: "\f17d";
}

.vl-vi-data-transfer::before {
  content: "\f17e";
}

.vl-vi-data-transfer--after::after {
  content: "\f17e";
}

.vl-vi-data-upload::before {
  content: "\f17f";
}

.vl-vi-data-upload--after::after {
  content: "\f17f";
}

.vl-vi-demonstration::before {
  content: "\f180";
}

.vl-vi-demonstration--after::after {
  content: "\f180";
}

.vl-vi-diagram::before {
  content: "\f181";
}

.vl-vi-diagram--after::after {
  content: "\f181";
}

.vl-vi-direction-sign::before {
  content: "\f182";
}

.vl-vi-direction-sign--after::after {
  content: "\f182";
}

.vl-vi-document-small::before {
  content: "\f183";
}

.vl-vi-document-small--after::after {
  content: "\f183";
}

.vl-vi-document::before {
  content: "\f184";
}

.vl-vi-document--after::after {
  content: "\f184";
}

.vl-vi-double-arrow::before {
  content: "\f185";
}

.vl-vi-double-arrow--after::after {
  content: "\f185";
}

.vl-vi-download-harddisk::before {
  content: "\f186";
}

.vl-vi-download-harddisk--after::after {
  content: "\f186";
}

.vl-vi-drawer-down::before {
  content: "\f187";
}

.vl-vi-drawer-down--after::after {
  content: "\f187";
}

.vl-vi-drawer::before {
  content: "\f188";
}

.vl-vi-drawer--after::after {
  content: "\f188";
}

.vl-vi-edit::before {
  content: "\f189";
}

.vl-vi-edit--after::after {
  content: "\f189";
}

.vl-vi-email-read::before {
  content: "\f18a";
}

.vl-vi-email-read--after::after {
  content: "\f18a";
}

.vl-vi-email::before {
  content: "\f18b";
}

.vl-vi-email--after::after {
  content: "\f18b";
}

.vl-vi-enlarge::before {
  content: "\f18c";
}

.vl-vi-enlarge--after::after {
  content: "\f18c";
}

.vl-vi-envelope::before {
  content: "\f18d";
}

.vl-vi-envelope--after::after {
  content: "\f18d";
}

.vl-vi-expand-horizontal-alt::before {
  content: "\f18e";
}

.vl-vi-expand-horizontal-alt--after::after {
  content: "\f18e";
}

.vl-vi-expand-horizontal::before {
  content: "\f18f";
}

.vl-vi-expand-horizontal--after::after {
  content: "\f18f";
}

.vl-vi-expand-vertical::before {
  content: "\f190";
}

.vl-vi-expand-vertical--after::after {
  content: "\f190";
}

.vl-vi-expand::before {
  content: "\f191";
}

.vl-vi-expand--after::after {
  content: "\f191";
}

.vl-vi-external::before {
  content: "\f192";
}

.vl-vi-external--after::after {
  content: "\f192";
}

.vl-vi-facebook::before {
  content: "\f193";
}

.vl-vi-facebook--after::after {
  content: "\f193";
}

.vl-vi-faq::before {
  content: "\f194";
}

.vl-vi-faq--after::after {
  content: "\f194";
}

.vl-vi-fastback::before {
  content: "\f195";
}

.vl-vi-fastback--after::after {
  content: "\f195";
}

.vl-vi-fastforward::before {
  content: "\f196";
}

.vl-vi-fastforward--after::after {
  content: "\f196";
}

.vl-vi-fax::before {
  content: "\f197";
}

.vl-vi-fax--after::after {
  content: "\f197";
}

.vl-vi-field::before {
  content: "\f198";
}

.vl-vi-field--after::after {
  content: "\f198";
}

.vl-vi-file-audio::before {
  content: "\f199";
}

.vl-vi-file-audio--after::after {
  content: "\f199";
}

.vl-vi-file-copy::before {
  content: "\f19a";
}

.vl-vi-file-copy--after::after {
  content: "\f19a";
}

.vl-vi-file-download::before {
  content: "\f19b";
}

.vl-vi-file-download--after::after {
  content: "\f19b";
}

.vl-vi-file-edit::before {
  content: "\f19c";
}

.vl-vi-file-edit--after::after {
  content: "\f19c";
}

.vl-vi-file-image::before {
  content: "\f19d";
}

.vl-vi-file-image--after::after {
  content: "\f19d";
}

.vl-vi-file-new::before {
  content: "\f19e";
}

.vl-vi-file-new--after::after {
  content: "\f19e";
}

.vl-vi-file-office-doc::before {
  content: "\f19f";
}

.vl-vi-file-office-doc--after::after {
  content: "\f19f";
}

.vl-vi-file-office-pdf::before {
  content: "\f1a0";
}

.vl-vi-file-office-pdf--after::after {
  content: "\f1a0";
}

.vl-vi-file-office-ppt::before {
  content: "\f1a1";
}

.vl-vi-file-office-ppt--after::after {
  content: "\f1a1";
}

.vl-vi-file-office-xls::before {
  content: "\f1a2";
}

.vl-vi-file-office-xls--after::after {
  content: "\f1a2";
}

.vl-vi-file-swap::before {
  content: "\f1a3";
}

.vl-vi-file-swap--after::after {
  content: "\f1a3";
}

.vl-vi-file-tasks-check::before {
  content: "\f1a4";
}

.vl-vi-file-tasks-check--after::after {
  content: "\f1a4";
}

.vl-vi-file-upload::before {
  content: "\f1a5";
}

.vl-vi-file-upload--after::after {
  content: "\f1a5";
}

.vl-vi-file-video::before {
  content: "\f1a6";
}

.vl-vi-file-video--after::after {
  content: "\f1a6";
}

.vl-vi-file-zipped-new::before {
  content: "\f1a7";
}

.vl-vi-file-zipped-new--after::after {
  content: "\f1a7";
}

.vl-vi-file-zipped-vice::before {
  content: "\f1a8";
}

.vl-vi-file-zipped-vice--after::after {
  content: "\f1a8";
}

.vl-vi-file::before {
  content: "\f1a9";
}

.vl-vi-file--after::after {
  content: "\f1a9";
}

.vl-vi-files-coding::before {
  content: "\f1aa";
}

.vl-vi-files-coding--after::after {
  content: "\f1aa";
}

.vl-vi-film::before {
  content: "\f1ab";
}

.vl-vi-film--after::after {
  content: "\f1ab";
}

.vl-vi-flickr::before {
  content: "\f1ac";
}

.vl-vi-flickr--after::after {
  content: "\f1ac";
}

.vl-vi-focus::before {
  content: "\f1ad";
}

.vl-vi-focus--after::after {
  content: "\f1ad";
}

.vl-vi-folder::before {
  content: "\f1ae";
}

.vl-vi-folder--after::after {
  content: "\f1ae";
}

.vl-vi-font::before {
  content: "\f1af";
}

.vl-vi-font--after::after {
  content: "\f1af";
}

.vl-vi-gender-female-male::before {
  content: "\f1b0";
}

.vl-vi-gender-female-male--after::after {
  content: "\f1b0";
}

.vl-vi-gender-female::before {
  content: "\f1b1";
}

.vl-vi-gender-female--after::after {
  content: "\f1b1";
}

.vl-vi-gender-male::before {
  content: "\f1b2";
}

.vl-vi-gender-male--after::after {
  content: "\f1b2";
}

.vl-vi-gender-transgender::before {
  content: "\f1b3";
}

.vl-vi-gender-transgender--after::after {
  content: "\f1b3";
}

.vl-vi-globe::before {
  content: "\f1b4";
}

.vl-vi-globe--after::after {
  content: "\f1b4";
}

.vl-vi-googleplus::before {
  content: "\f1b5";
}

.vl-vi-googleplus--after::after {
  content: "\f1b5";
}

.vl-vi-graduate::before {
  content: "\f1b6";
}

.vl-vi-graduate--after::after {
  content: "\f1b6";
}

.vl-vi-graduation-hat::before {
  content: "\f1b7";
}

.vl-vi-graduation-hat--after::after {
  content: "\f1b7";
}

.vl-vi-hammer::before {
  content: "\f1b8";
}

.vl-vi-hammer--after::after {
  content: "\f1b8";
}

.vl-vi-hand-hint::before {
  content: "\f1b9";
}

.vl-vi-hand-hint--after::after {
  content: "\f1b9";
}

.vl-vi-harddisk::before {
  content: "\f1ba";
}

.vl-vi-harddisk--after::after {
  content: "\f1ba";
}

.vl-vi-headphone::before {
  content: "\f1bb";
}

.vl-vi-headphone--after::after {
  content: "\f1bb";
}

.vl-vi-health-first-aid-kit::before {
  content: "\f1bc";
}

.vl-vi-health-first-aid-kit--after::after {
  content: "\f1bc";
}

.vl-vi-health-heart-pulse::before {
  content: "\f1bd";
}

.vl-vi-health-heart-pulse--after::after {
  content: "\f1bd";
}

.vl-vi-health-hospital::before {
  content: "\f1be";
}

.vl-vi-health-hospital--after::after {
  content: "\f1be";
}

.vl-vi-hide::before {
  content: "\f1bf";
}

.vl-vi-hide--after::after {
  content: "\f1bf";
}

.vl-vi-hierarchy::before {
  content: "\f1c0";
}

.vl-vi-hierarchy--after::after {
  content: "\f1c0";
}

.vl-vi-hotel-bath-shower::before {
  content: "\f1c1";
}

.vl-vi-hotel-bath-shower--after::after {
  content: "\f1c1";
}

.vl-vi-hotel-bed::before {
  content: "\f1c2";
}

.vl-vi-hotel-bed--after::after {
  content: "\f1c2";
}

.vl-vi-hotel-fire-alarm::before {
  content: "\f1c3";
}

.vl-vi-hotel-fire-alarm--after::after {
  content: "\f1c3";
}

.vl-vi-hotel-shower::before {
  content: "\f1c4";
}

.vl-vi-hotel-shower--after::after {
  content: "\f1c4";
}

.vl-vi-hourglass::before {
  content: "\f1c5";
}

.vl-vi-hourglass--after::after {
  content: "\f1c5";
}

.vl-vi-id-card::before {
  content: "\f1c6";
}

.vl-vi-id-card--after::after {
  content: "\f1c6";
}

.vl-vi-id::before {
  content: "\f1c7";
}

.vl-vi-id--after::after {
  content: "\f1c7";
}

.vl-vi-images-copy::before {
  content: "\f1c8";
}

.vl-vi-images-copy--after::after {
  content: "\f1c8";
}

.vl-vi-images::before {
  content: "\f1c9";
}

.vl-vi-images--after::after {
  content: "\f1c9";
}

.vl-vi-inbox::before {
  content: "\f1ca";
}

.vl-vi-inbox--after::after {
  content: "\f1ca";
}

.vl-vi-indent-left::before {
  content: "\f1cb";
}

.vl-vi-indent-left--after::after {
  content: "\f1cb";
}

.vl-vi-indent-right::before {
  content: "\f1cc";
}

.vl-vi-indent-right--after::after {
  content: "\f1cc";
}

.vl-vi-info-circle::before {
  content: "\f1cd";
}

.vl-vi-info-circle--after::after {
  content: "\f1cd";
}

.vl-vi-info-filled::before {
  content: "\f1ce";
}

.vl-vi-info-filled--after::after {
  content: "\f1ce";
}

.vl-vi-info-small::before {
  content: "\f1cf";
}

.vl-vi-info-small--after::after {
  content: "\f1cf";
}

.vl-vi-info::before {
  content: "\f1d0";
}

.vl-vi-info--after::after {
  content: "\f1d0";
}

.vl-vi-instagram::before {
  content: "\f1d1";
}

.vl-vi-instagram--after::after {
  content: "\f1d1";
}

.vl-vi-ironing::before {
  content: "\f1d2";
}

.vl-vi-ironing--after::after {
  content: "\f1d2";
}

.vl-vi-italic::before {
  content: "\f1d3";
}

.vl-vi-italic--after::after {
  content: "\f1d3";
}

.vl-vi-jira::before {
  content: "\f1d4";
}

.vl-vi-jira--after::after {
  content: "\f1d4";
}

.vl-vi-key::before {
  content: "\f1d5";
}

.vl-vi-key--after::after {
  content: "\f1d5";
}

.vl-vi-keyboard::before {
  content: "\f1d6";
}

.vl-vi-keyboard--after::after {
  content: "\f1d6";
}

.vl-vi-laptop::before {
  content: "\f1d7";
}

.vl-vi-laptop--after::after {
  content: "\f1d7";
}

.vl-vi-lightbulb::before {
  content: "\f1d8";
}

.vl-vi-lightbulb--after::after {
  content: "\f1d8";
}

.vl-vi-link-broken::before {
  content: "\f1d9";
}

.vl-vi-link-broken--after::after {
  content: "\f1d9";
}

.vl-vi-link::before {
  content: "\f1da";
}

.vl-vi-link--after::after {
  content: "\f1da";
}

.vl-vi-linkedin::before {
  content: "\f1db";
}

.vl-vi-linkedin--after::after {
  content: "\f1db";
}

.vl-vi-list-add::before {
  content: "\f1dc";
}

.vl-vi-list-add--after::after {
  content: "\f1dc";
}

.vl-vi-list-bullets-alt::before {
  content: "\f1dd";
}

.vl-vi-list-bullets-alt--after::after {
  content: "\f1dd";
}

.vl-vi-list-bullets::before {
  content: "\f1de";
}

.vl-vi-list-bullets--after::after {
  content: "\f1de";
}

.vl-vi-list-numbers::before {
  content: "\f1df";
}

.vl-vi-list-numbers--after::after {
  content: "\f1df";
}

.vl-vi-list::before {
  content: "\f1e0";
}

.vl-vi-list--after::after {
  content: "\f1e0";
}

.vl-vi-location-direction-arrow::before {
  content: "\f1e1";
}

.vl-vi-location-direction-arrow--after::after {
  content: "\f1e1";
}

.vl-vi-location-gps::before {
  content: "\f1e2";
}

.vl-vi-location-gps--after::after {
  content: "\f1e2";
}

.vl-vi-location-map::before {
  content: "\f1e3";
}

.vl-vi-location-map--after::after {
  content: "\f1e3";
}

.vl-vi-location::before {
  content: "\f1e4";
}

.vl-vi-location--after::after {
  content: "\f1e4";
}

.vl-vi-lock-unlock::before {
  content: "\f1e5";
}

.vl-vi-lock-unlock--after::after {
  content: "\f1e5";
}

.vl-vi-lock::before {
  content: "\f1e6";
}

.vl-vi-lock--after::after {
  content: "\f1e6";
}

.vl-vi-login::before {
  content: "\f1e7";
}

.vl-vi-login--after::after {
  content: "\f1e7";
}

.vl-vi-logout::before {
  content: "\f1e8";
}

.vl-vi-logout--after::after {
  content: "\f1e8";
}

.vl-vi-long-arrow::before {
  content: "\f1e9";
}

.vl-vi-long-arrow--after::after {
  content: "\f1e9";
}

.vl-vi-magic-wand::before {
  content: "\f1ea";
}

.vl-vi-magic-wand--after::after {
  content: "\f1ea";
}

.vl-vi-magnifier::before {
  content: "\f1eb";
}

.vl-vi-magnifier--after::after {
  content: "\f1eb";
}

.vl-vi-mail::before {
  content: "\f1ec";
}

.vl-vi-mail--after::after {
  content: "\f1ec";
}

.vl-vi-market::before {
  content: "\f1ed";
}

.vl-vi-market--after::after {
  content: "\f1ed";
}

.vl-vi-menu::before {
  content: "\f1ee";
}

.vl-vi-menu--after::after {
  content: "\f1ee";
}

.vl-vi-messenger::before {
  content: "\f1ef";
}

.vl-vi-messenger--after::after {
  content: "\f1ef";
}

.vl-vi-microphone-off::before {
  content: "\f1f0";
}

.vl-vi-microphone-off--after::after {
  content: "\f1f0";
}

.vl-vi-microphone::before {
  content: "\f1f1";
}

.vl-vi-microphone--after::after {
  content: "\f1f1";
}

.vl-vi-minus-circle::before {
  content: "\f1f2";
}

.vl-vi-minus-circle--after::after {
  content: "\f1f2";
}

.vl-vi-minus::before {
  content: "\f1f3";
}

.vl-vi-minus--after::after {
  content: "\f1f3";
}

.vl-vi-mobile-phone::before {
  content: "\f1f4";
}

.vl-vi-mobile-phone--after::after {
  content: "\f1f4";
}

.vl-vi-move-down::before {
  content: "\f1f5";
}

.vl-vi-move-down--after::after {
  content: "\f1f5";
}

.vl-vi-move-left-right::before {
  content: "\f1f6";
}

.vl-vi-move-left-right--after::after {
  content: "\f1f6";
}

.vl-vi-moving-elevator::before {
  content: "\f1f7";
}

.vl-vi-moving-elevator--after::after {
  content: "\f1f7";
}

.vl-vi-music-note::before {
  content: "\f1f8";
}

.vl-vi-music-note--after::after {
  content: "\f1f8";
}

.vl-vi-nature-leaf::before {
  content: "\f1f9";
}

.vl-vi-nature-leaf--after::after {
  content: "\f1f9";
}

.vl-vi-nature-tree::before {
  content: "\f1fa";
}

.vl-vi-nature-tree--after::after {
  content: "\f1fa";
}

.vl-vi-nav-down-double::before {
  content: "\f1fb";
}

.vl-vi-nav-down-double--after::after {
  content: "\f1fb";
}

.vl-vi-nav-down-light::before {
  content: "\f1fc";
}

.vl-vi-nav-down-light--after::after {
  content: "\f1fc";
}

.vl-vi-nav-down::before {
  content: "\f1fd";
}

.vl-vi-nav-down--after::after {
  content: "\f1fd";
}

.vl-vi-nav-left-double::before {
  content: "\f1fe";
}

.vl-vi-nav-left-double--after::after {
  content: "\f1fe";
}

.vl-vi-nav-left-light::before {
  content: "\f1ff";
}

.vl-vi-nav-left-light--after::after {
  content: "\f1ff";
}

.vl-vi-nav-left::before {
  content: "\f200";
}

.vl-vi-nav-left--after::after {
  content: "\f200";
}

.vl-vi-nav-right-double::before {
  content: "\f201";
}

.vl-vi-nav-right-double--after::after {
  content: "\f201";
}

.vl-vi-nav-right-light::before {
  content: "\f202";
}

.vl-vi-nav-right-light--after::after {
  content: "\f202";
}

.vl-vi-nav-right::before {
  content: "\f203";
}

.vl-vi-nav-right--after::after {
  content: "\f203";
}

.vl-vi-nav-show-more-horizontal::before {
  content: "\f204";
}

.vl-vi-nav-show-more-horizontal--after::after {
  content: "\f204";
}

.vl-vi-nav-show-more-vertical::before {
  content: "\f205";
}

.vl-vi-nav-show-more-vertical--after::after {
  content: "\f205";
}

.vl-vi-nav-up-double::before {
  content: "\f206";
}

.vl-vi-nav-up-double--after::after {
  content: "\f206";
}

.vl-vi-nav-up-light::before {
  content: "\f207";
}

.vl-vi-nav-up-light--after::after {
  content: "\f207";
}

.vl-vi-nav-up::before {
  content: "\f208";
}

.vl-vi-nav-up--after::after {
  content: "\f208";
}

.vl-vi-news::before {
  content: "\f209";
}

.vl-vi-news--after::after {
  content: "\f209";
}

.vl-vi-newspaper::before {
  content: "\f20a";
}

.vl-vi-newspaper--after::after {
  content: "\f20a";
}

.vl-vi-next::before {
  content: "\f20b";
}

.vl-vi-next--after::after {
  content: "\f20b";
}

.vl-vi-other-annoyances-alt::before {
  content: "\f20c";
}

.vl-vi-other-annoyances-alt--after::after {
  content: "\f20c";
}

.vl-vi-other-annoyances::before {
  content: "\f20d";
}

.vl-vi-other-annoyances--after::after {
  content: "\f20d";
}

.vl-vi-paint-brush::before {
  content: "\f20e";
}

.vl-vi-paint-brush--after::after {
  content: "\f20e";
}

.vl-vi-paper::before {
  content: "\f20f";
}

.vl-vi-paper--after::after {
  content: "\f20f";
}

.vl-vi-paperclip::before {
  content: "\f210";
}

.vl-vi-paperclip--after::after {
  content: "\f210";
}

.vl-vi-paragraph::before {
  content: "\f211";
}

.vl-vi-paragraph--after::after {
  content: "\f211";
}

.vl-vi-pause::before {
  content: "\f212";
}

.vl-vi-pause--after::after {
  content: "\f212";
}

.vl-vi-pencil-write::before {
  content: "\f213";
}

.vl-vi-pencil-write--after::after {
  content: "\f213";
}

.vl-vi-pencil::before {
  content: "\f214";
}

.vl-vi-pencil--after::after {
  content: "\f214";
}

.vl-vi-pennants::before {
  content: "\f215";
}

.vl-vi-pennants--after::after {
  content: "\f215";
}

.vl-vi-phone-incoming::before {
  content: "\f216";
}

.vl-vi-phone-incoming--after::after {
  content: "\f216";
}

.vl-vi-phone-off::before {
  content: "\f217";
}

.vl-vi-phone-off--after::after {
  content: "\f217";
}

.vl-vi-phone-outgoing::before {
  content: "\f218";
}

.vl-vi-phone-outgoing--after::after {
  content: "\f218";
}

.vl-vi-phone-record::before {
  content: "\f219";
}

.vl-vi-phone-record--after::after {
  content: "\f219";
}

.vl-vi-phone-signal-low::before {
  content: "\f21a";
}

.vl-vi-phone-signal-low--after::after {
  content: "\f21a";
}

.vl-vi-phone-speaker::before {
  content: "\f21b";
}

.vl-vi-phone-speaker--after::after {
  content: "\f21b";
}

.vl-vi-phone::before {
  content: "\f21c";
}

.vl-vi-phone--after::after {
  content: "\f21c";
}

.vl-vi-pick-up::before {
  content: "\f21d";
}

.vl-vi-pick-up--after::after {
  content: "\f21d";
}

.vl-vi-pin-paper::before {
  content: "\f21e";
}

.vl-vi-pin-paper--after::after {
  content: "\f21e";
}

.vl-vi-pin::before {
  content: "\f21f";
}

.vl-vi-pin--after::after {
  content: "\f21f";
}

.vl-vi-pinterest::before {
  content: "\f220";
}

.vl-vi-pinterest--after::after {
  content: "\f220";
}

.vl-vi-places-factory::before {
  content: "\f221";
}

.vl-vi-places-factory--after::after {
  content: "\f221";
}

.vl-vi-places-home::before {
  content: "\f222";
}

.vl-vi-places-home--after::after {
  content: "\f222";
}

.vl-vi-play::before {
  content: "\f223";
}

.vl-vi-play--after::after {
  content: "\f223";
}

.vl-vi-playstreet::before {
  content: "\f224";
}

.vl-vi-playstreet--after::after {
  content: "\f224";
}

.vl-vi-plug::before {
  content: "\f225";
}

.vl-vi-plug--after::after {
  content: "\f225";
}

.vl-vi-plus-circle::before {
  content: "\f226";
}

.vl-vi-plus-circle--after::after {
  content: "\f226";
}

.vl-vi-plus::before {
  content: "\f227";
}

.vl-vi-plus--after::after {
  content: "\f227";
}

.vl-vi-power-button::before {
  content: "\f228";
}

.vl-vi-power-button--after::after {
  content: "\f228";
}

.vl-vi-printer-view::before {
  content: "\f229";
}

.vl-vi-printer-view--after::after {
  content: "\f229";
}

.vl-vi-printer::before {
  content: "\f22a";
}

.vl-vi-printer--after::after {
  content: "\f22a";
}

.vl-vi-profile-active::before {
  content: "\f22b";
}

.vl-vi-profile-active--after::after {
  content: "\f22b";
}

.vl-vi-programming-bug::before {
  content: "\f22c";
}

.vl-vi-programming-bug--after::after {
  content: "\f22c";
}

.vl-vi-publication::before {
  content: "\f22d";
}

.vl-vi-publication--after::after {
  content: "\f22d";
}

.vl-vi-question-mark-filled::before {
  content: "\f22e";
}

.vl-vi-question-mark-filled--after::after {
  content: "\f22e";
}

.vl-vi-question-mark-small::before {
  content: "\f22f";
}

.vl-vi-question-mark-small--after::after {
  content: "\f22f";
}

.vl-vi-question-mark::before {
  content: "\f230";
}

.vl-vi-question-mark--after::after {
  content: "\f230";
}

.vl-vi-question::before {
  content: "\f231";
}

.vl-vi-question--after::after {
  content: "\f231";
}

.vl-vi-recreation::before {
  content: "\f232";
}

.vl-vi-recreation--after::after {
  content: "\f232";
}

.vl-vi-reply-all::before {
  content: "\f233";
}

.vl-vi-reply-all--after::after {
  content: "\f233";
}

.vl-vi-reply::before {
  content: "\f234";
}

.vl-vi-reply--after::after {
  content: "\f234";
}

.vl-vi-rewards-certified-badge::before {
  content: "\f235";
}

.vl-vi-rewards-certified-badge--after::after {
  content: "\f235";
}

.vl-vi-rewards-gift::before {
  content: "\f236";
}

.vl-vi-rewards-gift--after::after {
  content: "\f236";
}

.vl-vi-road-block::before {
  content: "\f237";
}

.vl-vi-road-block--after::after {
  content: "\f237";
}

.vl-vi-road::before {
  content: "\f238";
}

.vl-vi-road--after::after {
  content: "\f238";
}

.vl-vi-romance-marriage-license::before {
  content: "\f239";
}

.vl-vi-romance-marriage-license--after::after {
  content: "\f239";
}

.vl-vi-save::before {
  content: "\f23a";
}

.vl-vi-save--after::after {
  content: "\f23a";
}

.vl-vi-scaffold::before {
  content: "\f23b";
}

.vl-vi-scaffold--after::after {
  content: "\f23b";
}

.vl-vi-scan::before {
  content: "\f23c";
}

.vl-vi-scan--after::after {
  content: "\f23c";
}

.vl-vi-scissors::before {
  content: "\f23d";
}

.vl-vi-scissors--after::after {
  content: "\f23d";
}

.vl-vi-search::before {
  content: "\f23e";
}

.vl-vi-search--after::after {
  content: "\f23e";
}

.vl-vi-server::before {
  content: "\f23f";
}

.vl-vi-server--after::after {
  content: "\f23f";
}

.vl-vi-settings::before {
  content: "\f240";
}

.vl-vi-settings--after::after {
  content: "\f240";
}

.vl-vi-share-megaphone::before {
  content: "\f241";
}

.vl-vi-share-megaphone--after::after {
  content: "\f241";
}

.vl-vi-share-rss-feed::before {
  content: "\f242";
}

.vl-vi-share-rss-feed--after::after {
  content: "\f242";
}

.vl-vi-share::before {
  content: "\f243";
}

.vl-vi-share--after::after {
  content: "\f243";
}

.vl-vi-shipping-truck::before {
  content: "\f244";
}

.vl-vi-shipping-truck--after::after {
  content: "\f244";
}

.vl-vi-shopping-basket-add::before {
  content: "\f245";
}

.vl-vi-shopping-basket-add--after::after {
  content: "\f245";
}

.vl-vi-shopping-basket-subtract::before {
  content: "\f246";
}

.vl-vi-shopping-basket-subtract--after::after {
  content: "\f246";
}

.vl-vi-shopping-basket::before {
  content: "\f247";
}

.vl-vi-shopping-basket--after::after {
  content: "\f247";
}

.vl-vi-shopping-cart::before {
  content: "\f248";
}

.vl-vi-shopping-cart--after::after {
  content: "\f248";
}

.vl-vi-shopping::before {
  content: "\f249";
}

.vl-vi-shopping--after::after {
  content: "\f249";
}

.vl-vi-shrink::before {
  content: "\f24a";
}

.vl-vi-shrink--after::after {
  content: "\f24a";
}

.vl-vi-sign-disable::before {
  content: "\f24b";
}

.vl-vi-sign-disable--after::after {
  content: "\f24b";
}

.vl-vi-sign-recycle::before {
  content: "\f24c";
}

.vl-vi-sign-recycle--after::after {
  content: "\f24c";
}

.vl-vi-sitemap::before {
  content: "\f24d";
}

.vl-vi-sitemap--after::after {
  content: "\f24d";
}

.vl-vi-skype::before {
  content: "\f24e";
}

.vl-vi-skype--after::after {
  content: "\f24e";
}

.vl-vi-smiley-poker-face::before {
  content: "\f24f";
}

.vl-vi-smiley-poker-face--after::after {
  content: "\f24f";
}

.vl-vi-smiley-smile::before {
  content: "\f250";
}

.vl-vi-smiley-smile--after::after {
  content: "\f250";
}

.vl-vi-snapchat::before {
  content: "\f251";
}

.vl-vi-snapchat--after::after {
  content: "\f251";
}

.vl-vi-sort::before {
  content: "\f252";
}

.vl-vi-sort--after::after {
  content: "\f252";
}

.vl-vi-speaker-volume-decrease::before {
  content: "\f253";
}

.vl-vi-speaker-volume-decrease--after::after {
  content: "\f253";
}

.vl-vi-speaker-volume-high::before {
  content: "\f254";
}

.vl-vi-speaker-volume-high--after::after {
  content: "\f254";
}

.vl-vi-speaker-volume-increase::before {
  content: "\f255";
}

.vl-vi-speaker-volume-increase--after::after {
  content: "\f255";
}

.vl-vi-speaker-volume-low::before {
  content: "\f256";
}

.vl-vi-speaker-volume-low--after::after {
  content: "\f256";
}

.vl-vi-speaker-volume-medium::before {
  content: "\f257";
}

.vl-vi-speaker-volume-medium--after::after {
  content: "\f257";
}

.vl-vi-speaker-volume-off::before {
  content: "\f258";
}

.vl-vi-speaker-volume-off--after::after {
  content: "\f258";
}

.vl-vi-sports-competition::before {
  content: "\f259";
}

.vl-vi-sports-competition--after::after {
  content: "\f259";
}

.vl-vi-spotify::before {
  content: "\f25a";
}

.vl-vi-spotify--after::after {
  content: "\f25a";
}

.vl-vi-stop::before {
  content: "\f25b";
}

.vl-vi-stop--after::after {
  content: "\f25b";
}

.vl-vi-subtract::before {
  content: "\f25c";
}

.vl-vi-subtract--after::after {
  content: "\f25c";
}

.vl-vi-subway::before {
  content: "\f25d";
}

.vl-vi-subway--after::after {
  content: "\f25d";
}

.vl-vi-suitcase::before {
  content: "\f25e";
}

.vl-vi-suitcase--after::after {
  content: "\f25e";
}

.vl-vi-switches::before {
  content: "\f25f";
}

.vl-vi-switches--after::after {
  content: "\f25f";
}

.vl-vi-symbol-wifi-check::before {
  content: "\f260";
}

.vl-vi-symbol-wifi-check--after::after {
  content: "\f260";
}

.vl-vi-symbol-wifi-close::before {
  content: "\f261";
}

.vl-vi-symbol-wifi-close--after::after {
  content: "\f261";
}

.vl-vi-symbol-wifi::before {
  content: "\f262";
}

.vl-vi-symbol-wifi--after::after {
  content: "\f262";
}

.vl-vi-synchronize-timeout::before {
  content: "\f263";
}

.vl-vi-synchronize-timeout--after::after {
  content: "\f263";
}

.vl-vi-synchronize::before {
  content: "\f264";
}

.vl-vi-synchronize--after::after {
  content: "\f264";
}

.vl-vi-tag-add::before {
  content: "\f265";
}

.vl-vi-tag-add--after::after {
  content: "\f265";
}

.vl-vi-tag-check::before {
  content: "\f266";
}

.vl-vi-tag-check--after::after {
  content: "\f266";
}

.vl-vi-tag-close::before {
  content: "\f267";
}

.vl-vi-tag-close--after::after {
  content: "\f267";
}

.vl-vi-tag-double::before {
  content: "\f268";
}

.vl-vi-tag-double--after::after {
  content: "\f268";
}

.vl-vi-tag-edit::before {
  content: "\f269";
}

.vl-vi-tag-edit--after::after {
  content: "\f269";
}

.vl-vi-tag-subtract::before {
  content: "\f26a";
}

.vl-vi-tag-subtract--after::after {
  content: "\f26a";
}

.vl-vi-tag-view::before {
  content: "\f26b";
}

.vl-vi-tag-view--after::after {
  content: "\f26b";
}

.vl-vi-tag::before {
  content: "\f26c";
}

.vl-vi-tag--after::after {
  content: "\f26c";
}

.vl-vi-taxi::before {
  content: "\f26d";
}

.vl-vi-taxi--after::after {
  content: "\f26d";
}

.vl-vi-television::before {
  content: "\f26e";
}

.vl-vi-television--after::after {
  content: "\f26e";
}

.vl-vi-terrace::before {
  content: "\f26f";
}

.vl-vi-terrace--after::after {
  content: "\f26f";
}

.vl-vi-text-cursor::before {
  content: "\f270";
}

.vl-vi-text-cursor--after::after {
  content: "\f270";
}

.vl-vi-text-eraser::before {
  content: "\f271";
}

.vl-vi-text-eraser--after::after {
  content: "\f271";
}

.vl-vi-text-redo::before {
  content: "\f272";
}

.vl-vi-text-redo--after::after {
  content: "\f272";
}

.vl-vi-text-undo::before {
  content: "\f273";
}

.vl-vi-text-undo--after::after {
  content: "\f273";
}

.vl-vi-timeline::before {
  content: "\f274";
}

.vl-vi-timeline--after::after {
  content: "\f274";
}

.vl-vi-tint::before {
  content: "\f275";
}

.vl-vi-tint--after::after {
  content: "\f275";
}

.vl-vi-train::before {
  content: "\f276";
}

.vl-vi-train--after::after {
  content: "\f276";
}

.vl-vi-trash::before {
  content: "\f277";
}

.vl-vi-trash--after::after {
  content: "\f277";
}

.vl-vi-trophy::before {
  content: "\f278";
}

.vl-vi-trophy--after::after {
  content: "\f278";
}

.vl-vi-twitter::before {
  content: "\f279";
}

.vl-vi-twitter--after::after {
  content: "\f279";
}

.vl-vi-underline::before {
  content: "\f27a";
}

.vl-vi-underline--after::after {
  content: "\f27a";
}

.vl-vi-university::before {
  content: "\f27b";
}

.vl-vi-university--after::after {
  content: "\f27b";
}

.vl-vi-up-down-arrows::before {
  content: "\f27c";
}

.vl-vi-up-down-arrows--after::after {
  content: "\f27c";
}

.vl-vi-upload-harddisk::before {
  content: "\f27d";
}

.vl-vi-upload-harddisk--after::after {
  content: "\f27d";
}

.vl-vi-user-alt::before {
  content: "\f27e";
}

.vl-vi-user-alt--after::after {
  content: "\f27e";
}

.vl-vi-user-download::before {
  content: "\f27f";
}

.vl-vi-user-download--after::after {
  content: "\f27f";
}

.vl-vi-user-email::before {
  content: "\f280";
}

.vl-vi-user-email--after::after {
  content: "\f280";
}

.vl-vi-user-female::before {
  content: "\f281";
}

.vl-vi-user-female--after::after {
  content: "\f281";
}

.vl-vi-user-group::before {
  content: "\f282";
}

.vl-vi-user-group--after::after {
  content: "\f282";
}

.vl-vi-user-male::before {
  content: "\f283";
}

.vl-vi-user-male--after::after {
  content: "\f283";
}

.vl-vi-user-redirect::before {
  content: "\f284";
}

.vl-vi-user-redirect--after::after {
  content: "\f284";
}

.vl-vi-user-setting::before {
  content: "\f285";
}

.vl-vi-user-setting--after::after {
  content: "\f285";
}

.vl-vi-user-signup::before {
  content: "\f286";
}

.vl-vi-user-signup--after::after {
  content: "\f286";
}

.vl-vi-user::before {
  content: "\f287";
}

.vl-vi-user--after::after {
  content: "\f287";
}

.vl-vi-vaccum-cleaner::before {
  content: "\f288";
}

.vl-vi-vaccum-cleaner--after::after {
  content: "\f288";
}

.vl-vi-video-subtitle::before {
  content: "\f289";
}

.vl-vi-video-subtitle--after::after {
  content: "\f289";
}

.vl-vi-view-add::before {
  content: "\f28a";
}

.vl-vi-view-add--after::after {
  content: "\f28a";
}

.vl-vi-vlaanderen::before {
  content: "\f28b";
}

.vl-vi-vlaanderen--after::after {
  content: "\f28b";
}

.vl-vi-vote-flag::before {
  content: "\f28c";
}

.vl-vi-vote-flag--after::after {
  content: "\f28c";
}

.vl-vi-vote-heart::before {
  content: "\f28d";
}

.vl-vi-vote-heart--after::after {
  content: "\f28d";
}

.vl-vi-vote-star::before {
  content: "\f28e";
}

.vl-vi-vote-star--after::after {
  content: "\f28e";
}

.vl-vi-vote-thumbs-down::before {
  content: "\f28f";
}

.vl-vi-vote-thumbs-down--after::after {
  content: "\f28f";
}

.vl-vi-vote-thumbs-up::before {
  content: "\f290";
}

.vl-vi-vote-thumbs-up--after::after {
  content: "\f290";
}

.vl-vi-voucher-check::before {
  content: "\f291";
}

.vl-vi-voucher-check--after::after {
  content: "\f291";
}

.vl-vi-voucher-download::before {
  content: "\f292";
}

.vl-vi-voucher-download--after::after {
  content: "\f292";
}

.vl-vi-voucher-scissors::before {
  content: "\f293";
}

.vl-vi-voucher-scissors--after::after {
  content: "\f293";
}

.vl-vi-vouchers-list::before {
  content: "\f294";
}

.vl-vi-vouchers-list--after::after {
  content: "\f294";
}

.vl-vi-wallet::before {
  content: "\f295";
}

.vl-vi-wallet--after::after {
  content: "\f295";
}

.vl-vi-warning::before {
  content: "\f296";
}

.vl-vi-warning--after::after {
  content: "\f296";
}

.vl-vi-whatsapp::before {
  content: "\f297";
}

.vl-vi-whatsapp--after::after {
  content: "\f297";
}

.vl-vi-wrench::before {
  content: "\f298";
}

.vl-vi-wrench--after::after {
  content: "\f298";
}

.vl-vi-www::before {
  content: "\f299";
}

.vl-vi-www--after::after {
  content: "\f299";
}

.vl-vi-youtube::before {
  content: "\f29a";
}

.vl-vi-youtube--after::after {
  content: "\f29a";
}

.vl-vi-zoom-in::before {
  content: "\f29b";
}

.vl-vi-zoom-in--after::after {
  content: "\f29b";
}

.vl-vi-zoom-out::before {
  content: "\f29c";
}

.vl-vi-zoom-out--after::after {
  content: "\f29c";
}

a {
  color: #05c;
  text-decoration: underline;
  text-decoration-skip-ink: auto;
}
a:hover, a:focus {
  text-decoration: none;
  color: #003bb0;
}
a:visited {
  color: #660599;
}

a:focus,
button:focus {
  outline: transparent solid 0.2rem;
  box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
}

button {
  font-family: "Flanders Art Sans", sans-serif;
  cursor: pointer;
}

img.vl-image--error {
  overflow-wrap: break-word;
  padding: 10px;
  line-height: 1.25;
  font-size: 1.6rem;
  color: var(--vl-theme-fg-color);
  background-color: #f7f9fc;
}

.vl-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -3rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap;
}

.vl-grid > * {
  box-sizing: border-box;
  padding-left: 3rem;
  position: relative;
}

.vl-grid--no-gutter {
  margin-left: 0;
}

.vl-grid--no-gutter > * {
  padding-left: 0;
}

.vl-grid--v-top {
  align-items: flex-start;
}

.vl-grid--v-center {
  align-items: center;
}

.vl-grid--v-bottom {
  align-items: flex-end;
}

.vl-grid--v-stretch {
  align-items: stretch;
}

.vl-grid--v-baseline {
  align-items: stretch;
}

.vl-grid--align-start {
  justify-content: flex-start;
}

.vl-grid--align-end {
  justify-content: flex-end;
}

.vl-grid--align-center {
  justify-content: center;
}

.vl-grid--align-space-between {
  justify-content: space-between;
}

.vl-grid--align-space-around {
  justify-content: space-around;
}

.vl-col--fit {
  flex: 1 0;
}

.vl-col--flex {
  display: flex;
}

.vl-col--1-12 {
  flex-basis: 8.3333333333%;
  max-width: 8.3333333333%;
  min-width: 8.3333333333%;
}

.vl-col--1-6, .vl-col--2-12 {
  flex-basis: 16.6666666667%;
  max-width: 16.6666666667%;
  min-width: 16.6666666667%;
}

.vl-col--1-4, .vl-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%;
}

.vl-col--1-3, .vl-col--2-6, .vl-col--4-12 {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
  min-width: 33.3333333333%;
}

.vl-col--5-12 {
  flex-basis: 41.6666666667%;
  max-width: 41.6666666667%;
  min-width: 41.6666666667%;
}

.vl-col--1-2, .vl-col--2-4, .vl-col--3-6, .vl-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%;
}

.vl-col--7-12 {
  flex-basis: 58.3333333333%;
  max-width: 58.3333333333%;
  min-width: 58.3333333333%;
}

.vl-col--2-3, .vl-col--4-6, .vl-col--8-12 {
  flex-basis: 66.6666666667%;
  max-width: 66.6666666667%;
  min-width: 66.6666666667%;
}

.vl-col--3-4, .vl-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%;
}

.vl-col--5-6, .vl-col--10-12 {
  flex-basis: 83.3333333333%;
  max-width: 83.3333333333%;
  min-width: 83.3333333333%;
}

.vl-col--11-12 {
  flex-basis: 91.6666666667%;
  max-width: 91.6666666667%;
  min-width: 91.6666666667%;
}

.vl-col--1-1, .vl-col--2-2, .vl-col--3-3, .vl-col--4-4, .vl-col--6-6, .vl-col--12-12 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%;
}

.vl-grid--is-stacked {
  margin-top: -3rem;
}

.vl-grid--is-stacked > * {
  margin-top: 3rem;
}

.vl-push--reset {
  margin-left: 0;
}

.vl-push--1-12 {
  margin-left: 8.3333333333%;
}

.vl-push--1-6, .vl-push--2-12 {
  margin-left: 16.6666666667%;
}

.vl-push--1-4, .vl-push--3-12 {
  margin-left: 25%;
}

.vl-push--1-3, .vl-push--2-6, .vl-push--4-12 {
  margin-left: 33.3333333333%;
}

.vl-push--5-12 {
  margin-left: 41.6666666667%;
}

.vl-push--1-2, .vl-push--2-4, .vl-push--3-6, .vl-push--6-12 {
  margin-left: 50%;
}

.vl-push--7-12 {
  margin-left: 58.3333333333%;
}

.vl-push--2-3, .vl-push--4-6, .vl-push--8-12 {
  margin-left: 66.6666666667%;
}

.vl-push--3-4, .vl-push--9-12 {
  margin-left: 75%;
}

.vl-push--5-6, .vl-push--10-12 {
  margin-left: 83.3333333333%;
}

.vl-push--11-12 {
  margin-left: 91.6666666667%;
}

.vl-col--omega {
  margin-left: auto;
}

@media screen and (min-width: 1024px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative;
  }

  .vl-grid--no-gutter--l {
    margin-left: 0;
  }

  .vl-grid--no-gutter--l > * {
    padding-left: 0;
  }

  .vl-grid--v-top--l {
    align-items: flex-start;
  }

  .vl-grid--v-center--l {
    align-items: center;
  }

  .vl-grid--v-bottom--l {
    align-items: flex-end;
  }

  .vl-grid--v-stretch--l {
    align-items: stretch;
  }

  .vl-grid--v-baseline--l {
    align-items: stretch;
  }

  .vl-grid--align-start--l {
    justify-content: flex-start;
  }

  .vl-grid--align-end--l {
    justify-content: flex-end;
  }

  .vl-grid--align-center--l {
    justify-content: center;
  }

  .vl-grid--align-space-between--l {
    justify-content: space-between;
  }

  .vl-grid--align-space-around--l {
    justify-content: space-around;
  }

  .vl-col--fit--l {
    flex: 1 0;
  }

  .vl-col--flex--l {
    display: flex;
  }

  .vl-col--1-12--l {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-col--1-6--l, .vl-col--2-12--l {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-col--1-4--l, .vl-col--3-12--l {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-col--1-3--l, .vl-col--2-6--l, .vl-col--4-12--l {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-col--5-12--l {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-col--1-2--l, .vl-col--2-4--l, .vl-col--3-6--l, .vl-col--6-12--l {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-col--7-12--l {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-col--2-3--l, .vl-col--4-6--l, .vl-col--8-12--l {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-col--3-4--l, .vl-col--9-12--l {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-col--5-6--l, .vl-col--10-12--l {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-col--11-12--l {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-col--1-1--l, .vl-col--2-2--l, .vl-col--3-3--l, .vl-col--4-4--l, .vl-col--6-6--l, .vl-col--12-12--l {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-grid--is-stacked {
    margin-top: -3rem;
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem;
  }

  .vl-push--reset--l {
    margin-left: 0;
  }

  .vl-push--1-12--l {
    margin-left: 8.3333333333%;
  }

  .vl-push--1-6--l, .vl-push--2-12--l {
    margin-left: 16.6666666667%;
  }

  .vl-push--1-4--l, .vl-push--3-12--l {
    margin-left: 25%;
  }

  .vl-push--1-3--l, .vl-push--2-6--l, .vl-push--4-12--l {
    margin-left: 33.3333333333%;
  }

  .vl-push--5-12--l {
    margin-left: 41.6666666667%;
  }

  .vl-push--1-2--l, .vl-push--2-4--l, .vl-push--3-6--l, .vl-push--6-12--l {
    margin-left: 50%;
  }

  .vl-push--7-12--l {
    margin-left: 58.3333333333%;
  }

  .vl-push--2-3--l, .vl-push--4-6--l, .vl-push--8-12--l {
    margin-left: 66.6666666667%;
  }

  .vl-push--3-4--l, .vl-push--9-12--l {
    margin-left: 75%;
  }

  .vl-push--5-6--l, .vl-push--10-12--l {
    margin-left: 83.3333333333%;
  }

  .vl-push--11-12--l {
    margin-left: 91.6666666667%;
  }

  .vl-col--omega--l {
    margin-left: auto;
  }
}
@media screen and (min-width: 1601px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative;
  }

  .vl-grid--no-gutter--xl {
    margin-left: 0;
  }

  .vl-grid--no-gutter--xl > * {
    padding-left: 0;
  }

  .vl-grid--v-top--xl {
    align-items: flex-start;
  }

  .vl-grid--v-center--xl {
    align-items: center;
  }

  .vl-grid--v-bottom--xl {
    align-items: flex-end;
  }

  .vl-grid--v-stretch--xl {
    align-items: stretch;
  }

  .vl-grid--v-baseline--xl {
    align-items: stretch;
  }

  .vl-grid--align-start--xl {
    justify-content: flex-start;
  }

  .vl-grid--align-end--xl {
    justify-content: flex-end;
  }

  .vl-grid--align-center--xl {
    justify-content: center;
  }

  .vl-grid--align-space-between--xl {
    justify-content: space-between;
  }

  .vl-grid--align-space-around--xl {
    justify-content: space-around;
  }

  .vl-col--fit--xl {
    flex: 1 0;
  }

  .vl-col--flex--xl {
    display: flex;
  }

  .vl-col--1-12--xl {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-col--1-6--xl, .vl-col--2-12--xl {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-col--1-4--xl, .vl-col--3-12--xl {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-col--1-3--xl, .vl-col--2-6--xl, .vl-col--4-12--xl {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-col--5-12--xl {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-col--1-2--xl, .vl-col--2-4--xl, .vl-col--3-6--xl, .vl-col--6-12--xl {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-col--7-12--xl {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-col--2-3--xl, .vl-col--4-6--xl, .vl-col--8-12--xl {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-col--3-4--xl, .vl-col--9-12--xl {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-col--5-6--xl, .vl-col--10-12--xl {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-col--11-12--xl {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-col--1-1--xl, .vl-col--2-2--xl, .vl-col--3-3--xl, .vl-col--4-4--xl, .vl-col--6-6--xl, .vl-col--12-12--xl {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-grid--is-stacked {
    margin-top: -3rem;
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem;
  }

  .vl-push--reset--xl {
    margin-left: 0;
  }

  .vl-push--1-12--xl {
    margin-left: 8.3333333333%;
  }

  .vl-push--1-6--xl, .vl-push--2-12--xl {
    margin-left: 16.6666666667%;
  }

  .vl-push--1-4--xl, .vl-push--3-12--xl {
    margin-left: 25%;
  }

  .vl-push--1-3--xl, .vl-push--2-6--xl, .vl-push--4-12--xl {
    margin-left: 33.3333333333%;
  }

  .vl-push--5-12--xl {
    margin-left: 41.6666666667%;
  }

  .vl-push--1-2--xl, .vl-push--2-4--xl, .vl-push--3-6--xl, .vl-push--6-12--xl {
    margin-left: 50%;
  }

  .vl-push--7-12--xl {
    margin-left: 58.3333333333%;
  }

  .vl-push--2-3--xl, .vl-push--4-6--xl, .vl-push--8-12--xl {
    margin-left: 66.6666666667%;
  }

  .vl-push--3-4--xl, .vl-push--9-12--xl {
    margin-left: 75%;
  }

  .vl-push--5-6--xl, .vl-push--10-12--xl {
    margin-left: 83.3333333333%;
  }

  .vl-push--11-12--xl {
    margin-left: 91.6666666667%;
  }

  .vl-col--omega--xl {
    margin-left: auto;
  }
}
@media screen and (max-width: 1023px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative;
  }

  .vl-grid--no-gutter--m {
    margin-left: 0;
  }

  .vl-grid--no-gutter--m > * {
    padding-left: 0;
  }

  .vl-grid--v-top--m {
    align-items: flex-start;
  }

  .vl-grid--v-center--m {
    align-items: center;
  }

  .vl-grid--v-bottom--m {
    align-items: flex-end;
  }

  .vl-grid--v-stretch--m {
    align-items: stretch;
  }

  .vl-grid--v-baseline--m {
    align-items: stretch;
  }

  .vl-grid--align-start--m {
    justify-content: flex-start;
  }

  .vl-grid--align-end--m {
    justify-content: flex-end;
  }

  .vl-grid--align-center--m {
    justify-content: center;
  }

  .vl-grid--align-space-between--m {
    justify-content: space-between;
  }

  .vl-grid--align-space-around--m {
    justify-content: space-around;
  }

  .vl-col--fit--m {
    flex: 1 0;
  }

  .vl-col--flex--m {
    display: flex;
  }

  .vl-col--1-12--m {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-col--1-6--m, .vl-col--2-12--m {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-col--1-4--m, .vl-col--3-12--m {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-col--1-3--m, .vl-col--2-6--m, .vl-col--4-12--m {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-col--5-12--m {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-col--1-2--m, .vl-col--2-4--m, .vl-col--3-6--m, .vl-col--6-12--m {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-col--7-12--m {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-col--2-3--m, .vl-col--4-6--m, .vl-col--8-12--m {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-col--3-4--m, .vl-col--9-12--m {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-col--5-6--m, .vl-col--10-12--m {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-col--11-12--m {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-col--1-1--m, .vl-col--2-2--m, .vl-col--3-3--m, .vl-col--4-4--m, .vl-col--6-6--m, .vl-col--12-12--m {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-grid--is-stacked {
    margin-top: -3rem;
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem;
  }

  .vl-push--reset--m {
    margin-left: 0;
  }

  .vl-push--1-12--m {
    margin-left: 8.3333333333%;
  }

  .vl-push--1-6--m, .vl-push--2-12--m {
    margin-left: 16.6666666667%;
  }

  .vl-push--1-4--m, .vl-push--3-12--m {
    margin-left: 25%;
  }

  .vl-push--1-3--m, .vl-push--2-6--m, .vl-push--4-12--m {
    margin-left: 33.3333333333%;
  }

  .vl-push--5-12--m {
    margin-left: 41.6666666667%;
  }

  .vl-push--1-2--m, .vl-push--2-4--m, .vl-push--3-6--m, .vl-push--6-12--m {
    margin-left: 50%;
  }

  .vl-push--7-12--m {
    margin-left: 58.3333333333%;
  }

  .vl-push--2-3--m, .vl-push--4-6--m, .vl-push--8-12--m {
    margin-left: 66.6666666667%;
  }

  .vl-push--3-4--m, .vl-push--9-12--m {
    margin-left: 75%;
  }

  .vl-push--5-6--m, .vl-push--10-12--m {
    margin-left: 83.3333333333%;
  }

  .vl-push--11-12--m {
    margin-left: 91.6666666667%;
  }

  .vl-col--omega--m {
    margin-left: auto;
  }
}
@media screen and (max-width: 767px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative;
  }

  .vl-grid--no-gutter--s {
    margin-left: 0;
  }

  .vl-grid--no-gutter--s > * {
    padding-left: 0;
  }

  .vl-grid--v-top--s {
    align-items: flex-start;
  }

  .vl-grid--v-center--s {
    align-items: center;
  }

  .vl-grid--v-bottom--s {
    align-items: flex-end;
  }

  .vl-grid--v-stretch--s {
    align-items: stretch;
  }

  .vl-grid--v-baseline--s {
    align-items: stretch;
  }

  .vl-grid--align-start--s {
    justify-content: flex-start;
  }

  .vl-grid--align-end--s {
    justify-content: flex-end;
  }

  .vl-grid--align-center--s {
    justify-content: center;
  }

  .vl-grid--align-space-between--s {
    justify-content: space-between;
  }

  .vl-grid--align-space-around--s {
    justify-content: space-around;
  }

  .vl-col--fit--s {
    flex: 1 0;
  }

  .vl-col--flex--s {
    display: flex;
  }

  .vl-col--1-12--s {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-col--1-6--s, .vl-col--2-12--s {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-col--1-4--s, .vl-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-col--1-3--s, .vl-col--2-6--s, .vl-col--4-12--s {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-col--5-12--s {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-col--1-2--s, .vl-col--2-4--s, .vl-col--3-6--s, .vl-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-col--7-12--s {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-col--2-3--s, .vl-col--4-6--s, .vl-col--8-12--s {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-col--3-4--s, .vl-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-col--5-6--s, .vl-col--10-12--s {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-col--11-12--s {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-col--1-1--s, .vl-col--2-2--s, .vl-col--3-3--s, .vl-col--4-4--s, .vl-col--6-6--s, .vl-col--12-12--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-grid--is-stacked {
    margin-top: -1.5rem;
  }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem;
  }

  .vl-push--reset--s {
    margin-left: 0;
  }

  .vl-push--1-12--s {
    margin-left: 8.3333333333%;
  }

  .vl-push--1-6--s, .vl-push--2-12--s {
    margin-left: 16.6666666667%;
  }

  .vl-push--1-4--s, .vl-push--3-12--s {
    margin-left: 25%;
  }

  .vl-push--1-3--s, .vl-push--2-6--s, .vl-push--4-12--s {
    margin-left: 33.3333333333%;
  }

  .vl-push--5-12--s {
    margin-left: 41.6666666667%;
  }

  .vl-push--1-2--s, .vl-push--2-4--s, .vl-push--3-6--s, .vl-push--6-12--s {
    margin-left: 50%;
  }

  .vl-push--7-12--s {
    margin-left: 58.3333333333%;
  }

  .vl-push--2-3--s, .vl-push--4-6--s, .vl-push--8-12--s {
    margin-left: 66.6666666667%;
  }

  .vl-push--3-4--s, .vl-push--9-12--s {
    margin-left: 75%;
  }

  .vl-push--5-6--s, .vl-push--10-12--s {
    margin-left: 83.3333333333%;
  }

  .vl-push--11-12--s {
    margin-left: 91.6666666667%;
  }

  .vl-col--omega--s {
    margin-left: auto;
  }
}
@media screen and (max-width: 500px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative;
  }

  .vl-grid--no-gutter--xs {
    margin-left: 0;
  }

  .vl-grid--no-gutter--xs > * {
    padding-left: 0;
  }

  .vl-grid--v-top--xs {
    align-items: flex-start;
  }

  .vl-grid--v-center--xs {
    align-items: center;
  }

  .vl-grid--v-bottom--xs {
    align-items: flex-end;
  }

  .vl-grid--v-stretch--xs {
    align-items: stretch;
  }

  .vl-grid--v-baseline--xs {
    align-items: stretch;
  }

  .vl-grid--align-start--xs {
    justify-content: flex-start;
  }

  .vl-grid--align-end--xs {
    justify-content: flex-end;
  }

  .vl-grid--align-center--xs {
    justify-content: center;
  }

  .vl-grid--align-space-between--xs {
    justify-content: space-between;
  }

  .vl-grid--align-space-around--xs {
    justify-content: space-around;
  }

  .vl-col--fit--xs {
    flex: 1 0;
  }

  .vl-col--flex--xs {
    display: flex;
  }

  .vl-col--1-12--xs {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-col--1-6--xs, .vl-col--2-12--xs {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-col--1-4--xs, .vl-col--3-12--xs {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-col--1-3--xs, .vl-col--2-6--xs, .vl-col--4-12--xs {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-col--5-12--xs {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-col--1-2--xs, .vl-col--2-4--xs, .vl-col--3-6--xs, .vl-col--6-12--xs {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-col--7-12--xs {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-col--2-3--xs, .vl-col--4-6--xs, .vl-col--8-12--xs {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-col--3-4--xs, .vl-col--9-12--xs {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-col--5-6--xs, .vl-col--10-12--xs {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-col--11-12--xs {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-col--1-1--xs, .vl-col--2-2--xs, .vl-col--3-3--xs, .vl-col--4-4--xs, .vl-col--6-6--xs, .vl-col--12-12--xs {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-grid--is-stacked {
    margin-top: -1.5rem;
  }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem;
  }

  .vl-push--reset--xs {
    margin-left: 0;
  }

  .vl-push--1-12--xs {
    margin-left: 8.3333333333%;
  }

  .vl-push--1-6--xs, .vl-push--2-12--xs {
    margin-left: 16.6666666667%;
  }

  .vl-push--1-4--xs, .vl-push--3-12--xs {
    margin-left: 25%;
  }

  .vl-push--1-3--xs, .vl-push--2-6--xs, .vl-push--4-12--xs {
    margin-left: 33.3333333333%;
  }

  .vl-push--5-12--xs {
    margin-left: 41.6666666667%;
  }

  .vl-push--1-2--xs, .vl-push--2-4--xs, .vl-push--3-6--xs, .vl-push--6-12--xs {
    margin-left: 50%;
  }

  .vl-push--7-12--xs {
    margin-left: 58.3333333333%;
  }

  .vl-push--2-3--xs, .vl-push--4-6--xs, .vl-push--8-12--xs {
    margin-left: 66.6666666667%;
  }

  .vl-push--3-4--xs, .vl-push--9-12--xs {
    margin-left: 75%;
  }

  .vl-push--5-6--xs, .vl-push--10-12--xs {
    margin-left: 83.3333333333%;
  }

  .vl-push--11-12--xs {
    margin-left: 91.6666666667%;
  }

  .vl-col--omega--xs {
    margin-left: auto;
  }
}
@media screen and (min-width: 1280px) {
  .vl-grid--wide {
    margin-left: calc(-4.1666666667% - 3rem);
    margin-right: -4.1666666667%;
  }
}
.vl-form-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -1.5rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap;
}

.vl-form-grid > * {
  box-sizing: border-box;
  padding-left: 1.5rem;
  position: relative;
}

.vl-form-grid--no-gutter {
  margin-left: 0;
}

.vl-form-grid--no-gutter > * {
  padding-left: 0;
}

.vl-form-grid--v-top {
  align-items: flex-start;
}

.vl-form-grid--v-center {
  align-items: center;
}

.vl-form-grid--v-bottom {
  align-items: flex-end;
}

.vl-form-grid--v-stretch {
  align-items: stretch;
}

.vl-form-grid--v-baseline {
  align-items: stretch;
}

.vl-form-grid--align-start {
  justify-content: flex-start;
}

.vl-form-grid--align-end {
  justify-content: flex-end;
}

.vl-form-grid--align-center {
  justify-content: center;
}

.vl-form-grid--align-space-between {
  justify-content: space-between;
}

.vl-form-grid--align-space-around {
  justify-content: space-around;
}

.vl-form-col--fit {
  flex: 1 0;
}

.vl-form-col--flex {
  display: flex;
}

.vl-form-col--1-12 {
  flex-basis: 8.3333333333%;
  max-width: 8.3333333333%;
  min-width: 8.3333333333%;
}

.vl-form-col--1-6, .vl-form-col--2-12 {
  flex-basis: 16.6666666667%;
  max-width: 16.6666666667%;
  min-width: 16.6666666667%;
}

.vl-form-col--1-4, .vl-form-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%;
}

.vl-form-col--1-3, .vl-form-col--2-6, .vl-form-col--4-12 {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
  min-width: 33.3333333333%;
}

.vl-form-col--5-12 {
  flex-basis: 41.6666666667%;
  max-width: 41.6666666667%;
  min-width: 41.6666666667%;
}

.vl-form-col--1-2, .vl-form-col--2-4, .vl-form-col--3-6, .vl-form-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%;
}

.vl-form-col--7-12 {
  flex-basis: 58.3333333333%;
  max-width: 58.3333333333%;
  min-width: 58.3333333333%;
}

.vl-form-col--2-3, .vl-form-col--4-6, .vl-form-col--8-12 {
  flex-basis: 66.6666666667%;
  max-width: 66.6666666667%;
  min-width: 66.6666666667%;
}

.vl-form-col--3-4, .vl-form-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%;
}

.vl-form-col--5-6, .vl-form-col--10-12 {
  flex-basis: 83.3333333333%;
  max-width: 83.3333333333%;
  min-width: 83.3333333333%;
}

.vl-form-col--11-12 {
  flex-basis: 91.6666666667%;
  max-width: 91.6666666667%;
  min-width: 91.6666666667%;
}

.vl-form-col--1-1, .vl-form-col--2-2, .vl-form-col--3-3, .vl-form-col--4-4, .vl-form-col--6-6, .vl-form-col--12-12 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%;
}

.vl-form-grid--is-stacked {
  margin-top: -1.5rem;
}

.vl-form-grid--is-stacked > * {
  margin-top: 1.5rem;
}

.vl-form-push--reset {
  margin-left: 0;
}

.vl-form-push--1-12 {
  margin-left: 8.3333333333%;
}

.vl-form-push--1-6, .vl-form-push--2-12 {
  margin-left: 16.6666666667%;
}

.vl-form-push--1-4, .vl-form-push--3-12 {
  margin-left: 25%;
}

.vl-form-push--1-3, .vl-form-push--2-6, .vl-form-push--4-12 {
  margin-left: 33.3333333333%;
}

.vl-form-push--5-12 {
  margin-left: 41.6666666667%;
}

.vl-form-push--1-2, .vl-form-push--2-4, .vl-form-push--3-6, .vl-form-push--6-12 {
  margin-left: 50%;
}

.vl-form-push--7-12 {
  margin-left: 58.3333333333%;
}

.vl-form-push--2-3, .vl-form-push--4-6, .vl-form-push--8-12 {
  margin-left: 66.6666666667%;
}

.vl-form-push--3-4, .vl-form-push--9-12 {
  margin-left: 75%;
}

.vl-form-push--5-6, .vl-form-push--10-12 {
  margin-left: 83.3333333333%;
}

.vl-form-push--11-12 {
  margin-left: 91.6666666667%;
}

.vl-form-col--omega {
  margin-left: auto;
}

@media screen and (max-width: 767px) {
  .vl-form-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .vl-form-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative;
  }

  .vl-form-grid--no-gutter--s {
    margin-left: 0;
  }

  .vl-form-grid--no-gutter--s > * {
    padding-left: 0;
  }

  .vl-form-grid--v-top--s {
    align-items: flex-start;
  }

  .vl-form-grid--v-center--s {
    align-items: center;
  }

  .vl-form-grid--v-bottom--s {
    align-items: flex-end;
  }

  .vl-form-grid--v-stretch--s {
    align-items: stretch;
  }

  .vl-form-grid--v-baseline--s {
    align-items: stretch;
  }

  .vl-form-grid--align-start--s {
    justify-content: flex-start;
  }

  .vl-form-grid--align-end--s {
    justify-content: flex-end;
  }

  .vl-form-grid--align-center--s {
    justify-content: center;
  }

  .vl-form-grid--align-space-between--s {
    justify-content: space-between;
  }

  .vl-form-grid--align-space-around--s {
    justify-content: space-around;
  }

  .vl-form-col--fit--s {
    flex: 1 0;
  }

  .vl-form-col--flex--s {
    display: flex;
  }

  .vl-form-col--1-12--s {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%;
  }

  .vl-form-col--1-6--s, .vl-form-col--2-12--s {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%;
  }

  .vl-form-col--1-4--s, .vl-form-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
  }

  .vl-form-col--1-3--s, .vl-form-col--2-6--s, .vl-form-col--4-12--s {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
  }

  .vl-form-col--5-12--s {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%;
  }

  .vl-form-col--1-2--s, .vl-form-col--2-4--s, .vl-form-col--3-6--s, .vl-form-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%;
  }

  .vl-form-col--7-12--s {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%;
  }

  .vl-form-col--2-3--s, .vl-form-col--4-6--s, .vl-form-col--8-12--s {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%;
  }

  .vl-form-col--3-4--s, .vl-form-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
  }

  .vl-form-col--5-6--s, .vl-form-col--10-12--s {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%;
  }

  .vl-form-col--11-12--s {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%;
  }

  .vl-form-col--1-1--s, .vl-form-col--2-2--s, .vl-form-col--3-3--s, .vl-form-col--4-4--s, .vl-form-col--6-6--s, .vl-form-col--12-12--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .vl-form-grid--is-stacked {
    margin-top: -1.5rem;
  }

  .vl-form-grid--is-stacked > * {
    margin-top: 1.5rem;
  }

  .vl-form-push--reset--s {
    margin-left: 0;
  }

  .vl-form-push--1-12--s {
    margin-left: 8.3333333333%;
  }

  .vl-form-push--1-6--s, .vl-form-push--2-12--s {
    margin-left: 16.6666666667%;
  }

  .vl-form-push--1-4--s, .vl-form-push--3-12--s {
    margin-left: 25%;
  }

  .vl-form-push--1-3--s, .vl-form-push--2-6--s, .vl-form-push--4-12--s {
    margin-left: 33.3333333333%;
  }

  .vl-form-push--5-12--s {
    margin-left: 41.6666666667%;
  }

  .vl-form-push--1-2--s, .vl-form-push--2-4--s, .vl-form-push--3-6--s, .vl-form-push--6-12--s {
    margin-left: 50%;
  }

  .vl-form-push--7-12--s {
    margin-left: 58.3333333333%;
  }

  .vl-form-push--2-3--s, .vl-form-push--4-6--s, .vl-form-push--8-12--s {
    margin-left: 66.6666666667%;
  }

  .vl-form-push--3-4--s, .vl-form-push--9-12--s {
    margin-left: 75%;
  }

  .vl-form-push--5-6--s, .vl-form-push--10-12--s {
    margin-left: 83.3333333333%;
  }

  .vl-form-push--11-12--s {
    margin-left: 91.6666666667%;
  }

  .vl-form-col--omega--s {
    margin-left: auto;
  }
}
@media screen and (min-width: 1280px) {
  .vl-form-grid--wide {
    margin-left: calc(-4.1666666667% - 3rem);
    margin-right: -4.1666666667%;
  }
}
.vl-grid--is-stacked-large {
  margin-bottom: -6rem;
}
.vl-grid--is-stacked-large > * {
  margin-bottom: 6rem;
}
.vl-grid--is-stacked-small {
  margin-bottom: -1.5rem;
}
.vl-grid--is-stacked-small > * {
  margin-bottom: 1.5rem;
}

.vl-page {
  position: relative;
  width: 100%;
  background-color: #fff;
}
.vl-page .vl-main-content > .vl-region:last-child {
  padding-bottom: 10rem;
}
@media screen and (max-width: 767px) {
  .vl-page .vl-main-content > .vl-region:last-child {
    padding-bottom: 7rem;
  }
}

.vl-main-content {
  outline: none;
  position: relative;
}

.vl-region {
  margin: 0 auto;
  padding: 3rem 0 6rem;
}
@media screen and (max-width: 767px) {
  .vl-region {
    padding: 3rem 0;
  }
}
.vl-region.vl-region--no-space {
  padding: 0;
}
.vl-region.vl-region--no-space-bottom {
  padding-bottom: 0;
}
.vl-region.vl-region--no-space-top {
  padding-top: 0;
}

.vl-region:not(.vl-region--alt) + .vl-region:not(.vl-region--alt) {
  padding-top: 0;
}

.vl-region--alt {
  background-color: #f7f9fc;
}

.vl-region--overlap {
  background: linear-gradient(to bottom, transparent calc(50% - 30px), #f7f9fc calc(50% - 30px), #f7f9fc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#000000",GradientType=0 );
}
.vl-region--overlap .vl-layout {
  border: 1px #cbd2da solid;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;
}
@media only screen and (max-width: 1295px) {
  .vl-region--overlap .vl-layout {
    margin: 15px;
  }
}
@media screen and (max-width: 1023px) {
  .vl-region--overlap .vl-layout {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.vl-region--overlap + .vl-region--alt {
  padding-top: 0 !important;
}

.vl-region:not(.vl-region--alt) + .vl-region--alt,
.vl-region--alt + .vl-region:not(.vl-region--alt) {
  padding-top: 6rem;
}
@media screen and (max-width: 767px) {
  .vl-region:not(.vl-region--alt) + .vl-region--alt,
.vl-region--alt + .vl-region:not(.vl-region--alt) {
    padding-top: 3rem;
  }
}

.vl-region:first-child {
  padding-top: 6rem;
}
@media screen and (max-width: 767px) {
  .vl-region:first-child {
    padding-top: 2rem;
  }
}

.vl-region--small {
  padding: 1.5rem 0;
}
@media screen and (max-width: 767px) {
  .vl-region--small {
    padding: 2rem 0;
  }
}

.vl-region--medium {
  padding: 3rem 0;
}
@media screen and (max-width: 767px) {
  .vl-region--medium {
    padding: 2rem 0;
  }
}

.vl-region--bordered + .vl-region--bordered {
  border-top: 1px solid #f7f9fc;
}
.vl-region--bordered + .vl-region--bordered.vl-region--alt {
  border-top-color: #fff;
}

.vl-layout {
  position: relative;
  margin: 0 auto;
  min-width: 1024px;
  max-width: 1280px;
  padding: 0 3rem;
}
@media screen and (max-width: 1023px) {
  .vl-layout {
    width: auto;
    min-width: 768px;
    max-width: 1280px;
  }
}
@media screen and (max-width: 767px) {
  .vl-layout {
    width: auto;
    min-width: 0;
    padding: 0 1.5rem;
  }
}

.vl-properties__title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
@media screen and (max-width: 767px) {
  .vl-properties__title {
    font-size: 1.8rem;
  }
}
.vl-properties__list {
  display: flex;
  flex-wrap: wrap;
}
.vl-properties--full-width .vl-properties__list {
  display: grid;
  grid-template-columns: minmax(0, auto) 75%;
  grid-template-rows: 1fr;
  grid-gap: 0px 1rem;
  grid-template-areas: ". .";
}
@media screen and (max-width: 767px) {
  .vl-properties--full-width .vl-properties__list {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0px 0px;
    grid-template-areas: ".";
  }
}
.vl-properties__label, .vl-properties__data {
  font-size: 1.8rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2rem;
}
.vl-properties__label--small, .vl-properties__data--small {
  padding-bottom: 0.5rem;
}
@media screen and (max-width: 767px) {
  .vl-properties__label, .vl-properties__data {
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
  }
  .vl-properties__label--small, .vl-properties__data--small {
    padding-bottom: 0.5rem;
  }
}
.vl-properties__label {
  flex: 0 0 25%;
  color: #687483;
  padding-right: 1rem;
  max-width: 17rem;
}
.vl-properties__label--has-input {
  padding-top: 0.7rem;
}
@media screen and (max-width: 767px) {
  .vl-properties__label {
    flex: 0 0 100%;
    padding-right: 0;
  }
}
.vl-properties--full-width .vl-properties__label {
  flex: none;
  max-width: none;
  padding-right: 0;
}
.vl-properties__data {
  flex: 0 0 75%;
  flex-grow: 3;
}
@media screen and (max-width: 767px) {
  .vl-properties__data {
    flex: 0 0 100%;
    padding-bottom: 1.5rem;
  }
}
.vl-properties--full-width .vl-properties__data {
  flex: none;
}
.vl-properties__column {
  display: inline-block;
  width: calc(50% - 1rem);
}
@media screen and (max-width: 767px) {
  .vl-properties__column {
    width: 100%;
    padding-right: 0;
  }
}
.vl-properties__column + .vl-properties__column {
  padding-right: 0;
  padding-left: 1rem;
}
@media screen and (max-width: 767px) {
  .vl-properties__column + .vl-properties__column {
    padding-left: 0;
  }
}
.vl-properties__column--full {
  width: 100%;
  padding-left: 0 !important;
}
.vl-properties__column--full .vl-properties__label {
  flex: 0 0 calc(13% - 0.85rem);
}
@media screen and (max-width: 767px) {
  .vl-properties__column--full .vl-properties__label {
    flex: 0 0 40%;
  }
}
.vl-properties__column--full .vl-properties__data {
  flex: 0 0 85%;
}
@media screen and (max-width: 767px) {
  .vl-properties__column--full .vl-properties__data {
    flex: 0 0 60%;
  }
}
.vl-properties .vl-form__buttons {
  padding-top: 3rem;
}

.vl-u-visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  margin: -1px;
  padding: 0;
  border: 0;
  left: 0;
  top: 0;
}

@keyframes fade-transition {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-5px);
  }
  90% {
    transform: translateY(-2px);
  }
}
.vl-u-align-left {
  text-align: left !important;
}

.vl-u-align-center {
  text-align: center !important;
}

.vl-u-align-right {
  text-align: right !important;
}

@media screen and (min-width: 1023px) {
  .vl-u-align-left--l {
    text-align: left !important;
  }

  .vl-u-align-center--l {
    text-align: center !important;
  }

  .vl-u-align-right--l {
    text-align: right !important;
  }
}
@media screen and (max-width: 1023px) {
  .vl-u-align-left--m {
    text-align: left !important;
  }

  .vl-u-align-center--m {
    text-align: center !important;
  }

  .vl-u-align-right--m {
    text-align: right !important;
  }
}
@media screen and (max-width: 767px) {
  .vl-u-align-left--s {
    text-align: left !important;
  }

  .vl-u-align-center--s {
    text-align: center !important;
  }

  .vl-u-align-right--s {
    text-align: right !important;
  }
}
@media screen and (max-width: 500px) {
  .vl-u-align-left--xs {
    text-align: left !important;
  }

  .vl-u-align-center--xs {
    text-align: center !important;
  }

  .vl-u-align-right--xs {
    text-align: right !important;
  }
}
.vl-u-flex-align-left,
.vl-u-flex-align-flex-start {
  align-items: flex-start !important;
}

.vl-u-flex-align-center {
  align-items: center !important;
}

.vl-u-flex-align-right,
.vl-u-flex-align-flex-end {
  align-items: flex-end !important;
}

.vl-u-flex-align-baseline {
  align-items: baseline !important;
}

.vl-u-flex-align-stretch {
  align-items: stretch !important;
}

.vl-u-flex-v-top,
.vl-u-flex-v-flex-start {
  justify-content: flex-start !important;
}

.vl-u-flex-v-center {
  justify-content: center !important;
}

.vl-u-flex-v-bottom,
.vl-u-flex-v-flex-end {
  justify-content: flex-end !important;
}

.vl-u-flex-v-space-between {
  justify-content: space-between !important;
}

.vl-u-flex-v-space-around {
  justify-content: space-around !important;
}

.vl-u-flex-direction-row {
  flex-direction: row !important;
}

.vl-u-flex-direction-column {
  flex-direction: column !important;
}

.vl-u-flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}

.vl-u-flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}

.vl-u-flex-wrap-wrap {
  flex-wrap: wrap !important;
}

.vl-u-flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}

.vl-u-flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

@media screen and (min-width: 1023px) {
  .vl-u-flex-align-left--l {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-left--l,
.vl-u-flex-align-flex-start--l {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-center--l {
    align-items: center !important;
  }

  .vl-u-flex-align-right--l,
.vl-u-flex-align-flex-end--l {
    align-items: flex-end !important;
  }

  .vl-u-flex-align-baseline--l {
    align-items: baseline !important;
  }

  .vl-u-flex-align-stretch--l {
    align-items: stretch !important;
  }

  .vl-u-flex-v-top--l,
.vl-u-flex-v-flex-start--l {
    justify-content: flex-start !important;
  }

  .vl-u-flex-v-center--l {
    justify-content: center !important;
  }

  .vl-u-flex-v-bottom--l,
.vl-u-flex-v-flex-end--l {
    justify-content: flex-end !important;
  }

  .vl-u-flex-v-space-between--l {
    justify-content: space-between !important;
  }

  .vl-u-flex-v-space-around--l {
    justify-content: space-around !important;
  }

  .vl-u-flex-direction-row--l {
    flex-direction: row !important;
  }

  .vl-u-flex-direction-column--l {
    flex-direction: column !important;
  }

  .vl-u-flex-direction-row-reverse--l {
    flex-direction: row-reverse !important;
  }

  .vl-u-flex-direction-column-reverse--l {
    flex-direction: column-reverse !important;
  }

  .vl-u-flex-wrap-wrap--l {
    flex-wrap: wrap !important;
  }

  .vl-u-flex-wrap-nowrap--l {
    flex-wrap: nowrap !important;
  }

  .vl-u-flex-wrap-reverse--l {
    flex-wrap: wrap-reverse !important;
  }
}
@media screen and (max-width: 1023px) {
  .vl-u-flex-align-left--m {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-left--m,
.vl-u-flex-align-flex-start--m {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-center--m {
    align-items: center !important;
  }

  .vl-u-flex-align-right--m,
.vl-u-flex-align-flex-end--m {
    align-items: flex-end !important;
  }

  .vl-u-flex-align-baseline--m {
    align-items: baseline !important;
  }

  .vl-u-flex-align-stretch--m {
    align-items: stretch !important;
  }

  .vl-u-flex-v-top--m,
.vl-u-flex-v-flex-start--m {
    justify-content: flex-start !important;
  }

  .vl-u-flex-v-center--m {
    justify-content: center !important;
  }

  .vl-u-flex-v-bottom--m,
.vl-u-flex-v-flex-end--m {
    justify-content: flex-end !important;
  }

  .vl-u-flex-v-space-between--m {
    justify-content: space-between !important;
  }

  .vl-u-flex-v-space-around--m {
    justify-content: space-around !important;
  }

  .vl-u-flex-direction-row--m {
    flex-direction: row !important;
  }

  .vl-u-flex-direction-column--m {
    flex-direction: column !important;
  }

  .vl-u-flex-direction-row-reverse--m {
    flex-direction: row-reverse !important;
  }

  .vl-u-flex-direction-column-reverse--m {
    flex-direction: column-reverse !important;
  }

  .vl-u-flex-wrap-wrap--m {
    flex-wrap: wrap !important;
  }

  .vl-u-flex-wrap-nowrap--m {
    flex-wrap: nowrap !important;
  }

  .vl-u-flex-wrap-reverse--m {
    flex-wrap: wrap-reverse !important;
  }
}
@media screen and (max-width: 767px) {
  .vl-u-flex-align-left--s {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-left--s,
.vl-u-flex-align-flex-start--s {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-center--s {
    align-items: center !important;
  }

  .vl-u-flex-align-right--s,
.vl-u-flex-align-flex-end--s {
    align-items: flex-end !important;
  }

  .vl-u-flex-align-baseline--s {
    align-items: baseline !important;
  }

  .vl-u-flex-align-stretch--s {
    align-items: stretch !important;
  }

  .vl-u-flex-v-top--s,
.vl-u-flex-v-flex-start--s {
    justify-content: flex-start !important;
  }

  .vl-u-flex-v-center--s {
    justify-content: center !important;
  }

  .vl-u-flex-v-bottom--s,
.vl-u-flex-v-flex-end--s {
    justify-content: flex-end !important;
  }

  .vl-u-flex-v-space-between--s {
    justify-content: space-between !important;
  }

  .vl-u-flex-v-space-around--s {
    justify-content: space-around !important;
  }

  .vl-u-flex-direction-row--s {
    flex-direction: row !important;
  }

  .vl-u-flex-direction-column--s {
    flex-direction: column !important;
  }

  .vl-u-flex-direction-row-reverse--s {
    flex-direction: row-reverse !important;
  }

  .vl-u-flex-direction-column-reverse--s {
    flex-direction: column-reverse !important;
  }

  .vl-u-flex-wrap-wrap--s {
    flex-wrap: wrap !important;
  }

  .vl-u-flex-wrap-nowrap--s {
    flex-wrap: nowrap !important;
  }

  .vl-u-flex-wrap-reverse--s {
    flex-wrap: wrap-reverse !important;
  }
}
@media screen and (max-width: 500px) {
  .vl-u-flex-align-left--xs {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-left--xs,
.vl-u-flex-align-flex-start--xs {
    align-items: flex-start !important;
  }

  .vl-u-flex-align-center--xs {
    align-items: center !important;
  }

  .vl-u-flex-align-right--xs,
.vl-u-flex-align-flex-end--xs {
    align-items: flex-end !important;
  }

  .vl-u-flex-align-baseline--xs {
    align-items: baseline !important;
  }

  .vl-u-flex-align-stretch--xs {
    align-items: stretch !important;
  }

  .vl-u-flex-v-top--xs,
.vl-u-flex-v-flex-start--xs {
    justify-content: flex-start !important;
  }

  .vl-u-flex-v-center--xs {
    justify-content: center !important;
  }

  .vl-u-flex-v-bottom--xs,
.vl-u-flex-v-flex-end--xs {
    justify-content: flex-end !important;
  }

  .vl-u-flex-v-space-between--xs {
    justify-content: space-between !important;
  }

  .vl-u-flex-v-space-around--xs {
    justify-content: space-around !important;
  }

  .vl-u-flex-direction-row--xs {
    flex-direction: row !important;
  }

  .vl-u-flex-direction-column--xs {
    flex-direction: column !important;
  }

  .vl-u-flex-direction-row-reverse--xs {
    flex-direction: row-reverse !important;
  }

  .vl-u-flex-direction-column-reverse--xs {
    flex-direction: column-reverse !important;
  }

  .vl-u-flex-wrap-wrap--xs {
    flex-wrap: wrap !important;
  }

  .vl-u-flex-wrap-nowrap--xs {
    flex-wrap: nowrap !important;
  }

  .vl-u-flex-wrap-reverse--xs {
    flex-wrap: wrap-reverse !important;
  }
}
.vl-u-bg-alt {
  background-color: #f7f9fc;
}

.vl-u-bg-error {
  background-color: #fbebeb;
}

.vl-u-bg-warning {
  background-color: #fff9e8;
}

.vl-u-bg-success {
  background-color: #ecf6ee;
}

.vl-u-border {
  padding-left: 3.5rem;
  position: relative;
}
@media screen and (max-width: 767px) {
  .vl-u-border {
    padding-left: 1.75rem;
  }
}
.vl-u-border:after {
  content: "";
  width: 0.5rem;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--vl-theme-primary-color);
}
.vl-u-border.vl-grid:after {
  height: 100%;
  bottom: 0;
  top: auto;
  left: 3rem;
}
@media screen and (max-width: 767px) {
  .vl-u-border.vl-grid:after {
    left: 1.5rem;
  }
}
.vl-u-border.vl-grid--is-stacked:after {
  height: calc(100% - 3rem);
}
@media screen and (max-width: 767px) {
  .vl-u-border.vl-grid--is-stacked:after {
    height: calc(100% - 1.5rem);
  }
}

.vl-u-highlight-content {
  padding: 4.1666666667%;
  border: 1px #cbd2da solid;
}

.vl-u-highlight-content--alt {
  background: #f7f9fc;
  border: none;
}

button.vl-vi {
  border: 0;
  appearance: none;
  padding: 0;
  outline: none;
}

a.vl-vi {
  text-decoration: none;
}

.vl-vi.vl-vi-u-hidden-text {
  font-size: 0;
}
.vl-vi.vl-vi-u-xs::before {
  font-size: 0.8rem;
}
.vl-vi.vl-vi-u-s::before {
  font-size: 1.3rem;
}
.vl-vi.vl-vi-u-m::before {
  font-size: 1.7rem;
}
.vl-vi.vl-vi-u-l::before {
  font-size: 2rem;
}
.vl-vi.vl-vi-u-xl::before {
  font-size: 2.2rem;
}
.vl-vi.vl-vi-u-90deg::before {
  display: inline-block;
  transform: rotate(90deg);
}
.vl-vi.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg);
}
.vl-vi.vl-vi-u-link::before {
  display: inline-block;
  margin-right: 1rem;
  color: #000;
  font-size: 1.3rem;
  text-decoration: none;
}
.vl-vi.vl-vi-u-color-grey {
  color: #cbd2da;
}
.vl-vi.vl-vi-u-badge {
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
}
.vl-vi.vl-vi-u-badge::before {
  margin: 0;
  vertical-align: middle;
  display: block;
}
.vl-vi.vl-vi-u-badge--link {
  margin-right: 1rem;
}
.vl-vi.vl-vi-u-badge--link-after {
  margin-left: 1rem;
}
.vl-vi.vl-vi-u-badge--positive {
  background-color: #3ca854;
  color: #ecf6ee;
}
.vl-vi.vl-vi-u-badge--positive:hover, .vl-vi.vl-vi-u-badge--positive:focus, a:hover .vl-vi.vl-vi-u-badge--positive, a:focus .vl-vi.vl-vi-u-badge--positive {
  background-color: #3ca854;
  color: #ecf6ee;
}
.vl-vi.vl-vi-u-badge--action {
  background-color: #05c;
  color: #e6eefa;
}
.vl-vi.vl-vi-u-badge--action:hover, .vl-vi.vl-vi-u-badge--action:focus, a:hover .vl-vi.vl-vi-u-badge--action, a:focus .vl-vi.vl-vi-u-badge--action {
  background-color: #003bb0;
  color: #e6eefa;
}
.vl-vi.vl-vi-u-badge--negative {
  background-color: #db3434;
  color: #fbebeb;
}
.vl-vi.vl-vi-u-badge--negative:hover, .vl-vi.vl-vi-u-badge--negative:focus, a:hover .vl-vi.vl-vi-u-badge--negative, a:focus .vl-vi.vl-vi-u-badge--negative {
  background-color: #af2929;
  color: #fbebeb;
}
.vl-vi.vl-vi-u-badge--warning {
  background-color: #ffc515;
  color: #fff9e8;
}
.vl-vi.vl-vi-u-badge--neutral {
  background-color: #f7f9fc;
  color: #333332;
}
.vl-vi.vl-vi-u-badge--neutral:hover, .vl-vi.vl-vi-u-badge--neutral:focus, a:hover .vl-vi.vl-vi-u-badge--neutral, a:focus .vl-vi.vl-vi-u-badge--neutral {
  background-color: #05c;
  color: #e6eefa;
}
.vl-vi.vl-vi-u-badge--light {
  background-color: #fff;
  color: #333332;
}
.vl-vi.vl-vi-u-badge--light:hover, .vl-vi.vl-vi-u-badge--light:focus, a:hover .vl-vi.vl-vi-u-badge--light, a:focus .vl-vi.vl-vi-u-badge--light {
  background-color: #05c;
  color: #e6eefa;
}
.vl-vi.vl-vi-u-badge--xxsmall {
  width: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem;
}
.vl-vi.vl-vi-u-badge--xxsmall::before {
  font-size: 0.8rem;
}
@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--xxsmall {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .vl-vi.vl-vi-u-badge--xxsmall::before {
    font-size: 0.7rem;
  }
}
.vl-vi.vl-vi-u-badge--xsmall {
  width: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem;
}
.vl-vi.vl-vi-u-badge--xsmall::before {
  font-size: 1.3rem;
}
@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--xsmall {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .vl-vi.vl-vi-u-badge--xsmall::before {
    font-size: 1.1rem;
  }
}
.vl-vi.vl-vi-u-badge--small {
  width: 2.6rem;
  height: 2.6rem;
  line-height: 2.6rem;
}
.vl-vi.vl-vi-u-badge--small::before {
  font-size: 1.3rem;
}
@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--small {
    width: 2.2rem;
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .vl-vi.vl-vi-u-badge--small::before {
    font-size: 1.2rem;
  }
}
.vl-vi.vl-vi-u-badge--medium {
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
}
.vl-vi.vl-vi-u-badge--medium::before {
  font-size: 2rem;
}
@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--medium {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  .vl-vi.vl-vi-u-badge--medium::before {
    font-size: 1.5rem;
  }
}
.vl-vi.vl-vi-u-badge--large {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
}
.vl-vi.vl-vi-u-badge--large::before {
  font-size: 2.5rem;
}
@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--large {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
  }
  .vl-vi.vl-vi-u-badge--large::before {
    font-size: 2rem;
  }
}

.vl-u-mark {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, 0.3);
}

.vl-u-mark--accent {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 var(--vl-theme-primary-color-rgba-30);
}

.vl-u-mark--info {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(203, 210, 218, 0.4);
}

.vl-u-mark--success {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(60, 168, 84, 0.2);
}

.vl-u-mark--warning {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, 0.2);
}

.vl-u-mark--error {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(219, 52, 52, 0.2);
}

@media screen and (max-width: 767px) {
  .vl-u-mobile-no-equal-height {
    min-height: 0 !important;
  }
}

.js-vl-clamp-useless {
  display: none !important;
}

.js .js-vl-show-checked {
  display: none;
}
.js .js-vl-show-checked--open {
  display: block;
}

.js.vl-flexbox .js-vl-col-float-right {
  position: absolute;
  z-index: 1;
  padding-bottom: 3rem;
  right: 0;
}
@media screen and (max-width: 767px) {
  .js.vl-flexbox .js-vl-col-float-right {
    position: static;
    padding-bottom: 0;
    margin-top: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .js-vl-col-float-right--pushed {
    margin-top: 0 !important;
  }
}

[data-vl-show-on-select-content] {
  display: none;
}
[data-vl-show-on-select-content][data-vl-show=true] {
  display: block;
}

.vl-u-offset--spacing {
  padding: 0 4.1666666667% 1rem;
}

.vl-u-offset--left {
  margin-left: -4.1666666667%;
}
@media screen and (max-width: 1023px) {
  .vl-u-offset--left {
    margin-left: 0;
    margin-right: 0;
  }
}
.vl-u-offset--left.vl-u-offset--spacing {
  padding-left: 0;
}

.vl-u-offset--right {
  margin-right: -4.1666666667%;
}
@media screen and (max-width: 1023px) {
  .vl-u-offset--right {
    margin-left: 0;
    margin-right: 0;
  }
}
.vl-u-offset--right.vl-u-offset--spacing {
  padding-right: 0;
}

.vl-u-float-right {
  float: right !important;
}

.vl-u-float-left {
  float: left !important;
}

.vl-u-float-none {
  float: none !important;
}

.vl-u-display-block {
  display: block !important;
}

.vl-u-display-inline-block {
  display: inline-block !important;
}

.vl-u-display-flex,
.vl-u-flex {
  display: flex !important;
}

.vl-u-display-inline-flex {
  display: inline-flex !important;
}

.vl-u-clearfix::before, .vl-u-clearfix::after {
  content: "";
  display: table;
}
.vl-u-clearfix::after {
  clear: both;
}

.vl-u-no-overflow {
  overflow: hidden;
}

.vl-u-position-relative {
  position: relative;
}

.vl-u-named-target::before,
.vl-u-offset::before {
  content: "";
  display: block;
  height: 90px;
  margin: -90px 0 0;
  z-index: -1;
  position: relative;
}

.vl-u-named-target-wrapper {
  position: relative;
}

.vl-u-named-target-dummy:empty,
.vl-u-offset-dummy:empty {
  display: block;
  position: absolute;
  top: 0;
  margin-top: -90px;
  height: 1px;
  width: 1px;
  visibility: hidden;
  opacity: 0;
}

.vl-u-inline-list {
  display: inline-block;
  vertical-align: top;
}

@media print {
  .vl-u-hide-on-print {
    display: none;
  }

  .vl-u-show-on-print {
    display: block;
  }

  header,
footer {
    display: none;
  }
  .vl-main-content header, [role=main] header, main header,
.vl-main-content footer,
[role=main] footer,
main footer {
    display: block;
  }

  .iwgh3,
.iwgh2,
.iwgf3,
.iwgf2 {
    display: none;
  }
}
.vl-u-hr {
  border: 0;
  border-bottom: 1px solid #cbd2da;
  margin-top: 0;
  margin-bottom: 0;
}
.vl-u-hr--wave {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='19' viewBox='0 0 100 19' %3E%3Cpath d='M0,3.5c12.5,0,12.5,12,25,12s12.5-12,25-12,12.5,12,25,12,12.5-12,25-12' fill='none' stroke='%23d2d7dd' stroke-miterlimit='10' stroke-width='6'/%3E%3C/svg%3E") repeat-x;
  background-size: 20px 4px;
  height: 4px;
  border-bottom: 0;
}
.vl-u-hr--dashed {
  min-height: 6px;
  border: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.04 5.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23bec5cf;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 1%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Crect class='cls-1' x='1.01' y='3.99' width='1.01' height='1'/%3E%3Crect class='cls-1' y='4.99' width='1.01' height='1'/%3E%3Crect class='cls-1' x='3.02' y='2' width='1.01' height='1'/%3E%3Crect class='cls-1' x='2.01' y='2.99' width='1.01' height='1'/%3E%3Crect class='cls-1' x='5.04' width='1.01' height='1'/%3E%3Crect class='cls-1' x='4.03' y='1' width='1.01' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat-x;
  background-size: 6px 6px;
}

::selection {
  background-color: var(--vl-theme-primary-color-rgba-30);
}

::-moz-selection {
  background-color: var(--vl-theme-primary-color-rgba-30);
}

.vl-u-spacer {
  margin-bottom: 2rem;
}

.vl-u-spacer--xsmall {
  margin-bottom: 1rem;
}

.vl-u-spacer--small {
  margin-bottom: 1.5rem;
}

.vl-u-spacer--medium {
  margin-bottom: 3rem;
}

.vl-u-spacer--large {
  margin-bottom: 6rem;
}
@media screen and (max-width: 767px) {
  .vl-u-spacer--large {
    margin-bottom: 3rem;
  }
}

.vl-u-spacer--none {
  margin-bottom: 0;
}

.vl-u-scroll-offset__parent {
  position: relative;
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
}

.vl-u-scroll-offset {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: -80px;
  width: 1px;
  height: 1px;
}

.js-vl-sticky-placeholder {
  position: relative;
}
@media screen and (max-width: 767px) {
  .js-vl-sticky-placeholder {
    height: auto !important;
  }
}

.js-vl-sticky--absolute {
  position: absolute;
}

.js-vl-sticky--fixed {
  position: fixed;
}

.vl-u-sticky {
  top: 0;
  position: sticky;
}

.vl-u-sticky-gf {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .vl-u-sticky-gf {
    display: block;
  }
}
.vl-u-sticky-gf .vl-page {
  flex: 1;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .vl-u-sticky-gf .vl-page {
    overflow: hidden;
  }
}

.vl-u-text--ellipse {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vl-u-text--uppercase {
  text-transform: uppercase;
}

.vl-u-text--lowercase {
  text-transform: lowercase;
}

.vl-u-text--capitalize::first-letter {
  text-transform: uppercase;
}

.vl-u-text--success {
  color: #3ca854;
}

.vl-u-text--warning {
  color: #ffc515;
}

.vl-u-text--error {
  color: #db3434;
}

.vl-u-text--bold {
  font-weight: 500;
}

.vl-u-text--italic {
  font-style: italic;
}

.vl-u-text--small {
  font-size: 1.4rem !important;
}

.vl-u-text--medium {
  font-size: 1.6rem !important;
}

.vl-u-text--xsmall {
  font-size: 1.2rem !important;
}

.vl-u-text--xxsmall {
  font-size: 1rem !important;
}

mark,
.vl-u-text--marked {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, 0.3);
}

@media screen and (min-width: 1023px) {
  .vl-u-visible--l {
    display: block !important;
  }
}
@media screen and (max-width: 1023px) {
  .vl-u-visible--m {
    display: block !important;
  }
}
@media screen and (max-width: 767px) {
  .vl-u-visible--s {
    display: block !important;
  }
}
@media screen and (max-width: 500px) {
  .vl-u-visible--xs {
    display: block !important;
  }
}

.vl-u-hidden {
  display: none;
}
@media screen and (min-width: 1023px) {
  .vl-u-hidden--l {
    display: none !important;
  }
}
@media screen and (max-width: 1023px) {
  .vl-u-hidden--m {
    display: none !important;
  }
}
@media screen and (max-width: 767px) {
  .vl-u-hidden--s {
    display: none !important;
  }
}
@media screen and (max-width: 500px) {
  .vl-u-hidden--xs {
    display: none !important;
  }
}

.vl-u-whitespace {
  white-space: normal;
}

.vl-u-whitespace--nowrap {
  white-space: nowrap;
}

.vl-u-whitespace--pre {
  white-space: pre;
}

.vl-u-whitespace--pre-line {
  white-space: pre-line;
}

.vl-u-whitespace--pre-wrap {
  white-space: prewrap;
}

.vl-u-whitespace--unset {
  white-space: unset;
}

.vl-u-whitespace--break-spaces {
  white-space: break-spaces;
}`; export default styles;