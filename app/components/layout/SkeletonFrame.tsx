import React from 'react';
import Link from 'next/link';
interface MediaProps {
  loading?: boolean;
  img?: string;
  title?: string;
  desc?: string;
  link: string;
}

export default function Media(props: MediaProps) {
  const { loading = false } = props;
  const {img, title, desc, link} = props;

  return (
    <div className="max-w-sm mx-2 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center p-4">
        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-10 w-10"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <img
              className="h-10 w-10 rounded-full"
              src="data:image/png;base64,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"
              alt="Ted talk"
            />
            <div className="ml-4 flex-1">
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Nfac-articles</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</div>
            </div>
            <button className="text-gray-500 dark:text-gray-400 ml-auto">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </React.Fragment>
        )}
      </div>
      {loading ? (
        <div className="animate-pulse h-48 bg-gray-400"></div>
      ) : (
        <img
          className="h-48 w-full object-cover"
          src={img}
          alt="Ted talk"
        />
      )}
      <div className="p-4">
        {loading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        ) : (
          <div>
            <Link href={link}>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h1>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {desc}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
