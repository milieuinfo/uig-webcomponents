# Nrwl - Nx

https://nx.dev/

# Setup

-   npx create-nx-workspace@latest
    -> nx / apps [an empty workspace with no plugins with a layout that works best for building apps]
    / No Nx Cloud
-   npm install -D @nrwl/web
-   npx nx g @nrwl/web:lib elements --buildable --publishable --importPath=@uig/elements
-   npx nx g @nrwl/web:lib components --buildable --publishable --importPath=@uig/components
-   npx nx g @nrwl/web:lib common/utilities --buildable
-   npx nx g @nrwl/web:application exhibit
-   npx nx g @nrwl/web:lib testers --buildable --publishable --importPath=@uig/testers
