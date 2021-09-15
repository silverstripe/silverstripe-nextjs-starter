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

export type Agency = DataObject & AgencyInterface & {
  __typename?: 'Agency';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PartnerClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  moreContactInformation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailPublic?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  isPartner?: Maybe<Scalars['Boolean']>;
  logoID: Scalars['ID'];
  imageID: Scalars['ID'];
  parentID: Scalars['ID'];
  logo?: Maybe<Image>;
  image?: Maybe<Image>;
  parent?: Maybe<AgencyLandingPage | PartnerLandingPage>;
  services: TaxonomyTermConnection;
  link: Scalars['String'];
};


export type AgencyHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyMoreContactInformationArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyServicesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type AgencyFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  description?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  street?: Maybe<QueryFilterStringComparator>;
  city?: Maybe<QueryFilterStringComparator>;
  region?: Maybe<QueryFilterStringComparator>;
  country?: Maybe<QueryFilterStringComparator>;
  postCode?: Maybe<QueryFilterStringComparator>;
  phone?: Maybe<QueryFilterStringComparator>;
  moreContactInformation?: Maybe<QueryFilterStringComparator>;
  email?: Maybe<QueryFilterStringComparator>;
  isEmailPublic?: Maybe<QueryFilterBooleanComparator>;
  url?: Maybe<QueryFilterStringComparator>;
  isPartner?: Maybe<QueryFilterBooleanComparator>;
  logoID?: Maybe<QueryFilterIdComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  logo?: Maybe<ImageFilterFields>;
  image?: Maybe<ImageFilterFields>;
  parent?: Maybe<AgencyLandingPageFilterFields>;
  services?: Maybe<TaxonomyTermFilterFields>;
};

export type AgencyInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PartnerClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  moreContactInformation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailPublic?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  isPartner?: Maybe<Scalars['Boolean']>;
  logoID: Scalars['ID'];
  imageID: Scalars['ID'];
  parentID: Scalars['ID'];
  logo?: Maybe<Image>;
  image?: Maybe<Image>;
  parent?: Maybe<AgencyLandingPage | PartnerLandingPage>;
  services: TaxonomyTermConnection;
  link: Scalars['String'];
};


export type AgencyInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyInterfaceDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyInterfaceMoreContactInformationArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyInterfaceServicesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type AgencyInterfaceConnection = {
  __typename?: 'AgencyInterfaceConnection';
  edges: Array<AgencyInterfaceConnectionEdge>;
  nodes: Array<Agency | Partner>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type AgencyInterfaceConnectionEdge = {
  __typename?: 'AgencyInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Agency | Partner;
};

export type AgencyLandingPage = DataObject & SiteTreeInterface & PageInterface & AgencyLandingPageInterface & {
  __typename?: 'AgencyLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type AgencyLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type AgencyLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AgencyLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type AgencyLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type AgencyLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type AgencyLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type AgencyLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type AgencyLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type AgencyLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AgencyLandingPageInterfaceConnection = {
  __typename?: 'AgencyLandingPageInterfaceConnection';
  edges: Array<AgencyLandingPageInterfaceConnectionEdge>;
  nodes: Array<AgencyLandingPage | PartnerLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type AgencyLandingPageInterfaceConnectionEdge = {
  __typename?: 'AgencyLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: AgencyLandingPage | PartnerLandingPage;
};

export type AgencyLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type AgencySortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  street?: Maybe<SortDirection>;
  city?: Maybe<SortDirection>;
  region?: Maybe<SortDirection>;
  country?: Maybe<SortDirection>;
  postCode?: Maybe<SortDirection>;
  phone?: Maybe<SortDirection>;
  moreContactInformation?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  isEmailPublic?: Maybe<SortDirection>;
  url?: Maybe<SortDirection>;
  isPartner?: Maybe<SortDirection>;
  logoID?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  logo?: Maybe<ImageSortFields>;
  image?: Maybe<ImageSortFields>;
  parent?: Maybe<AgencyLandingPageSortFields>;
  services?: Maybe<TaxonomyTermSortFields>;
};

export type BaseElement = DataObject & BaseElementInterface & {
  __typename?: 'BaseElement';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<BaseElementVersionConnection>;
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
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


export type BaseElementVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  SilverStripeComModelsOurWorkBlock = 'SilverStripeComModelsOurWorkBlock',
  SilverStripeComModelsShowcasesBlock = 'SilverStripeComModelsShowcasesBlock',
  SilverStripeSharedBlocksBlogPostsBlock = 'SilverStripeSharedBlocksBlogPostsBlock',
  SilverStripeSharedBlocksCallToActionBlock = 'SilverStripeSharedBlocksCallToActionBlock',
  SilverStripeSharedBlocksCampaignBlock = 'SilverStripeSharedBlocksCampaignBlock',
  SilverStripeSharedBlocksCaseStudyBlock = 'SilverStripeSharedBlocksCaseStudyBlock',
  SilverStripeSharedBlocksFeatureColumnBlock = 'SilverStripeSharedBlocksFeatureColumnBlock',
  SilverStripeSharedBlocksIconThreeColumnBlock = 'SilverStripeSharedBlocksIconThreeColumnBlock',
  SilverStripeSharedBlocksIframeBlock = 'SilverStripeSharedBlocksIframeBlock',
  SilverStripeSharedBlocksIntroBlock = 'SilverStripeSharedBlocksIntroBlock',
  SilverStripeSharedBlocksLogoBlock = 'SilverStripeSharedBlocksLogoBlock',
  SilverStripeSharedBlocksMediaBlock = 'SilverStripeSharedBlocksMediaBlock',
  SilverStripeSharedBlocksMultiColumnBlock = 'SilverStripeSharedBlocksMultiColumnBlock',
  SilverStripeSharedBlocksQuoteBlock = 'SilverStripeSharedBlocksQuoteBlock',
  SilverStripeSharedBlocksTabBlock = 'SilverStripeSharedBlocksTabBlock',
  DnaDesignElementalModelsElementContent = 'DNADesignElementalModelsElementContent',
  DnaDesignElementalUserFormsModelElementForm = 'DNADesignElementalUserFormsModelElementForm'
}

export type BaseElementFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
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
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<BaseElementVersionConnection>;
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
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


export type BaseElementInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  nodes: Array<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type BaseElementInterfaceConnectionEdge = {
  __typename?: 'BaseElementInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock;
};

export type BaseElementSortFields = {
  id?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type BaseElementVersion = {
  __typename?: 'BaseElementVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type BaseElementVersionConnection = {
  __typename?: 'BaseElementVersionConnection';
  edges: Array<BaseElementVersionConnectionEdge>;
  nodes?: Maybe<Array<Maybe<BaseElementVersion>>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type BaseElementVersionConnectionEdge = {
  __typename?: 'BaseElementVersionConnectionEdge';
  /** The node at the end of the collections edge */
  node: BaseElementVersion;
};

export type BlogPostsBlock = DataObject & BaseElementInterface & BlogPostsBlockInterface & {
  __typename?: 'BlogPostsBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type BlogPostsBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BlogPostsBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BlogPostsBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type BlogPostsBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type BlogPostsBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type BlogPostsBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BlogPostsBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type BlogPostsBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type BlogPostsBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type BlogPostsBlockInterfaceConnection = {
  __typename?: 'BlogPostsBlockInterfaceConnection';
  edges: Array<BlogPostsBlockInterfaceConnectionEdge>;
  nodes: Array<BlogPostsBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type BlogPostsBlockInterfaceConnectionEdge = {
  __typename?: 'BlogPostsBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: BlogPostsBlock;
};

export type BlogPostsBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type CallToActionBlock = DataObject & BaseElementInterface & CallToActionBlockInterface & {
  __typename?: 'CallToActionBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  linkContent?: Maybe<Scalars['String']>;
  linkedPageID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  linkedPage?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CallToActionBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CallToActionBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CallToActionBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CallToActionBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  linkContent?: Maybe<QueryFilterStringComparator>;
  linkedPageID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  linkedPage?: Maybe<SiteTreeFilterFields>;
};

export type CallToActionBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  linkContent?: Maybe<Scalars['String']>;
  linkedPageID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  linkedPage?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CallToActionBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CallToActionBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CallToActionBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CallToActionBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CallToActionBlockInterfaceConnection = {
  __typename?: 'CallToActionBlockInterfaceConnection';
  edges: Array<CallToActionBlockInterfaceConnectionEdge>;
  nodes: Array<CallToActionBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type CallToActionBlockInterfaceConnectionEdge = {
  __typename?: 'CallToActionBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: CallToActionBlock;
};

export type CallToActionBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  linkContent?: Maybe<SortDirection>;
  linkedPageID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  linkedPage?: Maybe<SiteTreeSortFields>;
};

export type CampaignBlock = DataObject & BaseElementInterface & CampaignBlockInterface & {
  __typename?: 'CampaignBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  uppercaseTitle?: Maybe<Scalars['String']>;
  summaryText?: Maybe<Scalars['String']>;
  imagePosition?: Maybe<ImagePositionEnum>;
  imageID: Scalars['ID'];
  buttonLinkID: Scalars['ID'];
  secondaryLinkID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  image?: Maybe<File | Folder | Image>;
  buttonLink?: Maybe<Link>;
  secondaryLink?: Maybe<Link>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CampaignBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CampaignBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CampaignBlockSummaryTextArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CampaignBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  uppercaseTitle?: Maybe<QueryFilterStringComparator>;
  summaryText?: Maybe<QueryFilterStringComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  buttonLinkID?: Maybe<QueryFilterIdComparator>;
  secondaryLinkID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  image?: Maybe<FileFilterFields>;
  buttonLink?: Maybe<LinkFilterFields>;
  secondaryLink?: Maybe<LinkFilterFields>;
};

export type CampaignBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  uppercaseTitle?: Maybe<Scalars['String']>;
  summaryText?: Maybe<Scalars['String']>;
  imagePosition?: Maybe<ImagePositionEnum>;
  imageID: Scalars['ID'];
  buttonLinkID: Scalars['ID'];
  secondaryLinkID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  image?: Maybe<File | Folder | Image>;
  buttonLink?: Maybe<Link>;
  secondaryLink?: Maybe<Link>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CampaignBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CampaignBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CampaignBlockInterfaceSummaryTextArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CampaignBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CampaignBlockInterfaceConnection = {
  __typename?: 'CampaignBlockInterfaceConnection';
  edges: Array<CampaignBlockInterfaceConnectionEdge>;
  nodes: Array<CampaignBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type CampaignBlockInterfaceConnectionEdge = {
  __typename?: 'CampaignBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: CampaignBlock;
};

export type CampaignBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  uppercaseTitle?: Maybe<SortDirection>;
  summaryText?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  buttonLinkID?: Maybe<SortDirection>;
  secondaryLinkID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  image?: Maybe<FileSortFields>;
  buttonLink?: Maybe<LinkSortFields>;
  secondaryLink?: Maybe<LinkSortFields>;
};

export enum CanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum CanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export type CareersLandingPage = DataObject & SiteTreeInterface & PageInterface & CareersLandingPageInterface & {
  __typename?: 'CareersLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type CareersLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CareersLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CareersLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type CareersLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CareersLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type CareersLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type CareersLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CareersLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CareersLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type CareersLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type CareersLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CareersLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CareersLandingPageInterfaceConnection = {
  __typename?: 'CareersLandingPageInterfaceConnection';
  edges: Array<CareersLandingPageInterfaceConnectionEdge>;
  nodes: Array<CareersLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type CareersLandingPageInterfaceConnectionEdge = {
  __typename?: 'CareersLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: CareersLandingPage;
};

export type CareersLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type CaseStudyBlock = DataObject & BaseElementInterface & CaseStudyBlockInterface & {
  __typename?: 'CaseStudyBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  uppercaseTitle?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  imagePosition?: Maybe<ImagePositionEnum>;
  fullBleed?: Maybe<Scalars['Boolean']>;
  imageID: Scalars['ID'];
  secondaryLinkID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  image?: Maybe<Image>;
  secondaryLink?: Maybe<Link>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CaseStudyBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CaseStudyBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CaseStudyBlockIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CaseStudyBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  uppercaseTitle?: Maybe<QueryFilterStringComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  fullBleed?: Maybe<QueryFilterBooleanComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  secondaryLinkID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  image?: Maybe<ImageFilterFields>;
  secondaryLink?: Maybe<LinkFilterFields>;
};

export type CaseStudyBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  uppercaseTitle?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  imagePosition?: Maybe<ImagePositionEnum>;
  fullBleed?: Maybe<Scalars['Boolean']>;
  imageID: Scalars['ID'];
  secondaryLinkID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  image?: Maybe<Image>;
  secondaryLink?: Maybe<Link>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type CaseStudyBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CaseStudyBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type CaseStudyBlockInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type CaseStudyBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CaseStudyBlockInterfaceConnection = {
  __typename?: 'CaseStudyBlockInterfaceConnection';
  edges: Array<CaseStudyBlockInterfaceConnectionEdge>;
  nodes: Array<CaseStudyBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type CaseStudyBlockInterfaceConnectionEdge = {
  __typename?: 'CaseStudyBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: CaseStudyBlock;
};

export type CaseStudyBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  uppercaseTitle?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  fullBleed?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  secondaryLinkID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  image?: Maybe<ImageSortFields>;
  secondaryLink?: Maybe<LinkSortFields>;
};

export enum ClassNameEnum {
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig'
}

export type ContentItem = DataObject & {
  __typename?: 'ContentItem';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ContentItemClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<MultiColumnBlock>;
};


export type ContentItemHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ContentItemTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ContentItemExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ContentItemLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ContentItemCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ContentItemContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};

export enum ContentItemClassNameEnum {
  SilverStripeSharedModelsContentItem = 'SilverStripeSharedModelsContentItem'
}

export type ContentItemConnection = {
  __typename?: 'ContentItemConnection';
  edges: Array<ContentItemConnectionEdge>;
  nodes: Array<ContentItem>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ContentItemConnectionEdge = {
  __typename?: 'ContentItemConnectionEdge';
  /** The node at the end of the collections edge */
  node: ContentItem;
};

export type ContentItemFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<MultiColumnBlockFilterFields>;
};

export type ContentItemSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<MultiColumnBlockSortFields>;
};

/** Formatting options for fields that map to DBDate data types */
export enum DbDateFormattingOptions {
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
  Custom = 'CUSTOM'
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

/** Formatting options for fields that map to DBDecimal data types */
export enum DbDecimalFormattingOptions {
  Int = 'INT'
}

export type DbFileComposite = {
  __typename?: 'DBFileComposite';
  hash?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

/** Formatting options for fields that map to DBFloat data types */
export enum DbFloatFormattingOptions {
  Nice = 'NICE',
  Round = 'ROUND',
  NiceRound = 'NICE_ROUND'
}

export type DbFocusPointComposite = {
  __typename?: 'DBFocusPointComposite';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
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
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  useSmallHeading?: Maybe<Scalars['Boolean']>;
  html?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
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


export type ElementContentVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ElementContentFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  useSmallHeading?: Maybe<QueryFilterBooleanComparator>;
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
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  useSmallHeading?: Maybe<Scalars['Boolean']>;
  html?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
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


export type ElementContentInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  useSmallHeading?: Maybe<SortDirection>;
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

export type EmbeddedObject = DataObject & {
  __typename?: 'EmbeddedObject';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<EmbeddedObjectClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sourceURL?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  thumbURL?: Maybe<Scalars['String']>;
  extraClass?: Maybe<Scalars['String']>;
  embedHTML?: Maybe<Scalars['String']>;
};


export type EmbeddedObjectHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type EmbeddedObjectTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type EmbeddedObjectExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type EmbeddedObjectLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type EmbeddedObjectCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type EmbeddedObjectDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type EmbeddedObjectEmbedHtmlArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum EmbeddedObjectClassNameEnum {
  SheadawsonLinkableModelsEmbeddedObject = 'SheadawsonLinkableModelsEmbeddedObject'
}

export type EmbeddedObjectConnection = {
  __typename?: 'EmbeddedObjectConnection';
  edges: Array<EmbeddedObjectConnectionEdge>;
  nodes: Array<EmbeddedObject>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type EmbeddedObjectConnectionEdge = {
  __typename?: 'EmbeddedObjectConnectionEdge';
  /** The node at the end of the collections edge */
  node: EmbeddedObject;
};

export type EmbeddedObjectFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  type?: Maybe<QueryFilterStringComparator>;
  sourceURL?: Maybe<QueryFilterStringComparator>;
  width?: Maybe<QueryFilterStringComparator>;
  height?: Maybe<QueryFilterStringComparator>;
  description?: Maybe<QueryFilterStringComparator>;
  thumbURL?: Maybe<QueryFilterStringComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  embedHTML?: Maybe<QueryFilterStringComparator>;
};

export type EmbeddedObjectSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
  sourceURL?: Maybe<SortDirection>;
  width?: Maybe<SortDirection>;
  height?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  thumbURL?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  embedHTML?: Maybe<SortDirection>;
};

export type FeatureColumnBlock = DataObject & BaseElementInterface & FeatureColumnBlockInterface & {
  __typename?: 'FeatureColumnBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: FeatureColumnItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type FeatureColumnBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnBlockItemsArgs = {
  filter?: Maybe<FeatureColumnItemFilterFields>;
  sort?: Maybe<FeatureColumnItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type FeatureColumnBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  items?: Maybe<FeatureColumnItemFilterFields>;
};

export type FeatureColumnBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: FeatureColumnItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type FeatureColumnBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnBlockInterfaceItemsArgs = {
  filter?: Maybe<FeatureColumnItemFilterFields>;
  sort?: Maybe<FeatureColumnItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type FeatureColumnBlockInterfaceConnection = {
  __typename?: 'FeatureColumnBlockInterfaceConnection';
  edges: Array<FeatureColumnBlockInterfaceConnectionEdge>;
  nodes: Array<FeatureColumnBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FeatureColumnBlockInterfaceConnectionEdge = {
  __typename?: 'FeatureColumnBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: FeatureColumnBlock;
};

export type FeatureColumnBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  items?: Maybe<FeatureColumnItemSortFields>;
};

export type FeatureColumnItem = DataObject & {
  __typename?: 'FeatureColumnItem';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<FeatureColumnItemClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  iconID: Scalars['ID'];
  featureLinkID: Scalars['ID'];
  parent?: Maybe<FeatureColumnBlock>;
  icon?: Maybe<File | Folder | Image>;
  featureLink?: Maybe<Link>;
};


export type FeatureColumnItemHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnItemTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnItemExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FeatureColumnItemLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnItemCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type FeatureColumnItemContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum FeatureColumnItemClassNameEnum {
  SilverStripeSharedModelsFeatureColumnItem = 'SilverStripeSharedModelsFeatureColumnItem'
}

export type FeatureColumnItemConnection = {
  __typename?: 'FeatureColumnItemConnection';
  edges: Array<FeatureColumnItemConnectionEdge>;
  nodes: Array<FeatureColumnItem>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FeatureColumnItemConnectionEdge = {
  __typename?: 'FeatureColumnItemConnectionEdge';
  /** The node at the end of the collections edge */
  node: FeatureColumnItem;
};

export type FeatureColumnItemFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  iconID?: Maybe<QueryFilterIdComparator>;
  featureLinkID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<FeatureColumnBlockFilterFields>;
  icon?: Maybe<FileFilterFields>;
  featureLink?: Maybe<LinkFilterFields>;
};

export type FeatureColumnItemSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  iconID?: Maybe<SortDirection>;
  featureLinkID?: Maybe<SortDirection>;
  parent?: Maybe<FeatureColumnBlockSortFields>;
  icon?: Maybe<FileSortFields>;
  featureLink?: Maybe<LinkSortFields>;
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
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  submittedFileField?: Maybe<SubmittedFileField>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  versions?: Maybe<ImageVersionConnection>;
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


export type FileVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  submittedFileField?: Maybe<SubmittedFileFieldFilterFields>;
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
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  submittedFileField?: Maybe<SubmittedFileField>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  versions?: Maybe<ImageVersionConnection>;
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


export type FileInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  submittedFileField?: Maybe<SubmittedFileFieldSortFields>;
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
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  submittedFileField?: Maybe<SubmittedFileField>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  versions?: Maybe<ImageVersionConnection>;
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


export type FolderVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  submittedFileField?: Maybe<SubmittedFileFieldFilterFields>;
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
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  submittedFileField?: Maybe<SubmittedFileField>;
  backLinks: FileLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  absoluteLink?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  versions?: Maybe<ImageVersionConnection>;
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


export type FolderInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  submittedFileField?: Maybe<SubmittedFileFieldSortFields>;
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

export enum HeroBackgroundOptionEnum {
  Image = 'Image',
  Video = 'Video'
}

export type HomePage = DataObject & SiteTreeInterface & PageInterface & HomePageInterface & {
  __typename?: 'HomePage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  heroBackgroundOption?: Maybe<HeroBackgroundOptionEnum>;
  heroTitle?: Maybe<Scalars['String']>;
  heroIntro?: Maybe<Scalars['String']>;
  heroButtonOneStyle?: Maybe<Scalars['String']>;
  heroButtonTwoStyle?: Maybe<Scalars['String']>;
  heroBackgroundVideoURL?: Maybe<Scalars['String']>;
  heroBackgroundOverlay?: Maybe<Scalars['Boolean']>;
  heroBackgroundImageID: Scalars['ID'];
  heroButtonOneID: Scalars['ID'];
  heroButtonTwoID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  heroBackgroundImage?: Maybe<Image>;
  heroButtonOne?: Maybe<Link>;
  heroButtonTwo?: Maybe<Link>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
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


export type HomePageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageHeroIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
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


export type HomePageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type HomePageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  heroTitle?: Maybe<QueryFilterStringComparator>;
  heroIntro?: Maybe<QueryFilterStringComparator>;
  heroButtonOneStyle?: Maybe<QueryFilterStringComparator>;
  heroButtonTwoStyle?: Maybe<QueryFilterStringComparator>;
  heroBackgroundVideoURL?: Maybe<QueryFilterStringComparator>;
  heroBackgroundOverlay?: Maybe<QueryFilterBooleanComparator>;
  heroBackgroundImageID?: Maybe<QueryFilterIdComparator>;
  heroButtonOneID?: Maybe<QueryFilterIdComparator>;
  heroButtonTwoID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  heroBackgroundImage?: Maybe<ImageFilterFields>;
  heroButtonOne?: Maybe<LinkFilterFields>;
  heroButtonTwo?: Maybe<LinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type HomePageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  heroBackgroundOption?: Maybe<HeroBackgroundOptionEnum>;
  heroTitle?: Maybe<Scalars['String']>;
  heroIntro?: Maybe<Scalars['String']>;
  heroButtonOneStyle?: Maybe<Scalars['String']>;
  heroButtonTwoStyle?: Maybe<Scalars['String']>;
  heroBackgroundVideoURL?: Maybe<Scalars['String']>;
  heroBackgroundOverlay?: Maybe<Scalars['Boolean']>;
  heroBackgroundImageID: Scalars['ID'];
  heroButtonOneID: Scalars['ID'];
  heroButtonTwoID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  heroBackgroundImage?: Maybe<Image>;
  heroButtonOne?: Maybe<Link>;
  heroButtonTwo?: Maybe<Link>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
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


export type HomePageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePageInterfaceHeroIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
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


export type HomePageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  heroTitle?: Maybe<SortDirection>;
  heroIntro?: Maybe<SortDirection>;
  heroButtonOneStyle?: Maybe<SortDirection>;
  heroButtonTwoStyle?: Maybe<SortDirection>;
  heroBackgroundVideoURL?: Maybe<SortDirection>;
  heroBackgroundOverlay?: Maybe<SortDirection>;
  heroBackgroundImageID?: Maybe<SortDirection>;
  heroButtonOneID?: Maybe<SortDirection>;
  heroButtonTwoID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  heroBackgroundImage?: Maybe<ImageSortFields>;
  heroButtonOne?: Maybe<LinkSortFields>;
  heroButtonTwo?: Maybe<LinkSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type IconContentItem = DataObject & {
  __typename?: 'IconContentItem';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<IconContentItemClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  iconID: Scalars['ID'];
  parent?: Maybe<IconThreeColumnBlock>;
  icon?: Maybe<File | Folder | Image>;
};


export type IconContentItemHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconContentItemTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconContentItemExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconContentItemLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconContentItemCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconContentItemContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};

export enum IconContentItemClassNameEnum {
  SilverStripeSharedModelsIconContentItem = 'SilverStripeSharedModelsIconContentItem'
}

export type IconContentItemConnection = {
  __typename?: 'IconContentItemConnection';
  edges: Array<IconContentItemConnectionEdge>;
  nodes: Array<IconContentItem>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type IconContentItemConnectionEdge = {
  __typename?: 'IconContentItemConnectionEdge';
  /** The node at the end of the collections edge */
  node: IconContentItem;
};

export type IconContentItemFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  iconID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<IconThreeColumnBlockFilterFields>;
  icon?: Maybe<FileFilterFields>;
};

export type IconContentItemSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  iconID?: Maybe<SortDirection>;
  parent?: Maybe<IconThreeColumnBlockSortFields>;
  icon?: Maybe<FileSortFields>;
};

export type IconThreeColumnBlock = DataObject & BaseElementInterface & IconThreeColumnBlockInterface & {
  __typename?: 'IconThreeColumnBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: IconContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IconThreeColumnBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconThreeColumnBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconThreeColumnBlockItemsArgs = {
  filter?: Maybe<IconContentItemFilterFields>;
  sort?: Maybe<IconContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IconThreeColumnBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  items?: Maybe<IconContentItemFilterFields>;
};

export type IconThreeColumnBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: IconContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IconThreeColumnBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconThreeColumnBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IconThreeColumnBlockInterfaceItemsArgs = {
  filter?: Maybe<IconContentItemFilterFields>;
  sort?: Maybe<IconContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IconThreeColumnBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IconThreeColumnBlockInterfaceConnection = {
  __typename?: 'IconThreeColumnBlockInterfaceConnection';
  edges: Array<IconThreeColumnBlockInterfaceConnectionEdge>;
  nodes: Array<IconThreeColumnBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type IconThreeColumnBlockInterfaceConnectionEdge = {
  __typename?: 'IconThreeColumnBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: IconThreeColumnBlock;
};

export type IconThreeColumnBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  items?: Maybe<IconContentItemSortFields>;
};

export type IframeBlock = DataObject & BaseElementInterface & IframeBlockInterface & {
  __typename?: 'IframeBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  iframeURL?: Maybe<Scalars['String']>;
  iframeHeight?: Maybe<Scalars['String']>;
  iframeWidth?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IframeBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IframeBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IframeBlockIframeUrlArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockIframeHeightArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockIframeWidthArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IframeBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  iframeURL?: Maybe<QueryFilterStringComparator>;
  iframeHeight?: Maybe<QueryFilterStringComparator>;
  iframeWidth?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type IframeBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  iframeURL?: Maybe<Scalars['String']>;
  iframeHeight?: Maybe<Scalars['String']>;
  iframeWidth?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IframeBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IframeBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IframeBlockInterfaceIframeUrlArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceIframeHeightArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceIframeWidthArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IframeBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IframeBlockInterfaceConnection = {
  __typename?: 'IframeBlockInterfaceConnection';
  edges: Array<IframeBlockInterfaceConnectionEdge>;
  nodes: Array<IframeBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type IframeBlockInterfaceConnectionEdge = {
  __typename?: 'IframeBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: IframeBlock;
};

export type IframeBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  iframeURL?: Maybe<SortDirection>;
  iframeHeight?: Maybe<SortDirection>;
  iframeWidth?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type Image = DataObject & FileInterface & ImageInterface & {
  __typename?: 'Image';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  mediaBlockFullWidthImage?: Maybe<Scalars['String']>;
  mediaBlockFullWidthImageMulti?: Maybe<Scalars['String']>;
  mediaBlockImage?: Maybe<Scalars['String']>;
  mediaBlockImageMulti?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<ImageVersionConnection>;
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  focusPointX?: Maybe<Scalars['Float']>;
  focusPointY?: Maybe<Scalars['Float']>;
  focusPoint?: Maybe<DbFocusPointComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  submittedFileField?: Maybe<SubmittedFileField>;
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


export type ImageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageFocusPointXArgs = {
  format?: Maybe<DbFloatFormattingOptions>;
};


export type ImageFocusPointYArgs = {
  format?: Maybe<DbFloatFormattingOptions>;
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
  version?: Maybe<QueryFilterIntComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  focusPointX?: Maybe<QueryFilterFloatComparator>;
  focusPointY?: Maybe<QueryFilterFloatComparator>;
  parent?: Maybe<FileFilterFields>;
  owner?: Maybe<MemberFilterFields>;
  submittedFileField?: Maybe<SubmittedFileFieldFilterFields>;
  backLinks?: Maybe<FileLinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
};

export type ImageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  mediaBlockFullWidthImage?: Maybe<Scalars['String']>;
  mediaBlockFullWidthImageMulti?: Maybe<Scalars['String']>;
  mediaBlockImage?: Maybe<Scalars['String']>;
  mediaBlockImageMulti?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<ImageVersionConnection>;
  className?: Maybe<ImageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  userFormUpload?: Maybe<UserFormUploadEnum>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  parentID: Scalars['ID'];
  ownerID: Scalars['ID'];
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFileComposite>;
  focusPointX?: Maybe<Scalars['Float']>;
  focusPointY?: Maybe<Scalars['Float']>;
  focusPoint?: Maybe<DbFocusPointComposite>;
  parent?: Maybe<File | Folder | Image>;
  owner?: Maybe<Member>;
  submittedFileField?: Maybe<SubmittedFileField>;
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


export type ImageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ImageInterfaceFocusPointXArgs = {
  format?: Maybe<DbFloatFormattingOptions>;
};


export type ImageInterfaceFocusPointYArgs = {
  format?: Maybe<DbFloatFormattingOptions>;
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

export enum ImagePositionEnum {
  Left = 'Left',
  Right = 'Right'
}

export type ImageSortFields = {
  id?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  ownerID?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileFilename?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  focusPointX?: Maybe<SortDirection>;
  focusPointY?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  owner?: Maybe<MemberSortFields>;
  submittedFileField?: Maybe<SubmittedFileFieldSortFields>;
  backLinks?: Maybe<FileLinkSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
};

export type ImageVersion = {
  __typename?: 'ImageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  mediaBlockFullWidthImage?: Maybe<Scalars['String']>;
  mediaBlockFullWidthImageMulti?: Maybe<Scalars['String']>;
  mediaBlockImage?: Maybe<Scalars['String']>;
  mediaBlockImageMulti?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type ImageVersionConnection = {
  __typename?: 'ImageVersionConnection';
  edges: Array<ImageVersionConnectionEdge>;
  nodes?: Maybe<Array<Maybe<ImageVersion>>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ImageVersionConnectionEdge = {
  __typename?: 'ImageVersionConnectionEdge';
  /** The node at the end of the collections edge */
  node: ImageVersion;
};

export type IntroBlock = DataObject & BaseElementInterface & IntroBlockInterface & {
  __typename?: 'IntroBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  showChildLinks?: Maybe<Scalars['Boolean']>;
  hideOverlay?: Maybe<Scalars['Boolean']>;
  backgroundImageID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  backgroundImage?: Maybe<Image>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IntroBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IntroBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IntroBlockIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type IntroBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IntroBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  showChildLinks?: Maybe<QueryFilterBooleanComparator>;
  hideOverlay?: Maybe<QueryFilterBooleanComparator>;
  backgroundImageID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  backgroundImage?: Maybe<ImageFilterFields>;
};

export type IntroBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  showChildLinks?: Maybe<Scalars['Boolean']>;
  hideOverlay?: Maybe<Scalars['Boolean']>;
  backgroundImageID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  backgroundImage?: Maybe<Image>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type IntroBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IntroBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type IntroBlockInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type IntroBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type IntroBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IntroBlockInterfaceConnection = {
  __typename?: 'IntroBlockInterfaceConnection';
  edges: Array<IntroBlockInterfaceConnectionEdge>;
  nodes: Array<IntroBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type IntroBlockInterfaceConnectionEdge = {
  __typename?: 'IntroBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: IntroBlock;
};

export type IntroBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  showChildLinks?: Maybe<SortDirection>;
  hideOverlay?: Maybe<SortDirection>;
  backgroundImageID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  backgroundImage?: Maybe<ImageSortFields>;
};

export type Link = DataObject & {
  __typename?: 'Link';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  asHTML?: Maybe<Scalars['String']>;
  linkURL?: Maybe<Scalars['String']>;
  safeTargetAttr?: Maybe<Scalars['String']>;
  classAttr?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  className?: Maybe<LinkClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  openInNewWindow?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
  siteTreeID: Scalars['ID'];
  fileID: Scalars['ID'];
  siteTree?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  file?: Maybe<File | Folder | Image>;
};


export type LinkHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LinkTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LinkExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LinkLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LinkCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export enum LinkClassNameEnum {
  SheadawsonLinkableModelsLink = 'SheadawsonLinkableModelsLink'
}

export type LinkConnection = {
  __typename?: 'LinkConnection';
  edges: Array<LinkConnectionEdge>;
  nodes: Array<Link>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type LinkConnectionEdge = {
  __typename?: 'LinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: Link;
};

export type LinkFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  anchor?: Maybe<QueryFilterStringComparator>;
  type?: Maybe<QueryFilterStringComparator>;
  url?: Maybe<QueryFilterStringComparator>;
  email?: Maybe<QueryFilterStringComparator>;
  phone?: Maybe<QueryFilterStringComparator>;
  openInNewWindow?: Maybe<QueryFilterBooleanComparator>;
  template?: Maybe<QueryFilterStringComparator>;
  siteTreeID?: Maybe<QueryFilterIdComparator>;
  fileID?: Maybe<QueryFilterIdComparator>;
  siteTree?: Maybe<SiteTreeFilterFields>;
  file?: Maybe<FileFilterFields>;
};

export type LinkSortFields = {
  id?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  anchor?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
  url?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  phone?: Maybe<SortDirection>;
  openInNewWindow?: Maybe<SortDirection>;
  template?: Maybe<SortDirection>;
  siteTreeID?: Maybe<SortDirection>;
  fileID?: Maybe<SortDirection>;
  siteTree?: Maybe<SiteTreeSortFields>;
  file?: Maybe<FileSortFields>;
};

export type Logo = DataObject & {
  __typename?: 'Logo';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<LogoClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  linkID: Scalars['ID'];
  imageID: Scalars['ID'];
  parent?: Maybe<LogoBlock>;
  link?: Maybe<Link>;
  image?: Maybe<File | Folder | Image>;
};


export type LogoHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LogoCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export type LogoBlock = DataObject & BaseElementInterface & LogoBlockInterface & {
  __typename?: 'LogoBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  logos: LogoConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type LogoBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LogoBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LogoBlockLogosArgs = {
  filter?: Maybe<LogoFilterFields>;
  sort?: Maybe<LogoSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LogoBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type LogoBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  logos?: Maybe<LogoFilterFields>;
};

export type LogoBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  logos: LogoConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type LogoBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LogoBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type LogoBlockInterfaceLogosArgs = {
  filter?: Maybe<LogoFilterFields>;
  sort?: Maybe<LogoSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LogoBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type LogoBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type LogoBlockInterfaceConnection = {
  __typename?: 'LogoBlockInterfaceConnection';
  edges: Array<LogoBlockInterfaceConnectionEdge>;
  nodes: Array<LogoBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type LogoBlockInterfaceConnectionEdge = {
  __typename?: 'LogoBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: LogoBlock;
};

export type LogoBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  logos?: Maybe<LogoSortFields>;
};

export enum LogoClassNameEnum {
  SilverStripeSharedModelsLogo = 'SilverStripeSharedModelsLogo'
}

export type LogoConnection = {
  __typename?: 'LogoConnection';
  edges: Array<LogoConnectionEdge>;
  nodes: Array<Logo>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type LogoConnectionEdge = {
  __typename?: 'LogoConnectionEdge';
  /** The node at the end of the collections edge */
  node: Logo;
};

export type LogoFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  linkID?: Maybe<QueryFilterIdComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<LogoBlockFilterFields>;
  link?: Maybe<LinkFilterFields>;
  image?: Maybe<FileFilterFields>;
};

export type LogoSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  linkID?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  parent?: Maybe<LogoBlockSortFields>;
  link?: Maybe<LinkSortFields>;
  image?: Maybe<FileSortFields>;
};

export type MediaBlock = DataObject & BaseElementInterface & MediaBlockInterface & {
  __typename?: 'MediaBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  videoEmbedCode?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  mediaFormat?: Maybe<MediaFormatEnum>;
  customColour?: Maybe<Scalars['String']>;
  width?: Maybe<WidthEnum>;
  noGaps?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<ElementalArea>;
  images: ImageInterfaceConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type MediaBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MediaBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MediaBlockVideoEmbedCodeArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type MediaBlockCaptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockImagesArgs = {
  filter?: Maybe<ImageFilterFields>;
  sort?: Maybe<ImageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MediaBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MediaBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  videoEmbedCode?: Maybe<QueryFilterStringComparator>;
  caption?: Maybe<QueryFilterStringComparator>;
  customColour?: Maybe<QueryFilterStringComparator>;
  noGaps?: Maybe<QueryFilterBooleanComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  images?: Maybe<ImageFilterFields>;
};

export type MediaBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  videoEmbedCode?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  mediaFormat?: Maybe<MediaFormatEnum>;
  customColour?: Maybe<Scalars['String']>;
  width?: Maybe<WidthEnum>;
  noGaps?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<ElementalArea>;
  images: ImageInterfaceConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type MediaBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MediaBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MediaBlockInterfaceVideoEmbedCodeArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type MediaBlockInterfaceCaptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceImagesArgs = {
  filter?: Maybe<ImageFilterFields>;
  sort?: Maybe<ImageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MediaBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MediaBlockInterfaceConnection = {
  __typename?: 'MediaBlockInterfaceConnection';
  edges: Array<MediaBlockInterfaceConnectionEdge>;
  nodes: Array<MediaBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MediaBlockInterfaceConnectionEdge = {
  __typename?: 'MediaBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: MediaBlock;
};

export type MediaBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  videoEmbedCode?: Maybe<SortDirection>;
  caption?: Maybe<SortDirection>;
  customColour?: Maybe<SortDirection>;
  noGaps?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  images?: Maybe<ImageSortFields>;
};

export enum MediaFormatEnum {
  Video = 'Video',
  Image = 'Image'
}

export type Member = DataObject & {
  __typename?: 'Member';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<MemberClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  accountResetHash?: Maybe<Scalars['String']>;
  accountResetExpired?: Maybe<Scalars['String']>;
  defaultRegisteredMethodID?: Maybe<Scalars['Int']>;
  hasSkippedMFARegistration?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  tempIDHash?: Maybe<Scalars['String']>;
  tempIDExpired?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  autoLoginHash?: Maybe<Scalars['String']>;
  autoLoginExpired?: Maybe<Scalars['String']>;
  passwordEncryption?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  passwordExpiry?: Maybe<Scalars['String']>;
  lockedOutUntil?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  failedLoginCount?: Maybe<Scalars['Int']>;
  apiKeys: MemberApiKeyConnection;
  registeredMFAMethods: RegisteredMethodConnection;
  loggedPasswords: MemberPasswordConnection;
  rememberLoginHashes: RememberLoginHashConnection;
  groups: GroupConnection;
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


export type MemberLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberAccountResetExpiredArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberTempIdExpiredArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberAutoLoginExpiredArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberPasswordExpiryArgs = {
  format?: Maybe<DbDateFormattingOptions>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberLockedOutUntilArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MemberApiKeysArgs = {
  filter?: Maybe<MemberApiKeyFilterFields>;
  sort?: Maybe<MemberApiKeySortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MemberRegisteredMfaMethodsArgs = {
  filter?: Maybe<RegisteredMethodFilterFields>;
  sort?: Maybe<RegisteredMethodSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MemberLoggedPasswordsArgs = {
  filter?: Maybe<MemberPasswordFilterFields>;
  sort?: Maybe<MemberPasswordSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MemberRememberLoginHashesArgs = {
  filter?: Maybe<RememberLoginHashFilterFields>;
  sort?: Maybe<RememberLoginHashSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MemberGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MemberApiKey = DataObject & {
  __typename?: 'MemberApiKey';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type MemberApiKeyHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberApiKeyTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberApiKeyExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type MemberApiKeyConnection = {
  __typename?: 'MemberApiKeyConnection';
  edges: Array<MemberApiKeyConnectionEdge>;
  nodes: Array<MemberApiKey>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MemberApiKeyConnectionEdge = {
  __typename?: 'MemberApiKeyConnectionEdge';
  /** The node at the end of the collections edge */
  node: MemberApiKey;
};

export type MemberApiKeyFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type MemberApiKeySortFields = {
  id?: Maybe<SortDirection>;
};

export enum MemberClassNameEnum {
  SilverStripeSecurityMember = 'SilverStripeSecurityMember'
}

export type MemberConnection = {
  __typename?: 'MemberConnection';
  edges: Array<MemberConnectionEdge>;
  nodes: Array<Member>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MemberConnectionEdge = {
  __typename?: 'MemberConnectionEdge';
  /** The node at the end of the collections edge */
  node: Member;
};

export type MemberFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  accountResetHash?: Maybe<QueryFilterStringComparator>;
  accountResetExpired?: Maybe<QueryFilterStringComparator>;
  defaultRegisteredMethodID?: Maybe<QueryFilterIntComparator>;
  hasSkippedMFARegistration?: Maybe<QueryFilterBooleanComparator>;
  firstName?: Maybe<QueryFilterStringComparator>;
  surname?: Maybe<QueryFilterStringComparator>;
  email?: Maybe<QueryFilterStringComparator>;
  tempIDHash?: Maybe<QueryFilterStringComparator>;
  tempIDExpired?: Maybe<QueryFilterStringComparator>;
  password?: Maybe<QueryFilterStringComparator>;
  autoLoginHash?: Maybe<QueryFilterStringComparator>;
  autoLoginExpired?: Maybe<QueryFilterStringComparator>;
  passwordEncryption?: Maybe<QueryFilterStringComparator>;
  salt?: Maybe<QueryFilterStringComparator>;
  passwordExpiry?: Maybe<QueryFilterStringComparator>;
  lockedOutUntil?: Maybe<QueryFilterStringComparator>;
  locale?: Maybe<QueryFilterStringComparator>;
  failedLoginCount?: Maybe<QueryFilterIntComparator>;
  apiKeys?: Maybe<MemberApiKeyFilterFields>;
  registeredMFAMethods?: Maybe<RegisteredMethodFilterFields>;
  loggedPasswords?: Maybe<MemberPasswordFilterFields>;
  rememberLoginHashes?: Maybe<RememberLoginHashFilterFields>;
  groups?: Maybe<GroupFilterFields>;
};

export type MemberPassword = DataObject & {
  __typename?: 'MemberPassword';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type MemberPasswordHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberPasswordTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberPasswordExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type MemberPasswordConnection = {
  __typename?: 'MemberPasswordConnection';
  edges: Array<MemberPasswordConnectionEdge>;
  nodes: Array<MemberPassword>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MemberPasswordConnectionEdge = {
  __typename?: 'MemberPasswordConnectionEdge';
  /** The node at the end of the collections edge */
  node: MemberPassword;
};

export type MemberPasswordFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type MemberPasswordSortFields = {
  id?: Maybe<SortDirection>;
};

export type MemberSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  accountResetHash?: Maybe<SortDirection>;
  accountResetExpired?: Maybe<SortDirection>;
  defaultRegisteredMethodID?: Maybe<SortDirection>;
  hasSkippedMFARegistration?: Maybe<SortDirection>;
  firstName?: Maybe<SortDirection>;
  surname?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  tempIDHash?: Maybe<SortDirection>;
  tempIDExpired?: Maybe<SortDirection>;
  password?: Maybe<SortDirection>;
  autoLoginHash?: Maybe<SortDirection>;
  autoLoginExpired?: Maybe<SortDirection>;
  passwordEncryption?: Maybe<SortDirection>;
  salt?: Maybe<SortDirection>;
  passwordExpiry?: Maybe<SortDirection>;
  lockedOutUntil?: Maybe<SortDirection>;
  locale?: Maybe<SortDirection>;
  failedLoginCount?: Maybe<SortDirection>;
  apiKeys?: Maybe<MemberApiKeySortFields>;
  registeredMFAMethods?: Maybe<RegisteredMethodSortFields>;
  loggedPasswords?: Maybe<MemberPasswordSortFields>;
  rememberLoginHashes?: Maybe<RememberLoginHashSortFields>;
  groups?: Maybe<GroupSortFields>;
};

export type MenuItem = DataObject & {
  __typename?: 'MenuItem';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<MenuItemClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  isNewWindow?: Maybe<Scalars['Boolean']>;
  pageID: Scalars['ID'];
  menuSetID: Scalars['ID'];
  page?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  menuSet?: Maybe<MenuSet>;
};


export type MenuItemHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuItemTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuItemExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuItemLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MenuItemCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MenuItemLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum MenuItemClassNameEnum {
  HeydayMenuManagerMenuItem = 'HeydayMenuManagerMenuItem'
}

export type MenuItemConnection = {
  __typename?: 'MenuItemConnection';
  edges: Array<MenuItemConnectionEdge>;
  nodes: Array<MenuItem>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MenuItemConnectionEdge = {
  __typename?: 'MenuItemConnectionEdge';
  /** The node at the end of the collections edge */
  node: MenuItem;
};

export type MenuItemFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  link?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  isNewWindow?: Maybe<QueryFilterBooleanComparator>;
  pageID?: Maybe<QueryFilterIdComparator>;
  menuSetID?: Maybe<QueryFilterIdComparator>;
  page?: Maybe<SiteTreeFilterFields>;
  menuSet?: Maybe<MenuSetFilterFields>;
};

export type MenuItemSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  link?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  isNewWindow?: Maybe<SortDirection>;
  pageID?: Maybe<SortDirection>;
  menuSetID?: Maybe<SortDirection>;
  page?: Maybe<SiteTreeSortFields>;
  menuSet?: Maybe<MenuSetSortFields>;
};

export type MenuSet = DataObject & {
  __typename?: 'MenuSet';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<MenuSetClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  menuItems: MenuItemConnection;
};


export type MenuSetHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuSetTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuSetExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MenuSetLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MenuSetCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MenuSetMenuItemsArgs = {
  filter?: Maybe<MenuItemFilterFields>;
  sort?: Maybe<MenuItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum MenuSetClassNameEnum {
  HeydayMenuManagerMenuSet = 'HeydayMenuManagerMenuSet'
}

export type MenuSetConnection = {
  __typename?: 'MenuSetConnection';
  edges: Array<MenuSetConnectionEdge>;
  nodes: Array<MenuSet>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MenuSetConnectionEdge = {
  __typename?: 'MenuSetConnectionEdge';
  /** The node at the end of the collections edge */
  node: MenuSet;
};

export type MenuSetFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  menuItems?: Maybe<MenuItemFilterFields>;
};

export type MenuSetSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  menuItems?: Maybe<MenuItemSortFields>;
};

export type MultiColumnBlock = DataObject & BaseElementInterface & MultiColumnBlockInterface & {
  __typename?: 'MultiColumnBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: ContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type MultiColumnBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MultiColumnBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MultiColumnBlockItemsArgs = {
  filter?: Maybe<ContentItemFilterFields>;
  sort?: Maybe<ContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MultiColumnBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  items?: Maybe<ContentItemFilterFields>;
};

export type MultiColumnBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: ContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type MultiColumnBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MultiColumnBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type MultiColumnBlockInterfaceItemsArgs = {
  filter?: Maybe<ContentItemFilterFields>;
  sort?: Maybe<ContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MultiColumnBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MultiColumnBlockInterfaceConnection = {
  __typename?: 'MultiColumnBlockInterfaceConnection';
  edges: Array<MultiColumnBlockInterfaceConnectionEdge>;
  nodes: Array<MultiColumnBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type MultiColumnBlockInterfaceConnectionEdge = {
  __typename?: 'MultiColumnBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: MultiColumnBlock;
};

export type MultiColumnBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  items?: Maybe<ContentItemSortFields>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateSiteConfig?: Maybe<SiteConfig>;
};


export type MutationUpdateSiteConfigArgs = {
  input: UpdateSiteConfigInput;
};

export type NewDemoPage = DataObject & SiteTreeInterface & PageInterface & NewDemoPageInterface & {
  __typename?: 'NewDemoPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  formHeading?: Maybe<Scalars['String']>;
  demoScreenshotID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  demoScreenshot?: Maybe<Image>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type NewDemoPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type NewDemoPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type NewDemoPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type NewDemoPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type NewDemoPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  formHeading?: Maybe<QueryFilterStringComparator>;
  demoScreenshotID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  demoScreenshot?: Maybe<ImageFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type NewDemoPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  formHeading?: Maybe<Scalars['String']>;
  demoScreenshotID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  demoScreenshot?: Maybe<Image>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type NewDemoPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type NewDemoPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type NewDemoPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type NewDemoPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type NewDemoPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type NewDemoPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type NewDemoPageInterfaceConnection = {
  __typename?: 'NewDemoPageInterfaceConnection';
  edges: Array<NewDemoPageInterfaceConnectionEdge>;
  nodes: Array<NewDemoPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type NewDemoPageInterfaceConnectionEdge = {
  __typename?: 'NewDemoPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: NewDemoPage;
};

export type NewDemoPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  formHeading?: Maybe<SortDirection>;
  demoScreenshotID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  demoScreenshot?: Maybe<ImageSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type OurWorkBlock = DataObject & BaseElementInterface & OurWorkBlockInterface & {
  __typename?: 'OurWorkBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type OurWorkBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OurWorkBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type OurWorkBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type OurWorkBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OurWorkBlockInterfaceConnection = {
  __typename?: 'OurWorkBlockInterfaceConnection';
  edges: Array<OurWorkBlockInterfaceConnectionEdge>;
  nodes: Array<OurWorkBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type OurWorkBlockInterfaceConnectionEdge = {
  __typename?: 'OurWorkBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: OurWorkBlock;
};

export type OurWorkBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type OurWorkLandingPage = DataObject & SiteTreeInterface & PageInterface & OurWorkLandingPageInterface & {
  __typename?: 'OurWorkLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type OurWorkLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type OurWorkLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type OurWorkLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type OurWorkLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OurWorkLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type OurWorkLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type OurWorkLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type OurWorkLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type OurWorkLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type OurWorkLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type OurWorkLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type OurWorkLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OurWorkLandingPageInterfaceConnection = {
  __typename?: 'OurWorkLandingPageInterfaceConnection';
  edges: Array<OurWorkLandingPageInterfaceConnectionEdge>;
  nodes: Array<OurWorkLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type OurWorkLandingPageInterfaceConnectionEdge = {
  __typename?: 'OurWorkLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: OurWorkLandingPage;
};

export type OurWorkLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type Page = DataObject & SiteTreeInterface & PageInterface & {
  __typename?: 'Page';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<PageVersionConnection>;
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
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


export type PageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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


export type PageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
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

export enum PageCanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers',
  Inherit = 'Inherit'
}

export enum PageCanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers',
  Inherit = 'Inherit'
}

export enum PageClassNameEnum {
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  Page = 'Page',
  SilverStripeComPageTypesCareersLandingPage = 'SilverStripeComPageTypesCareersLandingPage',
  SilverStripeComPageTypesNewDemoPage = 'SilverStripeComPageTypesNewDemoPage',
  SilverStripeComPageTypesOurWorkLandingPage = 'SilverStripeComPageTypesOurWorkLandingPage',
  SilverStripeComPageTypesPricingPage = 'SilverStripeComPageTypesPricingPage',
  SilverStripeComPageTypesResourceLandingPage = 'SilverStripeComPageTypesResourceLandingPage',
  SilverStripeComPageTypesShowcaseLandingPage = 'SilverStripeComPageTypesShowcaseLandingPage',
  SilverStripeComPageTypesShowcasePage = 'SilverStripeComPageTypesShowcasePage',
  SilverStripeComPageTypesTeamLandingPage = 'SilverStripeComPageTypesTeamLandingPage',
  SilverStripeComPageTypesTeamPage = 'SilverStripeComPageTypesTeamPage',
  SilverStripeSharedPageTypesAgencyLandingPage = 'SilverStripeSharedPageTypesAgencyLandingPage',
  SilverStripeSharedPageTypesHomePage = 'SilverStripeSharedPageTypesHomePage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage',
  SilverStripeUserFormsModelUserDefinedForm = 'SilverStripeUserFormsModelUserDefinedForm',
  SilverStripeComPageTypesPartnerLandingPage = 'SilverStripeComPageTypesPartnerLandingPage'
}

export type PageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
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
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<PageVersionConnection>;
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
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


export type PageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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


export type PageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
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
  nodes: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PageInterfaceConnectionEdge = {
  __typename?: 'PageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage;
};

export type PageSortFields = {
  id?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type PageVersion = {
  __typename?: 'PageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
};

export type PageVersionConnection = {
  __typename?: 'PageVersionConnection';
  edges: Array<PageVersionConnectionEdge>;
  nodes?: Maybe<Array<Maybe<PageVersion>>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PageVersionConnectionEdge = {
  __typename?: 'PageVersionConnectionEdge';
  /** The node at the end of the collections edge */
  node: PageVersion;
};

export enum ParentClassEnum {
  SilverStripeComModelsPlatformPlan = 'SilverStripeComModelsPlatformPlan',
  SilverStripeComModelsResource = 'SilverStripeComModelsResource',
  SilverStripeComModelsShowcase = 'SilverStripeComModelsShowcase',
  SilverStripeComModelsTeam = 'SilverStripeComModelsTeam',
  SilverStripeComModelsTeamMember = 'SilverStripeComModelsTeamMember',
  SilverStripeComModelsWorkableJob = 'SilverStripeComModelsWorkableJob',
  SilverStripeSharedModelsAgency = 'SilverStripeSharedModelsAgency',
  SilverStripeSharedModelsContentItem = 'SilverStripeSharedModelsContentItem',
  SilverStripeSharedModelsFeatureColumnItem = 'SilverStripeSharedModelsFeatureColumnItem',
  SilverStripeSharedModelsIconContentItem = 'SilverStripeSharedModelsIconContentItem',
  SilverStripeSharedModelsLogo = 'SilverStripeSharedModelsLogo',
  SilverStripeSharedModelsSocialLink = 'SilverStripeSharedModelsSocialLink',
  SilverStripeSharedModelsTitleContentItem = 'SilverStripeSharedModelsTitleContentItem',
  HeydayMenuManagerMenuItem = 'HeydayMenuManagerMenuItem',
  HeydayMenuManagerMenuSet = 'HeydayMenuManagerMenuSet',
  SilverStripeAssetsFile = 'SilverStripeAssetsFile',
  SilverStripeCronTaskCronTaskStatus = 'SilverStripeCronTaskCronTaskStatus',
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig',
  SilverStripeTaxonomyTaxonomyTerm = 'SilverStripeTaxonomyTaxonomyTerm',
  SilverStripeTaxonomyTaxonomyType = 'SilverStripeTaxonomyTaxonomyType',
  SilverStripeVersionedChangeSet = 'SilverStripeVersionedChangeSet',
  SilverStripeVersionedChangeSetItem = 'SilverStripeVersionedChangeSetItem',
  SilverStripeSnapshotsSnapshot = 'SilverStripeSnapshotsSnapshot',
  SilverStripeSnapshotsSnapshotEvent = 'SilverStripeSnapshotsSnapshotEvent',
  SilverStripeSnapshotsSnapshotItem = 'SilverStripeSnapshotsSnapshotItem',
  SminneeApiKeyMemberApiKey = 'SminneeApiKeyMemberApiKey',
  DnaDesignElementalModelsBaseElement = 'DNADesignElementalModelsBaseElement',
  DnaDesignElementalModelsElementalArea = 'DNADesignElementalModelsElementalArea',
  SheadawsonLinkableModelsEmbeddedObject = 'SheadawsonLinkableModelsEmbeddedObject',
  SheadawsonLinkableModelsLink = 'SheadawsonLinkableModelsLink',
  SilverStripeAssetsShortcodesFileLink = 'SilverStripeAssetsShortcodesFileLink',
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  SilverStripeCmsModelSiteTreeLink = 'SilverStripeCMSModelSiteTreeLink',
  SilverStripeDemoStackerModelDemoSite = 'SilverStripeDemoStackerModelDemoSite',
  SilverStripeSecurityGroup = 'SilverStripeSecurityGroup',
  SilverStripeSecurityLoginAttempt = 'SilverStripeSecurityLoginAttempt',
  SilverStripeSecurityMember = 'SilverStripeSecurityMember',
  SilverStripeSecurityMemberPassword = 'SilverStripeSecurityMemberPassword',
  SilverStripeSecurityPermission = 'SilverStripeSecurityPermission',
  SilverStripeSecurityPermissionRole = 'SilverStripeSecurityPermissionRole',
  SilverStripeSecurityPermissionRoleCode = 'SilverStripeSecurityPermissionRoleCode',
  SilverStripeSecurityRememberLoginHash = 'SilverStripeSecurityRememberLoginHash',
  SilverStripeIntercomModelConversation = 'SilverStripeIntercomModelConversation',
  SilverStripeIntercomModelLead = 'SilverStripeIntercomModelLead',
  SilverStripeIntercomModelTag = 'SilverStripeIntercomModelTag',
  SilverStripeIntercomModelTeam = 'SilverStripeIntercomModelTeam',
  SilverStripeMfaModelRegisteredMethod = 'SilverStripeMFAModelRegisteredMethod',
  SilverStripeRedirectedUrLsModelRedirectedUrl = 'SilverStripeRedirectedURLsModelRedirectedURL',
  SilverStripeHeadlessModelIncomingWebhook = 'SilverStripeHeadlessModelIncomingWebhook',
  SilverStripeHeadlessModelOutgoingWebhook = 'SilverStripeHeadlessModelOutgoingWebhook',
  SilverStripeHeadlessModelPublishEvent = 'SilverStripeHeadlessModelPublishEvent',
  SilverStripeHeadlessModelPublishQueueItem = 'SilverStripeHeadlessModelPublishQueueItem',
  SilverStripeNextJsModelLinkIndex = 'SilverStripeNextJSModelLinkIndex',
  SilverStripeNextJsModelStaticBuild = 'SilverStripeNextJSModelStaticBuild',
  SilverStripeNextJsModelStaticBuildCollector = 'SilverStripeNextJSModelStaticBuildCollector',
  SilverStripeUserFormsModelEditableCustomRule = 'SilverStripeUserFormsModelEditableCustomRule',
  SilverStripeUserFormsModelEditableFormField = 'SilverStripeUserFormsModelEditableFormField',
  SymbioteQueuedJobsDataObjectsQueuedJobDescriptor = 'SymbioteQueuedJobsDataObjectsQueuedJobDescriptor',
  SymbioteQueuedJobsDataObjectsQueuedJobRule = 'SymbioteQueuedJobsDataObjectsQueuedJobRule',
  SilverStripeUserFormsModelEditableFormFieldEditableOption = 'SilverStripeUserFormsModelEditableFormFieldEditableOption',
  SilverStripeUserFormsModelRecipientEmailRecipient = 'SilverStripeUserFormsModelRecipientEmailRecipient',
  SilverStripeUserFormsModelRecipientEmailRecipientCondition = 'SilverStripeUserFormsModelRecipientEmailRecipientCondition',
  SilverStripeUserFormsModelSubmissionSubmittedForm = 'SilverStripeUserFormsModelSubmissionSubmittedForm',
  SilverStripeUserFormsModelSubmissionSubmittedFormField = 'SilverStripeUserFormsModelSubmissionSubmittedFormField',
  SilverStripeComModelsPartner = 'SilverStripeComModelsPartner',
  SilverStripeAssetsFolder = 'SilverStripeAssetsFolder',
  SilverStripeAssetsImage = 'SilverStripeAssetsImage',
  SilverStripeSnapshotsImplicitModification = 'SilverStripeSnapshotsImplicitModification',
  SilverStripeComModelsOurWorkBlock = 'SilverStripeComModelsOurWorkBlock',
  SilverStripeComModelsShowcasesBlock = 'SilverStripeComModelsShowcasesBlock',
  SilverStripeSharedBlocksBlogPostsBlock = 'SilverStripeSharedBlocksBlogPostsBlock',
  SilverStripeSharedBlocksCallToActionBlock = 'SilverStripeSharedBlocksCallToActionBlock',
  SilverStripeSharedBlocksCampaignBlock = 'SilverStripeSharedBlocksCampaignBlock',
  SilverStripeSharedBlocksCaseStudyBlock = 'SilverStripeSharedBlocksCaseStudyBlock',
  SilverStripeSharedBlocksFeatureColumnBlock = 'SilverStripeSharedBlocksFeatureColumnBlock',
  SilverStripeSharedBlocksIconThreeColumnBlock = 'SilverStripeSharedBlocksIconThreeColumnBlock',
  SilverStripeSharedBlocksIframeBlock = 'SilverStripeSharedBlocksIframeBlock',
  SilverStripeSharedBlocksIntroBlock = 'SilverStripeSharedBlocksIntroBlock',
  SilverStripeSharedBlocksLogoBlock = 'SilverStripeSharedBlocksLogoBlock',
  SilverStripeSharedBlocksMediaBlock = 'SilverStripeSharedBlocksMediaBlock',
  SilverStripeSharedBlocksMultiColumnBlock = 'SilverStripeSharedBlocksMultiColumnBlock',
  SilverStripeSharedBlocksQuoteBlock = 'SilverStripeSharedBlocksQuoteBlock',
  SilverStripeSharedBlocksTabBlock = 'SilverStripeSharedBlocksTabBlock',
  DnaDesignElementalModelsElementContent = 'DNADesignElementalModelsElementContent',
  DnaDesignElementalUserFormsModelElementForm = 'DNADesignElementalUserFormsModelElementForm',
  Page = 'Page',
  SilverStripeComPageTypesCareersLandingPage = 'SilverStripeComPageTypesCareersLandingPage',
  SilverStripeComPageTypesNewDemoPage = 'SilverStripeComPageTypesNewDemoPage',
  SilverStripeComPageTypesOurWorkLandingPage = 'SilverStripeComPageTypesOurWorkLandingPage',
  SilverStripeComPageTypesPricingPage = 'SilverStripeComPageTypesPricingPage',
  SilverStripeComPageTypesResourceLandingPage = 'SilverStripeComPageTypesResourceLandingPage',
  SilverStripeComPageTypesShowcaseLandingPage = 'SilverStripeComPageTypesShowcaseLandingPage',
  SilverStripeComPageTypesShowcasePage = 'SilverStripeComPageTypesShowcasePage',
  SilverStripeComPageTypesTeamLandingPage = 'SilverStripeComPageTypesTeamLandingPage',
  SilverStripeComPageTypesTeamPage = 'SilverStripeComPageTypesTeamPage',
  SilverStripeSharedPageTypesAgencyLandingPage = 'SilverStripeSharedPageTypesAgencyLandingPage',
  SilverStripeSharedPageTypesHomePage = 'SilverStripeSharedPageTypesHomePage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage',
  SilverStripeUserFormsModelUserDefinedForm = 'SilverStripeUserFormsModelUserDefinedForm',
  SilverStripeComPageTypesPartnerLandingPage = 'SilverStripeComPageTypesPartnerLandingPage',
  SilverStripeNextJsModelRecentPagesCollector = 'SilverStripeNextJSModelRecentPagesCollector',
  SilverStripeNextJsModelSectionCollector = 'SilverStripeNextJSModelSectionCollector',
  SilverStripeSpamProtectionEditableSpamProtectionField = 'SilverStripeSpamProtectionEditableSpamProtectionField',
  SilverStripeUserFormsModelEditableFormFieldEditableCheckbox = 'SilverStripeUserFormsModelEditableFormFieldEditableCheckbox',
  SilverStripeUserFormsModelEditableFormFieldEditableCountryDropdownField = 'SilverStripeUserFormsModelEditableFormFieldEditableCountryDropdownField',
  SilverStripeUserFormsModelEditableFormFieldEditableDateField = 'SilverStripeUserFormsModelEditableFormFieldEditableDateField',
  SilverStripeUserFormsModelEditableFormFieldEditableEmailField = 'SilverStripeUserFormsModelEditableFormFieldEditableEmailField',
  SilverStripeUserFormsModelEditableFormFieldEditableFieldGroup = 'SilverStripeUserFormsModelEditableFormFieldEditableFieldGroup',
  SilverStripeUserFormsModelEditableFormFieldEditableFieldGroupEnd = 'SilverStripeUserFormsModelEditableFormFieldEditableFieldGroupEnd',
  SilverStripeUserFormsModelEditableFormFieldEditableFileField = 'SilverStripeUserFormsModelEditableFormFieldEditableFileField',
  SilverStripeUserFormsModelEditableFormFieldEditableFormHeading = 'SilverStripeUserFormsModelEditableFormFieldEditableFormHeading',
  SilverStripeUserFormsModelEditableFormFieldEditableFormStep = 'SilverStripeUserFormsModelEditableFormFieldEditableFormStep',
  SilverStripeUserFormsModelEditableFormFieldEditableLiteralField = 'SilverStripeUserFormsModelEditableFormFieldEditableLiteralField',
  SilverStripeUserFormsModelEditableFormFieldEditableMemberListField = 'SilverStripeUserFormsModelEditableFormFieldEditableMemberListField',
  SilverStripeUserFormsModelEditableFormFieldEditableMultipleOptionField = 'SilverStripeUserFormsModelEditableFormFieldEditableMultipleOptionField',
  SilverStripeUserFormsModelEditableFormFieldEditableNumericField = 'SilverStripeUserFormsModelEditableFormFieldEditableNumericField',
  SilverStripeUserFormsModelEditableFormFieldEditableTextField = 'SilverStripeUserFormsModelEditableFormFieldEditableTextField',
  SilverStripeUserFormsModelEditableFormFieldEditableCheckboxGroupField = 'SilverStripeUserFormsModelEditableFormFieldEditableCheckboxGroupField',
  SilverStripeUserFormsModelEditableFormFieldEditableDropdown = 'SilverStripeUserFormsModelEditableFormFieldEditableDropdown',
  SilverStripeUserFormsModelEditableFormFieldEditableRadioField = 'SilverStripeUserFormsModelEditableFormFieldEditableRadioField',
  SilverStripeUserFormsModelSubmissionSubmittedFileField = 'SilverStripeUserFormsModelSubmissionSubmittedFileField'
}

export type Partner = DataObject & AgencyInterface & PartnerInterface & {
  __typename?: 'Partner';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PartnerClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  moreContactInformation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailPublic?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  isPartner?: Maybe<Scalars['Boolean']>;
  logoID: Scalars['ID'];
  imageID: Scalars['ID'];
  parentID: Scalars['ID'];
  showcaseURL?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  image?: Maybe<Image>;
  parent?: Maybe<PartnerLandingPage>;
  services: TaxonomyTermConnection;
  link: Scalars['String'];
};


export type PartnerHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerMoreContactInformationArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerServicesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum PartnerClassNameEnum {
  SilverStripeSharedModelsAgency = 'SilverStripeSharedModelsAgency',
  SilverStripeComModelsPartner = 'SilverStripeComModelsPartner'
}

export type PartnerFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  description?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  street?: Maybe<QueryFilterStringComparator>;
  city?: Maybe<QueryFilterStringComparator>;
  region?: Maybe<QueryFilterStringComparator>;
  country?: Maybe<QueryFilterStringComparator>;
  postCode?: Maybe<QueryFilterStringComparator>;
  phone?: Maybe<QueryFilterStringComparator>;
  moreContactInformation?: Maybe<QueryFilterStringComparator>;
  email?: Maybe<QueryFilterStringComparator>;
  isEmailPublic?: Maybe<QueryFilterBooleanComparator>;
  url?: Maybe<QueryFilterStringComparator>;
  isPartner?: Maybe<QueryFilterBooleanComparator>;
  logoID?: Maybe<QueryFilterIdComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showcaseURL?: Maybe<QueryFilterStringComparator>;
  logo?: Maybe<ImageFilterFields>;
  image?: Maybe<ImageFilterFields>;
  parent?: Maybe<PartnerLandingPageFilterFields>;
  services?: Maybe<TaxonomyTermFilterFields>;
};

export type PartnerInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PartnerClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  moreContactInformation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailPublic?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  isPartner?: Maybe<Scalars['Boolean']>;
  logoID: Scalars['ID'];
  imageID: Scalars['ID'];
  parentID: Scalars['ID'];
  showcaseURL?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  image?: Maybe<Image>;
  parent?: Maybe<PartnerLandingPage>;
  services: TaxonomyTermConnection;
  link: Scalars['String'];
};


export type PartnerInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerInterfaceDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerInterfaceMoreContactInformationArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerInterfaceServicesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type PartnerInterfaceConnection = {
  __typename?: 'PartnerInterfaceConnection';
  edges: Array<PartnerInterfaceConnectionEdge>;
  nodes: Array<Partner>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PartnerInterfaceConnectionEdge = {
  __typename?: 'PartnerInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Partner;
};

export type PartnerLandingPage = DataObject & SiteTreeInterface & PageInterface & AgencyLandingPageInterface & PartnerLandingPageInterface & {
  __typename?: 'PartnerLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type PartnerLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PartnerLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PartnerLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type PartnerLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type PartnerLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PartnerLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PartnerLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PartnerLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PartnerLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PartnerLandingPageInterfaceConnection = {
  __typename?: 'PartnerLandingPageInterfaceConnection';
  edges: Array<PartnerLandingPageInterfaceConnectionEdge>;
  nodes: Array<PartnerLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PartnerLandingPageInterfaceConnectionEdge = {
  __typename?: 'PartnerLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: PartnerLandingPage;
};

export type PartnerLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type PartnerSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  street?: Maybe<SortDirection>;
  city?: Maybe<SortDirection>;
  region?: Maybe<SortDirection>;
  country?: Maybe<SortDirection>;
  postCode?: Maybe<SortDirection>;
  phone?: Maybe<SortDirection>;
  moreContactInformation?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  isEmailPublic?: Maybe<SortDirection>;
  url?: Maybe<SortDirection>;
  isPartner?: Maybe<SortDirection>;
  logoID?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  showcaseURL?: Maybe<SortDirection>;
  logo?: Maybe<ImageSortFields>;
  image?: Maybe<ImageSortFields>;
  parent?: Maybe<PartnerLandingPageSortFields>;
  services?: Maybe<TaxonomyTermSortFields>;
};

export type PlatformPlan = DataObject & {
  __typename?: 'PlatformPlan';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PlatformPlanClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  isOpen?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  priceNZD?: Maybe<Scalars['Float']>;
  priceUSD?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Int']>;
  imageID: Scalars['ID'];
  planLinkID: Scalars['ID'];
  parentID: Scalars['ID'];
  image?: Maybe<File | Folder | Image>;
  planLink?: Maybe<Link>;
  parent?: Maybe<PricingPage>;
};


export type PlatformPlanHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PlatformPlanTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PlatformPlanExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PlatformPlanLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PlatformPlanCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PlatformPlanContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PlatformPlanPriceNzdArgs = {
  format?: Maybe<DbDecimalFormattingOptions>;
};


export type PlatformPlanPriceUsdArgs = {
  format?: Maybe<DbDecimalFormattingOptions>;
};

export enum PlatformPlanClassNameEnum {
  SilverStripeComModelsPlatformPlan = 'SilverStripeComModelsPlatformPlan'
}

export type PlatformPlanConnection = {
  __typename?: 'PlatformPlanConnection';
  edges: Array<PlatformPlanConnectionEdge>;
  nodes: Array<PlatformPlan>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PlatformPlanConnectionEdge = {
  __typename?: 'PlatformPlanConnectionEdge';
  /** The node at the end of the collections edge */
  node: PlatformPlan;
};

export type PlatformPlanFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  subtitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  isOpen?: Maybe<QueryFilterBooleanComparator>;
  isFeatured?: Maybe<QueryFilterBooleanComparator>;
  priceNZD?: Maybe<QueryFilterFloatComparator>;
  priceUSD?: Maybe<QueryFilterFloatComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  planLinkID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  image?: Maybe<FileFilterFields>;
  planLink?: Maybe<LinkFilterFields>;
  parent?: Maybe<PricingPageFilterFields>;
};

export type PlatformPlanSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  subtitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  isOpen?: Maybe<SortDirection>;
  isFeatured?: Maybe<SortDirection>;
  priceNZD?: Maybe<SortDirection>;
  priceUSD?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  planLinkID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  image?: Maybe<FileSortFields>;
  planLink?: Maybe<LinkSortFields>;
  parent?: Maybe<PricingPageSortFields>;
};

export type PricingPage = DataObject & SiteTreeInterface & PageInterface & PricingPageInterface & {
  __typename?: 'PricingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  platformPlans: PlatformPlanConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type PricingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PricingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PricingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPagePlatformPlansArgs = {
  filter?: Maybe<PlatformPlanFilterFields>;
  sort?: Maybe<PlatformPlanSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PricingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PricingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  platformPlans?: Maybe<PlatformPlanFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type PricingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  platformPlans: PlatformPlanConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type PricingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PricingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type PricingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PricingPageInterfacePlatformPlansArgs = {
  filter?: Maybe<PlatformPlanFilterFields>;
  sort?: Maybe<PlatformPlanSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PricingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PricingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PricingPageInterfaceConnection = {
  __typename?: 'PricingPageInterfaceConnection';
  edges: Array<PricingPageInterfaceConnectionEdge>;
  nodes: Array<PricingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PricingPageInterfaceConnectionEdge = {
  __typename?: 'PricingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: PricingPage;
};

export type PricingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  platformPlans?: Maybe<PlatformPlanSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type Query = {
  __typename?: 'Query';
  recentBlogPosts: Array<RecentBlogPost>;
  /** The list of link/type tuples that should be added to the static build */
  staticBuild: StaticBuildPayload;
  typesForLinks: Array<TypeResolution>;
  generateFragments: Array<GeneratedFragment>;
  readSiteConfigs: SiteConfigConnection;
  readOneSiteConfig?: Maybe<SiteConfig>;
  readLinks: LinkConnection;
  readOneLink?: Maybe<Link>;
  readSocialLinks: SocialLinkConnection;
  readOneSocialLink?: Maybe<SocialLink>;
  readBaseElements: BaseElementInterfaceConnection;
  readOneBaseElement?: Maybe<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
  readPages: PageInterfaceConnection;
  readOnePage?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  readShowcasePages: ShowcasePageInterfaceConnection;
  readOneShowcasePage?: Maybe<ShowcasePage>;
  readImages: ImageInterfaceConnection;
  readOneImage?: Maybe<Image>;
  readMembers: MemberConnection;
  readOneMember?: Maybe<Member>;
  readElementalAreas: ElementalAreaConnection;
  readOneElementalArea?: Maybe<ElementalArea>;
  readElementContents: ElementContentInterfaceConnection;
  readOneElementContent?: Maybe<ElementContent>;
  readMenuItems: MenuItemConnection;
  readOneMenuItem?: Maybe<MenuItem>;
  readSiteTrees: SiteTreeInterfaceConnection;
  readOneSiteTree?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  readMenuSets: MenuSetConnection;
  readOneMenuSet?: Maybe<MenuSet>;
  readEmbeddedObjects: EmbeddedObjectConnection;
  readOneEmbeddedObject?: Maybe<EmbeddedObject>;
  readFiles: FileInterfaceConnection;
  readOneFile?: Maybe<File | Folder | Image>;
  readFileLinks: FileLinkConnection;
  readOneFileLink?: Maybe<FileLink>;
  readFolders: FolderInterfaceConnection;
  readOneFolder?: Maybe<Folder>;
  readRedirectorPages: RedirectorPageInterfaceConnection;
  readOneRedirectorPage?: Maybe<RedirectorPage>;
  readSiteTreeLinks: SiteTreeLinkConnection;
  readOneSiteTreeLink?: Maybe<SiteTreeLink>;
  readVirtualPages: VirtualPageInterfaceConnection;
  readOneVirtualPage?: Maybe<VirtualPage>;
  readOurWorkBlocks: OurWorkBlockInterfaceConnection;
  readOneOurWorkBlock?: Maybe<OurWorkBlock>;
  readPartners: PartnerInterfaceConnection;
  readOnePartner?: Maybe<Partner>;
  readPartnerLandingPages: PartnerLandingPageInterfaceConnection;
  readOnePartnerLandingPage?: Maybe<PartnerLandingPage>;
  readTaxonomyTerms: TaxonomyTermConnection;
  readOneTaxonomyTerm?: Maybe<TaxonomyTerm>;
  readPlatformPlans: PlatformPlanConnection;
  readOnePlatformPlan?: Maybe<PlatformPlan>;
  readPricingPages: PricingPageInterfaceConnection;
  readOnePricingPage?: Maybe<PricingPage>;
  readResources: ResourceConnection;
  readOneResource?: Maybe<Resource>;
  readResourceLandingPages: ResourceLandingPageInterfaceConnection;
  readOneResourceLandingPage?: Maybe<ResourceLandingPage>;
  readShowcases: ShowcaseConnection;
  readOneShowcase?: Maybe<Showcase>;
  readShowcaseLandingPages: ShowcaseLandingPageInterfaceConnection;
  readOneShowcaseLandingPage?: Maybe<ShowcaseLandingPage>;
  readShowcasesBlocks: ShowcasesBlockInterfaceConnection;
  readOneShowcasesBlock?: Maybe<ShowcasesBlock>;
  readTeams: TeamConnection;
  readOneTeam?: Maybe<Team>;
  readTeamMembers: TeamMemberConnection;
  readOneTeamMember?: Maybe<TeamMember>;
  readWorkableJobs: WorkableJobConnection;
  readOneWorkableJob?: Maybe<WorkableJob>;
  readCareersLandingPages: CareersLandingPageInterfaceConnection;
  readOneCareersLandingPage?: Maybe<CareersLandingPage>;
  readNewDemoPages: NewDemoPageInterfaceConnection;
  readOneNewDemoPage?: Maybe<NewDemoPage>;
  readOurWorkLandingPages: OurWorkLandingPageInterfaceConnection;
  readOneOurWorkLandingPage?: Maybe<OurWorkLandingPage>;
  readTeamLandingPages: TeamLandingPageInterfaceConnection;
  readOneTeamLandingPage?: Maybe<TeamLandingPage>;
  readTeamPages: TeamPageInterfaceConnection;
  readOneTeamPage?: Maybe<TeamPage>;
  readBlogPostsBlocks: BlogPostsBlockInterfaceConnection;
  readOneBlogPostsBlock?: Maybe<BlogPostsBlock>;
  readCallToActionBlocks: CallToActionBlockInterfaceConnection;
  readOneCallToActionBlock?: Maybe<CallToActionBlock>;
  readCampaignBlocks: CampaignBlockInterfaceConnection;
  readOneCampaignBlock?: Maybe<CampaignBlock>;
  readCaseStudyBlocks: CaseStudyBlockInterfaceConnection;
  readOneCaseStudyBlock?: Maybe<CaseStudyBlock>;
  readFeatureColumnBlocks: FeatureColumnBlockInterfaceConnection;
  readOneFeatureColumnBlock?: Maybe<FeatureColumnBlock>;
  readFeatureColumnItems: FeatureColumnItemConnection;
  readOneFeatureColumnItem?: Maybe<FeatureColumnItem>;
  readIconThreeColumnBlocks: IconThreeColumnBlockInterfaceConnection;
  readOneIconThreeColumnBlock?: Maybe<IconThreeColumnBlock>;
  readIconContentItems: IconContentItemConnection;
  readOneIconContentItem?: Maybe<IconContentItem>;
  readIframeBlocks: IframeBlockInterfaceConnection;
  readOneIframeBlock?: Maybe<IframeBlock>;
  readIntroBlocks: IntroBlockInterfaceConnection;
  readOneIntroBlock?: Maybe<IntroBlock>;
  readLogoBlocks: LogoBlockInterfaceConnection;
  readOneLogoBlock?: Maybe<LogoBlock>;
  readLogos: LogoConnection;
  readOneLogo?: Maybe<Logo>;
  readMediaBlocks: MediaBlockInterfaceConnection;
  readOneMediaBlock?: Maybe<MediaBlock>;
  readMultiColumnBlocks: MultiColumnBlockInterfaceConnection;
  readOneMultiColumnBlock?: Maybe<MultiColumnBlock>;
  readContentItems: ContentItemConnection;
  readOneContentItem?: Maybe<ContentItem>;
  readQuoteBlocks: QuoteBlockInterfaceConnection;
  readOneQuoteBlock?: Maybe<QuoteBlock>;
  readTabBlocks: TabBlockInterfaceConnection;
  readOneTabBlock?: Maybe<TabBlock>;
  readTitleContentItems: TitleContentItemConnection;
  readOneTitleContentItem?: Maybe<TitleContentItem>;
  readAgencies: AgencyInterfaceConnection;
  readOneAgency?: Maybe<Agency | Partner>;
  readAgencyLandingPages: AgencyLandingPageInterfaceConnection;
  readOneAgencyLandingPage?: Maybe<AgencyLandingPage | PartnerLandingPage>;
  readHomePages: HomePageInterfaceConnection;
  readOneHomePage?: Maybe<HomePage>;
  readTaxonomyTypes: TaxonomyTypeConnection;
  readOneTaxonomyType?: Maybe<TaxonomyType>;
};


export type QueryTypesForLinksArgs = {
  links: Array<Scalars['String']>;
};


export type QueryGenerateFragmentsArgs = {
  baseClass: Scalars['String'];
  includeBase?: Maybe<Scalars['Boolean']>;
  baseFields?: Maybe<Array<Scalars['String']>>;
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


export type QueryReadLinksArgs = {
  filter?: Maybe<LinkFilterFields>;
  sort?: Maybe<LinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneLinkArgs = {
  filter?: Maybe<LinkFilterFields>;
  sort?: Maybe<LinkSortFields>;
};


export type QueryReadSocialLinksArgs = {
  filter?: Maybe<SocialLinkFilterFields>;
  sort?: Maybe<SocialLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneSocialLinkArgs = {
  filter?: Maybe<SocialLinkFilterFields>;
  sort?: Maybe<SocialLinkSortFields>;
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


export type QueryReadShowcasePagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcasePageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<ShowcasePageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneShowcasePageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcasePageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<ShowcasePageSortFields>;
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


export type QueryReadMembersArgs = {
  filter?: Maybe<MemberFilterFields>;
  sort?: Maybe<MemberSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneMemberArgs = {
  filter?: Maybe<MemberFilterFields>;
  sort?: Maybe<MemberSortFields>;
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


export type QueryReadMenuItemsArgs = {
  filter?: Maybe<MenuItemFilterFields>;
  sort?: Maybe<MenuItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneMenuItemArgs = {
  filter?: Maybe<MenuItemFilterFields>;
  sort?: Maybe<MenuItemSortFields>;
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


export type QueryReadMenuSetsArgs = {
  filter?: Maybe<MenuSetFilterFields>;
  sort?: Maybe<MenuSetSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneMenuSetArgs = {
  filter?: Maybe<MenuSetFilterFields>;
  sort?: Maybe<MenuSetSortFields>;
};


export type QueryReadEmbeddedObjectsArgs = {
  filter?: Maybe<EmbeddedObjectFilterFields>;
  sort?: Maybe<EmbeddedObjectSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneEmbeddedObjectArgs = {
  filter?: Maybe<EmbeddedObjectFilterFields>;
  sort?: Maybe<EmbeddedObjectSortFields>;
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


export type QueryReadRedirectorPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<RedirectorPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<RedirectorPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneRedirectorPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<RedirectorPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<RedirectorPageSortFields>;
};


export type QueryReadSiteTreeLinksArgs = {
  filter?: Maybe<SiteTreeLinkFilterFields>;
  sort?: Maybe<SiteTreeLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneSiteTreeLinkArgs = {
  filter?: Maybe<SiteTreeLinkFilterFields>;
  sort?: Maybe<SiteTreeLinkSortFields>;
};


export type QueryReadVirtualPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<VirtualPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<VirtualPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneVirtualPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<VirtualPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<VirtualPageSortFields>;
};


export type QueryReadOurWorkBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<OurWorkBlockFilterFields>;
  sort?: Maybe<OurWorkBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneOurWorkBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<OurWorkBlockFilterFields>;
  sort?: Maybe<OurWorkBlockSortFields>;
};


export type QueryReadPartnersArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PartnerFilterFields>;
  sort?: Maybe<PartnerSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePartnerArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PartnerFilterFields>;
  sort?: Maybe<PartnerSortFields>;
};


export type QueryReadPartnerLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PartnerLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<PartnerLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePartnerLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PartnerLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<PartnerLandingPageSortFields>;
};


export type QueryReadTaxonomyTermsArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTaxonomyTermArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
};


export type QueryReadPlatformPlansArgs = {
  filter?: Maybe<PlatformPlanFilterFields>;
  sort?: Maybe<PlatformPlanSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePlatformPlanArgs = {
  filter?: Maybe<PlatformPlanFilterFields>;
  sort?: Maybe<PlatformPlanSortFields>;
};


export type QueryReadPricingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PricingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<PricingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePricingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PricingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<PricingPageSortFields>;
};


export type QueryReadResourcesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ResourceFilterFields>;
  sort?: Maybe<ResourceSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneResourceArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ResourceFilterFields>;
  sort?: Maybe<ResourceSortFields>;
};


export type QueryReadResourceLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ResourceLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<ResourceLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneResourceLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ResourceLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<ResourceLandingPageSortFields>;
};


export type QueryReadShowcasesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcaseFilterFields>;
  sort?: Maybe<ShowcaseSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneShowcaseArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcaseFilterFields>;
  sort?: Maybe<ShowcaseSortFields>;
};


export type QueryReadShowcaseLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcaseLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<ShowcaseLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneShowcaseLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcaseLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<ShowcaseLandingPageSortFields>;
};


export type QueryReadShowcasesBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcasesBlockFilterFields>;
  sort?: Maybe<ShowcasesBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneShowcasesBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<ShowcasesBlockFilterFields>;
  sort?: Maybe<ShowcasesBlockSortFields>;
};


export type QueryReadTeamsArgs = {
  filter?: Maybe<TeamFilterFields>;
  sort?: Maybe<TeamSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTeamArgs = {
  filter?: Maybe<TeamFilterFields>;
  sort?: Maybe<TeamSortFields>;
};


export type QueryReadTeamMembersArgs = {
  filter?: Maybe<TeamMemberFilterFields>;
  sort?: Maybe<TeamMemberSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTeamMemberArgs = {
  filter?: Maybe<TeamMemberFilterFields>;
  sort?: Maybe<TeamMemberSortFields>;
};


export type QueryReadWorkableJobsArgs = {
  filter?: Maybe<WorkableJobFilterFields>;
  sort?: Maybe<WorkableJobSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneWorkableJobArgs = {
  filter?: Maybe<WorkableJobFilterFields>;
  sort?: Maybe<WorkableJobSortFields>;
};


export type QueryReadCareersLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CareersLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<CareersLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneCareersLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CareersLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<CareersLandingPageSortFields>;
};


export type QueryReadNewDemoPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<NewDemoPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<NewDemoPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneNewDemoPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<NewDemoPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<NewDemoPageSortFields>;
};


export type QueryReadOurWorkLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<OurWorkLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<OurWorkLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneOurWorkLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<OurWorkLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<OurWorkLandingPageSortFields>;
};


export type QueryReadTeamLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TeamLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<TeamLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTeamLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TeamLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<TeamLandingPageSortFields>;
};


export type QueryReadTeamPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TeamPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<TeamPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTeamPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TeamPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<TeamPageSortFields>;
};


export type QueryReadBlogPostsBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<BlogPostsBlockFilterFields>;
  sort?: Maybe<BlogPostsBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneBlogPostsBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<BlogPostsBlockFilterFields>;
  sort?: Maybe<BlogPostsBlockSortFields>;
};


export type QueryReadCallToActionBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CallToActionBlockFilterFields>;
  sort?: Maybe<CallToActionBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneCallToActionBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CallToActionBlockFilterFields>;
  sort?: Maybe<CallToActionBlockSortFields>;
};


export type QueryReadCampaignBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CampaignBlockFilterFields>;
  sort?: Maybe<CampaignBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneCampaignBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CampaignBlockFilterFields>;
  sort?: Maybe<CampaignBlockSortFields>;
};


export type QueryReadCaseStudyBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CaseStudyBlockFilterFields>;
  sort?: Maybe<CaseStudyBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneCaseStudyBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<CaseStudyBlockFilterFields>;
  sort?: Maybe<CaseStudyBlockSortFields>;
};


export type QueryReadFeatureColumnBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FeatureColumnBlockFilterFields>;
  sort?: Maybe<FeatureColumnBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneFeatureColumnBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<FeatureColumnBlockFilterFields>;
  sort?: Maybe<FeatureColumnBlockSortFields>;
};


export type QueryReadFeatureColumnItemsArgs = {
  filter?: Maybe<FeatureColumnItemFilterFields>;
  sort?: Maybe<FeatureColumnItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneFeatureColumnItemArgs = {
  filter?: Maybe<FeatureColumnItemFilterFields>;
  sort?: Maybe<FeatureColumnItemSortFields>;
};


export type QueryReadIconThreeColumnBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IconThreeColumnBlockFilterFields>;
  sort?: Maybe<IconThreeColumnBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneIconThreeColumnBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IconThreeColumnBlockFilterFields>;
  sort?: Maybe<IconThreeColumnBlockSortFields>;
};


export type QueryReadIconContentItemsArgs = {
  filter?: Maybe<IconContentItemFilterFields>;
  sort?: Maybe<IconContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneIconContentItemArgs = {
  filter?: Maybe<IconContentItemFilterFields>;
  sort?: Maybe<IconContentItemSortFields>;
};


export type QueryReadIframeBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IframeBlockFilterFields>;
  sort?: Maybe<IframeBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneIframeBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IframeBlockFilterFields>;
  sort?: Maybe<IframeBlockSortFields>;
};


export type QueryReadIntroBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IntroBlockFilterFields>;
  sort?: Maybe<IntroBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneIntroBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<IntroBlockFilterFields>;
  sort?: Maybe<IntroBlockSortFields>;
};


export type QueryReadLogoBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<LogoBlockFilterFields>;
  sort?: Maybe<LogoBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneLogoBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<LogoBlockFilterFields>;
  sort?: Maybe<LogoBlockSortFields>;
};


export type QueryReadLogosArgs = {
  filter?: Maybe<LogoFilterFields>;
  sort?: Maybe<LogoSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneLogoArgs = {
  filter?: Maybe<LogoFilterFields>;
  sort?: Maybe<LogoSortFields>;
};


export type QueryReadMediaBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<MediaBlockFilterFields>;
  sort?: Maybe<MediaBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneMediaBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<MediaBlockFilterFields>;
  sort?: Maybe<MediaBlockSortFields>;
};


export type QueryReadMultiColumnBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<MultiColumnBlockFilterFields>;
  sort?: Maybe<MultiColumnBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneMultiColumnBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<MultiColumnBlockFilterFields>;
  sort?: Maybe<MultiColumnBlockSortFields>;
};


export type QueryReadContentItemsArgs = {
  filter?: Maybe<ContentItemFilterFields>;
  sort?: Maybe<ContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneContentItemArgs = {
  filter?: Maybe<ContentItemFilterFields>;
  sort?: Maybe<ContentItemSortFields>;
};


export type QueryReadQuoteBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<QuoteBlockFilterFields>;
  sort?: Maybe<QuoteBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneQuoteBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<QuoteBlockFilterFields>;
  sort?: Maybe<QuoteBlockSortFields>;
};


export type QueryReadTabBlocksArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TabBlockFilterFields>;
  sort?: Maybe<TabBlockSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTabBlockArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<TabBlockFilterFields>;
  sort?: Maybe<TabBlockSortFields>;
};


export type QueryReadTitleContentItemsArgs = {
  filter?: Maybe<TitleContentItemFilterFields>;
  sort?: Maybe<TitleContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTitleContentItemArgs = {
  filter?: Maybe<TitleContentItemFilterFields>;
  sort?: Maybe<TitleContentItemSortFields>;
};


export type QueryReadAgenciesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<AgencyFilterFields>;
  sort?: Maybe<AgencySortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneAgencyArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<AgencyFilterFields>;
  sort?: Maybe<AgencySortFields>;
};


export type QueryReadAgencyLandingPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<AgencyLandingPageFilterFields>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sort?: Maybe<AgencyLandingPageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneAgencyLandingPageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<AgencyLandingPageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<AgencyLandingPageSortFields>;
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


export type QueryReadTaxonomyTypesArgs = {
  filter?: Maybe<TaxonomyTypeFilterFields>;
  sort?: Maybe<TaxonomyTypeSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOneTaxonomyTypeArgs = {
  filter?: Maybe<TaxonomyTypeFilterFields>;
  sort?: Maybe<TaxonomyTypeSortFields>;
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

export type QueryFilterFloatComparator = {
  contains?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  endswith?: Maybe<Scalars['Float']>;
  startswith?: Maybe<Scalars['Float']>;
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

export type QuoteBlock = DataObject & BaseElementInterface & QuoteBlockInterface & {
  __typename?: 'QuoteBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  quote?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
  byDetails?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type QuoteBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type QuoteBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type QuoteBlockQuoteArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuoteBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  quote?: Maybe<QueryFilterStringComparator>;
  by?: Maybe<QueryFilterStringComparator>;
  byDetails?: Maybe<QueryFilterStringComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type QuoteBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  quote?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
  byDetails?: Maybe<Scalars['String']>;
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type QuoteBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type QuoteBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type QuoteBlockInterfaceQuoteArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuoteBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuoteBlockInterfaceConnection = {
  __typename?: 'QuoteBlockInterfaceConnection';
  edges: Array<QuoteBlockInterfaceConnectionEdge>;
  nodes: Array<QuoteBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type QuoteBlockInterfaceConnectionEdge = {
  __typename?: 'QuoteBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: QuoteBlock;
};

export type QuoteBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  quote?: Maybe<SortDirection>;
  by?: Maybe<SortDirection>;
  byDetails?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type RecentBlogPost = {
  __typename?: 'RecentBlogPost';
  postTitle: Scalars['String'];
  postedAt: Scalars['String'];
  postSummary: Scalars['String'];
  postURL: Scalars['String'];
  postImageUrl?: Maybe<Scalars['String']>;
};

export enum RedirectionTypeEnum {
  Internal = 'Internal',
  External = 'External'
}

export type RedirectorPage = DataObject & SiteTreeInterface & PageInterface & RedirectorPageInterface & {
  __typename?: 'RedirectorPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  redirectionType?: Maybe<RedirectionTypeEnum>;
  externalURL?: Maybe<Scalars['String']>;
  linkToID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  linkTo?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type RedirectorPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type RedirectorPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type RedirectorPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type RedirectorPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type RedirectorPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type RedirectorPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RedirectorPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  externalURL?: Maybe<QueryFilterStringComparator>;
  linkToID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  linkTo?: Maybe<SiteTreeFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type RedirectorPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  redirectionType?: Maybe<RedirectionTypeEnum>;
  externalURL?: Maybe<Scalars['String']>;
  linkToID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  linkTo?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type RedirectorPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type RedirectorPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type RedirectorPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type RedirectorPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type RedirectorPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type RedirectorPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RedirectorPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RedirectorPageInterfaceConnection = {
  __typename?: 'RedirectorPageInterfaceConnection';
  edges: Array<RedirectorPageInterfaceConnectionEdge>;
  nodes: Array<RedirectorPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type RedirectorPageInterfaceConnectionEdge = {
  __typename?: 'RedirectorPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: RedirectorPage;
};

export type RedirectorPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  externalURL?: Maybe<SortDirection>;
  linkToID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  linkTo?: Maybe<SiteTreeSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type RegisteredMethod = DataObject & {
  __typename?: 'RegisteredMethod';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type RegisteredMethodHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RegisteredMethodTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RegisteredMethodExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type RegisteredMethodConnection = {
  __typename?: 'RegisteredMethodConnection';
  edges: Array<RegisteredMethodConnectionEdge>;
  nodes: Array<RegisteredMethod>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type RegisteredMethodConnectionEdge = {
  __typename?: 'RegisteredMethodConnectionEdge';
  /** The node at the end of the collections edge */
  node: RegisteredMethod;
};

export type RegisteredMethodFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type RegisteredMethodSortFields = {
  id?: Maybe<SortDirection>;
};

export type RememberLoginHash = DataObject & {
  __typename?: 'RememberLoginHash';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type RememberLoginHashHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RememberLoginHashTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type RememberLoginHashExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type RememberLoginHashConnection = {
  __typename?: 'RememberLoginHashConnection';
  edges: Array<RememberLoginHashConnectionEdge>;
  nodes: Array<RememberLoginHash>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type RememberLoginHashConnectionEdge = {
  __typename?: 'RememberLoginHashConnectionEdge';
  /** The node at the end of the collections edge */
  node: RememberLoginHash;
};

export type RememberLoginHashFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type RememberLoginHashSortFields = {
  id?: Maybe<SortDirection>;
};

export type Resource = DataObject & {
  __typename?: 'Resource';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ResourceClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  categoryID: Scalars['ID'];
  typeID: Scalars['ID'];
  imageID: Scalars['ID'];
  thumbnailID: Scalars['ID'];
  parentID: Scalars['ID'];
  category?: Maybe<TaxonomyTerm>;
  type?: Maybe<TaxonomyTerm>;
  image?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
  parent?: Maybe<ResourceLandingPage>;
  link: Scalars['String'];
};


export type ResourceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceSummaryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum ResourceClassNameEnum {
  SilverStripeComModelsResource = 'SilverStripeComModelsResource'
}

export type ResourceConnection = {
  __typename?: 'ResourceConnection';
  edges: Array<ResourceConnectionEdge>;
  nodes: Array<Resource>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ResourceConnectionEdge = {
  __typename?: 'ResourceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Resource;
};

export type ResourceFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  summary?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  categoryID?: Maybe<QueryFilterIdComparator>;
  typeID?: Maybe<QueryFilterIdComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  thumbnailID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  category?: Maybe<TaxonomyTermFilterFields>;
  type?: Maybe<TaxonomyTermFilterFields>;
  image?: Maybe<ImageFilterFields>;
  thumbnail?: Maybe<ImageFilterFields>;
  parent?: Maybe<ResourceLandingPageFilterFields>;
};

export type ResourceLandingPage = DataObject & SiteTreeInterface & PageInterface & ResourceLandingPageInterface & {
  __typename?: 'ResourceLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  featuredID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  featured?: Maybe<Resource>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type ResourceLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ResourceLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ResourceLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  intro?: Maybe<QueryFilterStringComparator>;
  featuredID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  featured?: Maybe<ResourceFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type ResourceLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  featuredID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  featured?: Maybe<Resource>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type ResourceLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ResourceLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceIntroArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ResourceLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ResourceLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ResourceLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ResourceLandingPageInterfaceConnection = {
  __typename?: 'ResourceLandingPageInterfaceConnection';
  edges: Array<ResourceLandingPageInterfaceConnectionEdge>;
  nodes: Array<ResourceLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ResourceLandingPageInterfaceConnectionEdge = {
  __typename?: 'ResourceLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ResourceLandingPage;
};

export type ResourceLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  intro?: Maybe<SortDirection>;
  featuredID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  featured?: Maybe<ResourceSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type ResourceSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  summary?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  categoryID?: Maybe<SortDirection>;
  typeID?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  thumbnailID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  category?: Maybe<TaxonomyTermSortFields>;
  type?: Maybe<TaxonomyTermSortFields>;
  image?: Maybe<ImageSortFields>;
  thumbnail?: Maybe<ImageSortFields>;
  parent?: Maybe<ResourceLandingPageSortFields>;
};

export type Showcase = DataObject & {
  __typename?: 'Showcase';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ShowcaseClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  dateLaunched?: Maybe<Scalars['String']>;
  urlSegment?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  imageID: Scalars['ID'];
  thumbnailID: Scalars['ID'];
  sectorID: Scalars['ID'];
  elementalAreaID: Scalars['ID'];
  parentID: Scalars['ID'];
  image?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
  sector?: Maybe<TaxonomyTerm>;
  elementalArea?: Maybe<ElementalArea>;
  parent?: Maybe<ShowcaseLandingPage>;
  categories: TaxonomyTermConnection;
  link: Scalars['String'];
};


export type ShowcaseHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseSummaryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseDateLaunchedArgs = {
  format?: Maybe<DbDateFormattingOptions>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseCategoriesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum ShowcaseClassNameEnum {
  SilverStripeComModelsShowcase = 'SilverStripeComModelsShowcase'
}

export type ShowcaseConnection = {
  __typename?: 'ShowcaseConnection';
  edges: Array<ShowcaseConnectionEdge>;
  nodes: Array<Showcase>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ShowcaseConnectionEdge = {
  __typename?: 'ShowcaseConnectionEdge';
  /** The node at the end of the collections edge */
  node: Showcase;
};

export type ShowcaseFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  url?: Maybe<QueryFilterStringComparator>;
  summary?: Maybe<QueryFilterStringComparator>;
  dateLaunched?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  thumbnailID?: Maybe<QueryFilterIdComparator>;
  sectorID?: Maybe<QueryFilterIdComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  image?: Maybe<ImageFilterFields>;
  thumbnail?: Maybe<ImageFilterFields>;
  sector?: Maybe<TaxonomyTermFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  parent?: Maybe<ShowcaseLandingPageFilterFields>;
  categories?: Maybe<TaxonomyTermFilterFields>;
};

export type ShowcaseLandingPage = DataObject & SiteTreeInterface & PageInterface & ShowcaseLandingPageInterface & {
  __typename?: 'ShowcaseLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type ShowcaseLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcaseLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcaseLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ShowcaseLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ShowcaseLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type ShowcaseLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type ShowcaseLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcaseLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcaseLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcaseLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ShowcaseLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcaseLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ShowcaseLandingPageInterfaceConnection = {
  __typename?: 'ShowcaseLandingPageInterfaceConnection';
  edges: Array<ShowcaseLandingPageInterfaceConnectionEdge>;
  nodes: Array<ShowcaseLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ShowcaseLandingPageInterfaceConnectionEdge = {
  __typename?: 'ShowcaseLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ShowcaseLandingPage;
};

export type ShowcaseLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type ShowcasePage = DataObject & SiteTreeInterface & PageInterface & ShowcasePageInterface & {
  __typename?: 'ShowcasePage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  otherShowcases: Array<ShowcasePage>;
  sentDownBlocks: Array<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<ShowcasePageVersionConnection>;
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  client?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  hideHeroOverlay?: Maybe<Scalars['Boolean']>;
  imageID: Scalars['ID'];
  thumbnailID: Scalars['ID'];
  sectorID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  image?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
  sector?: Maybe<TaxonomyTerm>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  categories: TaxonomyTermConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasePageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasePageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageSummaryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageCategoriesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ShowcasePageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type ShowcasePageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  client?: Maybe<QueryFilterStringComparator>;
  summary?: Maybe<QueryFilterStringComparator>;
  hideHeroOverlay?: Maybe<QueryFilterBooleanComparator>;
  imageID?: Maybe<QueryFilterIdComparator>;
  thumbnailID?: Maybe<QueryFilterIdComparator>;
  sectorID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  image?: Maybe<ImageFilterFields>;
  thumbnail?: Maybe<ImageFilterFields>;
  sector?: Maybe<TaxonomyTermFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  categories?: Maybe<TaxonomyTermFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type ShowcasePageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  otherShowcases: Array<ShowcasePage>;
  sentDownBlocks: Array<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<ShowcasePageVersionConnection>;
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  client?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  hideHeroOverlay?: Maybe<Scalars['Boolean']>;
  imageID: Scalars['ID'];
  thumbnailID: Scalars['ID'];
  sectorID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  image?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
  sector?: Maybe<TaxonomyTerm>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  categories: TaxonomyTermConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasePageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasePageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type ShowcasePageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceSummaryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceCategoriesArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type ShowcasePageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ShowcasePageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type ShowcasePageInterfaceConnection = {
  __typename?: 'ShowcasePageInterfaceConnection';
  edges: Array<ShowcasePageInterfaceConnectionEdge>;
  nodes: Array<ShowcasePage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ShowcasePageInterfaceConnectionEdge = {
  __typename?: 'ShowcasePageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ShowcasePage;
};

export type ShowcasePageSortFields = {
  id?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  client?: Maybe<SortDirection>;
  summary?: Maybe<SortDirection>;
  hideHeroOverlay?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  thumbnailID?: Maybe<SortDirection>;
  sectorID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  image?: Maybe<ImageSortFields>;
  thumbnail?: Maybe<ImageSortFields>;
  sector?: Maybe<TaxonomyTermSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  categories?: Maybe<TaxonomyTermSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type ShowcasePageVersion = {
  __typename?: 'ShowcasePageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  otherShowcases: Array<ShowcasePage>;
  sentDownBlocks: Array<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
  version?: Maybe<Scalars['Int']>;
};

export type ShowcasePageVersionConnection = {
  __typename?: 'ShowcasePageVersionConnection';
  edges: Array<ShowcasePageVersionConnectionEdge>;
  nodes?: Maybe<Array<Maybe<ShowcasePageVersion>>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ShowcasePageVersionConnectionEdge = {
  __typename?: 'ShowcasePageVersionConnectionEdge';
  /** The node at the end of the collections edge */
  node: ShowcasePageVersion;
};

export type ShowcaseSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  url?: Maybe<SortDirection>;
  summary?: Maybe<SortDirection>;
  dateLaunched?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  imageID?: Maybe<SortDirection>;
  thumbnailID?: Maybe<SortDirection>;
  sectorID?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  image?: Maybe<ImageSortFields>;
  thumbnail?: Maybe<ImageSortFields>;
  sector?: Maybe<TaxonomyTermSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  parent?: Maybe<ShowcaseLandingPageSortFields>;
  categories?: Maybe<TaxonomyTermSortFields>;
};

export type ShowcasesBlock = DataObject & BaseElementInterface & ShowcasesBlockInterface & {
  __typename?: 'ShowcasesBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type ShowcasesBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasesBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasesBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ShowcasesBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
};

export type ShowcasesBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type ShowcasesBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasesBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type ShowcasesBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ShowcasesBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ShowcasesBlockInterfaceConnection = {
  __typename?: 'ShowcasesBlockInterfaceConnection';
  edges: Array<ShowcasesBlockInterfaceConnectionEdge>;
  nodes: Array<ShowcasesBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ShowcasesBlockInterfaceConnectionEdge = {
  __typename?: 'ShowcasesBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ShowcasesBlock;
};

export type ShowcasesBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
};

export type SiteConfig = DataObject & {
  __typename?: 'SiteConfig';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<ClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  mfaRequired?: Maybe<Scalars['Boolean']>;
  mfaGracePeriodExpires?: Maybe<Scalars['String']>;
  siteActivationEmailBcc?: Maybe<Scalars['String']>;
  siteConfirmationEmailBcc?: Maybe<Scalars['String']>;
  swiftypeEnabled?: Maybe<Scalars['Boolean']>;
  swiftypeAccessKey?: Maybe<Scalars['String']>;
  swiftypeAPIKey?: Maybe<Scalars['String']>;
  swiftypeEngineKey?: Maybe<Scalars['String']>;
  swiftypeDomainID?: Maybe<Scalars['String']>;
  swiftypeEngineSlug?: Maybe<Scalars['String']>;
  googleTagManagerCode?: Maybe<Scalars['String']>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  shieldCode?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  canViewType?: Maybe<CanViewTypeEnum>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canCreateTopLevelType?: Maybe<CanEditTypeEnum>;
  contactLinkID: Scalars['ID'];
  addressLinkID: Scalars['ID'];
  phoneLinkID: Scalars['ID'];
  contactLink?: Maybe<Link>;
  addressLink?: Maybe<Link>;
  phoneLink?: Maybe<Link>;
  socialLinks: SocialLinkConnection;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  createTopLevelGroups: GroupConnection;
  hasContactSettings?: Maybe<Scalars['Boolean']>;
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


export type SiteConfigMfaGracePeriodExpiresArgs = {
  format?: Maybe<DbDateFormattingOptions>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteConfigSiteActivationEmailBccArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigSiteConfirmationEmailBccArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigSiteDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteConfigSocialLinksArgs = {
  filter?: Maybe<SocialLinkFilterFields>;
  sort?: Maybe<SocialLinkSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  mfaRequired?: Maybe<QueryFilterBooleanComparator>;
  mfaGracePeriodExpires?: Maybe<QueryFilterStringComparator>;
  siteActivationEmailBcc?: Maybe<QueryFilterStringComparator>;
  siteConfirmationEmailBcc?: Maybe<QueryFilterStringComparator>;
  swiftypeEnabled?: Maybe<QueryFilterBooleanComparator>;
  swiftypeAccessKey?: Maybe<QueryFilterStringComparator>;
  swiftypeAPIKey?: Maybe<QueryFilterStringComparator>;
  swiftypeEngineKey?: Maybe<QueryFilterStringComparator>;
  swiftypeDomainID?: Maybe<QueryFilterStringComparator>;
  swiftypeEngineSlug?: Maybe<QueryFilterStringComparator>;
  googleTagManagerCode?: Maybe<QueryFilterStringComparator>;
  googleAnalyticsCode?: Maybe<QueryFilterStringComparator>;
  siteDescription?: Maybe<QueryFilterStringComparator>;
  shieldCode?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  tagline?: Maybe<QueryFilterStringComparator>;
  contactLinkID?: Maybe<QueryFilterIdComparator>;
  addressLinkID?: Maybe<QueryFilterIdComparator>;
  phoneLinkID?: Maybe<QueryFilterIdComparator>;
  contactLink?: Maybe<LinkFilterFields>;
  addressLink?: Maybe<LinkFilterFields>;
  phoneLink?: Maybe<LinkFilterFields>;
  socialLinks?: Maybe<SocialLinkFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  createTopLevelGroups?: Maybe<GroupFilterFields>;
};

export type SiteConfigSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  mfaRequired?: Maybe<SortDirection>;
  mfaGracePeriodExpires?: Maybe<SortDirection>;
  siteActivationEmailBcc?: Maybe<SortDirection>;
  siteConfirmationEmailBcc?: Maybe<SortDirection>;
  swiftypeEnabled?: Maybe<SortDirection>;
  swiftypeAccessKey?: Maybe<SortDirection>;
  swiftypeAPIKey?: Maybe<SortDirection>;
  swiftypeEngineKey?: Maybe<SortDirection>;
  swiftypeDomainID?: Maybe<SortDirection>;
  swiftypeEngineSlug?: Maybe<SortDirection>;
  googleTagManagerCode?: Maybe<SortDirection>;
  googleAnalyticsCode?: Maybe<SortDirection>;
  siteDescription?: Maybe<SortDirection>;
  shieldCode?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  tagline?: Maybe<SortDirection>;
  contactLinkID?: Maybe<SortDirection>;
  addressLinkID?: Maybe<SortDirection>;
  phoneLinkID?: Maybe<SortDirection>;
  contactLink?: Maybe<LinkSortFields>;
  addressLink?: Maybe<LinkSortFields>;
  phoneLink?: Maybe<LinkSortFields>;
  socialLinks?: Maybe<SocialLinkSortFields>;
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
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  versions?: Maybe<PageVersionConnection>;
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


export type SiteTreeVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type SiteTreeFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  versions?: Maybe<PageVersionConnection>;
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


export type SiteTreeInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type SiteTreeInterfaceConnection = {
  __typename?: 'SiteTreeInterfaceConnection';
  edges: Array<SiteTreeInterfaceConnectionEdge>;
  nodes: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteTreeInterfaceConnectionEdge = {
  __typename?: 'SiteTreeInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage;
};

export type SiteTreeLink = DataObject & {
  __typename?: 'SiteTreeLink';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<SiteTreeLinkClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  linkedID: Scalars['ID'];
  parentID?: Maybe<Scalars['Int']>;
  parentClass?: Maybe<ParentClassEnum>;
  parent?: Maybe<DbPolymorphicForeignKeyComposite>;
  linked?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
};


export type SiteTreeLinkHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeLinkTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeLinkExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeLinkLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SiteTreeLinkCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export enum SiteTreeLinkClassNameEnum {
  SilverStripeCmsModelSiteTreeLink = 'SilverStripeCMSModelSiteTreeLink'
}

export type SiteTreeLinkConnection = {
  __typename?: 'SiteTreeLinkConnection';
  edges: Array<SiteTreeLinkConnectionEdge>;
  nodes: Array<SiteTreeLink>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteTreeLinkConnectionEdge = {
  __typename?: 'SiteTreeLinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: SiteTreeLink;
};

export type SiteTreeLinkFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  linkedID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIntComparator>;
  linked?: Maybe<SiteTreeFilterFields>;
};

export type SiteTreeLinkSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  linkedID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  linked?: Maybe<SiteTreeSortFields>;
};

export type SiteTreeSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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

export type SocialLink = DataObject & {
  __typename?: 'SocialLink';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<SocialLinkClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  parentID?: Maybe<Scalars['Int']>;
  parentClass?: Maybe<ParentClassEnum>;
  parent?: Maybe<DbPolymorphicForeignKeyComposite>;
};


export type SocialLinkHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SocialLinkTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SocialLinkExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SocialLinkLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type SocialLinkCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export enum SocialLinkClassNameEnum {
  SilverStripeSharedModelsSocialLink = 'SilverStripeSharedModelsSocialLink'
}

export type SocialLinkConnection = {
  __typename?: 'SocialLinkConnection';
  edges: Array<SocialLinkConnectionEdge>;
  nodes: Array<SocialLink>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SocialLinkConnectionEdge = {
  __typename?: 'SocialLinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: SocialLink;
};

export type SocialLinkFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  network?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  url?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIntComparator>;
};

export type SocialLinkSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  network?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  url?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StateEnum {
  Draft = 'draft',
  Published = 'published',
  Closed = 'closed',
  Archived = 'archived'
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

export type SubmittedFileField = DataObject & {
  __typename?: 'SubmittedFileField';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
};


export type SubmittedFileFieldHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SubmittedFileFieldTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SubmittedFileFieldExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type SubmittedFileFieldFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type SubmittedFileFieldSortFields = {
  id?: Maybe<SortDirection>;
};

export type TabBlock = DataObject & BaseElementInterface & TabBlockInterface & {
  __typename?: 'TabBlock';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: TitleContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type TabBlockHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TabBlockCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TabBlockItemsArgs = {
  filter?: Maybe<TitleContentItemFilterFields>;
  sort?: Maybe<TitleContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TabBlockLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TabBlockFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  removeTopSpace?: Maybe<QueryFilterBooleanComparator>;
  removeBottomSpace?: Maybe<QueryFilterBooleanComparator>;
  sendToChildren?: Maybe<QueryFilterBooleanComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<ElementalAreaFilterFields>;
  items?: Maybe<TitleContentItemFilterFields>;
};

export type TabBlockInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<BaseElementClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  removeTopSpace?: Maybe<Scalars['Boolean']>;
  removeBottomSpace?: Maybe<Scalars['Boolean']>;
  sendToChildren?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<ElementalArea>;
  items: TitleContentItemConnection;
  link: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  versions?: Maybe<BaseElementVersionConnection>;
};


export type TabBlockInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TabBlockInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TabBlockInterfaceItemsArgs = {
  filter?: Maybe<TitleContentItemFilterFields>;
  sort?: Maybe<TitleContentItemSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TabBlockInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TabBlockInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TabBlockInterfaceConnection = {
  __typename?: 'TabBlockInterfaceConnection';
  edges: Array<TabBlockInterfaceConnectionEdge>;
  nodes: Array<TabBlock>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TabBlockInterfaceConnectionEdge = {
  __typename?: 'TabBlockInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: TabBlock;
};

export type TabBlockSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  removeTopSpace?: Maybe<SortDirection>;
  removeBottomSpace?: Maybe<SortDirection>;
  sendToChildren?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<ElementalAreaSortFields>;
  items?: Maybe<TitleContentItemSortFields>;
};

export type TaxonomyTerm = DataObject & {
  __typename?: 'TaxonomyTerm';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<TaxonomyTermClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  parentID: Scalars['ID'];
  typeID: Scalars['ID'];
  parent?: Maybe<TaxonomyTerm>;
  type?: Maybe<TaxonomyType>;
  children: TaxonomyTermConnection;
};


export type TaxonomyTermHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTermTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTermExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTermLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TaxonomyTermCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TaxonomyTermChildrenArgs = {
  filter?: Maybe<TaxonomyTermFilterFields>;
  sort?: Maybe<TaxonomyTermSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TaxonomyTermClassNameEnum {
  SilverStripeTaxonomyTaxonomyTerm = 'SilverStripeTaxonomyTaxonomyTerm'
}

export type TaxonomyTermConnection = {
  __typename?: 'TaxonomyTermConnection';
  edges: Array<TaxonomyTermConnectionEdge>;
  nodes: Array<TaxonomyTerm>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TaxonomyTermConnectionEdge = {
  __typename?: 'TaxonomyTermConnectionEdge';
  /** The node at the end of the collections edge */
  node: TaxonomyTerm;
};

export type TaxonomyTermFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  typeID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<TaxonomyTermFilterFields>;
  type?: Maybe<TaxonomyTypeFilterFields>;
  children?: Maybe<TaxonomyTermFilterFields>;
};

export type TaxonomyTermSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  typeID?: Maybe<SortDirection>;
  parent?: Maybe<TaxonomyTermSortFields>;
  type?: Maybe<TaxonomyTypeSortFields>;
  children?: Maybe<TaxonomyTermSortFields>;
};

export type TaxonomyType = DataObject & {
  __typename?: 'TaxonomyType';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<TaxonomyTypeClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type TaxonomyTypeHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTypeTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTypeExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TaxonomyTypeLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TaxonomyTypeCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};

export enum TaxonomyTypeClassNameEnum {
  SilverStripeTaxonomyTaxonomyType = 'SilverStripeTaxonomyTaxonomyType'
}

export type TaxonomyTypeConnection = {
  __typename?: 'TaxonomyTypeConnection';
  edges: Array<TaxonomyTypeConnectionEdge>;
  nodes: Array<TaxonomyType>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TaxonomyTypeConnectionEdge = {
  __typename?: 'TaxonomyTypeConnectionEdge';
  /** The node at the end of the collections edge */
  node: TaxonomyType;
};

export type TaxonomyTypeFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
};

export type TaxonomyTypeSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
};

export type Team = DataObject & {
  __typename?: 'Team';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<TeamClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  sortTeamMemberByFirstName?: Maybe<Scalars['Boolean']>;
  members: TeamMemberConnection;
};


export type TeamHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamMembersArgs = {
  filter?: Maybe<TeamMemberFilterFields>;
  sort?: Maybe<TeamMemberSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TeamClassNameEnum {
  SilverStripeComModelsTeam = 'SilverStripeComModelsTeam'
}

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamConnectionEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TeamConnectionEdge = {
  __typename?: 'TeamConnectionEdge';
  /** The node at the end of the collections edge */
  node: Team;
};

export type TeamFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  sortTeamMemberByFirstName?: Maybe<QueryFilterBooleanComparator>;
  members?: Maybe<TeamMemberFilterFields>;
};

export type TeamLandingPage = DataObject & SiteTreeInterface & PageInterface & TeamLandingPageInterface & {
  __typename?: 'TeamLandingPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type TeamLandingPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamLandingPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamLandingPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamLandingPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamLandingPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type TeamLandingPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TeamLandingPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type TeamLandingPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type TeamLandingPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamLandingPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamLandingPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamLandingPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamLandingPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type TeamLandingPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamLandingPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TeamLandingPageInterfaceConnection = {
  __typename?: 'TeamLandingPageInterfaceConnection';
  edges: Array<TeamLandingPageInterfaceConnectionEdge>;
  nodes: Array<TeamLandingPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TeamLandingPageInterfaceConnectionEdge = {
  __typename?: 'TeamLandingPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: TeamLandingPage;
};

export type TeamLandingPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type TeamMember = DataObject & {
  __typename?: 'TeamMember';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<TeamMemberClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  photoID: Scalars['ID'];
  thumbnailID: Scalars['ID'];
  photo?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
  teams: TeamConnection;
};


export type TeamMemberHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamMemberTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamMemberExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamMemberLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamMemberCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamMemberProfileArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamMemberTeamsArgs = {
  filter?: Maybe<TeamFilterFields>;
  sort?: Maybe<TeamSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TeamMemberClassNameEnum {
  SilverStripeComModelsTeamMember = 'SilverStripeComModelsTeamMember'
}

export type TeamMemberConnection = {
  __typename?: 'TeamMemberConnection';
  edges: Array<TeamMemberConnectionEdge>;
  nodes: Array<TeamMember>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TeamMemberConnectionEdge = {
  __typename?: 'TeamMemberConnectionEdge';
  /** The node at the end of the collections edge */
  node: TeamMember;
};

export type TeamMemberFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  firstName?: Maybe<QueryFilterStringComparator>;
  lastName?: Maybe<QueryFilterStringComparator>;
  role?: Maybe<QueryFilterStringComparator>;
  profile?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  photoID?: Maybe<QueryFilterIdComparator>;
  thumbnailID?: Maybe<QueryFilterIdComparator>;
  photo?: Maybe<ImageFilterFields>;
  thumbnail?: Maybe<ImageFilterFields>;
  teams?: Maybe<TeamFilterFields>;
};

export type TeamMemberSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  firstName?: Maybe<SortDirection>;
  lastName?: Maybe<SortDirection>;
  role?: Maybe<SortDirection>;
  profile?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  photoID?: Maybe<SortDirection>;
  thumbnailID?: Maybe<SortDirection>;
  photo?: Maybe<ImageSortFields>;
  thumbnail?: Maybe<ImageSortFields>;
  teams?: Maybe<TeamSortFields>;
};

export type TeamPage = DataObject & SiteTreeInterface & PageInterface & TeamPageInterface & {
  __typename?: 'TeamPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  hideFilters?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type TeamPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageSubtitleArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type TeamPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TeamPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  subtitle?: Maybe<QueryFilterStringComparator>;
  hideFilters?: Maybe<QueryFilterBooleanComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type TeamPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  hideFilters?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type TeamPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TeamPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type TeamPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceSubtitleArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type TeamPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TeamPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TeamPageInterfaceConnection = {
  __typename?: 'TeamPageInterfaceConnection';
  edges: Array<TeamPageInterfaceConnectionEdge>;
  nodes: Array<TeamPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TeamPageInterfaceConnectionEdge = {
  __typename?: 'TeamPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: TeamPage;
};

export type TeamPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  subtitle?: Maybe<SortDirection>;
  hideFilters?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export type TeamSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  sortTeamMemberByFirstName?: Maybe<SortDirection>;
  members?: Maybe<TeamMemberSortFields>;
};

export type TitleContentItem = DataObject & {
  __typename?: 'TitleContentItem';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<TitleContentItemClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  parentID: Scalars['ID'];
  parent?: Maybe<BaseElement | BlogPostsBlock | CallToActionBlock | CampaignBlock | CaseStudyBlock | ElementContent | FeatureColumnBlock | IconThreeColumnBlock | IframeBlock | IntroBlock | LogoBlock | MediaBlock | MultiColumnBlock | OurWorkBlock | QuoteBlock | ShowcasesBlock | TabBlock>;
};


export type TitleContentItemHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TitleContentItemTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TitleContentItemExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type TitleContentItemLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TitleContentItemCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type TitleContentItemContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};

export enum TitleContentItemClassNameEnum {
  SilverStripeSharedModelsTitleContentItem = 'SilverStripeSharedModelsTitleContentItem'
}

export type TitleContentItemConnection = {
  __typename?: 'TitleContentItemConnection';
  edges: Array<TitleContentItemConnectionEdge>;
  nodes: Array<TitleContentItem>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type TitleContentItemConnectionEdge = {
  __typename?: 'TitleContentItemConnectionEdge';
  /** The node at the end of the collections edge */
  node: TitleContentItem;
};

export type TitleContentItemFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<BaseElementFilterFields>;
};

export type TitleContentItemSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  parent?: Maybe<BaseElementSortFields>;
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

export type UpdateSiteConfigInput = {
  id?: Maybe<Scalars['ID']>;
  hashID?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Scalars['String']>;
  exists?: Maybe<Scalars['Boolean']>;
  className?: Maybe<Scalars['String']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  mfaRequired?: Maybe<Scalars['Boolean']>;
  mfaGracePeriodExpires?: Maybe<Scalars['String']>;
  siteActivationEmailBcc?: Maybe<Scalars['String']>;
  siteConfirmationEmailBcc?: Maybe<Scalars['String']>;
  swiftypeEnabled?: Maybe<Scalars['Boolean']>;
  swiftypeAccessKey?: Maybe<Scalars['String']>;
  swiftypeAPIKey?: Maybe<Scalars['String']>;
  swiftypeEngineKey?: Maybe<Scalars['String']>;
  swiftypeDomainID?: Maybe<Scalars['String']>;
  swiftypeEngineSlug?: Maybe<Scalars['String']>;
  googleTagManagerCode?: Maybe<Scalars['String']>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  shieldCode?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  canCreateTopLevelType?: Maybe<Scalars['String']>;
  contactLinkID?: Maybe<Scalars['ID']>;
  addressLinkID?: Maybe<Scalars['ID']>;
  phoneLinkID?: Maybe<Scalars['ID']>;
  hasContactSettings?: Maybe<Scalars['Boolean']>;
};

export enum UserFormUploadEnum {
  F = 'f',
  T = 't'
}

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

export type VersionsSimpleSortFields = {
  version?: Maybe<SortDirection>;
};

export type VirtualPage = DataObject & SiteTreeInterface & PageInterface & VirtualPageInterface & {
  __typename?: 'VirtualPage';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  versionID?: Maybe<Scalars['Int']>;
  copyContentFromID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  copyContentFrom?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type VirtualPageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type VirtualPageCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type VirtualPageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type VirtualPageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type VirtualPageMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type VirtualPageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type VirtualPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  priority?: Maybe<QueryFilterStringComparator>;
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
  menuDescription?: Maybe<QueryFilterStringComparator>;
  metaTitle?: Maybe<QueryFilterStringComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  versionID?: Maybe<QueryFilterIntComparator>;
  copyContentFromID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  copyContentFrom?: Maybe<SiteTreeFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
  editorGroups?: Maybe<GroupFilterFields>;
  navParent?: Maybe<PageFilterFields>;
};

export type VirtualPageInterface = {
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<PageClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  canViewType?: Maybe<PageCanViewTypeEnum>;
  canEditType?: Maybe<PageCanEditTypeEnum>;
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
  menuDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  elementalAreaID: Scalars['ID'];
  versionID?: Maybe<Scalars['Int']>;
  copyContentFromID: Scalars['ID'];
  parent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  elementalArea?: Maybe<ElementalArea>;
  copyContentFrom?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | SiteTree | TeamLandingPage | TeamPage | VirtualPage>;
  viewerGroups: GroupConnection;
  editorGroups: GroupConnection;
  breadcrumbs: Array<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  children: PageInterfaceConnection;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<AgencyLandingPage | CareersLandingPage | HomePage | NewDemoPage | OurWorkLandingPage | Page | PartnerLandingPage | PricingPage | RedirectorPage | ResourceLandingPage | ShowcaseLandingPage | ShowcasePage | TeamLandingPage | TeamPage | VirtualPage>;
  link: Scalars['String'];
  navUsesDarkForeground?: Maybe<Scalars['Boolean']>;
  versions?: Maybe<PageVersionConnection>;
};


export type VirtualPageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type VirtualPageInterfaceCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type VirtualPageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type VirtualPageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type VirtualPageInterfaceMenuDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  sort?: Maybe<GroupSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type VirtualPageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type VirtualPageInterfaceVersionsArgs = {
  sort?: Maybe<VersionsSimpleSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type VirtualPageInterfaceConnection = {
  __typename?: 'VirtualPageInterfaceConnection';
  edges: Array<VirtualPageInterfaceConnectionEdge>;
  nodes: Array<VirtualPage>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type VirtualPageInterfaceConnectionEdge = {
  __typename?: 'VirtualPageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: VirtualPage;
};

export type VirtualPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  priority?: Maybe<SortDirection>;
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
  menuDescription?: Maybe<SortDirection>;
  metaTitle?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  versionID?: Maybe<SortDirection>;
  copyContentFromID?: Maybe<SortDirection>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  copyContentFrom?: Maybe<SiteTreeSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
  editorGroups?: Maybe<GroupSortFields>;
  navParent?: Maybe<PageSortFields>;
};

export enum WidthEnum {
  Normal = 'Normal',
  Wide = 'Wide',
  Full = 'Full'
}

export type WorkableJob = DataObject & {
  __typename?: 'WorkableJob';
  id: Scalars['ID'];
  hashID: Scalars['String'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  exists: Scalars['Boolean'];
  className?: Maybe<WorkableJobClassNameEnum>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  shortcode?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  state?: Maybe<StateEnum>;
};


export type WorkableJobHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type WorkableJobTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type WorkableJobExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type WorkableJobLastEditedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type WorkableJobCreatedArgs = {
  format?: Maybe<DbDatetimeFormattingOption>;
  customFormat?: Maybe<Scalars['String']>;
};


export type WorkableJobDetailsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export enum WorkableJobClassNameEnum {
  SilverStripeComModelsWorkableJob = 'SilverStripeComModelsWorkableJob'
}

export type WorkableJobConnection = {
  __typename?: 'WorkableJobConnection';
  edges: Array<WorkableJobConnectionEdge>;
  nodes: Array<WorkableJob>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type WorkableJobConnectionEdge = {
  __typename?: 'WorkableJobConnectionEdge';
  /** The node at the end of the collections edge */
  node: WorkableJob;
};

export type WorkableJobFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  shortcode?: Maybe<QueryFilterStringComparator>;
  details?: Maybe<QueryFilterStringComparator>;
};

export type WorkableJobSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  shortcode?: Maybe<SortDirection>;
  details?: Maybe<SortDirection>;
};
