import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const googleCalendarApiKey = process.env.NEXT_PUBLIC_GOOGLE_CAL_API
console.log(googleCalendarApiKey)

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
            Oversikt over alle våre arrangementer (noen krever påmelding)
          </p>
        </div>
        <div className="container py-12">
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            googleCalendarApiKey={googleCalendarApiKey}
            initialView="dayGridMonth"
            eventSources={{ googleCalendarId: 'eauib@effektivaltruisme.no' }}
          />
        </div>
      </div>
    </>
  )
}
