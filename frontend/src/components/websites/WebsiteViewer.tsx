const WebsiteViewer = ({ url }: { url: string }) => {
  console.log("Rendering WebsiteViewer with URL:", url);

  return (
    <iframe
        src={url}
        title="website-view"
        className="w-full grow"
      />
  );
};

export default WebsiteViewer;