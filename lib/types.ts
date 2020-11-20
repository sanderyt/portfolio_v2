export type ProjectSchema = {
  id: number;
  title: string;
  url: string;
  description: {
    html: string;
  };
  tech: string[];
  slug: string;
  projectImages: {
    url: string[] | string;
  };
};

export type ResumeSchema = {
  title: string;
  type: string;
  organisation: string;
  description: {
    html: string;
  };
  startDate: string;
  endDate: string;
};
