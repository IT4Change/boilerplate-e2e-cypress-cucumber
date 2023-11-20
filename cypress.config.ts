import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpack from '@cypress/webpack-preprocessor';

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     preprocessor(config, {
//       typescript: require.resolve("typescript"),
//     })
//   );

//   return config;
// }

const setupNodeEvents = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  });
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader',
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );

  return config;
};

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout:180000,
    chromeWebSecurity: false,
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    retries:  0,
    video: false,
    setupNodeEvents,
    experimentalInteractiveRunEvents: true,
  }
});