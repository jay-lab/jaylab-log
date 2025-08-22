import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const DisqusComponent = dynamic(
  () => {
    return import("./Disqus")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.disqus.enable && (
        <DisqusComponent id={data.id} slug={data.slug} title={data.title} />
      )}
    </div>
  )
}

export default CommentBox
