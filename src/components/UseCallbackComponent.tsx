import { useCallback, useState } from "react";
import Search from "./search";

const allUsers = ["Alice", "Bob", "Charlie", "David", "Eve"];

const UseCallbackComponent = () => {
  const [users, setUsers] = useState(allUsers);

  const handleFilter = useCallback(
    (text: string) => {
      console.log(users[0]);
      const filteredusers = allUsers.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredusers);
    },
    [users]
  );

  function shuffle(allUsers: string[]): string[] {
    const shuffled = [...allUsers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  return (
    <div>
      <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
      <Search onChange={handleFilter} />
      {users.map((user) => (
        <div key={user}>{user}</div>
      ))}
    </div>
  );
};

export default UseCallbackComponent;
