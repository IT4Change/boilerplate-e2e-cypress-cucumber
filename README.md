# boilerplate-e2e-cypress-cucumber

IT4C Boilerplate for End-to-End Testing with Cypress utilizing
* [cypress-io/github-action](https://github.com/marketplace/actions/cypress-io) caching the Cypress installation and dependencies for fast Cypress CI initialisation
* [Cucumber](https://cucumber.io/docs/gherkin/reference/) for human-readable test specifications
* [Multiple Cucumber HTML Reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter/tree/main) to create easy readable, and searchable HTML reports enriched with metadata

## Requirements and Commands

Building this project requires `nodejs` (`>= v20`) and `npm`.


## Commands

| Command                    | Description                                   |
|----------------------------|-----------------------------------------------|
| **Installation**           |                                               |
| `npm install`              | Project setup                                 |
| **Linting**                |                                               |
| `npm run test:lint:eslint` | Run Eslint linter                             |
| **Run Cypress**            |                                               |
| `npm run cypress:open`     | Open Cypress GUI                              |
| `npm run cypress:run`      | Run all Cypress tests headless in CLI         |
| **Documentation**          |                                               |
| `npm run docs:dev`         | Run documentation locally in development mode |
| `npm run docs:build`       | Build static documentation                    |


### Update

Retrieve a list of updatable packages by running `npm run update`.

Appending `-u ` will also update the packages in the `package.json`.
Afterwards run `npm install`.

```bash
npm run update -- -u
npm install
```


## How to use as part of a project

If you want to use this template as part of a larger project, e.g. in conjunction with a frontend also utilizing a boilerplate you cannot use the template mechanic provided by github for this repository.

You can use the following commands to include the whole git history of the boilerplate and be able to update according to changes to this repo using another remote.

```bash
git remote add xxx_boilerplate-e2e-cypress-cucumber git@github.com:IT4Change/boilerplate-backend.git
git fetch xxx_boilerplate-e2e-cypress-cucumber
git merge -s ours --no-commit --allow-unrelated-histories xxx_boilerplate-e2e-cypress-cucumber/master
git read-tree --prefix=xxx/ -u xxx_boilerplate-e2e-cypress-cucumber/master
git commit -m "Imported boilerplate-e2e-cypress-cucumber as a subtree under xxx/."
```

To update the subtree you can use

```bash
git subtree pull -P xxx/ xxx_boilerplate-e2e-cypress-cucumber master
git commit -m "Updated boilerplate-e2e-cypress-cucumber in subtree under xxx/."
```

Where `xxx` refers to the folder and product part you want to use the boilerplate in (e.g. `cypress` or `e2e-tests`).

This mechanic was taken from this [source](https://stackoverflow.com/questions/1683531/how-to-import-existing-git-repository-into-another/8396318#8396318)

## License

[Apache 2.0](./LICENSE)
