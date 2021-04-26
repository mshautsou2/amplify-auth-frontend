## Submodule Initialization

1. `git submodule add git@bitbucket.org:atlas_guides/atlasguides-web-common.git src/api`
2. `cd src/api/ && git checkout develop && cd ../../`
3. In `package.json`
Change `include` property
```json
  "include": [
    "src",
+++ "src/api/src"
  ]
```
4.