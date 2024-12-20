import React from 'react'

const Notfound = () => {
    return (
        <div> <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-4xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
                <p className="mt-4 text-lg text-gray-500">You can go back to the <a href="/" className="text-blue-500 hover:underline">home page</a>.</p>
            </div>
        </div></div>
    )
}

export default Notfound