# template-no-compile-typescript

This serves as an instructional starting point for the use of typescript type checking within a regular javascript nodejs project. No compile step is needed, because the project uses JSDoc comments.

## Benefits

- Typescript type checking as you code (thanks to language servers like those in VSCode)
- Modules just work
- No source code maps
- Debugging just works (e.g. breakpoints)
- No compile step
- No watchers
- Everything is instantaneously ready (faster than vite!)
- Compatible with client-side browser javascript engines (see [importmaps](https://jspm.org/getting-started#package-management-with-import-maps))

## Considerations

1. To be useful, this depends heavily on a language server in your code editor to show type errors as you go.
2. There is some minimal setup required (see below). Using this template avoids the setup.

## Ingredients

The necessary ingredients within this project are as follows:

1. `tsconfig.json`: the `allowJs`, `checkJs`, and `strict` options set to true.
2. `package.json`: the `type` set to `module` allows nodejs to use ES modules (`import`/`export` instead of `require`).
3. JSDoc comments with types. See code for examples.
