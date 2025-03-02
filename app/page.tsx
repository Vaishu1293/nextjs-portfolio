import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-bold text-red-700">Hello, Portfolio</h1>
        <Hero/>
      </div>
    </main>
  );
}
