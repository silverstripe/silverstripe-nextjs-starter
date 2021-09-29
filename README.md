# Silverstripe NextJS starter Kit

Provides a starter setup for Silverstripe CMS + NextJS integrations, using the utilities
provided by the [@silverstripe/nextjs-builder](https://github.com/silverstripe/nextjs-builder)
and [@silverstripe/nextjs-toolkit](https://github.com/silverstripe/nextjs-toolkit) libraries.

All URLs defined in the CMS will be handled by the NextJS server. Their respective templates
and / or graphql queries will be executed to create a server response.

## Table of contents

* [Getting started](#getting-started)
* [Expose your data](#expose-your-data)
* [Custom page types](#custom-page-types)
* [Working with content blocks](#working-with-content-blocks)
* [Static queries](#static-queries)
* [Getting the current page](#getting-the-current-page)
* [Navigation](#navigation)
* [Embedding HTML](#embedding-html)
* [Previewing content](#previewing-content)
* [The bulk query adapter](#the-bulk-query-adapter)
* [Configuring the static build](#configuring-the-static-build)
* [GraphQL schema type definitions](#graphql-schema-type-definitions)
* [Path aliases](#path-aliases)
* [How it works (a brief summary)](#how-it-works-a-brief-summary)
* [Troubleshooting](#troubleshooting)
* [Questions](#questions)

## Features

* Automatic template selection
* Automatic query selection
* Zero-config draft content / preview
* Bulk query adapter
* Static queries
* Navigation helpers
* Embedded HTML
* Dynamic imports
* GraphQL schema type definitions
* Scaffold page templates / queries
* Scaffold content block templates / queries
* Setup script
* Static build configuration
* Deployment notifications (Netlify only, coming soon)

## Getting started

### Step 1: Prepare your Silverstripe CMS instance

Install the [silverstripe/silverstripe-nextjs](https://github.com/silverstripe/silverstripe-nextjs) module
on your Silverstripe CMS website.

### Clone and install the starter

`$ git clone https://github.com/silverstripe/silverstripe-nextjs-starter`

 Next, choose the variant of the starter you would like to use. If you are using content blocks
 (i.e. elemental), you will need to use a branch that supports block-based content, as it has
 very different requirements from page based content.

Available branches: 

* `base`: Unthemed page-based content
* `base-theme`: Themed page-based content
* `content-blocks`: Unthemed content blocks content
* `content-blocks-theme`: Themed content blocks content

Example:
`$ git checkout base-theme`

Now, install the dependencies

* `$ yarn install`

### Run the setup script

`$ yarn setup`

Follow all the instructions from the script. You will need to add some environment variables
to your Silverstripe CMS instance.

### Start the server

`$ yarn dev`

You should be given a link to localhost, where you will see your site running.

## Expose your data

In your Silverstripe CMS installation, you'll need to define what data you want exposed
in your API, using the `ModelLoader` config, e.g.

**_config/nextjs.yml**

```yaml
SilverStripe\Headless\GraphQL\ModelLoader:
  included_dataobjects:
    - 'App\*'
```

## Custom page types

A cornerstone of building websites with Silverstripe CMS is full control over your page
templates, and this works seamlessly with the starter kit.

Your page templates must be defined in `src/templates`, and should follow the convention
of `<TypeName>.tsx`. If a template is not found, the build will look up the inheritance chain
to find a match, e.g. if `HomePage.tsx` isn't found, `Page.tsx` will be used in its place.

These components will receive as props the result of their associated graphql queries, which 
should follow the same convention of `<TypeName>.graphql`, located anywhere in the `src/` directory,
for instance `src/graphql/HomePage.graphql`.

Out of the box, a simple `Page.tsx` component is provided, with a wrapping `PageLayout` component
that provides navigation, and footer, if applicable.

```tsx
const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    return (
        <PageLayout page={readOnePage}>
            <h2>{readOnePage.title}</h2>            
        </PageLayout>
    )
}

export default Page
```

The page component receives the result of the `Page.graphql` query, which, out of the box, is
as follows:

```graphql
#import "../../fragments/BasePageFields.graphql"

query ReadOnePage($link: String!, $stage: VersionedQueryMode) {
  readOnePage(link: $link, versioning: { mode: $stage }) {
    ...BasePageFields
  }
}
```

The `BasePageFields` is a file you can modify to customise what fields should appear
on all pages. The use of the `#import` syntax is part of a [Webpack plugin](https://www.npmjs.com/package/@apollo-elements/graphql-mini-transforms) that allows
implicit imports of graphql fragments based on pathnames. 


### Adding a new page type

Let's add a `HomePage` template. Our HomePage type has a `HeroImage` defined, so we'll add that
to the template.

**src/templates/HomePage.tsx**
```tsx
import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"

const HomePage: React.FC<PageProps> = ({ query: { readOneHomePage }}) => {
    const { heroImage } = readOneHomePage
    return (
        <PageLayout page={readOneHomePage}>
            <div className="hero">
                <img src={heroImage.absoluteLink} title={heroImage.title} />
            </div>
        </PageLayout>
    )
}

export default HomePage
```

Our template calls for some custom fields, so we'll need to add those to the query. Let's copy `Page.graphql` and add our new fields to `HomePage.graphql`

**src/graphql/HomePage.graphql**

```graphql
#import "../fragments/BasePageFields.graphql"

query ReadOneHomePage($link: String!, $stage: VersionedQueryMode) {
  readOneHomePage(link: $link, versioning: { mode: $stage }) {
    ...BasePageFields
    heroImage {
        absoluteLink
        title
    }
  }
}

```

Restart the dev server, and you should now see your custom template.

### Tidying up

If you're going to be defining a lot of templates and queries, it can be challenging to keep
all of these `<TypeName>.tsx` and `<TypeName>.graphql` files organised. As an alternative,
you can create a folder with the name `<TypeName>` and add `component.tsx` and `query.graphql` to
it. These will both automatically be associated with the `<TypeName>` type.

The following configurations are functionally equivalent:

* src/
  * templates/
    * HomePage.tsx
  * graphql/
    * HomePage.graphql

---

* src/
  * templates/
    * HomePage/
      * component.tsx
      * query.graphql


### Scaffolding page types

To help get you started quickly, you can scaffold all the exposed page types in your Silverstripe
CMS project. This will create placeholder templates and placeholder queries for each defined page
type. Just run:

`$ yarn scaffold-pages`

The scaffolding task follows the convention defined above of `templates/<TypeName>/component.tsx`
and `templates/<TypeName>/query.graphql`.

Some of the custom fields defined on your page type will be added to the query, with just one level of nesting, e.g. has_one will only capture `__typename` and none of the nested fields.

## Working with content blocks

To enable support for elemental, update your `ss.config.ts` file. If you're using one of the
`content-blocks` branches, this will be done for you.

```ts
const config: ProjectConfig = {
    ...defaultConfig,
    elemental: {
      fragmentsPath: `fragments/elemental/elements`,
      componentsPath: `components/elements`,
    },
    // ...
}
```

### Content block queries / fragments

Content blocks present a technical challenge for headless sites, particularly those that use
GraphQL, because each possible content type could appear on any given page, so querying for
all possible concretions is required. We invariably end up with a query like this:

```graphql
elements {
    nodes {
        id
        title
        showTitle
        ... on ElementContent {
            html
        }
        ... on GalleryBlock {
            images {
                nodes {
                    absoluteLink
                }
            }
        }
        ... on AccordionBlock {
            tabs {
                nodes {
                    title
                }
            }
        }
        ... # etc...
    }
}
```

Every time we add or remove a block, we need to update this query. For this reason, the starter kit
provides a code generation tool to ensure this query is always up-to-date.

*src/fragments/elemental/elements/_elements.graphql*
```graphql
###-- GENERATED CODE. To modify, remove this line. --###

#import "../../BaseFields.graphql"
#import "./BaseElementFields.graphql"
#import "./ElementContentFields.graphql"
#import "./GalleryBlockFields.graphql"

fragment ElementsFields on BaseElementInterface {
	...BaseFields
	...BaseElementFields

    ... on ElementContent {
        ...ElementContentFields
    }
    ... on GalleryBlock {
        ...GalleryBlockFields
    }

}
```

### Scaffolding blocks

In order to keep the content blocks query up to date and generate fragments and templates for your blocks,
you should use the `scaffold-blocks` command:

`$ yarn scaffold-blocks`

This will create, if necessary:

* New placeholder block templates in your elemental directory (as defined in `ss.config.ts`)
* New graphql fragments for your blocks, containing most of their unique fields
* New entires in your `_elements.graphql` generated fragment

### Rendering blocks

You can use the `<ElementalArea />` component that comes with the starter kit `content-blocks` branches
to render your blocks dynamically:

```jsx
const elements = readOnePage?.elementalArea?.elements.nodes ?? []

<ElementalArea elements={elements} />
```

There are some key benefits to using the `ElementalArea` component:

* It dynaically imports **only the blocks that are used on the page**, resulting in a smaller bundle size than importing all blocks on every page and selecting them at render time
* It offers a fallback when blocks are missing.

## Static queries

One challenge that comes up often in NextJS projects is dealing with queries that have to be run
on every single page, with no variation based on page context. These are known as "static queries"
in [Gatsby](https://gatsbyjs.org). This starter kit provides an implementation of the `useStaticQuery`
hook in Gatsby to ensure that these types of queries are only executed once.

### Example

A common use of a static query is a main menu, where the items are always the same no matter what 
page you're on.

**src/components/MainMenu.tsx**
```tsx
import { useStaticQuery } from "@silverstripe/nextjs-toolkit"
import { Query } from "ss-schema"

const MainMenu = (): JSX.Element => {
    const menu = useStaticQuery<Query["readPages"]>(`
        query MainMenu {
            readPages(filter: {
                parentID: { eq: 0 },
                showInMenus: { eq: true }
            }) {
                nodes {
                    id
                    title
                    link
                    menuTitle
                }
            }
        }   
    `)
    const menuItems = menu?.readPages.nodes ?? []
```

## Getting the current page

The `usePageContext()` hook will provide you with an object containing all the data for the current page.

```jsx
import { usePageContext } from "lib"

const page = useCurrentPage()

<div>{page.title}</div>
```

## Navigation

A number of navigation helpers are available to deal with menu state. The most useful is the
`<Navigation />` component in the `@silverstripe/nextjs-toolkit` library.

`Navigation` is a headless component that takes a function as children. It provides
`(navItem, navState)` to the render method.

```jsx
    import { Navigation } from "@silverstripe/nextjs-toolkit"
    import Link from "next/link"
    import { useRouter } from 'next/router'

    // ...

    <Navigation items={menuItems} router={router}>
        {(child, state) => {
            return (
                <div key={state.key}>
                    <Link href={child.link}>
                        <a className={state.linkingMode}>{child.menuTitle}</a>
                    </Link>
                </div>
            )
        }}
    </Navigation>

```

The `NavState` (`state` above), type contains several useful properties, offering a lot of congruence
with what you would get in an `SSViewer` template.

```ts
interface NavState<T> {
    current: boolean
    linkingMode: "current" | "section" | "link"
    level: number
    first: boolean
    last: boolean
    even: boolean
    odd: boolean
    pos: number
    key: number | string
    hasChildren: boolean
    children: Array<T>
    slug: string
}
```

In addition to the `Navigation` component, a number of navigation utilities are availble for
imperatively interrogating navigation state.

### Example: Subnavigation

```jsx
import { isLevel, getPeers, usePageContext } from "lib"

const page = usePageContext()
{isLevel(page, 2) && (
    <Subnav items={getPeers(page)} />
)}
```

## Embedding HTML

A common pattern in Silverstripe CMS projects is to render the contents of the `content` property
on a page. This comes in as a string of HTML. One approach is to simply cram this into the
`dangerouslySetInnerHtml` property in React.

The problem with this approach, other than the obvious security risk, is that the HTML will not be rendered as first-class React components, and rather just an arbitrary string. This means that
links and images will not be parsed correctly.

Using the `HTMLElement` component ensures that:

* Links to internal pages use the native `<Link />` component in `next/link`
* Images use absolute paths (and the native `<Image />` component in `next/image`, coming soon)


### Example

```tsx
import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"

const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    return (
        <PageLayout page={readOnePage}>
            <h2>{readOnePage.title}</h2>
            <HTMLElement html={readOnePage.content} />
        </PageLayout>
    )
}

export default Page
```

## Previewing content

Previewing content should work with no configuration, provided the shared preview key is defined in
both your NextJS environment and your Silverstripe CMS environment. This should be done in the setup
step defined above.

NextJS .env
```
SILVERSTRIPE_PREVIEW_KEY='<key>'
```

Silverstripe CMS .env
```
NEXTJS_PREVIEW_KEY='<key>'
```

In the CMS, the preview window should point to the NextJS instance you have defined in your `NEXTJS_BASE_URL` variable. The preview URL will be replaced with one containing a token, which is 
required for the JWT handshake used by the preview route handler.

For more information on how preview works, see the `pages/api/preview.ts` file that comes with the starter kit.

## The bulk query adapter

If your build contains a large number of pages, this will invariably lead to many queries
being executed fetching data of similar concerns, for example:

```graphql
query ReadOnePage(link: "about-us") {
    title
    link
}
query ReadOnePage(link: "contact-us") {
    title
    link
}
query ReadOnePage(link: "blog") {
    title
    link
}
```

To optimise these repetitive, successive queries, the build tools will defer these
and attempt to pluralise the query into something like this:

```graphql
query ReadPages(links: ["about-us", "contact-us", "blog"]) {
    nodes {
        title
        link
    }
}
```

This result then warms the cache for the next queries, which no longer have to use the
network.

This adapter relies on the conventions used by the scaffolding features of the `silverstripe/graphql` module. If you have customised your GraphQL API to use non-standard read / readOne operations, it will
not work.

## Configuring the static build

The approach that NextJS uses for static builds is called "Incremental Static Generation" (ISG).
In this strategy, a fixed list of static paths are given to the build for build-time static generation.
Any paths that are not part of this list will be generated at request time, with their static generated
result being persisted on the server for subsequent requests.

Therefore, the best lever you have to control the duration of your builds is the size of the static
paths payload that you generate at build time. This could be as many as 1,000 pages, or as few as zero.
It's entirely up to you how you want to optimise your deployment.

To configure the static build, go to the "Static build" section of the CMS under "Headless". Here, you
can add any number of static build collectors, each employing a different strategy for collecting pages,
for instance, "Last X pages edited" or "All pages in the about-us/ section."

The static build itself imposes an aggregate limit on the entire build (e.g. 100 pages), and each collector has its own limit as well. The aggregate limit will always supersede the limits of each collector. For instance, if you have three collectors set to 100 pages each, and the aggregate limit
of the static build is 200, you will still only get 200 pages.

## GraphQL schema type definitions

Each time a `dev` or `build` script is run, the starter kit will sync a type definitions file with
your GraphQL schema, which greatly enhances the developer experience. This means that page components
that are passed the result of, say, `readOnePage` will already have full intospection of what fields
are available in that query.

The GraphQL schema definition is persisted to `ss-schema.ts` and is accessible through `import { YourTypeName } from "ss-schema"` anywhere in the project.

## Path aliases

Any non-relative paths map to the `src/` directory, for instance:

```js
import Dropdown from "components/forms/Dropdown"
```

Will work anywhere in the project.

Other path aliases include:

* `lib` maps to the `lib/` directory
* `types` maps to the `types.d.ts` definition file
* `cache` maps to the generated `.cache` directory
* `ss-schema` maps to the generated `ss-schema.ts` file
* `ss-config` maps to the `ss.config.ts` file


## How it works (a brief summary)

Because Silverstripe CMS maintains authority over virutally every route in your project, 
there is only one catch-all route defined in the NextJS project (`[[...page.tsx]]`).
Much like the singular `index.php` in a Silverstripe CMS project, this one file is responsible for:

* Determining the data type being request (e.g. `BlogPage`, `HomePage`)
* Finding the template that should render the page
* Executing the data queries required by the template (e.g. `BlogPage.graphql`)

All of this functionality is provided by the [@silverstripe/nextjs-builder](https://github.com/silverstripe/nextjs-builder) package, which creates the `getStaticProps`, `getStaticPaths` and `Page`
components that are expected by a NextJS filesystem route.

### What each build step actually does

#### getStaticPaths

* Calls the Silverstripe CMS API to gather information about type ancestry and get the paths
that are contained in the static build
* Collate all the queries required for these static paths, run a bulk query for them, and warm
the cache for future queries in `getStaticProps`

#### getStaticProps

* Execute the query result for the page
* Pass this result as a prop to the component
* Select a template name (e.g. "HomePage") for the path, and provide this to the component

#### Page

Created by the `createPage` function in `@silverstripe/nextjs-toolkit`, this relies on the `.cache`
directory to find the dynamically imported component to render based on the name provided by `getStaticProps`.

### The .cache directory

In order to support all these computations at render time, a cache that can be imported as a webpack
module is required. To do this, the `dev` and `build` tasks are always preceded by the `build-manifest` command that generates this cache in the `.cache` directory. This includes:

* Mapping the ancestry of page types
* Mapping blocks and page templates to dynamic imports
* Storing the results of static queries
* Mapping page types to imported `.graphql` files


## Advanced configuration

For power users, there are a few things that might interest you.

### Adding a custom route

To use a custom route, just add it to the `pages/` directory like any other NextJS project.
Matching it will supersede the `[[...page.tsx]]` catch-all. Just note that all props will have to be
generated imperatively, as the `<TypeName>.graphql` files are not in play.

### Getting additional props

You may need more props at build time than those that come from the GraphQL query to your Silverstripe
CMS. You can run arbitrary data collection in a `props.ts` file, for example:

* src/
  * templates/
    * HomePage/
      * component.tsx
      * query.graphql
      * **props.ts**

This file should contain a promise that returns arbitrary props. It is passed the result
of your graphql query to Silverstripe CMS.

**props.ts**

```ts
const getExtraProps = async (props) => {
    const result = await getWeatherForPostCode(props.postCode)

    return {
        weather: `The weather is ${result.temperature} degrees in ${result.city.name}`
    }
}
```

Optionally, you can call this file `<TypeName>.props.ts` and locate it anywhere in your `src/` directory.

### Customising the pluraliser

This should almost never be necessary, but if you have customised the way silverstripe/graphql 
creates plural forms of types, you will need to write that function in the NextJS config, as well.

**ss.config.ts**
```ts
const config: ProjectConfig = {
    ...defaultConfig,
    pluraliser: (type) => `${type}customised`

```

### Adding prebuild steps

If you have additional tasks you want to run in the `build-manifest` task, simply add them to a
`prebuild/` folder in the root of your project and export a promise.

**prebuild/myTask.ts**
```ts
export default async (ssConfig: ProjectConfig): Promise<void> => {
    // do stuff
}
```

## Troubleshooting

### "Could not find template for type <TypeName>. Resolved to "null"

You haven't exposed the page type in your Silverstripe API. Make sure you configure `ModelLoader`
as detailed above.

## Questions

### Can I do dataobjects as pages?

Not yet. There's a bit of complexity around this, but definitely soon.

### Paginated / Faceted results per static route?

This would require using `getServerProps` and it's not clear what happens if both this and
`getStaticProps` are defined, so it will take some experimenting.