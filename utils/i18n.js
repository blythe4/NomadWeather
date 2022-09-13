import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import ko from './ko.json';
import en from './en.json';

const translations = {
    ko,
    en,
};
export const i18n = new I18n(translations);
i18n.defaultLocale = "en";
if(Localization.locale === 'ko-KR'){
    i18n.locale = 'ko';
}else{

i18n.locale = Localization.locale;
}
i18n.enableFallback = true;
