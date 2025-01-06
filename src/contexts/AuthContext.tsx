// "use client";

// import { ILogin } from "@/interfaces/ILogin";
// import { IUser } from "@/interfaces/IUser";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// import { createContext, useContext, useEffect, useState } from "react";

// interface AuthContextType {
//     user: IUser | null,
//     isAuthenticated: boolean;
//     login: (form: ILogin) => void;
//     logout: () => void;
//     token: string | null;
// }

// const AuthContext = createContext<AuthContextType>({
//     user: null,
//     isAuthenticated: false,
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     login: (form: ILogin) => {},
//     logout: () => {},
//     token: null,
// });

// export function AuthProvider({ children }: {children : React.ReactNode}) {
//     const [user, setUser] = useState<IUser | null>(null);
//     const [token, setToken] = useState<string | null>(null);
//     // useState({});
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const router = useRouter();
    
//     useEffect(() => {
//         const user = localStorage.getItem("user");
//         const token = localStorage.getItem("token");    
//         if (user && token) {
//             setUser(JSON.parse(user));
//             setToken(token);
//             setIsAuthenticated(true);
//         } else {
//             setUser(null);
//             setToken(null);
//             setIsAuthenticated(false);
//         }
//     }, []);
    
//     const login = async (form: ILogin) => {
//         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`,
//              form
//             )
//         setUser(response.data.user);
//         setToken(response.data.token);
//         setIsAuthenticated(true);
            
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         localStorage.setItem("token", response.data.token);
//         router.push("/home");
//     }

//     const logout = async () => {
//         setUser(null);
//         setIsAuthenticated(false);
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         router.push("/home");
//     }


//     return (
//     <AuthContext.Provider value={{user, login, logout, isAuthenticated,token}}>
//         {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     // if (context === undefined) {
//     //     throw new Error("useAuth must be used within a AuthProvider");
//     // }

//     return context;
// };
"use client";

import { ILogin } from "@/interfaces/ILogin";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (form: ILogin) => Promise<void>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  token: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (form: ILogin) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        form
      );
      const { user, token } = response.data;

      setUser(user);
      setToken(token);
      setIsAuthenticated(true);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      router.push("/home");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirigir después de que los estados se actualicen
    router.push("/home");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
