import {useTranslations} from 'next-intl';
import Mobile from '@/components/Kontakt/mobile'


export default function Kontakt() {
	const t = useTranslations('Contact');

  return (
    <>
			<section className='section100vh' id="kontakt">
				<div className='container py-[50px] self-center block lg:grid lg:grid-cols-2 xl:grid-cols-12 gap-4'>

					<div className='text-center lg:text-left self-center relative z-index-1 xl:col-span-7'>
						<h2 className='title pt-[5px] lg:pt-0'>{t('title')}</h2>
						<p className='text'>{t('text.01')}</p><br/>
						<p className='text'>{t('text.02')}</p>
					</div>

					<div className='text-center self-center py-[50px] xl:col-span-5'>
						<Mobile/>
					</div>
					
				</div>
			</section>
    </>
  )
}
