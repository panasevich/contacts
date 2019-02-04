import appToken from './utils/appToken';

const DEFAULT_LOCALE = 'en-GB';
const DEFAULT_LANGUAGE = 'en';
const DEFAULT_COUNTRY = 'GB';

class I18n {
    chainL;

    locale;

    language;

    country;

    localeConstants = {};

    constructor(chainL) {
        this.chainL = chainL;
    }

    init = () => {
        ({
            locale: this.locale,
            language: this.language,
            country: this.country,
        } = this.getStoredSettings());

        this.localeConstants = {};
        let promise = this.addLanguageImport(null, DEFAULT_LANGUAGE);

        if (this.language !== DEFAULT_LANGUAGE) {
            promise = this.addLanguageImport(promise, this.language);
        }

        if (this.locale.includes('-')) {
            promise = this.addLanguageImport(promise, this.locale);
        }

        return promise;
    };

    addLanguageImport(promise, languageCode) {
        return (promise || Promise.resolve()).then(() => import(`./i18n/${languageCode}`)).then(this.mergeConstants, () => {});
    }

    getStoredSettings = () => {
        const localeKey = appToken().localeKey || navigator.language;
        const locale = (localeKey && localeKey.replace('_', '-')) || DEFAULT_LOCALE;
        const [language, localeCountry] = locale.split('-');
        const country = appToken().countryCode2 || localeCountry || DEFAULT_COUNTRY;
        return { locale, language, country };
    };

    mergeConstants = (importedLocale) => {
        this.localeConstants = Object.assign({}, this.localeConstants, importedLocale.default);
    };

    getPluralIndex(n) {
        const { getPluralIndex } = this.localeConstants[''];
        return getPluralIndex ? getPluralIndex(n) : (1 === n ? 1 : 0); // eslint-disable-line no-nested-ternary
    }

    l = key => (
        this.localeConstants[key] && this.localeConstants[key][1]
        || this.chainL && this.chainL(key)
        || key
    );

    nl = (key, pluralDefault, n) => {
        const pluralIndex = this.getPluralIndex(n) + 1;
        const valueCollection = this.localeConstants[key] || [pluralDefault, key];
        let result = valueCollection[pluralIndex] || pluralDefault;
        result = result.replace('{n}', n);
        return result;
    };

    getLocale = () => this.locale;

    getLanguage = () => this.language;

    getCountry = () => this.country;
}

const i18n = new I18n(window.l);
window.l = i18n.l;
window.nl = i18n.nl;

export const { init, getLocale, getLanguage, getCountry } = i18n;
