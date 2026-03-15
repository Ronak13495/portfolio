/// <reference types="astro/client" />

import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export interface Profile {
  name: string;
  displayName: string;
  role: string;
  location: string;
  bio: any[];
  tagline: string;
  available: boolean;
  stats: { value: string; label: string }[];
}

export interface SkillGroup {
  _id: string;
  title: string;
  order: number;
  skills: string[];
  barSkill?: { label: string; percent: number };
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  url?: string;
  repo?: string;
  year: string;
  order: number;
  tags: string[];
  featured: boolean;
}

export interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  order: number;
}

export async function getProfile(): Promise<Profile> {
  return sanityClient.fetch(`*[_type == "profile"][0]`);
}

export async function getSkillGroups(): Promise<SkillGroup[]> {
  return sanityClient.fetch(`*[_type == "skillGroup"] | order(order asc)`);
}

export async function getProjects(): Promise<Project[]> {
  return sanityClient.fetch(
    `*[_type == "project"] | order(order asc) { _id, title, description, url, repo, year, order, tags, featured }`
  );
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  return sanityClient.fetch(`*[_type == "socialLink"] | order(order asc)`);
}