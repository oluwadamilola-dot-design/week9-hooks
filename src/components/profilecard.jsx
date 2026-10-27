import { useState, useEffect } from 'react';

export default function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: "Ada Lovelace",
        email: "ada@example.com",
        city: "London"
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>Profile Card Component</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>City:</strong> {profile.city}</p>
        </div>
      )}
    </div>
  );
}