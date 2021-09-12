export type Maybe<T> = T | null

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  readOnePage?: Maybe<Page>
  readPages: PageInterfaceConnection
}

export type DataObject = {
  id: Scalars["ID"]
  hashID: Scalars["String"]
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
  exists: Scalars["Boolean"]
}

export type BaseElementInterface = {
  id: Scalars["ID"]
  hashID: Scalars["String"]
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
  exists: Scalars["Boolean"]
  styleVariant?: Maybe<Scalars["String"]>
  anchor?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["Int"]>
  lastEdited?: Maybe<Scalars["String"]>
  created?: Maybe<Scalars["String"]>
  removeTopSpace?: Maybe<Scalars["Boolean"]>
  removeBottomSpace?: Maybe<Scalars["Boolean"]>
  sendToChildren?: Maybe<Scalars["Boolean"]>
  title?: Maybe<Scalars["String"]>
  showTitle?: Maybe<Scalars["Boolean"]>
  sort?: Maybe<Scalars["Int"]>
  extraClass?: Maybe<Scalars["String"]>
  style?: Maybe<Scalars["String"]>
  parentID: Scalars["ID"]
  parent?: Maybe<ElementalArea>
  link: Scalars["String"]
}

export type BaseElement = DataObject &
  BaseElementInterface & {
    __typename?: "BaseElement"
    id: Scalars["ID"]
    hashID: Scalars["String"]
    typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
    exists: Scalars["Boolean"]
    styleVariant?: Maybe<Scalars["String"]>
    anchor?: Maybe<Scalars["String"]>
    version?: Maybe<Scalars["Int"]>
    lastEdited?: Maybe<Scalars["String"]>
    created?: Maybe<Scalars["String"]>
    removeTopSpace?: Maybe<Scalars["Boolean"]>
    removeBottomSpace?: Maybe<Scalars["Boolean"]>
    sendToChildren?: Maybe<Scalars["Boolean"]>
    title?: Maybe<Scalars["String"]>
    showTitle?: Maybe<Scalars["Boolean"]>
    sort?: Maybe<Scalars["Int"]>
    extraClass?: Maybe<Scalars["String"]>
    style?: Maybe<Scalars["String"]>
    parentID: Scalars["ID"]
    parent?: Maybe<ElementalArea>
    link: Scalars["String"]
  }

export type ElementalArea = DataObject & {
  __typename?: "ElementalArea"
  id: Scalars["ID"]
  hashID: Scalars["String"]
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
  exists: Scalars["Boolean"]
  lastEdited?: Maybe<Scalars["String"]>
  created?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["Int"]>
  ownerClassName?: Maybe<Scalars["String"]>
  elements: BaseElementInterfaceConnection
}
export type BaseElementInterfaceConnectionEdge = {
  __typename?: "BaseElementInterfaceConnectionEdge"
  /** The node at the end of the collections edge */
  node: BaseElement | ElementContent
}

export type BaseElementInterfaceConnection = {
  __typename?: "BaseElementInterfaceConnection"
  edges: Array<BaseElementInterfaceConnectionEdge>
  nodes: Array<BaseElement | ElementContent>
  pageInfo: PageInfo
}

export type ElementContent = DataObject &
  BaseElementInterface & {
    __typename?: "ElementContent"
    id: Scalars["ID"]
    hashID: Scalars["String"]
    typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
    exists: Scalars["Boolean"]
    lastEdited?: Maybe<Scalars["String"]>
    created?: Maybe<Scalars["String"]>
    removeTopSpace?: Maybe<Scalars["Boolean"]>
    removeBottomSpace?: Maybe<Scalars["Boolean"]>
    sendToChildren?: Maybe<Scalars["Boolean"]>
    version?: Maybe<Scalars["Int"]>
    title?: Maybe<Scalars["String"]>
    showTitle?: Maybe<Scalars["Boolean"]>
    sort?: Maybe<Scalars["Int"]>
    extraClass?: Maybe<Scalars["String"]>
    style?: Maybe<Scalars["String"]>
    parentID: Scalars["ID"]
    useSmallHeading?: Maybe<Scalars["Boolean"]>
    html?: Maybe<Scalars["String"]>
    parent?: Maybe<ElementalArea>
    link: Scalars["String"]
    styleVariant?: Maybe<Scalars["String"]>
    anchor?: Maybe<Scalars["String"]>
  }

export type PageInterface = {
  id: Scalars["ID"]
  hashID: Scalars["String"]
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
  exists: Scalars["Boolean"]
  title?: Maybe<Scalars["String"]>
  menuTitle?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["String"]>
  metaDescription?: Maybe<Scalars["String"]>
  extraMeta?: Maybe<Scalars["String"]>
  showInMenus?: Maybe<Scalars["Boolean"]>
  showInSearch?: Maybe<Scalars["Boolean"]>
  sort?: Maybe<Scalars["Int"]>
  parentID: Scalars["ID"]
  menuDescription?: Maybe<Scalars["String"]>
  metaTitle?: Maybe<Scalars["String"]>
  parent?: Maybe<Page>
  breadcrumbs: Array<Page>
  children: PageInterfaceConnection
  navChildren: PageInterfaceConnection
  navParent?: Maybe<Page>
  link: Scalars["String"]
  elementalArea?: Maybe<ElementalArea>
}

export type Page = PageInterface & {
  id: Scalars["ID"]
  hashID: Scalars["String"]
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>
  exists: Scalars["Boolean"]
  title?: Maybe<Scalars["String"]>
  menuTitle?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["String"]>
  metaDescription?: Maybe<Scalars["String"]>
  extraMeta?: Maybe<Scalars["String"]>
  showInMenus?: Maybe<Scalars["Boolean"]>
  showInSearch?: Maybe<Scalars["Boolean"]>
  sort?: Maybe<Scalars["Int"]>
  parentID: Scalars["ID"]
  menuDescription?: Maybe<Scalars["String"]>
  metaTitle?: Maybe<Scalars["String"]>
  parent?: Maybe<Page>
  breadcrumbs: Array<Page>
  children: PageInterfaceConnection
  navChildren: PageInterfaceConnection
  navParent?: Maybe<Page>
  link: Scalars["String"]
  elementalArea?: Maybe<ElementalArea>
}

export type PageInfo = {
  __typename?: "PageInfo"
  totalCount: Scalars["Int"]
  hasNextPage?: Maybe<Scalars["Boolean"]>
  hasPreviousPage?: Maybe<Scalars["Boolean"]>
}

export type PageInterfaceConnectionEdge = {
  __typename?: "PageInterfaceConnectionEdge"
  /** The node at the end of the collections edge */
  node: Page
}

export type PageInterfaceConnection = {
  __typename?: "PageInterfaceConnection"
  edges: Array<PageInterfaceConnectionEdge>
  nodes: Array<Page>
  pageInfo: PageInfo
}
