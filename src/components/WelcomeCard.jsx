const WelcomeCard = () => {
    return (
        <div className='bg-white rounded-lg p-6 max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold text-gray-800'>Ready to start your journey?</h2>
            <p className='text-gray-600 mb-6'>Win Wins helps you build confidence through small, achievable tasks.</p>

{/* Task & Reward Cards */}

            <div className='grid grid-col-2 gap-4'>
                <div className='bg-green-100 p-4 rounded-lg text-center'>
                    <i className="fas fa-bullseye text-2xl mb-2"></i>
                    <h3 className='font-semibold text-gray-800'>Complete Tasks</h3>
                    </div>
                <div className='bg-yellow-100 p-4 rounded-lg text-center'>
                    <i className="fas fa-trophy text-2xl mb-2"></i>
                    <h3 className='font-semibold text-gray-800'>Earn Rewards</h3>
                </div>
            </div>
{/* Button */}

            <div className='text-center'>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg'>
                    Start My Journey
                </button>
            </div>
        </div>
    );
}

export default WelcomeCard;