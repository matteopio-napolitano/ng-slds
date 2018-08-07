# Ng-Slds

This project is a showcase of How to Use Angular CLI with Salesforce Lighning Design System.

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

You can install Angular CLI globally, if this suites for you:

```
$ npm install -g @angular/cli
```

## Getting Started

In order to clone and install this project on your local, you have to execute the following commands:

```
$ git clone https://github.com/matteopio-napolitano/ng-slds.git
$ cd ng-slds
$ npm install
$ npm start
```

## SLDS: Integration
Salesforce Lighning Design System (SLDS) can be integrated within an Angular CLI Application by loading all the necessary assets. To achive this, it is necessary to configure properly the `angular.json` file.

First of all, we need to add SDLS as a dependecy:

```
$ npm install @salesforce-ux/design-system --save
```

Next step, we configure Angular by linking the CSS style sheet:

```
"styles": [
  ...,
  ...,
  
  "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"
]
```

Finally, we link all SLDS's static assets:

```
"assets": [
  ...,
  ...,
  
  { "glob": "**/*", "input": "./node_modules/@salesforce-ux/design-system/assets/fonts", "output": "/assets/fonts/" },
  { "glob": "**/*", "input": "./node_modules/@salesforce-ux/design-system/assets/icons", "output": "/assets/icons/" },
  { "glob": "**/*", "input": "./node_modules/@salesforce-ux/design-system/assets/images", "output": "/assets/images/" }
],
```

## Angular: Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular: Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Angular: Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).