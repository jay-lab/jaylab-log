import { CONFIG } from "site.config"
import { useEffect } from "react"
import { DiscussionEmbed } from "disqus-react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"

type Props = {
  id: string
  slug: string
  title: string
}

const Disqus: React.FC<Props> = ({ id, slug, title }) => {
  const [scheme] = useScheme()

  const disqusShortname = CONFIG.disqus.config.shortname
  const disqusConfig = {
    url: `${CONFIG.link}/${slug}`,
    identifier: id,
    title: title,
    colorScheme: scheme === "light" ? "light" : "dark",
  }

  return (
    <StyledWrapper>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </StyledWrapper>
  )
}

export default Disqus

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`