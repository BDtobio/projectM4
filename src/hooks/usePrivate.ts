import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const usePrivate = () => {
    const router = useRouter()
    const { isAuthenticated } = useAuth()
    
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/home")
        }
    }, [isAuthenticated, router]) 
}
