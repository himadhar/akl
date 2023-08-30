# **Aklamio Frontend Challenge**

## **Information**

The Cool Ads is a very successful advertising company with a lot of clients. The CEO of the company, Elon Must, needs a place in which he can visualize the actual clients, their information, and in some cases update the approved budget they have with the company.

## **Task #A**

Create a react app that displays a list of the clients of the company. This list must include the following information:

- Company name of the client
- Date of contract signature with The Cool Ads
- Total Budget Available
- Budget already spent
- Budget left

The data must be fetched from an endpoint, in this format (this is just an example, you can include as many clients as you want):

```javascript
[
  {
    id: 1245,
    company_name: "Tesla",
    budget: 125000.0,
    budget_spent: 62000.0,
    date_of_contract_sign: "2021-01-04",
  },
  {
    id: 1246,
    company_name: "Apple",
    budget: 110000.0,
    budget_spent: 32000.0,
    date_of_contract_sign: "2021-03-05",
  },
];
```

**The endpoint can be mocked.**

## **Task #B**

When you click on the client row, you have to open a dialog/modal showing the client name as the title, one editable input field and a submit button:

- This input field is prefilled with the budget of the client.
- The user can edit/modify this value and submit the change.
- The value must be valid (a number, not less than the budget spent). Submit button must be disabled if no value was entered.
- After clicking on the submit button, the new value for budget and budget_left should be displayed in the principal list, and the dialog/modal/popup should be closed.

**_The dialog/modal component must be covered by unit tests._**

- You can use any state management strategy (Redux, Context API, Local State, etc). No restrictions.
- It is up to you to use any CSS framework or not.
- It is recommended to use react-testing-library for the unit tests.

## Set up

This app requires **Node** and **npm**, you can also use **yarn** but it's optional. Please refer to the official documentation for installing those libraries. 

To set up the packages, please run 

`npm install`

After that, while in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
