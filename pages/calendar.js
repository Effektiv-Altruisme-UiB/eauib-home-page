import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Calendar from '@/components/Calendar'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Våre aktiviteter - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Kalender
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Her er en oversikt over alle våre arrangementer (noen krever påmelding)
          </p>
        </div>
        <div className="container py-12">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=eauib%40effektivaltruisme.no&ctz=Europe%2FBerlin"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  )
}
