export default function Header() {
  return (
    <div
      className="flex justify-between text-[#0A1E3F] font-normal;
text-[20px] pl-12 pr-12 pt-4 pb-4 bg-blue-200"
    >
      <div className="flex gap-2.5">
        <svg width={34} height={34}>
          <use href="../../public/Union.svg"></use>
        </svg>
        <a href="./">Cochefy</a>
      </div>
      <ul className="hidden md:flex gap-5 ">
        <li>
          <a href="./">About us</a>
        </li>
        <li>
          <a href="./">Our Team</a>
        </li>
        <li>
          <a href="./">Contacts us</a>
        </li>
      </ul>
      <button className="md:hidden">
        <svg width={34} height={34}>
          <use width={34} height={34} href="/menu.svg"></use>
        </svg>
      </button>
    </div>
  );
}
