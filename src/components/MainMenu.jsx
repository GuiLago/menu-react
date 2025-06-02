import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <>
      <div className="flex flex-col" mb-2>
        <h1 className="text-white text-2xl font-bold text-center mt-2 mb-4 p-8">
          MENU
        </h1>
        <main className="text-white grid grid-rows-4 grid-cols-2">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </main>
      </div>
    </>
  );
}
