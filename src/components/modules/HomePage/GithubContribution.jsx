"use client"
import GitHubCalendar from 'react-github-calendar';
import Image from 'next/image';
import { useState } from 'react';

const GithubContribution = () => {
    const [imgSrc, setImgSrc] = useState(
        "https://github-readme-streak-stats.herokuapp.com/?user=ishtiak007&theme=tokyonight"
    );
    return (
        <div className="min-h-[65vh] bg-[#173447] px-4 py-10">
            <h1 className="text-white text-3xl font-bold text-center mb-8">
                My GitHub Activities
            </h1>

            <div className="bg-white dark:bg-gray-800 dark:text-white w-full max-w-6xl mx-auto p-6 md:p-10 rounded-3xl shadow-lg">
                <div className="flex justify-center items-center">
                    <GitHubCalendar
                        username="Ishtiak007"
                        colorScheme="light"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                    />
                </div>
            </div>

            <div className="flex justify-center items-center my-8">
                <Image
                    width={500}
                    height={200}
                    src={imgSrc}
                    alt="GitHub Streak"
                    onError={() => setImgSrc("/fallback.png")} // 👈 Use your local fallback
                    className="w-full max-w-md rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default GithubContribution;
