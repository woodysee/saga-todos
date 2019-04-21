# Saga Todos

## Set up

- `npx create-react-app saga-todos`, `cd saga-todos`
- Highly recommended to read `https://facebook.github.io/create-react-app/docs/setting-up-your-editor` right after setting up your `create-react-app`.
  - Add `{ "extends": "react-app" }` in a new file `./.eslintrc.json`.
  - `npm install --save prettier lint-staged husky`
    - [`prettier`](https://prettier.io/docs/en/) is the JavaScript / CSS formatter we will run during active development.
    - [`lint-staged`](https://www.npmjs.com/package/lint-staged) allows us to run scripts on staged files in git. See [also](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8). (Optional)
    - [`husky`](https://www.npmjs.com/package/husky) allows you to run command-line scripts like tests before commits or pushes occur to remote. (Optional)
- `npm install antd --save` (Using Ant Design components). Add `@import '~antd/dist/antd.css';` to index stylesheet.
- `npm install node-sass --save` . Allow you to load SASS stylesheets.