import PageLayout from "../src/layouts/PageLayout"
import ContentBlock from "../src/components/ContentBlock"
import BlogSidebar from "../src/components/blog/BlogSidebar"

const content = `
    <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
      Stay with us
    </h2>
    <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      We make it easy
    </h3>
    <p class="mt-8 text-lg text-gray-500">
      Sagittis scelerisque nulla cursus in enim consectetur quam.
      Dictum urna sed consectetur neque tristique pellentesque.
      Blandit amet, sed aenean erat arcu morbi.
    </p>
    <div class="mt-5 prose prose-indigo text-gray-500">
      <p>
        Sollicitudin tristique eros erat odio sed vitae, consequat
        turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
        Eros eu viverra donec ut volutpat donec laoreet quam urna.
      </p>
      <p>
        Bibendum eu nulla feugiat justo, elit adipiscing. Ut
        tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh
        leo. Dictum et et et sit. Faucibus sed non gravida lectus
        dignissim imperdiet a.
      </p>
      <p>
        Dictum magnis risus phasellus vitae quam morbi. Quis lorem
        lorem arcu, metus, egestas netus cursus. In.
      </p>
      <ul role="list">
        <li>Quis elit egestas venenatis mattis dignissim.</li>
        <li>
          Cras cras lobortis vitae vivamus ultricies facilisis
          tempus.
        </li>
        <li>
          Orci in sit morbi dignissim metus diam arcu pretium.
        </li>
      </ul>
      <p>
        Rhoncus nisl, libero egestas diam fermentum dui. At quis
        tincidunt vel ultricies. Vulputate aliquet velit faucibus
        semper. Pellentesque in venenatis vestibulum consectetur
        nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
        Morbi enim fermentum lacus in. Viverra.
      </p>
      <h3>How we’re different</h3>
      <p>
        Tincidunt integer commodo, cursus etiam aliquam neque, et.
        Consectetur pretium in volutpat, diam. Montes, magna cursus
        nulla feugiat dignissim id lobortis amet. Laoreet sem est
        phasellus eu proin massa, lectus. Diam rutrum posuere donec
        ultricies non morbi. Mi a platea auctor mi.
      </p>
      <p>
        Mauris ullamcorper imperdiet nec egestas mi quis quam ante
        vulputate. Vel faucibus adipiscing lacus, eget. Nunc
        fermentum id tellus donec. Ut metus odio sit sit varius non
        nunc orci. Eu, mi neque, ornare suspendisse amet, nibh.
        Facilisi volutpat lectus id sapien dis mauris rhoncus. Est
        rhoncus, interdum imperdiet ac eros, diam mauris, tortor.
        Risus id sit molestie magna.
      </p>
    </div>

`

const AboutUs = () => {
    return (
      <PageLayout>
        <main className="flex-grow mx-auto max-w-7xl w-full flex px-4 sm:px-6 lg:px-8">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
              <ContentBlock content={content} />
            </section>
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <BlogSidebar />
            </aside>
        </main>
      </PageLayout>
    )
  }
  
  export default AboutUs
  