import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { COLOR_SCHEME } from '../common';

export interface Company {
  readonly id: string;
  displayName: string;
  logoSrc: {
    default: string;
    dark: string;
  };
  hideDisplayName?: boolean;
  href: string;
}

export interface Experience {
  readonly companyId: string;
  title: string;
  startDate: string;
  endDate?: string;
}

@Component({
  selector: 'jun-experience',
  standalone: true,
  template: `
    @for (experience of experienceByCompany(); track $index) {
      <div class="mb-8 first:mt-8">
        <div class="flex items-center justify-between mb-2">
          <a
            class="flex items-center select-none no-style"
            [href]="experience.company.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-7"
              [src]="
                isDarkMode()
                  ? experience.company.logoSrc.dark
                  : experience.company.logoSrc.default
              "
              alt="{{ experience.company.displayName }} logo image"
            />
            @if (!experience.company.hideDisplayName) {
              <div class="ml-2 no-underline">
                {{ experience.company.displayName }}
              </div>
            }
          </a>
          <a
            class="ml-4 text-sm flex items-center decoration-1 max-sm:hidden"
            [href]="experience.company.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ experience.company.displayName }}</span>
            <i class="iconoir-arrow-up-right-square ml-1"></i>
          </a>
        </div>
        @for (position of experience.positions; track $index) {
          <div class="group flex items-center">
            <div class="flex flex-col ml-3 mr-4 self-stretch">
              <div
                class="h-7 border-l-2 border-neutral-300 dark:border-neutral-700"
              ></div>
              <div
                class="h-1.5 w-1.5 rounded my-2 -ml-0.5 bg-neutral-600 dark:bg-neutral-400"
              ></div>
              <div
                class="h-7 border-l-2 group-last:border-transparent border-neutral-300 dark:border-neutral-700"
              ></div>
            </div>
            <div>
              <div>{{ position.title }}</div>
              <div class="mt-1 text-xs text-neutral-400 dark:text-neutral-600">
                <span>{{ position.startDate | date: dateFormat() }}</span>
                <span class="mx-1">&dash;</span>
                @if (position.endDate) {
                  <span>{{ position.endDate | date: dateFormat() }}</span>
                } @else {
                  <span>now</span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    }
  `,
  imports: [DatePipe],
})
export class ExperienceComponent {
  readonly colorScheme = inject(COLOR_SCHEME);

  readonly dateFormat = input('MMMM yyyy');
  readonly companies = input<Company[]>([
    {
      id: 'nt',
      displayName: 'Novatec Consulting GmbH',
      href: 'https://www.novatec-gmbh.de/',
      logoSrc: {
        default: '/img/novatec.svg',
        dark: '/img/novatec-dark.svg',
      },
      hideDisplayName: true,
    },
    {
      id: 'vg',
      displayName: 'vitagroup AG',
      href: 'https://www.vitagroup.ag/',
      logoSrc: {
        default: '/img/vitagroup.svg',
        dark: '/img/vitagroup-dark.svg',
      },
      hideDisplayName: true,
    },
    {
      id: 'mgs',
      displayName: 'mg.softech GmbH',
      href: 'https://www.mgsoftech.de/',
      logoSrc: {
        default: '/img/mgsoftech.svg',
        dark: '/img/mgsoftech-dark.svg',
      },
    },
  ]);
  readonly experiences = input<Experience[]>([
    {
      title: 'Senior Software Engineer',
      startDate: '2024-01-01',
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
      startDate: '2016-06-01',
      endDate: '2018-12-31',
      companyId: 'mgs',
    },
    {
      title: 'Software Developer',
      startDate: '2017-06-01',
      endDate: '2015-06-01',
      companyId: 'mgs',
    },
  ]);

  readonly isDarkMode = computed(() => this.colorScheme() === 'dark');
  readonly experienceByCompany = computed(() =>
    this.companies().map((company) => ({
      company,
      positions: this.experiences().filter(
        (experience) => experience.companyId === company.id,
      ),
    })),
  );
}