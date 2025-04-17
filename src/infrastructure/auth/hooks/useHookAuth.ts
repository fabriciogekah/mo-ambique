import { auth, signIn, signOut } from '@/infrastructure/auth/provider/auth'
import { redirect } from 'next/navigation'

export default function useHookAuth() {
  const session = auth()

  async function logInGoogle() {
    'use server'
    await signIn('google', {
      redirectTo: '/dashboard',
    })
  }

  async function logInGitHub() {
    'use server'
    await signIn('github', {
      redirectTo: '/dashboard',
    })
  }

  async function logOut() {
    'use server'
    if (!session) return
    await signOut()
    redirect('/login')
  }

  return { logInGitHub, logInGoogle, logOut }
}
