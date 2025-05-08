"use client";

import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import { useState } from "react";

export default function RepoGazer() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const fetchGitHubData = async () => {
    setError("");
    setUserData(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const userJson = await userRes.json();
      setUserData(userJson);

      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
      );
      const reposJson = await reposRes.json();
      setRepos(reposJson);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        🔍 RepoGazer
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center mb-6 w-full px-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border border-teal-600 rounded-t-full md:rounded-l-full md:rounded-tr-none w-full max-w-md focus:outline-none text-black focus:ring-0 focus:border-teal-500"
        />
        <button
          onClick={fetchGitHubData}
          className="bg-teal-600 text-white px-4 py-2 border border-teal-600 rounded-b-full md:rounded-r-full md:rounded-bl-none w-full md:w-auto max-w-md hover:bg-teal-700 transition"
        >
          Search Profile
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {userData && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center gap-4">
            <Image
              src={userData.avatar_url}
              alt={userData.login}
              className="w-20 h-20 rounded-full"
              height={300}
              width={300}
            />
            <div>
              <h3 className="text-2xl font-semibold">
                {userData.name || userData.login}
              </h3>
              <p className="text-gray-600">@{userData.login}</p>
              {userData.bio && (
                <p className="text-gray-700 mt-1">{userData.bio}</p>
              )}
              <div className="mt-2 text-sm text-gray-500">
                <span>📦 {userData.public_repos} Repos</span> •{" "}
                <span>👥 {userData.followers} Followers</span> •{" "}
                <span>👣 {userData.following} Following</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold mb-4">📁 Top Repositories</h4>
          <ul className="space-y-4">
            {repos.map((repo: any) => (
              <li key={repo.id} className="bg-gray-100 p-4 rounded-lg">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-sm text-gray-700 mt-1">
                    {repo.description}
                  </p>
                )}
                <div className="text-xs text-gray-500 mt-2">
                  ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count} • 🛠️{" "}
                  {repo.language || "N/A"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
