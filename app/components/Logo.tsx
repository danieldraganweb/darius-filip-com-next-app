import React from "react";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Link href="/" className="logo">
        <Image src="/next.svg" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}

export default Logo;
