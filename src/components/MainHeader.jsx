export default function MainHeader() {
  return (
    <>
      <div className="w-full h-[420px] bg-[url(../src/assets/bg.png)] flex justify-center items-center">
        <img
          src="../src/assets/logoCor.jpg"
          alt="logo"
          className="w-32 h-32 absolute rounded-full shadow-lg hover:scale-110 duration-300 z-10 mx-auto"
        />
        <h1 className="text-white text-3xl font-bold  mt-50">Dev Burguer</h1>
      </div>
    </>
  );
}
