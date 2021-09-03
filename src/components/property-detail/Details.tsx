import ContentToggle from '../ContentToggle'
import HTMLElement from '../../../lib/components/HTMLElement'

interface Props {
  details: any
}

const Details = ({ details }: Props): JSX.Element => {
  return (
    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="border-t divide-y divide-gray-200">
        {details.map((detail: any) => (
            <ContentToggle title={detail.name}>
                <HTMLElement html={detail.content} />
            </ContentToggle>
        ))}
      </div>
    </section>
  )
}

export default Details
