import { useUserContext } from "../libs/context";

export const Sidebar = () => {
  const user = useUserContext();
  
  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription status: {user.isSubscribed}</div>
    </div>
  );
};

export const Profile = () => {
  const user = useUserContext();
  return <div>{user.name}</div>;
};
