import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "hello": "Hello"
      }
    },
    de: {
      translation: {
        "hello": "Hallo"
      }
    },
    es: {
      translation: {
        "hello": "¡Hola!"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  console.log(i18next.t('hello'));
});

module.exports = i18next
