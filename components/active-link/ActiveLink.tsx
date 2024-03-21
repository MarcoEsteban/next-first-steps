"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ( { path, text }: Props ) => {
  
  // Este hook nos sirve para obetener la ruta en la que nos encontramos.
  const pathName = usePathname()
  
  return (
    <Link 
      className={ `${ style.link } ${ (pathName === path) && style.active_link }` } 
      href={ path }>
      { text }
    </Link>
  ) 
}
