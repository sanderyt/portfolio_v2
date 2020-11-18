export type ProjectSchema = {
  id: number;
  title: string;
  description: {
    html: string;
  };
  tech: string;
  slug: string;
  projectImages: {
    url: string[] | string;
  };
};
