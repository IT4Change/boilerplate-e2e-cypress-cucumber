/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import webpack from '@cypress/webpack-preprocessor'
import { defineConfig } from 'cypress'

const setupNodeEvents = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  })
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
  )

  return config
}

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://the-internet.herokuapp.com/',
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: false,
    retries: 0,
    video: false,
    setupNodeEvents,
  },
})
