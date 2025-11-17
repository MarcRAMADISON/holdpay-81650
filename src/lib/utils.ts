import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Enregistrer l'utilisateur en cours dans le local storage du navigateur
export const setCurrentUser=(user:any)=>{
  localStorage.setItem('currentUser',JSON.stringify(user))
}

// Accéder à l'utilisateur en cours depuis le local storage du navigateur
export const getCurrentUser=()=>{
  return JSON.parse(localStorage.getItem('currentUser'))
}

// Verifier si l'utilisateur est authentifié
export const isAuthenticated=()=>{
  return !!localStorage.getItem('currentUser')
}
