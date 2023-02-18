import React from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";


function Link({ children, className, rel, ...restProps }) {
  return (
    <>
    <NextLink
      rel={rel ? rel : "noreferrer"}
      className={
        className
          ? className
          : "text-blue-600 underline decoration-dotted dark:text-blue-500 hover:underline hover:decoration-solid"
      }
      {...restProps}
    >
      {children}
    </NextLink>
    </>
  );
}
export default dynamic (() => Promise.resolve(Link), {ssr: false})

