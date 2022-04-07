import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full px-5 border-dashed border-t border-gray-700 mt-8 py-4 justify-center items-center md:justify-between md:flex-row">
      <div className="mt-4 order-2 md:order-1 md:my-auto md: mr-4">
        <p className="font-secondary font-semibold text-gray-400 text-md ">
          PBL PROJECT 2022 - Aryan, Vaidehi, Darshan, Neeraj & Ruchita
        </p>
      </div>
    </footer>
  );
}
