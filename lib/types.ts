export type Project = {
  id: number;
  title: string;
  tech: string;
  slug: string;
  projectImages: {
    url: string[] | string;
  };
};
