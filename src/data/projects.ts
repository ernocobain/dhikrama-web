export type Project = {
  slug: string;
  name: string;
  url: string;
  summary: string;
  description: string;
  categories: string[];
  cta: string;
};

export const projects: Project[] = [
  {
    slug: 'nagili',
    name: 'Nagili',
    url: 'https://nagili.dhikrama.com',
    summary:
      'Nagili is a transportation and logistics service focused on trucking, moving, cargo delivery, and business distribution needs.',
    description:
      'Nagili helps individuals and businesses arrange practical transportation and logistics support for trucking, moving, cargo delivery, and distribution needs.',
    categories: ['Transportation', 'Logistics', 'Cargo'],
    cta: 'Visit Nagili',
  },
  {
    slug: 'boringan',
    name: 'Boringan',
    url: 'https://boringan.com',
    summary:
      'Boringan is an independent project under the Dhikrama portfolio. Update this description based on the actual service or product category.',
    description:
      'Boringan is an independent project in the Dhikrama portfolio with its own website, focus, and service model.',
    categories: ['Independent Project', 'Service'],
    cta: 'Visit Boringan',
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
