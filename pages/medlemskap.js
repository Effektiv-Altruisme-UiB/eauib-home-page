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
            Medlemskap
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Denne siden forklarer hva medlemskap i EA UiB innebærer og hvem som regnes som medlemmer
          </p>
        </div>
        <div className="container py-12">
          <h2 className="pb-4 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Fordeler og rettigheter som medlem
          </h2>
          <p className="text-lg leading-7 text-black dark:text-white">
            Som betalende medlem i EA UiB har mann stemmerett på årsmøte hvert vårsemester.
            <br />
            <br />
            Som betalende medlem i EA UiB trenger man heller ikke å betale for medlemskap i EA Norge
            i tillegg. Du er fortsatt velkommen til å delta på de fleste av EA UiB sine aktiviteter
            uten å betale kontingent. Grunnen til at vi har kontingent er hovedsakelig så vi har en
            enkel måte å juridisk definere medlemmer våre på.
            <br />
            <br />
            For å offisielt regnes som medlem i EA UiB må du betale medlemskontingent hvert
            semester. Betalingsinformasjon finnes lenger nede på siden.
            <br />
            <br />
            Annet enn fordelene beskrevet over får man ingen ytterligere fordeler av å betale
            medlemskontingenten i EA UiB sammenlignet med ikke-betalende medlemmer.
            <br />
            <br />
            Medlemskriteriene er også forklart i vedtekene våre som finnes her:
            <br />
            <br />
            <a href="https://drive.google.com/file/d/1-0BW6CZ3XTBllNNm2uZN2JgXhWd1jlYA/view">
              https://drive.google.com/file/d/1-0BW6CZ3XTBllNNm2uZN2JgXhWd1jlYA/view
            </a>
          </p>
        </div>
      </div>
      <div className="container py-12">
        <h2 className="pb-4 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
          Medlemskontingent
        </h2>
        <p className="pb-4 text-lg leading-7 text-black dark:text-white">
          For øyeblikket er kontingenten vår 200 kr per semester. For å regnes som medlem i EA UiB
          må du ha betalt kontingenten
          <br />
          <br />
          Dersom du ønsker å betale kontingent for inneværende semester kan du overføre 200 kr til
          kontonr <strong>1506 68 91914</strong>. Vennligst marker betalingen med f.eks. "kontingent
          V23 - Navnet ditt" for vårsemesteret 2023.
        </p>
      </div>
    </>
  )
}
