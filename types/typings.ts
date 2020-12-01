export type ProjectSchema = {
  id: number;
  title: string;
  url: string;
  startDate: string;
  endDate: string;
  description: {
    html: string;
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

export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

export type Markup = {
  __html: string;
};

export type ProjectReponse = {
  project: ProjectSchema;
};
