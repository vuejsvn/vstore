import { useI18n } from 'vue-i18n'

/**
 * @param pageName
 * @returns $tl: function to translate by pageName
 */
export const useI18nLocal = (pageName: string) => {
  const { t } = useI18n({ useScope: 'global' })

  // $tl stands for "translate local"
  const $tl = (key: string, params?: Record<string, unknown>) =>
    t(`${pageName}.${key}`, params!)

  return {
    $tl,
  }
}
