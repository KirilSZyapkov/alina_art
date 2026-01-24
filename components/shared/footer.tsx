import Link from "next/link";

export default function Footer(){
  return(
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <Link href="/general-terms-and-conditions">
          <p className="text-sm text-center mb-4 hover:underline">
            Общи условия
          </p>
        </Link>
        <Link href="/payment-and-delivery">
          <p className="text-sm text-center mb-4 hover:underline">
            Плащане и доставка
          </p>
        </Link>
        <Link href="/return-policy">
          <p className="text-sm text-center mb-4 hover:underline">
            Връщане на продукти
          </p>
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alina Art. Всички права запазени.
        </p>
      </div>
    </footer>
  )
}