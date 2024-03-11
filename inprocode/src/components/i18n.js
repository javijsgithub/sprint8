import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          balance_total: 'Total Balance',
          expenses_this_week: 'Expenses - This week',
          expenses_last_week: 'Expenses - Last week',
          expenses_two_weeks_ago: 'Expenses - Two weeks ago',
          today_expenses: 'Today\'s Expenses',
          compared_to_yesterday: 'compared to yesterday'
        }
      },
      es: {
        translation: {
          balance_total: 'Balance Total',
          expenses_this_week: 'Gastos - Semana actual',
          expenses_last_week: 'Gastos - Semana pasada',
          expenses_two_weeks_ago: 'Gastos - Hace dos semanas',
          today_expenses: 'Gastos de Hoy',
          compared_to_yesterday: 'respecto a ayer'
        }
      },
      ca: {
        translation: {
          balance_total: 'Balanç Total',
          expenses_this_week: 'Despeses - Setmana actual',
          expenses_last_week: 'Despeses - Setmana pasada',
          expenses_two_weeks_ago: 'Despeses - Fa dues setmanes',
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