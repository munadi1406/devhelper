'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter, } from "next/navigation";
import { useEffect } from "react";
import { generateUUID } from "@/lib/generateUUID";


 
export default function Header() {
    const pathName = usePathname()
    const route = useRouter()
    useEffect(()=>{
        generateUUID()
    },[])
    const handleClick =()=>{
        if(pathName === '/write'){
            return route.back()
        }
        return route.push('/write')

    }
   
    return (
        <nav className="flex justify-between py-4 px-6">
            <div> 
                <Link href={'/'}>
                    <h1 className="text-3xl font-semibold">DevHelper</h1>
                </Link>
            </div>
            <div className="flex gap-3">
                <Input type="input" placeholder="Search" />
               
                    <Button onClick={handleClick}>{pathName === '/write' ? 'back' : 'write'}</Button>
               
            </div>
        </nav>
    )
}