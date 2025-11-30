export interface PageData {
  images: string[];
  url: string;
  path: string;
  navigation: NavigationItem[];
  seo: SEO;
  content_blocks: ContentBlocks;
  assets: Assets;
}

export interface NavigationItem {
  text: string;
  href: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
}

export interface ContentBlocks {
  headings: Heading[];
  paragraphs: string[];
  lists?: string[][];
}

export interface Heading {
  level: string;
  text: string;
}

export interface Assets {
  images: string[];
  media: string[];
}

export interface ProjectData {
  project_info: {
    url: string;
    scrape_date: string;
    r2_bucket: string;
  };
  branding: {
    colors: string[];
    fonts: string[];
    social_links: string[];
    typography: {
      h1_font: string;
      body_font: string;
      primary_color: string;
    };
  };
  pages: PageData[];
}

export interface ModuleData {
  name: string;
  title: string;
  description: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description?: string;
}

export type Locale = "sk" | "en" | "ru" | "de" | "he";


