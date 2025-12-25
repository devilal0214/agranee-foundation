
export interface Program {
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface Story {
  id: string;
  name: string;
  age: number;
  location: string;
  background: string;
  transformation: string;
  nextSteps: string;
  imageUrl: string;
}

export interface NavLink {
  path: string;
  label: string;
}
