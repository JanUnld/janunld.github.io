export interface Company {
  readonly id: string;
  displayName: string;
  type: 'GmbH' | 'AG' | 'Inc.' | string;
  logoSrc: {
    auto: string;
    dark: string;
  };
  website: string;
  hideDisplayName?: boolean;
  /** @deprecated */ byAcquisition?: boolean;
  acquiredBy?: string; // companyId of the acquiring company
}

export interface Experience {
  readonly companyId: string;
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
}
