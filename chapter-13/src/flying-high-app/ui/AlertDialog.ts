import { By, PageElement } from '@serenity-js/web';

export const AlertDialog = () =>
    PageElement.located(By.css(`div[role='alertdialog']`)).describedAs('alert dialog');
