import {useTranslations} from 'next-intl';
import Hand from '@/components/Banner/hand'


export default function Banner() {
	const t = useTranslations('Banner');

  return (
    <>
    <section className="section100vh" id="banner">
			<div className="container self-center">
				<div className="block lg:grid lg:grid-cols-2 gap-4 py-[50px]">
					<div className="self-center text-center lg:text-left relative z-10 pb-[50px] lg:pb-[0]">

						<h1 className="bannerTitle">{t('title')}</h1>
						<p className="bannerText">
							{t('text.01')}
							<span className='whitespace-nowrap'>{t('text.02')}</span>
							<span className='whitespace-nowrap'>{t('text.03')}</span>
							{t('text.04')}
							<span className='whitespace-nowrap'>{t('text.05')}</span>
							{t('text.06')}
						</p>
						
					</div>

					<Hand/>

				</div>
			</div>
		</section>
    </>
  )
}
