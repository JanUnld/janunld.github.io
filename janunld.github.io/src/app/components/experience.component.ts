import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { COLOR_SCHEME } from '../common';

export interface Company {
  readonly id: string;
  displayName: string;
  type: 'GmbH' | 'AG' | string;
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
  description?: string;
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
            <span
              class="ml-2.5 px-2 py-0.5 text-xs text-neutral-400 dark:text-neutral-600 border-2 border-neutral-200 dark:border-neutral-800 rounded-full"
            >
              {{ experience.company.type }}
            </span>
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
                class="grow border-l-2 group-last:border-transparent border-neutral-300 dark:border-neutral-700"
              ></div>
            </div>
            <div class="my-3">
              <div>{{ position.title }}</div>
              <div class="inline-block mt-1 text-xs text-neutral-500">
                <span>{{ position.startDate | date: dateFormat() }}</span>
                <span class="mx-1">&dash;</span>
                @if (position.endDate) {
                  <span>{{ position.endDate | date: dateFormat() }}</span>
                } @else {
                  <span>now</span>
                }
                <span class="mx-2 text-neutral-400 dark:text-neutral-600">
                  &centerdot;
                </span>
              </div>
              @if (getDuration(position); as duration) {
                <div
                  class="inline-block text-xs text-neutral-400 dark:text-neutral-600"
                >
                  @if (duration.years) {
                    <span class="first:mr-1">{{
                      duration.years ? duration.years + 'y' : ''
                    }}</span>
                  }
                  @if (duration.months) {
                    <span>{{
                      duration.months ? duration.months + 'm' : ''
                    }}</span>
                  }
                  <span class="mx-2 text-neutral-400 dark:text-neutral-600"
                    >&centerdot;</span
                  >
                </div>
              }
              @if (position.description) {
                <div
                  class="inline-block text-xs text-neutral-400 dark:text-neutral-600"
                >
                  <span>{{ position.description }}</span>
                </div>
              }
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
      displayName: 'Novatec Consulting',
      href: 'https://www.novatec-gmbh.de/',
      logoSrc: {
        default: '/img/novatec.svg',
        dark: '/img/novatec-dark.svg',
      },
      hideDisplayName: true,
      type: 'GmbH',
    },
    {
      id: 'vg',
      displayName: 'vitagroup',
      href: 'https://www.vitagroup.ag/',
      logoSrc: {
        default: '/img/vitagroup.svg',
        dark: '/img/vitagroup-dark.svg',
      },
      hideDisplayName: true,
      type: 'AG',
    },
    {
      id: 'mgs',
      displayName: 'mg.softech',
      href: 'https://www.mgsoftech.de/',
      logoSrc: {
        default: '/img/mgsoftech.svg',
        dark: '/img/mgsoftech-dark.svg',
      },
      type: 'GmbH',
    },
  ]);
  readonly experiences = input<Experience[]>([
    {
      title: 'Senior Software Engineer',
      startDate: '2024-01-01',
      companyId: 'nt',
      description: 'full-time',
    },
    {
      title: 'Software Engineer',
      startDate: '2023-07-01',
      endDate: '2024-01-01',
      companyId: 'nt',
      description: 'full-time',
    },
    {
      title: 'Frontend Engineer',
      startDate: '2019-01-01',
      endDate: '2023-07-01',
      companyId: 'vg',
      description: 'full-time',
    },
    {
      title: 'Software Developer',
      startDate: '2017-06-01',
      endDate: '2018-12-31',
      companyId: 'mgs',
      description: 'full-time',
    },
    {
      title: 'Software Developer',
      startDate: '2015-06-01',
      endDate: '2017-06-01',
      companyId: 'mgs',
      description: 'full-time, apprenticeship',
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

  getDuration({ startDate, endDate }: Experience) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const isSameYear = end.getFullYear() === start.getFullYear();

    const startMonths = 11 - start.getMonth();
    const endMonths = end.getMonth();
    const inBetweenMonths =
      Math.max(end.getFullYear() - start.getFullYear() - 1, 0) * 11;
    let fullMonths = 0;

    if (inBetweenMonths > 0 || !isSameYear) {
      fullMonths = startMonths + inBetweenMonths + endMonths;
    } else {
      fullMonths = endMonths;
    }

    const years = Math.floor(fullMonths / 11);
    const months = fullMonths % 11;

    return {
      years,
      months,
    };
  }
}
