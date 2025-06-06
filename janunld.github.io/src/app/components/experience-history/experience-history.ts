import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { COLOR_SCHEME } from '../../common';
import { Tag } from '../tag/tag';
import { COMPANIES, EXPERIENCE } from './data';
import { Company, Experience } from './models';

@Component({
  selector: 'jun-experience',
  standalone: true,
  template: `
    @for (experience of experienceByCompany(); track $index) {
      <div class="mb-8 first:mt-8">
        <div class="flex items-center justify-between mb-2">
          <a
            class="flex items-center select-none no-style"
            [href]="experience.company.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-7"
              [src]="
                isDarkMode()
                  ? experience.company.logoSrc.dark
                  : experience.company.logoSrc.auto
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
          @if (isActiveCompany(experience.positions)) {
            <jun-tag
              class="ml-4 text-sm flex items-center decoration-1 max-sm:hidden cursor-default"
              [pulse]="true"
            >
              active
            </jun-tag>
          }
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
              @let didAcquire = didAcquireCompany(position.companyId);
              <div
                class="grow border-l-2 border-neutral-300 dark:border-neutral-700"
                [class.-mb-5]="didAcquire"
                [class.border-dashed]="didAcquire"
                [class.group-last:border-transparent]="!didAcquire"
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
              @if (getDurationFromExperience(position); as duration) {
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
                </div>
              }
              @if (position.description) {
                <div
                  class="inline-block text-xs text-neutral-400 dark:text-neutral-600"
                >
                  <span class="mx-2 text-neutral-400 dark:text-neutral-600">
                    &centerdot;
                  </span>
                  <span>{{ position.description }}</span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    }
  `,
  imports: [DatePipe, Tag],
})
export class ExperienceHistory {
  readonly colorScheme = inject(COLOR_SCHEME);

  readonly companies = input<Company[]>(COMPANIES);
  readonly experience = input<Experience[]>(EXPERIENCE);
  readonly experienceByCompany = computed(() =>
    this.companies().map((company) => ({
      company,
      positions: this.experience().filter(
        (experience) => experience.companyId === company.id,
      ),
    })),
  );

  readonly dateFormat = input('MMMM yyyy');
  readonly isDarkMode = computed(() => this.colorScheme() === 'dark');

  getDurationFromExperience({ startDate, endDate }: Experience) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const isSameYear = end.getFullYear() === start.getFullYear();

    const startMonthsToNextYear = 11 - start.getMonth();
    const endMonthsFromLastYear = end.getMonth();
    const inBetweenMonths =
      Math.max(end.getFullYear() - start.getFullYear() - 1, 0) * 11;
    let allMonthsSum = 0;

    if (inBetweenMonths > 0 || !isSameYear) {
      allMonthsSum =
        startMonthsToNextYear + inBetweenMonths + endMonthsFromLastYear;
    } else {
      allMonthsSum = isSameYear ? 1 : endMonthsFromLastYear;
    }

    const years = Math.floor(allMonthsSum / 11);
    const months = allMonthsSum % 11;

    return {
      years,
      months,
    };
  }

  didAcquireCompany(companyId: string) {
    return this.companies().some((company) => company.acquiredBy === companyId);
  }

  isActiveCompany(positions: Experience[]) {
    return positions.some((position) => !position.endDate);
  }
}
