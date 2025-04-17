import useHookAuth from '@/infrastructure/auth/hooks/useHookAuth';

export default function Login() {
  const { logInGitHub, logInGoogle } = useHookAuth();
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form
          action={
            logInGoogle
          }
        >
          <button type="submit">SignIn with Google</button>
        </form>
        <form
          action={
            logInGitHub
          }
        >
          <button type="submit">SignIn with GitHub</button>
        </form>
      </main>
    </div>
  )
}
