import { Company, Experience } from './models';

export const COMPANIES: Company[] = [
  {
    id: 'cgi',
    displayName: 'CGI',
    website: 'https://www.cgi.com/',
    logoSrc: {
      auto: '/img/cgi.svg',
      dark: '/img/cgi.svg',
    },
    hideDisplayName: true,
    type: 'Inc.',
  },
  {
    id: 'nt',
    displayName: 'Novatec Consulting',
    website: 'https://www.novatec-gmbh.de/',
    logoSrc: {
      auto: '/img/novatec.svg',
      dark: '/img/novatec-dark.svg',
    },
    hideDisplayName: true,
    acquiredBy: 'cgi',
    type: 'GmbH',
  },
  {
    id: 'vg',
    displayName: 'vitagroup',
    website: 'https://www.vitagroup.ag/',
    logoSrc: {
      auto: '/img/vitagroup.svg',
      dark: '/img/vitagroup-dark.svg',
    },
    hideDisplayName: true,
    type: 'AG',
  },
  {
    id: 'mgs',
    displayName: 'mg.softech',
    website: 'https://www.mgsoftech.de/',
    logoSrc: {
      auto: '/img/mgsoftech.svg',
      dark: '/img/mgsoftech-dark.svg',
    },
    type: 'GmbH',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: 'Senior Consultant',
    startDate: '2025-06-01',
    companyId: 'cgi',
  },
  {
    title: 'Senior Software Engineer',
    startDate: '2024-01-01',
    endDate: '2025-06-01',
    companyId: 'nt',
  },
  {
    title: 'Software Engineer',
    startDate: '2023-07-01',
    endDate: '2024-01-01',
    companyId: 'nt',
  },
  {
    title: 'Frontend Engineer',
    startDate: '2019-01-01',
    endDate: '2023-07-01',
    companyId: 'vg',
  },
  {
    title: 'Software Developer',
    startDate: '2017-06-01',
    endDate: '2018-12-31',
    companyId: 'mgs',
  },
  {
    title: 'Software Developer',
    startDate: '2015-06-01',
    endDate: '2017-06-01',
    companyId: 'mgs',
    description: 'apprenticeship',
  },
];
