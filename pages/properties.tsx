import PageLayout from "../src/layouts/PageLayout"
import MobileFilterPanel from "../src/components/properties/MobileFilterPanel"
import SortMenu from "../src/components/properties/SortMenu"
import MobileFilterToggle from "../src/components/properties/MobileFilterToggle"
import DesktopFilters from "../src/components/properties/DesktopFilters"
import ActiveFilters from "../src/components/properties/ActiveFilters"
import PropertiesGrid from "../src/components/properties/PropertiesGrid"

export interface FilterOption {
  value: number | string
  label: string
  id: string
}

export interface AvailableFilter {
  id: string
  name: string
  isMulti: boolean
  options: Array<FilterOption>
}

const filters = [
  {
    id: "region",
    name: "Region",
    isMulti: true,
    options: [
      { id: `region-1`, value: 1, label: "Mordor" },
      { id: `region-2`, value: 2, label: "Hildorien" },
      { id: `region-3`, value: 3, label: "Rhovanion" },
      { id: `region-4`, value: 4, label: "Forodwaith" },
      { id: `region-5`, value: 5, label: "Harad" },
    ],
  },
  {
    id: "type",
    name: "Property type",
    isMulti: true,
    options: [
      { id: `type-1`, value: 1, label: "Hut" },
      { id: `type-2`, value: 2, label: "Hovel" },
      { id: `type-3`, value: 3, label: "Flat" },
      { id: `type-4`, value: 4, label: "House" },
      { id: `type-5`, value: 5, label: "Palace" },
    ],
  },

  {
    id: "price",
    name: "Max price",
    isMulti: false,
    options: [
      { id: `price-1`, value: 50, label: "$50 per night" },
      { id: `price-2`, value: 100, label: "$100 per night" },
      { id: `price-3`, value: 200, label: "$200 per night" },
      { id: `price-4`, value: 300, label: "$300 per night" },
      { id: `price-5`, value: 400, label: "$400 per night" },
      { id: `price-6`, value: 500, label: "$500 pernight" },
    ],
  },
]

const Properties = () => {
  return (
    <PageLayout>
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <MobileFilterPanel filters={filters} />
        <section className="my-4" aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>

          <div className="relative z-10 bg-white border-b border-gray-200 pb-4">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <SortMenu />
              <MobileFilterToggle />
              <DesktopFilters filters={filters} />
            </div>
          </div>

          <ActiveFilters />
        </section>
        <section
          aria-labelledby="products-heading"
          className="max-w-2xl pt-12 pb-16 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2 id="products-heading" className="sr-only">
            Properties
          </h2>
          <PropertiesGrid />
        </section>
      </main>
    </PageLayout>
  )
}

export default Properties
