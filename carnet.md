# Appway carnet

"carnet" is a dev tool to note un-important stuff
don't pay attention to it, most of it's content is outdated

## Appway Project structure

dist/   - destined to be in the framework user's lib directory
src/    - every source files, in dev form (in chunks, ts written, using webpack loaders ..)

## Projects using appway

packages/   - All packages used by appway, you packages
    appway/
        awLayout/
            index.js
    jquery/
        index.js
    myproject/
        core/
            index.js

import awUI from "../../awUI/main.js"

A package can depend on another

awLayout depends on awLog



