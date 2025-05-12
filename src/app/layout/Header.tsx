import { BiMoon } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center shadow-md mx-auto px-5 md:px-20 py-8 w-full">
        <h1 className="font-bold text-lg">Where in the world?</h1>
        <button
          className="flex items-center gap-2 shadow-md px-3 py-2 rounded-xl cursor-pointer"
          type="button"
          onClick={() => {
            document.body.classList.toggle("dark");
            const theme = document.body.classList.contains("dark")
              ? "dark"
              : "light";
            localStorage.setItem("theme", theme);
          }}
        >
          <BiMoon size={25} /> Dark Mode
        </button>
      </div>
    </>
  );
}
