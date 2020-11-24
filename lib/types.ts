export type ProjectSchema = {
  id: number;
  title: string;
  url: string;
  startDate: string;
  endDate: string;
  description: {
    html: any;
  };
  tech: string[];
  slug: string;
  projectImages: [{ url: string[] | string }];
};

export type ResumeSchema = {
  id: string;
  title: string;
  type: string;
  organisation: string;
  description: {
    html: string;
  };
  startDate: string;
  endDate: string;
};
