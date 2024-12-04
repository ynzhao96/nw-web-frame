"use client";

import React from "react";
// import "@/app/globals.css";

const PublicSVGViewer = ({
  fileName,
  width = "w-12",
  height = "h-12",
  alt = "SVG image",
}: any) => {
  const [error, setError] = React.useState(false);

  // Handle missing slash at the start of the path
  const svgPath = fileName.startsWith("/") ? fileName : `/${fileName}`;

  return (
    <div
      className={`${width} ${height} bg-white rounded-lg shadow-md p-4 border border-gray-200`}
    >
      {error ? (
        <div>Failed to load SVG: {fileName}</div>
      ) : (
        <img
          src={svgPath}
          alt={alt}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

// Example usage component
const ExampleUsage = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">
        SVG Files from Public Directory
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Logo</h3>
          <PublicSVGViewer fileName="/images/logo.svg" alt="Company logo" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Icon</h3>
          <PublicSVGViewer
            fileName="/window.svg"
            width="w-12"
            height="h-12"
            alt="Icon example"
          />
        </div>

        {/* Example with error handling */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Missing File</h3>
          <PublicSVGViewer
            fileName="/nonexistent.svg"
            alt="This will show error state"
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleUsage;
