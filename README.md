![Build](https://github.com/coenmooij/transport-ui/actions/workflows/build.yml/badge.svg)
![Test](https://github.com/coenmooij/transport-ui/actions/workflows/test.yml/badge.svg)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=transport-ui)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/coenmooij/transport-ui/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/coenmooij/transport-ui/?branch=main)

# Transport UI

## Live Demo

https://transport-ui.herokuapp.com/

> :warning: (might be sleeping, wait or refresh)

## Introduction

This app was created as a code assignment with a time constraint of 6-8 hours.

The general steps I took are:

- Create new angular project
- Setup tooling
- Build components + pages
- Write unit tests
- Write readme

## Tooling

> Man is a tool-using animal. Without tools he is nothing, with tools he is all. - Thomas Carlyle

> Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Abraham Lincoln

As hinted by the above quotes, I consider tooling to be quite fundamental.

The basic chain of commands of tooling I use is bottom up. This doesn't mean one tool is better than the other, however
it does mean they run in order.

These levels are:

- Entry Level Hygiene: Linters (spaces, commas, the most basic stuff)
- Does it even compile? (`npm run build`)
- Core: Unit Tests (working building blocks)
- Features: E2E Tests (does it do as it should?)
- Quality: Statical Analysis (Does the code smell?)

### Linters

- :no_entry: Commitlint with JIRA plugins (not relevant for this short assignment)
- :white_check_mark: Prettier (default formatting)
- :white_check_mark: Stylelint with plugins (advanced SCSS rules and formatting)
- :no_entry: ESLint with plugins (advanced JS/TS rules & formatting)

> :warning: ESLint was unfortunately unavailable at time of setup because of angular14 update. At the time of writing it
> has fortunately (for the next projects) just become available.

### Unit Tests

Using the default angular testing kit:

- karma
- jasmine

Would have loved to use 'jasmine-marbles' for data providers but this project doesn't really have any data component.

### E2E Tests

End-to-end tests are missing. They are the only manual process left in the chain (as often performed by QA Engineers).

However, given some more time, this would be one of the first things implemented. I would've used:

- Cypress
- Gherkin
- Gherkinlint (there's a linter for everything)
- Maybe Cucumber if still relevant

Of course this would be hooked up into the automation cycle, inside the pre-push hook, and in a GitHub action. There are
some handy npm packages to run the tests in the background which I've used in the past (e.g. `concurrently`).

### Statical Analysis

Scrutinizer is a great free tool for open-source projects, however SonarQube remains the clear winner.

In both cases, it's an automated 'senior dev' reviewing your code. Awesome.

### Automation

To hook everything up I've used:

- Husky for git hooks (pre-commit, pre-push)
- lint-staged for running linters on changed files
- setting karma to run in the background
- GitHub actions and badges in the readme for build/test status
- Scrutinizer integration for statical analysis
- Express for running a simple server
- Heroku for deploying to the world

## Design

For design I've built a small set of supporting components with custom scss. I've used the free font-awesome icon-set to
visually support this.

I've 'made up' a company which is heavily inspired by a certain industry/brand. Something about a beach and a
volleyball.

I am very aware that this UI can be classified as a back-end design. However, it should be user friendly.

> ???? The brand colors are unfortunately not really suited for dark mode, as the orange and the purple live on different
> respective ends of the contrast spectrum.

For the actual scss I've taken a standard normalize sheet and some google font, next to scaling rem's down to 10px.

Oh yes, and check out the favicon. :smile:

## Architecture

The project imo is too small to separate into projects or libraries, but functionality (pages/routing/layout), components
(html, scss), and the core (services, interfaces, utility) are separate. You could consider it MVC pattern.

I've used barrel files (`index.ts`) as much as possible to simplify imports and future-proof refactoring.

Everything except the pages is unit tested. I believe this should be automatically tested by E2E tests when given the
time.

Components have been tested but not extensive because of the time constraint. They also can use a bit more love, however
I've tried to showcase some patterns here and there.

The main idea is that the `app` code is as brief as possible, and that the design/component system has the behaviour
baked in.

So you can just use it, and it will work, but you can configure or structure from outside. To facilitate this, I rely
heavily on content projection.

## Features

The app has a sign-up link on the page and button in header. Click each to go to the signup form.

There is an additional constraint on the email field, which was not described in the assignment. However, I wanted to
use an async validator. So that's why.

> Note from me: UX is suboptimal with the way the errors are shown while you're still filling in the form. Can be solved
> with a different UX approach. Need a UX-Professional for a consistent approach among forms.

## Developer's Note

In regard to the technology/stack being appropriate for the assigment. That's an interesting question. As the assignment
is both to give an indication of your level of skill, but also pragmatism and ability to deliver when asked.

I consider myself a 10x developer, but in order to accomplish that level of speed, you need an iterative approach, a bit
of freedom and a good team/process. Tools and code quality should be facilitating this and be of the level of quality
that allows the dev-team to focus on providing quality features to the users.

## Running locally

If you want to just view the project, go to the live demo at:

https://transport-ui.herokuapp.com/

> :warning: Because the app is sleepy, you might need to wait a bit or refresh (also counts for the heroku badge)

But you can check it out locally:

1. Clone the repository `git clone https://github.com/coenmooij/transport-ui.git` (or with ssh if you prefer, you nerd)
2. Navigate into the directory (e.g. `cd transport-ui`)
3. install dependencies using `npm install`
4. Run `ng serve` to start the server
5. Click on the link in your terminal or navigate to `http://localhost:4200/`
6. You should see the app running in your browser!

## Testing

### Unit Tests

Run `ng test` to execute the unit tests via Karma. They are automatically configured to run with code-coverage.

### End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via Cypress. (not yet implemented)
