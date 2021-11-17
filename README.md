# C1DS React Component Library

This is the library of responsive, adaptive, linted, and accessible React components (and some utilities) that conform 
to the specifications defined in the C1DS Brand Specification. The team has written the components in TypeScript, as 
required for all components by the Architecture Team on the program, and the library ships with type definitions to
integrate seamlessly with your own TypeScript applications, enhance the development experience in your IDE, and ultimately 
help you write better, typesafe code.

## Outputs

### RCL

`npm run package`

This is the tarball of components. When it is published to Nexus, you can install it in the usual NPM sort of way 
with `npm install @csm/react-component-library`. When it is not available via Nexus, you can build the library with `npm run package`
and add it to your project manually.

### Storybook

`npm run storybook`

Storybook is a component browser where the RCL is deployed so you can you interact with the components in the RCL and all
their variants, view the code that describes the APIs and the React props you can provide to produce the different variants,
and view accessibility testing results.   

## CI-CD

These are the relevant tasks for automation:

`npm run dist`

This performs the following tasks:
- Run `npm install` to ensure `node_modules` is in sync with `package.json`
- Run `eslint` on the RCL to check for quality in the areas of TypeScript, React, React Hooks, accessibility, and formatting
- Run `react-testing-library` to execute the tests. There aren't many because most of the behavior is supplied as props by
  consumers, but more complicated components have tests.
- Build the RCL tarball in the `build` directory

Once built, the RCL can be published to Nexus for consumption by development teams.

`npm run build-storybook`

This builds the Storybook component browser to the `storybook-static` folder, and it can be published to an
`nginx` container deployed to OpenShift.
