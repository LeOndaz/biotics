This is a basic DICOM viewer that uses DWV.

Currently, DMW works, but most features are buggy as far as my experience goes.

## Notes

- This project uses: Vite as a bundler, Bun as a runtime and package manager, Typescript, React, Redux & Redix-toolkit.
- This project uses a domain driven design, each feature in encapsulated in its own working directory.
- Currently, we can't zoom (zoom not working in DMW with me for some reason) nor rotate, there're solutions but they are complex and need time.
    - Implement our own DICOM viewer

## Reflection

### Design decisions
1. DMW was selected because of the feedback on cornerstone.js
2. Redux-toolkit to save time using Redux.
3. Typescript for catch early bugs.
4. Bun because it saves installation time by more than 90%.
5. Axios shares the token through interceptors.
6. Everything uses Functional components + hooks. 
7. The app uses domain driven design, everything is driven by business, specially the directory structuring.
8. Each feature has its own components/slices/reducers/actions.

### Optimizations
1. The DMW loads some urls, currently I used `usePrevious` to check if the urls update, if they don't, we don't render.

### Security considerations
1. CORS currently is a wildcard, anyone passes through the walls
2. Filenames are validated & secured
3. JWT is used as an authentication method.

### Comments
1. Something will take time, I intentionally put a TODO there to point them out.
2. Eslint was untouched, however, my preferred eslint config is a one I deployed [here](https://www.npmjs.com/package/@leondaz/eslint-config)
3. No error handling is provided at the moment


### Intentionally, the code was meant to be checked for quality problems.


## Get running
- ``bun dev``, or `npm run dev`