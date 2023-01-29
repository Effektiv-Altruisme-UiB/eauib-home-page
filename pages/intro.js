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
            Et 6-ukers kurs med ukentlige diskusjonsmøter om globale utfordringer og hvordan man kan
            bidra til å løse dem
          </p>
        </div>
        <div className="container py-12">
          <p className="pb-4 text-lg font-bold leading-7 text-black dark:text-white">
            Neste kurs begynner i uke 7 (mellom 13. og 16. februar)
          </p>
          <form target="_blank" action="https://airtable.com/shrVahPsEXzgfoK08">
            <button
              className={`w-3/5 rounded-md bg-primary-500 py-4 px-4 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400`}
              type="submit"
            >
              Meld deg på (frist 10. februar)
            </button>
          </form>
        </div>
        <div className="container py-12">
          <h2 className="pb-4 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Om kurset
          </h2>
          <p className="pb-4 text-lg leading-7 text-black dark:text-white">
            Introkurset vårt er et <strong>gratis 6-ukers program</strong> som kombinerer
            selvstudie, små gruppediskusjoner, diverse oppgaver og personlig veiledning. I løpet av
            kurset utforskes noen av vår tids største globale utfordringer og hvordan vi kan
            håndtere dem.
            <br />
            <br />
            Kurset består av <strong>ukentlige møter på 1,5 timer</strong> på et sentralt sted i
            Bergen. Diskusjonene foregår i grupper på 3-5 deltakere sammen med en
            diskusjonsveileder. Kurset trekker på kunnskap fra blant annet økonomi, filosofi,
            statistikk, psykologi, bioteknologi og datavitenskap. Det er åpnet for alle, men primært
            siktet mot studenter ved UiB.
            <br />
            <br />
            Kurset er tilpasset folk som ikke allerede har kjennskap til effektiv altruisme men som
            har interesse av å ha større positiv innvirkning på verden. For å delta bør du: Være
            villig til å gjøre <strong>ca. 1-2 timer ukentlig selvstudie før hvert møte</strong>;
            Være bestemt på å delta på alle 6 møtene (med unntak av uventede hendelser); Være
            entusiastisk om å gjøre en positiv endring i verden; Ha et åpent sinn og respektere
            andres perspektiver.
            <br />
            <br />
            Ved gjennomført kurs vil du motta et digitalt sertifikat. Vi tilbyr også enkel
            matservering og drikke på hvert møte.
          </p>
        </div>
        <div className="container py-12">
          <h2 className="pb-6 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
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
          <p className="pb-4 text-lg leading-7 text-black dark:text-white">
            <br />
            Innholdet av kurset er basert på "The Effective Altruism Handbook" som kan finnes her:
            {` `}
            <a
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              href="https://forum.effectivealtruism.org/handbook"
              rel="noreferrer"
            >
              https://forum.effectivealtruism.org/handbook
            </a>
          </p>
        </div>
        <div className="container py-12">
          <p className="pb-4 text-lg font-bold leading-7 text-black dark:text-white">
            Neste kurs begynner i uke 7 (mellom 13. og 16. februar)
          </p>
          <form target="_blank" action="https://airtable.com/shrVahPsEXzgfoK08">
            <button
              className={`w-3/5 rounded-md bg-primary-500 py-4 px-4 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400`}
              type="submit"
            >
              Meld deg på (frist 10. februar)
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
