export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BaseElement = DataObject & BaseElementInterface & {
  __typename?: 'BaseElement';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
};


export type BaseElementHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BaseElementCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BaseElementLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum BaseElementClassNameEnum {
  DnaDesignElementalModelsBaseElement = 'DNADesignElementalModelsBaseElement',
  DnaDesignElementalModelsElementContent = 'DNADesignElementalModelsElementContent'
}

export type BaseElementFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type BaseElementInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
};


export type BaseElementInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BaseElementInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BaseElementInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BaseElementInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type BaseElementInterfaceConnection = {
  __typename?: 'BaseElementInterfaceConnection';
  edges: Array<BaseElementInterfaceConnectionEdge>;
  nodes: Array<BaseElement | ElementContent>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type BaseElementInterfaceConnectionEdge = {
  __typename?: 'BaseElementInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: BaseElement | ElementContent;
};

export type BaseElementSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export enum CanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers',
  Inherit = 'Inherit'
}

export enum CanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers',
  Inherit = 'Inherit'
}

export enum ClassNameEnum {
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  Page = 'Page',
  AppPageTypesHomePage = 'AppPageTypesHomePage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage'
}

/** Formatting options for fields that map to DBDatetime data types */
export enum DbDatetimeFormattingOption {
  Timestamp = 'TIMESTAMP',
  Nice = 'NICE',
  DayOfWeek = 'DAY_OF_WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
  ShortMonth = 'SHORT_MONTH',
  DayOfMonth = 'DAY_OF_MONTH',
  Short = 'SHORT',
  Long = 'LONG',
  Full = 'FULL',
  Custom = 'CUSTOM',
  Date = 'DATE',
  Time = 'TIME',
  Time12 = 'TIME12',
  Time24 = 'TIME24'
}

export type DbFileComposite = {
  __typename?: 'DBFileComposite';
  hash?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type DbPolymorphicForeignKeyComposite = {
  __typename?: 'DBPolymorphicForeignKeyComposite';
  id?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['String']>;
};

/** Formatting options for fields that map to DBText data types */
export enum DbTextFormattingOption {
  ContextSummary = 'CONTEXT_SUMMARY',
  FirstParagraph = 'FIRST_PARAGRAPH',
  LimitSentences = 'LIMIT_SENTENCES',
  Summary = 'SUMMARY'
}

/** The common interface shared by all DataObject types */
export type DataObject = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};

export type ElementContent = DataObject & BaseElementInterface & ElementContentInterface & {
  __typename?: 'ElementContent';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  html?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
};


export type ElementContentHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementContentCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementContentHtmlArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ElementContentLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type ElementContentFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  html?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type ElementContentInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  html?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
};


export type ElementContentInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementContentInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementContentInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementContentInterfaceHtmlArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ElementContentInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type ElementContentInterfaceConnection = {
  __typename?: 'ElementContentInterfaceConnection';
  edges: Array<ElementContentInterfaceConnectionEdge>;
  nodes: Array<ElementContent>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ElementContentInterfaceConnectionEdge = {
  __typename?: 'ElementContentInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ElementContent;
};

export type ElementContentSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  html?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type ElementalArea = DataObject & {
  __typename?: 'ElementalArea';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ElementalAreaClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  ownerClassName?: Maybe<Scalars['String']>;
  elements: BaseElementInterfaceConnection;
};


export type ElementalAreaHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementalAreaTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementalAreaExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ElementalAreaLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementalAreaCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ElementalAreaElementsArgs = {
  filter?: Maybe<BaseElementFilterFields>;
  sort?: Maybe<BaseElementSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ElementalAreaClassNameEnum {
  DnaDesignElementalModelsElementalArea = 'DNADesignElementalModelsElementalArea'
}

export type ElementalAreaConnection = {
  __typename?: 'ElementalAreaConnection';
  edges: Array<ElementalAreaConnectionEdge>;
  nodes: Array<ElementalArea>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ElementalAreaConnectionEdge = {
  __typename?: 'ElementalAreaConnectionEdge';
  /** The node at the end of the collections edge */
  node: ElementalArea;
};

export type ElementalAreaFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  ownerClassName?: Maybe<QueryFilterStringComparator>;
  elements?: Maybe<BaseElementFilterFields>;
};

export type ElementalAreaSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  ownerClassName?: Maybe<SortDirection>;
  elements?: Maybe<BaseElementSortFields>;
};

export type File = DataObject & FileInterface & {
  __typename?: 'File';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type FileHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FileCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FileBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type FileFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<FileFilterFields>;
  owner?: Maybe<MemberFilterFields>;
  backLinks?: Maybe<FileLinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
};

export type FileInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type FileInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FileInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FileInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FileInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type FileInterfaceConnection = {
  __typename?: 'FileInterfaceConnection';
  edges: Array<FileInterfaceConnectionEdge>;
  nodes: Array<File | Folder | Image>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileInterfaceConnectionEdge = {
  __typename?: 'FileInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: File | Folder | Image;
};

export type FileLink = DataObject & {
  __typename?: 'FileLink';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<FileLinkClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  linkedID: Scalars['ID'];
  parentID?: Maybe<Scalars['Int']>;
  parentClass?: Maybe<ParentClassEnum>;
  parent?: Maybe<DbPolymorphicForeignKeyComposite>;
  linked?: Maybe<File | Folder | Image>;
};


export type FileLinkHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FileLinkCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export enum FileLinkClassNameEnum {
  SilverStripeAssetsShortcodesFileLink = 'SilverStripeAssetsShortcodesFileLink'
}

export type FileLinkConnection = {
  __typename?: 'FileLinkConnection';
  edges: Array<FileLinkConnectionEdge>;
  nodes: Array<FileLink>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileLinkConnectionEdge = {
  __typename?: 'FileLinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: FileLink;
};

export type FileLinkFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  linkedID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIntComparator>;
  linked?: Maybe<FileFilterFields>;
};

export type FileLinkSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  linkedID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  linked?: Maybe<FileSortFields>;
};

export type FileSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  ownerID?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileFilename?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  owner?: Maybe<MemberSortFields>;
  backLinks?: Maybe<FileLinkSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
};

export type Folder = DataObject & FileInterface & FolderInterface & {
  __typename?: 'Folder';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type FolderHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FolderCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FolderBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type FolderFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<FileFilterFields>;
  owner?: Maybe<MemberFilterFields>;
  backLinks?: Maybe<FileLinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
};

export type FolderInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type FolderInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FolderInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FolderInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type FolderInterfaceConnection = {
  __typename?: 'FolderInterfaceConnection';
  edges: Array<FolderInterfaceConnectionEdge>;
  nodes: Array<Folder>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FolderInterfaceConnectionEdge = {
  __typename?: 'FolderInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Folder;
};

export type FolderSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  ownerID?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileFilename?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  owner?: Maybe<MemberSortFields>;
  backLinks?: Maybe<FileLinkSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
};

export type GeneratedFragment = {
  __typename?: 'GeneratedFragment';
  type: Scalars['String'];
  fragment?: Maybe<Scalars['String']>;
};

export type Group = DataObject & {
  __typename?: 'Group';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type GroupHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type GroupTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type GroupExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges: Array<GroupConnectionEdge>;
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type GroupConnectionEdge = {
  __typename?: 'GroupConnectionEdge';
  /** The node at the end of the collections edge */
  node: Group;
};

export type GroupFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type GroupSortFields = {
  id?: Maybe<SortDirection>;
};

export type HomePage = DataObject & SiteTreeInterface & PageInterface & HomePageInterface & {
  __typename?: 'HomePage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  elementalAreaID: Scalars['ID'];
  heroHeadline?: Maybe<Scalars['String']>;
  heroSubheadline?: Maybe<Scalars['String']>;
  heroImageID: Scalars['ID'];
  heroLinkID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  heroImage?: Maybe<Image>;
  heroLink?: Maybe<HomePage | Page | SiteTree>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type HomePageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type HomePageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type HomePageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type HomePageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type HomePageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type HomePageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type HomePageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  heroHeadline?: Maybe<QueryFilterStringComparator>;
  heroSubheadline?: Maybe<QueryFilterStringComparator>;
  heroImageID?: Maybe<QueryFilterIdComparator>;
  heroLinkID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  heroImage?: Maybe<ImageFilterFields>;
  heroLink?: Maybe<SiteTreeFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type HomePageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  elementalAreaID: Scalars['ID'];
  heroHeadline?: Maybe<Scalars['String']>;
  heroSubheadline?: Maybe<Scalars['String']>;
  heroImageID: Scalars['ID'];
  heroLinkID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  heroImage?: Maybe<Image>;
  heroLink?: Maybe<HomePage | Page | SiteTree>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type HomePageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type HomePageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type HomePageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type HomePageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type HomePageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type HomePageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type HomePageInterfaceConnection = {
  __typename?: 'HomePageInterfaceConnection';
  edges: Array<HomePageInterfaceConnectionEdge>;
  nodes: Array<HomePage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type HomePageInterfaceConnectionEdge = {
  __typename?: 'HomePageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: HomePage;
};

export type HomePageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  extraMeta?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  heroHeadline?: Maybe<SortDirection>;
  heroSubheadline?: Maybe<SortDirection>;
  heroImageID?: Maybe<SortDirection>;
  heroLinkID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  heroImage?: Maybe<ImageSortFields>;
  heroLink?: Maybe<SiteTreeSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type Image = DataObject & FileInterface & ImageInterface & {
  __typename?: 'Image';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type ImageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum ImageClassNameEnum {
  SilverStripeAssetsFile = 'SilverStripeAssetsFile',
  SilverStripeAssetsFolder = 'SilverStripeAssetsFolder',
  SilverStripeAssetsImage = 'SilverStripeAssetsImage'
}

export type ImageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<FileFilterFields>;
  owner?: Maybe<MemberFilterFields>;
  backLinks?: Maybe<FileLinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
};

export type ImageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};


export type ImageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type ImageInterfaceConnection = {
  __typename?: 'ImageInterfaceConnection';
  edges: Array<ImageInterfaceConnectionEdge>;
  nodes: Array<Image>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ImageInterfaceConnectionEdge = {
  __typename?: 'ImageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Image;
};

export type ImageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  ownerID?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileFilename?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  owner?: Maybe<MemberSortFields>;
  backLinks?: Maybe<FileLinkSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
};

export type Member = DataObject & {
  __typename?: 'Member';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type MemberHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type MemberFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type MemberSortFields = {
  id?: Maybe<SortDirection>;
};

export type Page = DataObject & SiteTreeInterface & PageInterface & {
  __typename?: 'Page';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type PageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type PageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  totalCount: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type PageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type PageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type PageInterfaceConnection = {
  __typename?: 'PageInterfaceConnection';
  edges: Array<PageInterfaceConnectionEdge>;
  nodes: Array<HomePage | Page>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PageInterfaceConnectionEdge = {
  __typename?: 'PageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: HomePage | Page;
};

export type PageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  extraMeta?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export enum ParentClassEnum {
  SilverStripeAssetsFile = 'SilverStripeAssetsFile',
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig',
  SilverStripeVersionedChangeSet = 'SilverStripeVersionedChangeSet',
  SilverStripeVersionedChangeSetItem = 'SilverStripeVersionedChangeSetItem',
  SminneeApiKeyMemberApiKey = 'SminneeApiKeyMemberApiKey',
  DnaDesignElementalModelsBaseElement = 'DNADesignElementalModelsBaseElement',
  DnaDesignElementalModelsElementalArea = 'DNADesignElementalModelsElementalArea',
  SilverStripeAssetsShortcodesFileLink = 'SilverStripeAssetsShortcodesFileLink',
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  SilverStripeCmsModelSiteTreeLink = 'SilverStripeCMSModelSiteTreeLink',
  SilverStripeSecurityGroup = 'SilverStripeSecurityGroup',
  SilverStripeSecurityLoginAttempt = 'SilverStripeSecurityLoginAttempt',
  SilverStripeSecurityMember = 'SilverStripeSecurityMember',
  SilverStripeSecurityMemberPassword = 'SilverStripeSecurityMemberPassword',
  SilverStripeSecurityPermission = 'SilverStripeSecurityPermission',
  SilverStripeSecurityPermissionRole = 'SilverStripeSecurityPermissionRole',
  SilverStripeSecurityPermissionRoleCode = 'SilverStripeSecurityPermissionRoleCode',
  SilverStripeSecurityRememberLoginHash = 'SilverStripeSecurityRememberLoginHash',
  SilverStripeSessionManagerModelsLoginSession = 'SilverStripeSessionManagerModelsLoginSession',
  SilverStripeHeadlessModelIncomingWebhook = 'SilverStripeHeadlessModelIncomingWebhook',
  SilverStripeHeadlessModelOutgoingWebhook = 'SilverStripeHeadlessModelOutgoingWebhook',
  SilverStripeHeadlessModelPublishEvent = 'SilverStripeHeadlessModelPublishEvent',
  SilverStripeHeadlessModelPublishQueueItem = 'SilverStripeHeadlessModelPublishQueueItem',
  SilverStripeNextJsModelLinkIndex = 'SilverStripeNextJSModelLinkIndex',
  SilverStripeNextJsModelStaticBuild = 'SilverStripeNextJSModelStaticBuild',
  SilverStripeNextJsModelStaticBuildCollector = 'SilverStripeNextJSModelStaticBuildCollector',
  SilverStripeAssetsFolder = 'SilverStripeAssetsFolder',
  SilverStripeAssetsImage = 'SilverStripeAssetsImage',
  DnaDesignElementalModelsElementContent = 'DNADesignElementalModelsElementContent',
  Page = 'Page',
  AppPageTypesHomePage = 'AppPageTypesHomePage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage',
  SilverStripeNextJsModelRecentPagesCollector = 'SilverStripeNextJSModelRecentPagesCollector',
  SilverStripeNextJsModelSectionCollector = 'SilverStripeNextJSModelSectionCollector'
}

export type Query = {
  __typename?: 'Query';
  /** The list of link/type tuples that should be added to the static build */
  staticBuild: StaticBuildPayload;
  typesForLinks: Array<TypeResolution>;
  generateFragments: Array<GeneratedFragment>;
  readHomePages: HomePageInterfaceConnection;
  readOneHomePage?: Maybe<HomePage>;
  readSiteTrees: SiteTreeInterfaceConnection;
  readOneSiteTree?: Maybe<HomePage | Page | SiteTree>;
  readElementalAreas: ElementalAreaConnection;
  readOneElementalArea?: Maybe<ElementalArea>;
  readImages: ImageInterfaceConnection;
  readOneImage?: Maybe<Image>;
  readBaseElements: BaseElementInterfaceConnection;
  readOneBaseElement?: Maybe<BaseElement | ElementContent>;
  readElementContents: ElementContentInterfaceConnection;
  readOneElementContent?: Maybe<ElementContent>;
  readPages: PageInterfaceConnection;
  readOnePage?: Maybe<HomePage | Page>;
  readFiles: FileInterfaceConnection;
  readOneFile?: Maybe<File | Folder | Image>;
  readFileLinks: FileLinkConnection;
  readOneFileLink?: Maybe<FileLink>;
  readFolders: FolderInterfaceConnection;
  readOneFolder?: Maybe<Folder>;
  readSiteConfigs: SiteConfigConnection;
  readOneSiteConfig?: Maybe<SiteConfig>;
};


export type QueryTypesForLinksArgs = {
  links: Array<Scalars['String']>;
};


export type QueryGenerateFragmentsArgs = {
  baseClass: Scalars['String'];
  includeBase?: Maybe<Scalars['Boolean']>;
  baseFields?: Maybe<Array<Scalars['String']>>;
  maxNesting?: Scalars['Int'];
};


export type QueryReadHomePagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<HomePageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<HomePageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneHomePageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<HomePageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<HomePageSortFields>;
};


export type QueryReadSiteTreesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<SiteTreeFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<SiteTreeSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneSiteTreeArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<SiteTreeFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<SiteTreeSortFields>;
};


export type QueryReadElementalAreasArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ElementalAreaFilterFields>;
  sort?: Maybe<ElementalAreaSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneElementalAreaArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ElementalAreaFilterFields>;
  sort?: Maybe<ElementalAreaSortFields>;
};


export type QueryReadImagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ImageFilterFields>;
  sort?: Maybe<ImageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneImageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ImageFilterFields>;
  sort?: Maybe<ImageSortFields>;
};


export type QueryReadBaseElementsArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<BaseElementFilterFields>;
  sort?: Maybe<BaseElementSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneBaseElementArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<BaseElementFilterFields>;
  sort?: Maybe<BaseElementSortFields>;
};


export type QueryReadElementContentsArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ElementContentFilterFields>;
  sort?: Maybe<ElementContentSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneElementContentArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ElementContentFilterFields>;
  sort?: Maybe<ElementContentSortFields>;
};


export type QueryReadPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<PageSortFields>;
};


export type QueryReadFilesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FileFilterFields>;
  sort?: Maybe<FileSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneFileArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FileFilterFields>;
  sort?: Maybe<FileSortFields>;
};


export type QueryReadFileLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneFileLinkArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
};


export type QueryReadFoldersArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FolderFilterFields>;
  sort?: Maybe<FolderSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneFolderArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FolderFilterFields>;
  sort?: Maybe<FolderSortFields>;
};


export type QueryReadSiteConfigsArgs = {
  filter?: Maybe<SiteConfigFilterFields>;
  sort?: Maybe<SiteConfigSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneSiteConfigArgs = {
  filter?: Maybe<SiteConfigFilterFields>;
  sort?: Maybe<SiteConfigSortFields>;
};

export type QueryFilterBooleanComparator = {
  contains?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  endswith?: Maybe<Scalars['Boolean']>;
  startswith?: Maybe<Scalars['Boolean']>;
};

export type QueryFilterIdComparator = {
  contains?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  endswith?: Maybe<Scalars['ID']>;
  startswith?: Maybe<Scalars['ID']>;
};

export type QueryFilterIntComparator = {
  contains?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endswith?: Maybe<Scalars['Int']>;
  startswith?: Maybe<Scalars['Int']>;
};

export type QueryFilterStringComparator = {
  contains?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endswith?: Maybe<Scalars['String']>;
  startswith?: Maybe<Scalars['String']>;
};

export type SiteConfig = DataObject & {
  __typename?: 'SiteConfig';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<SiteConfigClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  canViewType?: Maybe<SiteConfigCanViewTypeEnum>;
  canEditType?: Maybe<SiteConfigCanEditTypeEnum>;
  canCreateTopLevelType?: Maybe<SiteConfigCanEditTypeEnum>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  createTopLevelGroups: GroupConnection;
};


export type SiteConfigHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteConfigCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteConfigViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteConfigEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteConfigCreateTopLevelGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum SiteConfigCanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum SiteConfigCanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum SiteConfigClassNameEnum {
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig'
}

export type SiteConfigConnection = {
  __typename?: 'SiteConfigConnection';
  edges: Array<SiteConfigConnectionEdge>;
  nodes: Array<SiteConfig>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteConfigConnectionEdge = {
  __typename?: 'SiteConfigConnectionEdge';
  /** The node at the end of the collections edge */
  node: SiteConfig;
};

export type SiteConfigFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  tagline?: Maybe<QueryFilterStringComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  createTopLevelGroups?: Maybe<GroupFilterFields>;
};

export type SiteConfigSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  tagline?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  createTopLevelGroups?: Maybe<GroupSortFields>;
};

export type SiteTree = DataObject & SiteTreeInterface & {
  __typename?: 'SiteTree';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type SiteTreeHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteTreeCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteTreeContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type SiteTreeFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type SiteTreeInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  parent?: Maybe<HomePage | Page | SiteTree>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<HomePage | Page>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<HomePage | Page>;
  link: Scalars['String'];
};


export type SiteTreeInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteTreeInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteTreeInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type SiteTreeInterfaceConnection = {
  __typename?: 'SiteTreeInterfaceConnection';
  edges: Array<SiteTreeInterfaceConnectionEdge>;
  nodes: Array<HomePage | Page | SiteTree>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteTreeInterfaceConnectionEdge = {
  __typename?: 'SiteTreeInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: HomePage | Page | SiteTree;
};

export type SiteTreeSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  extraMeta?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StaticBuildLink = {
  __typename?: 'StaticBuildLink';
  link: Scalars['String'];
};

export type StaticBuildPayload = {
  __typename?: 'StaticBuildPayload';
  typeAncestry: Array<TypeAncestry>;
  links: Array<StaticBuildLink>;
};

export type TypeAncestry = {
  __typename?: 'TypeAncestry';
  type: Scalars['String'];
  ancestry: Array<Scalars['String']>;
};

export type TypeResolution = {
  __typename?: 'TypeResolution';
  type: Scalars['String'];
  link: Scalars['String'];
};

export type VersionedInputType = {
  mode?: Maybe<VersionedQueryMode>;
  /** The date to use for archive */
  archiveDate?: Maybe<Scalars['String']>;
  /** If mode is STATUS, specify which versioned statuses */
  status?: Maybe<Array<Maybe<VersionedStatus>>>;
  version?: Maybe<Scalars['Int']>;
};

/** The versioned mode to use */
export enum VersionedQueryMode {
  /** Read from a specific date of the archive */
  Archive = 'ARCHIVE',
  /** Read the latest version */
  Latest = 'LATEST',
  /** Reads all versionse */
  AllVersions = 'ALL_VERSIONS',
  /** Read from the draft stage */
  Draft = 'DRAFT',
  /** Read from the live stage */
  Live = 'LIVE',
  /** Read only records with a specific status */
  Status = 'STATUS',
  /** Read a specific version */
  Version = 'VERSION'
}

/** The stage to read from or write to */
export enum VersionedStatus {
  /** Only published records */
  Published = 'PUBLISHED',
  /** Only draft records */
  Draft = 'DRAFT',
  /** Only records that have been archived */
  Archived = 'ARCHIVED',
  /** Only records that have unpublished changes */
  Modified = 'MODIFIED'
}
