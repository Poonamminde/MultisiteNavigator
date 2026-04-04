import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebsiteViewer from "./WebsiteViewer";
import NavigationButtons from "./NavigationButtons";
import NoWebsites from "./NoWebsites";
import { fetchWebsiteByPage } from "../../services/websiteService";

interface Website {
  _id: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const [website, setWebsite] = useState<Website | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWebsite = async () => {
    setLoading(true);
    try {
      const data = await fetchWebsiteByPage(page);
      if (data.websites.length) setWebsite(data.websites[0]);
      else setWebsite(null);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch website:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsite();
  }, [page]);

  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading website...</p>
      </div>
    );
  }

  if (!website) {
    return <NoWebsites />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="text-sm text-gray-200 py-2 flex justify-between w-full px-4">
        <div>{website.url}</div>
        <Link to="/upload" className="text-purple-200 hover:text-purple-600 transition">
          Upload New File
        </Link>
      </div>
      <WebsiteViewer url={website.url} />

      <NavigationButtons next={next} prev={prev} currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default Dashboard;