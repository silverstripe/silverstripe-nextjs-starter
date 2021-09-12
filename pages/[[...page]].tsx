import cacheManifest from "cache"
import projectConfig from "ss-config"
import { createPage } from "@silverstripe/nextjs-toolkit"
import {
  getStaticProps as createGetStaticProps,
  getStaticPaths as createGetStaticPaths,
} from "@silverstripe/nextjs-builder"

const project = {
  projectConfig,
  cacheManifest,
}

export const getStaticProps = createGetStaticProps(project)
export const getStaticPaths = createGetStaticPaths(project)

const Page = createPage(project)

export default Page
