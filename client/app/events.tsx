import { ptSans, ptSansNarrow } from "./fonts";

type Props = {};

function Events({}: Props) {
  return (
    <section className="container mx-auto my-10 lg:my-14">
      <h1
        className={`${ptSansNarrow.className} lg:text-left text-3xl text-center`}
      >
        Events
      </h1>

      <ul className="mt-5 flex flex-col">
        <ListedEvent
          date={new Date()}
          venue="Power Station"
          city="Auckland"
          state="VIC"
          links={{ rsvp: "somelink.com", ticket: "someotherlink.com" }}
        />

        <ListedEvent
          date={new Date()}
          venue="Power Station"
          city="Auckland"
          state="VIC"
          links={{ rsvp: "somelink.com", ticket: "someotherlink.com" }}
        />

        <ListedEvent
          date={new Date()}
          venue="Power Station"
          city="Auckland"
          state="VIC"
          links={{ rsvp: "somelink.com", ticket: "someotherlink.com" }}
        />
      </ul>
    </section>
  );
}

type ListEventProps = {
  date: Date;
  venue: string;
  city: string;
  state?: string;
  links: {
    rsvp: string;
    ticket: string;
  };
};

function ListedEvent({ date, venue, city, state, links }: ListEventProps) {
  return (
    <li
      className={`flex items-center py-2 px-4 justify-between gap-10 ${ptSans.className} text-lg hover:bg-pink-100`}
    >
      <div className="flex gap-10">
        <span>
          <span>
            {`${date.toLocaleString("default", { month: "short" })}`}.
          </span>
          <span className="ml-2">{`${date.toLocaleString("default", {
            day: "2-digit",
          })}`}</span>
        </span>

        <span className="font-bold">{venue}</span>
      </div>

      <div className="flex items-center gap-20">
        <span>
          <span>{city}</span>
          {state && <span>, {state}</span>}
        </span>

        <span className="flex gap-4">
          {links.rsvp && (
            <a className="cursor-pointer font-bold transition-colors duration-200 hover:text-pink-500">
              RSVP
            </a>
          )}

          {links.ticket && (
            <a className="cursor-pointer font-bold transition-colors duration-200 hover:text-pink-500">
              Ticket
            </a>
          )}
        </span>
      </div>
    </li>
  );
}

export default Events;
