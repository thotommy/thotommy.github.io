export type FadeState = 'visible' | 'hidden';

export class ProjectTools {
  project: string;
  tools: string[];
}

export class Skills {
  intro: string;
  languages: string[];
  frameworksLibraries: string[];
  toolsMethods: string[];
  others: string[];
}

export class SubmitContactRequest {
  name: string;
  email: string;
  message: string;
}
