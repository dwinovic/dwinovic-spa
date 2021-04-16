import { Button, Header, Logo, Nav } from '../components';

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto bg-blue-400">
          <Header />
          <div className="text-center">
            <h2 className="text-white text-3xl font-semibold font-mono w-8/12 mx-auto">
              Saya seorang front-end engineer, back-end engineer, dan juga UI
              designer
            </h2>
            <p className="text-lg text-white text-opacity-60 w-4/12 mx-auto mt-6">
              Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
              design.
            </p>
            <Button className="mt-10">Lets Go</Button>
          </div>
        </div>
      </div>
    </>
  );
}
