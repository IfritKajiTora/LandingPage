import {useTranslations} from 'next-intl';
import AllTabs from '@/components/Portfolio/allTabs'

export default function Portfolio() {
  const t = useTranslations('Projects');

  return (
    <>
    <section id="projects">
      <div className='container py-[50px] text-center'>

        <h2 className='title'>{t('title')}</h2>
        <p className='text'>
          {t('text_1.01')}
          <b>{t('text_1.02')}</b>
          {t('text_1.03')}
          <b>{t('text_1.04')}</b>
          {t('text_1.05')}
          <b>{t('text_1.06')}</b>
        </p><br/>
        <p className='text'>
          {t('text_2.01')}
          <b>{t('text_2.02')}</b>
          {t('text_2.03')}
          <b>{t('text_2.04')}</b>
          {t('text_2.05')}
          <b>{t('text_2.06')}</b>
          {t('text_2.07')}
          <b>{t('text_2.08')}</b>
          {t('text_2.09')}
        </p><br/>
        <p className='text'>
          {t('text_3.01')}
          <b>{t('text_3.02')}</b>
          {t('text_3.03')}
          <b>{t('text_3.04')}</b>
          {t('text_3.05')}
        </p>

        <AllTabs/>

      </div>
    </section>
    </>
  )
}
