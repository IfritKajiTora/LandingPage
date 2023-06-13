import {useTranslations} from 'next-intl';
import AllSkills from '@/components/skills/skills'


export default function Skills() {
	const t = useTranslations('Skills');

  return (
    <section className="bg-skills" id="skills">
			<div className="container mx-auto relative py-[50px] self-center text-center">
				
				<h2 className="title">{t('title')}</h2>
				<p className="text">
					{t('text.01')}
					<b>{t('text.02')}</b>
					{t('text.03')}
					<b>{t('text.04')}</b>
					{t('text.05')}
					<b>{t('text.06')}</b>
					{t('text.07')}
				</p>
					
				<AllSkills/>
					
		</div>
	</section>
  )
}
