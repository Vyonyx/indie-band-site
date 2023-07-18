import { ptSansNarrow } from './fonts'

type Props = {}

function Events({ }: Props) {
  return (
    <section className='container mx-auto my-10 h-96 lg:my-20'>
      <h1 className={`${ptSansNarrow.className} lg:text-left text-3xl text-center`}>
        Events
      </h1>
    </section>
  )
}

export default Events
