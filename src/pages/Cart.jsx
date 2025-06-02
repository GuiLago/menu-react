import { LoaderIcon } from "lucide-react";

export default function Cart() {
  return (
    <>
      <div className="bg-black flex justify-center items-center">
        <h1 className="text-white text-2xl font-medium p-8">My Cart</h1>
      </div>

      <div className="flex justify-center items-center text-white">
        <h2 className="text-4xl">Loading...</h2>
        <LoaderIcon />
      </div>
    </>
  );
}
