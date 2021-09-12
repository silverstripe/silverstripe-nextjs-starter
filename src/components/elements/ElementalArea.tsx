import cache from "cache"
import { BaseElementInterfaceConnection } from "ss-schema"


interface Props {
  elements: BaseElementInterfaceConnection["nodes"]
}
const { elementalManifest } = cache

const ElementalArea = ({ elements }: Props): JSX.Element => {
  return (
    <>
      {elements.map((element, i) => {
        const type = element.__typename
        // @ts-ignore
        const ElementComponent = elementalManifest[type]
        if (!ElementComponent) {
          return <div key={`${type}--${i}`} className="element not-found">No element found for {type}</div>
        }
        return (
          <section key={element.id}>            
              <ElementComponent element={element} />            
          </section>
        )
      })}
      <style jsx>{`
        .not-found {
          border: 5px dashed #ccc;
          padding: 4rem;
          text-transform: uppercase;
          text-align: center;
          width: 40%;
          min-width: 350px;
          margin: 2rem auto;
        }
      `}</style>
    </>
  )
}

export default ElementalArea
