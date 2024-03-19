
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import ar from './locale/ar.json'
import en from './locale/en.json'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
    resources: {
      en: {...en}
      ,
      ar:
        {...ar}
      
    },
    lng: "en", // if you're using a language detector, do not define the lng option

   
  });