import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { DashboardContext } from "./libs/context";

export interface User{
  name: string;
  isSubscribed: boolean;
}

function App() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  })

  return (
    <>
    <DashboardContext.Provider value={user}>
      <Dashboard/>
    </DashboardContext.Provider>
    </>
  )
}

export default App
