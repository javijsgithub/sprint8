import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          balance_total: 'Total Balance',
          expenses_last_week: 'Expenses - Last week',
          today_expenses: 'Today\'s Expenses',
          compared_to_yesterday: 'compared to yesterday'
        }
      },
      es: {
        translation: {
          balance_total: 'Balance Total',
          expenses_last_week: 'Gastos - Última semana',
          today_expenses: 'Gastos de Hoy',
          compared_to_yesterday: 'respecto a ayer'
        }
      },
      ca: {
        translation: {
          balance_total: 'Balanç Total',
          expenses_last_week: 'Despeses - Última setmana',
          today_expenses: 'Despeses d\'avui',
          compared_to_yesterday: 'comparat amb ahir'
        }
      }
    },
    lng: 'es', // default language
    fallbackLng: 'es', // fallback language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;