import i18next from 'i18next';

const i18n = i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "hello": "Hello",
        "claim": "The world is yours",
        "some_item": "This is from i18next"
      }
    },
    de: {
      translation: {
        "hello": "Hallo",
        "claim": "Die Welt ist eine Scheibe",
        "some_item": "Dies kommt von i18next"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  // console.log(i18next.t('hello'));
});

export default i18n;
