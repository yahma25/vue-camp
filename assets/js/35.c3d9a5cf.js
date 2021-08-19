(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{427:function(s,n,a){"use strict";a.r(n);var t=a(30),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"뷰-프로젝트-폴더-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-프로젝트-폴더-구조"}},[s._v("#")]),s._v(" 뷰 프로젝트 폴더 구조")]),s._v(" "),a("p",[s._v("뷰의 장점 중 하나는 빠른 프토토 타이핑이 가능하다는 점입니다. 뷰 CLI로 프로젝트를 생성하고 나면 npm으로 원하는 기능들을 빠르게 확장해 나갈 수 있습니다.")]),s._v(" "),a("p",[s._v("이번 챕터에서는 복잡해진 프로젝트 폴더 구조를 효율적으로 관리하는 방법에 대해서 알아보겠습니다. 철저히 저의 개인적인 의견이 반영된 폴더 구조이기 때문에 참고만 하시고 필요한 것만 취해가시면 될 것 같습니다 😃")]),s._v(" "),a("h2",{attrs:{id:"뷰-cli로-생성한-기본-폴더-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-cli로-생성한-기본-폴더-구조"}},[s._v("#")]),s._v(" 뷰 CLI로 생성한 기본 폴더 구조")]),s._v(" "),a("p",[s._v("뷰 CLI 2.9 버전을 이용하여 webpack-simple 프로젝트를 아래와 같이 생성합니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue init webpack-simple folder-structure\n")])])]),a("p",[s._v("프로젝트를 생성하고 나면 기본적인 폴더 구조는 아래와 같이 구성됩니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├─ README.md\n├─ index.html\n├─ webpack.config.js\n├─ package.json\n└─ src\n   ├─ main.js\n   ├─ App.vue\n   └─ assets\n      └─ logo.png\n")])])]),a("h2",{attrs:{id:"기능-별로-구분한-폴더-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기능-별로-구분한-폴더-구조"}},[s._v("#")]),s._v(" 기능 별로 구분한 폴더 구조")]),s._v(" "),a("p",[s._v("실무에서 개발할 때 필수로 사용되는 라우터, 상태 관리, 필터, 다국어, 플러그인 등을 이용하면 아래와 같이 폴더를 구분할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├─ README.md\n├─ index.html\n├─ webpack.config.js\n├─ package.json\n└─ src\n   ├─ main.js\n   ├─ App.vue\n   ├─ components        컴포넌트\n   │  ├─ common\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ router            라우터\n   │  ├─ index.js\n   │  └─ routes.js\n   ├─ views             라우터 페이지\n   │  ├─ MainView.vue\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ store             상태 관리\n   │  ├─ auth\n   │  ├─ index.js\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ api               api 함수\n   │  ├─ index.js\n   │  ├─ users.js\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ utils             필터 등의 유틸리티 함수\n   │  ├─ filters.js\n   │  ├─ bus.js\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ mixins            믹스인\n   │  ├─ index.js\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ plugins           플러그인\n   │  ├─ ChartPlugin.js\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   ├─ translations      다국어\n   │  ├─ index.js\n   │  ├─ en.json\n   │  └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   └─ assets            css 등의 웹 자원\n      ├─ css\n      ├─ images\n      └─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);