import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className="w-50 flex">
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={55}
            height={38}
          />
          <h1 className="font-bold text-2xl m-3">EventEase</h1>
        </Link>

        <p>2023 EventEase. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer