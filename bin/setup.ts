// @ts-ignore
import inquirer from 'inquirer'
import chalk from 'chalk'
import path from 'path'
import { writeFileSync, readFileSync } from 'fs'
import crypto from 'crypto'

console.log(`
  This tool helps you get your NextJS project connected to a Silverstripe CMS 
  data source. You'll need to provide the URL to your Silverstripe installation
  and add your API key.

  Make sure the silverstripe-nextjs module (https://github.com/silverstripe/silverstripe-nextjs)
  has been installed on your Silverstripe backend before starting.
  
  Ready? Let's do it! 🎉
`)

const previewKey = crypto.randomBytes(256).toString(`base64`).substring(0, 64)

const questions = [
  {
    name: "module",
    message: "Do you have the silverstripe-nextjs module installed already?",
    type: "list",
    choices: [
      {
        name: "Yup! Good to go.",
        value: true,
      },
      {
        name: "Nope. What do I do?",
        value: false,
      },
    ],
  },
  {
    name: `baseUrl`,
    message: `What is the ${chalk.green(
      "base URL"
    )} of your Silverstripe CMS website?
        (e.g. https://mywebsite.com) Local URLs are OK!
        
URL:    `,
    when: (answers: any) => {
      if (!answers.module) {
        console.log(
          chalk.yellow(`
                Please go to:

                https://github.com/silverstripe/silverstripe-nextjs

                For instructions on installing this module and rerun this installation script when finished.`)
        )
        process.exit(1)
      }

      return true
    },
    validate: (input: any) => {
      let url
      try {
        url = new URL(input)
      } catch (_) {
        return false
      }

      return url.protocol !== "http:" && url.protocol !== "https:"
        ? `That doesn't appear to be a valid URL`
        : true
    },
  },
  {
    name: `apiKey`,
    message: (answers: any) => `What is the ${chalk.green(
      "API key"
    )} of your admin user?
        Your API key can be found at:
        ${chalk.green(`${answers.baseUrl}/admin/security`)} ${chalk.red(
      "->"
    )} <your user> ${chalk.red("->")} ${chalk.green("Api keys")}
        
API Key: `,
    validate: (input: any) =>
      input.length === 48 ||
      `That does not appear to be a valid API key. It should be a 48 character string.`,
  },
  {
    name: "preview",
    message: `You now need to add the following environment variable to your Silverstripe CMS installation:

NEXTJS_PREVIEW_KEY='${previewKey}'

    `,
    type: "list",
    choices: [
      {
        name: "Done!",
        value: true,
      },
    ],
  },

]


inquirer
  .prompt(questions)
  .then(({ baseUrl, apiKey }: any) => {
    console.log("Writing env file...")
    const configFilePath = path.resolve(__dirname, "..", ".env")
    const codegenFilePath = path.resolve(__dirname, "..", "codegen.yml")
    writeFileSync(
      configFilePath,
      `SILVERSTRIPE_BASE_URL = '${baseUrl}'
SILVERSTRIPE_API_KEY = '${apiKey}'
SILVERSTRIPE_PREVIEW_KEY = '${previewKey}'
`
    )
    console.log(`Environment file ${chalk.yellow(configFilePath)} written`)
    const codegenContents = readFileSync(codegenFilePath, { encoding: `utf8` })
    const newContents = codegenContents.replace(
        `%SCHEMA_URL%`,
        `${baseUrl}/graphql`
    )
    writeFileSync(
        codegenFilePath,
        newContents
    )
    
    console.log('codegen.yml file updated')

    console.log(
      chalk.green(
        `

All set! You can now run:
        
        `
      ),
      chalk.yellow(
        `yarn start
          `
      ),
      chalk.green(`
to see your NextJS website in action.
      `)
    )

    console.log(
        `Here are some additional commands you may want to run to help get you started:

        `,
        `${chalk.blueBright(`yarn scaffold-pages`)}: Create placeholder templates and queries for your page types
        
        `,
        `${chalk.blueBright(`yarn scaffold-blocks`)}: Create placeholder templates and fragments for your elemental blocks
        
        `,
        `${chalk.blueBright(`yarn generate`)}: Generate a types file for your graphql schema (run automatically on every build)
        
        `,

    )
  })
  .catch((error: any) => console.error(error))