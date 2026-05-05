import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300 rounded-t-lg animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded mb-3 animate-pulse"></div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
        </div>

        {/* Badge Skeleton */}
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
