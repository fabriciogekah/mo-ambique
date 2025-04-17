import useHookAuth from "@/infrastructure/auth/hooks/useHookAuth";
import { auth } from "@/infrastructure/auth/provider/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const { logOut } = useHookAuth();

  if (!session) {
    redirect("/login");
  }

  return ( //visivel oia oia
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Dashboard</p>
        <p>Usuario logado: {session.user?.name}</p>
        {session.user?.email && (
          <form
            action={logOut}
          >
            <button type="submit">signOut</button>
          </form>
        )}
      </main>
    </div>
  )
}