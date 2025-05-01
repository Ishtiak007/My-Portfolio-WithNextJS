import GitHubCalendar from 'react-github-calendar';
import Image from 'next/image';

const GithubContribution = () => {
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
        </div>
    );
};

export default GithubContribution;
