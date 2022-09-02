# Klish Group React Developer Exercise

## Goal
1. Create a new "Accordion" component that is displayed in Storybook and available in the running app at URL http://localhost:3000/accordion
1. Use the HTML, CSS, and JS located in the "HTML" folder
1. Break out the static HTML to build a new "Accordion" component with the below files from the sample "Wysiwyg" component located in "src/Common/components/Wysiwyg":

    - Accordion.interfaces.ts
    - Accordion.test.tsx
    - Accordion.tsx
    - Skins/index.tsx
    - Skins/Default/Default.stories.tsx
    - Skins/Default/Default.test.tsx
    - Skins/Default/Default.tsx

![image](HTML/img/accordion-ss.PNG)

## Getting Started

1. Clone project locally
1. Install yarn (if needed) `npm install –global yarn`
1. `yarn install`

## Verifying Work is Completed
Once development work has completed, verify that your component will pass checks and matches the desired format.

- No linting errors:
```sh
$ yarn lint
yarn run v1.22.11
$ eslint ./ --ext js,jsx,ts,tsx
Done in 6.64s.
```
- Tests pass and coverage is at least 80%: `yarn test:coverage`
```sh
$ yarn test:coverage
yarn run v1.22.11
$ react-scripts test --coverage --watchAll=false
 PASS  src/Common/components/Wysiwyg/Wysiwyg.test.tsx
 PASS  src/Common/components/Wysiwyg/Skins/CenterAligned/CenterAligned.test.tsx
 PASS  src/Common/components/Wysiwyg/Skins/Default/Default.test.tsx
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |     100 |      100 |     100 |     100 |                   
 Wysiwyg                     |     100 |      100 |     100 |     100 |                   
  Wysiwyg.tsx                |     100 |      100 |     100 |     100 |                   
 Wysiwyg/Skins/CenterAligned |     100 |      100 |     100 |     100 |                   
  CenterAligned.stories.tsx  |     100 |      100 |     100 |     100 |                   
  CenterAligned.tsx          |     100 |      100 |     100 |     100 | 
 Wysiwyg/Skins/Default       |     100 |      100 |     100 |     100 | 
  Default.stories.tsx        |     100 |      100 |     100 |     100 | 
  Default.tsx                |     100 |      100 |     100 |     100 | 
-----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        4.559 s
Ran all test suites.
Done in 5.90s.
```
- Storybook loads: `yarn storybook`
- The application loads and you are able to load the accordion page: `yarn start`
- A production build is successful:
```sh
$ yarn build
yarn run v1.22.11
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  56.08 KB       build\static\js\2.4db43f56.chunk.js
  783 B          build\static\js\runtime-main.d4be5408.js
  755 B (-44 B)  build\static\js\main.743e9c30.chunk.js
  278 B          build\static\css\main.2ae47eeb.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

Done in 15.02s.
```

## Code Linting - ESLint & Prettier
The code linter consists of two parts: ESLint and Prettier. ESLint is a static code analysis tool. It allows us to use predefined rulesets and define or alter specific rules per file or for the entire project. These rules cover mainly code quality and style and results in more uniform and bug resistant code.

One of the main rulesets is AirBnB which is a popular style guide. The other ruleset is SonarLint from SonarQube which deals more with code quality and code “sniffing”. Looking mainly for potential bugs and overly complex code.

The second part of this setup is Prettier which is a code formatter. This will automatically fix some of the highlighted issues that ESLint/Prettier find while you are coding.

### Linter Setup (VSCode)
- Install VSCode extensions: ESLint by Dirk Baeumer and Prettier - Code Formatter.
- You can run the formatter by pressing shift + alt + f. You may need to change the default formatter to ESLint.
- To change the default linter press ctrl + shift + p > type "formatter" > select format doc with" > select "configure default formatter". 
- You can also configure the formatter to run on save in the Prettier extension settings.
- To ignore files/directories, add them to the ignorePatterns array in the eslintr.js file

## Test Coverage
  Test should be written for every file/component in this project. We chose to use the React Testing Library, and the guiding pronciple for this library is to test what is rendered in the DOM, in this case virtual DOM, as opposed to the exact internal state. This is becuase efficient React code should be using state only to affect what is being rendered.

  Concentrate on creating tests that cover code functionality rather than just creating tests.  In general, a basic rule of thumb is to target coverage of 80%.