import {
  APP_INITIALIZER,
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
  Signal,
  signal,
} from '@angular/core';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { OCTOKIT } from './octokit';

export type GithubUserData =
  RestEndpointMethodTypes['users']['getByUsername']['response']['data'];

export const GITHUB_USER = new InjectionToken<Signal<GithubUserData>>(
  'GITHUB_USER',
);

/**
 * Provides the {@link GITHUB_USER} {@link Signal} using a {@link APP_INITIALIZER}
 * to fetch the {@link GithubUserData} for the given `username` before the app
 * actually bootstraps.
 */
export function provideGithubUser(username = 'JanUnld'): EnvironmentProviders {
  const ghUserSignal = signal<GithubUserData | null>(null);

  return makeEnvironmentProviders([
    {
      provide: GITHUB_USER,
      useValue: ghUserSignal,
    },
    {
      multi: true,
      provide: APP_INITIALIZER,
      deps: [OCTOKIT],
      useFactory: (octokit: Octokit) => async () => {
        try {
          const { data } = await octokit.users.getByUsername({ username });
          ghUserSignal.set(data);
        } catch (err) {
          console.log('FATAL: Unable to fetch GitHub user data', err);
        }
      },
    },
  ]);
}
