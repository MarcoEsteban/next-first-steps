import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24 ">
      <span className="text-5xl">Hola Mundo</span>

      <Link href={'/about'} className="my-4 px-3 py-2 rounded-lg bg-blue-600">About</Link>
    </main>
  );
}
