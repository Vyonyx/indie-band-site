import { ptSansNarrow } from "@/app/fonts";
import Link from "next/link";

function MiniNavbar() {
  return (
    <nav
      className={`${ptSansNarrow.className} bg-pink-300 py-4 sticky left-0 bottom-0 lg:hidden`}
    >
      <div className="w-full h-1 bg-white absolute top-0 left-0"></div>

      <ul className="flex max-w-lg mx-auto items-center justify-evenly gap-6">
        <li>
          <Link href="#">Merch</Link>
        </li>
        <li>
          <Link href="#">Events</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MiniNavbar;
