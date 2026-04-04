import { Link } from 'react-router-dom'

const NoWebsites = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <p className="text-gray-700 text-base mb-4">
          No websites available yet. Your file might still be processing or you haven't uploaded a file.
        </p>
        <Link
          to="/upload"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Upload Page
        </Link>
      </div>
  )
}

export default NoWebsites