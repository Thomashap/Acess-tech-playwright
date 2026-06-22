import { test as base } from '@playwright/test';
// import {loginPage} from '\fixtures\loginFixture.ts';


type LoginPage = any;

type loginFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<loginFixtures>({
});

export { expect } from '@playwright/test';