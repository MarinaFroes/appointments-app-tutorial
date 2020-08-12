<!-- <p align="center"><img src="./src/img/mylogo.svg" alt="logo" title="logo" width="80"></p> -->
<h1 align="center">My Notes on the book Mastering React Test-Driven Development by Daniel Irvine</h1>

This app was created by following the tutorial available on the book **Mastering React Test-Driven Development** by Daniel Irvine. 

You can check how to install and run it and the references and resources for this tutorial on the [README](./README.md) file. Here I will share some notes about the tutorial and my conclusions.

## Table of contents 

## Table of Contents  
- [First steps with TDD](#first-steps-with-TDD)  

  
<a name="first-steps-with-TDD"></a>
## First steps with TDD

This chapter contains the items bellow: 

- TDD pros:
  - We have **clear requirements** for the app: easier to adapt it later;
  - We gain **automated regression** testing by default;
  - The tests serve as a **verified documentation** for the code;
  - Code with **higher level of trust and confidence**.

- Why he didn't use the default `create-react-app` for creating this app:
  - It comes with extra standard dependencies and boilerplate code that we might not need;
  - This tutorial follows the **YAGNI** (You Ain't Gonna Need It) principle: we don't add anything to the the project unless we're sure it's necessary.

- What is necessary to create the app:
  - Choose a good **IDE**
  - Install **npm** or **yarn**
  - Install **Jest**
  - Add **babbel** preset
  - Initialize a **git repository** - commit early and often (after every test)

- Where to place the tests:
  - Create separate directories for **production** and **test code**.

- First instructions about how to display tests with Jest:
  - Jest includes a DOM implementation in your environment: `jsdom`;
    - Provides access to Document;
    - No need for a browser to run the tests;
  - We don't need to import Jest variables: they're available in the global scope;
  - `describe` defines a test suite: set of tests with a given name;
    - 1st Argument: name (usually same name as the component);
    - 2nd Argument: function where the tests are defined;
  - `it` or `test` defines a single test;
    - 1st Argument: description starting with present-tense verb;
    - 2nd Argument: function where the tests are defined;
    - Each can have as many expectations as you like;
    - Empty tests always pass;
    - We're using the Behavior Driven Development style of TDD: stick with `it` instead of `test`;
  - `it.skip` ignores a test if necessary;
  - `expect` defines an expectation: it has an expected value that is compared against a received value;

- How to render React from a test:
  - Create a component;
  - Create a container: `const container = document.createElement('div')`;
  - Replace an existing DOM node (container) with the rendered node tree (component): `ReactDOM.render(component,container)`;

- Steps for testing:
  - Write a failing test;
  - Make it pass: write the simplest thing to pass the test;
  - Refactor using DRY principle;

- Composition of the failing test output: 
  - Name of the failing test;
  - Expected answer;
  - Actual answer;
  - Location of the error;

- Triangulation process:
  - Implement the simplest thing to make the test pass (even hard-coding);
  - Add more tests to get to the real implementation;
  - The more specific the test gets the more general our production code needs to get;

- Refactoring tests:
  - Promoting variables;
  - Using `beforeEach` block;
  - Extracting methods;