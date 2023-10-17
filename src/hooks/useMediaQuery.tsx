import { useEffect, useMemo, useState } from 'react'

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query])
  const [match, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)

    return () => mediaQuery.removeEventListener('change', onChange)
  }, [mediaQuery])

  return match
}

export function useMediaQueries() {
  const sm = useMediaQuery('(min-width: 576px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 992px)')
  const xl = useMediaQuery('(min-width: 1200px)')
  const xxl = useMediaQuery('(min-width: 1400px)')

  return { sm, md, lg, xl, xxl }
}
