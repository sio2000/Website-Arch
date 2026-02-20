import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKeys = NestedKeyOf<typeof translations.el>;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let translation: any = translations[language];
    
    try {
      for (const k of keys) {
        if (translation[k] === undefined) {
          console.warn(`Translation key "${key}" not found`);
          return key.split('.').pop() || key;
        }
        translation = translation[k];
      }
      return translation;
    } catch (error) {
      console.warn(`Error accessing translation for key "${key}"`);
      return key.split('.').pop() || key;
    }
  };

  return { t };
}; 