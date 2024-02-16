"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {data, status} = useSession();

   return (
    // <div className={styles.container}>

    // </div>

    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span onClick={signOut} className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {status === "notauthenticated" ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span onClick={signOut}>Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
