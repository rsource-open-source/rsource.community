export type GHOrgRepos<T = unknown> = {
  organization: {
    repositories: {
      edges: T[];
    };
  };
};

export type GHOrgRepoEverything = GHOrgRepos<GHOrgRepoEdgesEverything>;

export type GHOrgRepoEdgesEverything = {
  node: {
    name: string;
    description: string;
    stargazercount: number;
    usesCustomOpenGraphImage: boolean;
    openGraphImageUrl: string;
    homepageUrl: string;
    url: string;
    primaryLanguage: {
      name: string;
    } | null;
  };
};

export type GHOrgRepoNames = GHOrgRepos<{ node: { name: string } }>;
