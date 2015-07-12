# My Links

Application based on [Angular-seed](https://github.com/angular/angular-seed).

## About
**My links** is a simple web application to keep links organised.
The need came from a team that get some __clients__. Each clients get __environments__ composed by servers. Those servers hosts __categorized applications__.

**My links** is based on the data model decribe above.

## Usage
### Add / modify links

All the application configuration is located in the app/links folder.
The "clients.json" file get all the clients and environments list.
A file by environment may exists to be displayed. This file get all the links to display for an environment.

Each environment file have to follow this this naming rule : clientname-environmentname.json

Existing files should be used as exemples.

## Develop
### Get dependencies

    npm install

### Start web server

    npm start

Then open a web browser to this url [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)

### Run unit tests

    npm test

Results will be printed in the opened terminal.

### Run end to end tests

    npm run protractor

Application server need to be started to perform end to end tests.