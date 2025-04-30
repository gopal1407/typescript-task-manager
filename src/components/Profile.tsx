import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading profile...</div>;
  if (!isAuthenticated) return <div>You must be logged in to view your profile.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <img src={user?.picture} alt="Profile" width={80} />
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Nickname:</strong> {user?.nickname}</p>
      <p><strong>Auth0 ID:</strong> {user?.sub}</p>
    </div>
  );
};

export default Profile;
