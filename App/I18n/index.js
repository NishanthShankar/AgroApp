import I18n from 'react-native-i18n'
import en from './locales/en'
import telugu from './locales/telugu'

I18n.fallbacks = true

I18n.translations = {
  en,
  telugu
}

export default I18n
