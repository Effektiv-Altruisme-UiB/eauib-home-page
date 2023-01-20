import siteMetadata from '@/data/siteMetadata'
import introData from '@/data/introData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Intro() {
  return (
    <>
      <PageSEO
        title={`Introkurs - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Introkurs i effektiv altruisme
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Et 6-ukers kurs med ukentlige diskusjonsmøter om globale utfordringer og effektiv
            altruisme
          </p>
          <p className="text-lg font-bold leading-7 text-black dark:text-white">
            Neste kurs begynner onsdag 15. februar (søkndadsfrist 9. februar)
          </p>
          <form target="_blank" action="https://airtable.com/shrVahPsEXzgfoK08">
            <button
              className={`w-3/5 rounded-md bg-primary-500 py-4 px-4 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400`}
              type="submit"
            >
              Meld deg på her
            </button>
          </form>
        </div>
        <div className="container py-12">
          <h2 className="pb-4 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Hva lærer du?
          </h2>
          <div className="-m-4 flex flex-wrap">
            {introData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="container py-12">
          <p className="pb-4 text-lg font-bold leading-7 text-black dark:text-white">
            Neste kurs begynner onsdag 15. februar (søkndadsfrist 9. februar)
          </p>
          <form target="_blank" action="https://airtable.com/shrVahPsEXzgfoK08">
            <button
              className={`w-3/5 rounded-md bg-primary-500 py-4 px-4 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400`}
              type="submit"
            >
              Meld deg på her
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
