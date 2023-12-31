import Link from "next/link";
import { ptSans, ptSansNarrow } from "./fonts";

type Props = {};

function Navbar({}: Props) {
  const linkStyles =
    "transition-color cursor-pointer duration-200 ease-out hover:text-white";
  return (
    <header className="hidden lg:block bg-pink-400 py-2">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={`${ptSansNarrow.className} text-3xl ${linkStyles}`}
        >
          JamStack
        </Link>
        <ul className="flex gap-6">
          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}>
            <Link href="#">Home</Link>
          </li>

          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}>
            <Link href="#">News</Link>
          </li>

          <li className={`text-lg font-bold ${ptSans.className} ${linkStyles}`}>
            <Link href="#">Merch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
