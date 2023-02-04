import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This page is only a redirect to the new certificate page and is necessary for older certificates

function Certificate() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    window.location.assign(`https://course-platform-ruby.vercel.app/${id}`)
  })
  return (
    <div>
      Redirect to{' '}
      <a href="https://course-platform-ruby.vercel.app/${id}">
        https://course-platform-ruby.vercel.app/{id}
      </a>
    </div>
  )
}

export default Certificate
