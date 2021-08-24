const TYPE_RESOLUTION_QUERY = `
query TypeResolution($links: [String!]!) {
    typesForLinks(links: $links) {
        type
        link
    }
}
`
const STATIC_PAYLOAD_QUERY = `
query StaticBuild {
    staticBuild {
      links {
          link
      }
    }
  }    
`;


export {
    TYPE_RESOLUTION_QUERY,
    STATIC_PAYLOAD_QUERY,
}