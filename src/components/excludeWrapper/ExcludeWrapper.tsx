"use client";

import { usePathname } from "next/navigation";


const excludeRoutes = ["/", "auth/login", "auth/register"];
export default function ExcludeWrapper({children}:{children:React.ReactNode}) {
    const path=usePathname();
    if(!excludeRoutes.includes(path)) return children;     
}