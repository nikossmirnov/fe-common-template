import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('About')}</h1>
    </div>
  );
}
