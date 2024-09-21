import { InjectionToken } from '@angular/core';
import { Octokit } from '@octokit/rest';

export const OCTOKIT = new InjectionToken<Octokit>('OCTOKIT', {
  providedIn: 'root',
  factory: () => new Octokit(),
});
