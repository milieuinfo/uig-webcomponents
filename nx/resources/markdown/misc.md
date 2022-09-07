https://www.compart.com/en/unicode/category/So
https://modern-web.dev/docs/dev-server/plugins/storybook/

uit te voeren vanuit de folder waar de scss staan, de node_modules folder moet relatief kloppen !!!
npx sass _vl-elements.scss > vl-elements.css --load-path ../../../../node_modules

// de dist folder statisch serven
npx http-server ./dist -p9090 --cors


// nieuwe repo & project structuur
 -> main ipv master

```
uig/
├─ applications
│  ├─ apps/
│  │   -> @domg-uig/alliance
├─ cdn-assets/
│  │   -> @domg-ext/govflanders-font
│  │   -> @domg-ext/tinymce-theme
├─ webcomponents/
│  ├─ apps/
│  │   -> @domg-uig/exhibit
│  │   -> @domg-uig/storybook
│  ├─ libs/
│  │   -> @domg-lib/components (+ header-footer /  http-error-message) [ts]
│  │   -> @domg-lib/elements [ts]
│  │   -> @domg-lib/fat-header-footer [ts] (code zit onder components)
│  │   -> @domg-lib/map [js]
│  │   -> @domg-lib/proza-message [js]
│  │   -> @domg-lib/test-support [js]
│  │   -> @domg-lib/react-support [ts]
```

of

```
uig-applications/
├─ apps/
│  -> @domg-uig/alliance

├─ uig-cdn/
│  -> @domg-ext/govflanders-font

uig-webcomponents/
├─ apps/
│   -> @domg-uig/exhibit
│   -> @domg-uig/storybook
├─ libs/
│   -> @domg-lib/components
│   -> @domg-lib/elements
│   -> @domg-lib/testers
```
