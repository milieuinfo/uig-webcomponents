# Nrwl - Nx

https://nx.dev/

# Setup

- npx create-nx-workspace@latest
  -> nx / apps [an empty workspace with no plugins with a layout that works best for building apps] / No Nx Cloud
- npm install -D @nrwl/web
- npx nx g @nrwl/web:lib elements --buildable --publishable --importPath=@uig/elements
- npx nx g @nrwl/web:lib components --buildable --publishable --importPath=@uig/components
- npx nx g @nrwl/web:lib common/base2 --buildable
- npx nx g @nrwl/web:lib map --buildable --publishable --importPath=@uig/map
- npx nx g @nrwl/web:application exhibit
- npx nx g @nrwl/web:lib exhibit/core
- npm install -D @nrwl/storybook
- npx nx g @nrwl/web:application storybook


- npm install -D @nrwl/react
- npx nx g @nrwl/web:application storybook
- nx g @nrwl/react:storybook-configuration storybook


# Workspace aanpak

https://nx.dev/structure/grouping-libraries

https://nx.dev/structure/buildable-and-publishable-libraries

 /dv-components -> @uig/dv-components
 /map           -> @uig/map
