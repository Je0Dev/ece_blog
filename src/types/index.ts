export interface Skill {
  title: string;
  description: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  type: string;
  status: string;
  excerpt: string;
  content: string;
  tech: string[];
  category: string;
  readingTime: number;
  image: string;
  skills: Skill[];
}
