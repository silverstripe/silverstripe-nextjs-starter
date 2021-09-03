import PageLayout from "../src/layouts/PageLayout"
import Hero from "../src/components/Hero"
import Features from "../src/components/Features"
import RecentBlogs from "../src/components/RecentBlogs"
import FeaturedProperties from "../src/components/FeaturedProperties"

const Home = () => {
  return (
    <PageLayout>
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedProperties />
        <Features />
        <RecentBlogs />
      </main>
    </PageLayout>
  )
}

export default Home
