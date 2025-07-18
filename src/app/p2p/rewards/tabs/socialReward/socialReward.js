import React from 'react';

function SocialReward() {
  // Social media task data
  const socialTasks = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      title: "Verify Twitter account",
      points: 300,
      isDone: false,
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
      ),
      title: "Verify email address",
      points: 200,
      isDone: false,
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.05 1.577c-0.393-0.016-0.784 0.004-1.171 0.061-2.349 0.351-10.381 2.497-15.002 4.574-0.992 0.446-1.847 1.389-1.874 2.388-0.057 1.856 0.554 5.336 0.875 5.674 0.247 0.261 0.882 0.409 1.543 0.615 2.772 0.851 6.049 1.785 9.185 2.745 0.449 0.137 0.914-0.022 1.149-0.403 1.645-2.686 3.580-5.728 5.348-8.348 0.304-0.449-0.171-0.845-0.637-0.531-1.993 1.358-5.253 3.582-7.025 4.725-0.35 0.227-0.707-0.188-0.395-0.451 2.16-1.901 7.233-6.477 9.279-8.296 0.244-0.215 0.504-0.322 0.707-0.36 0.301-0.055 0.607-0.055 0.909-0.004 0.344 0.057 0.624 0.311 0.686 0.669 0.072 0.449 0.211 1.384 0.252 2.403 0.051 1.245-0.004 2.473-0.154 3.706-0.15 1.205-0.394 2.219-0.591 2.973-0.358 1.356-2.196 1.439-3.433 1.098-0.298-0.081-0.744-0.352-0.993-0.834-0.356-0.695-0.652-1.435-0.909-2.188-0.052-0.154-0.219-0.252-0.381-0.233-0.135 0.015-0.252 0.11-0.281 0.242-0.394 1.782-0.769 3.496-1.161 5.255-0.058 0.244 0.139 0.452 0.376 0.421 2.233-0.322 4.477-0.598 6.71-0.895 0.261-0.033 0.452-0.266 0.44-0.529-0.022-0.425-0.057-0.855-0.081-1.296-0.022-0.432-0.189-0.851-0.493-1.119-0.274-0.242-0.646-0.405-1.122-0.458-0.301-0.033-0.601-0.045-0.901-0.029-0.33 0.015-0.647 0.057-0.957 0.081 0.076-0.312 0.15-0.632 0.228-0.958 0.169-0.7 0.328-1.414 0.44-2.117 0.189-1.17 0.287-2.414 0.228-3.61-0.043-0.887-0.189-1.785-0.407-2.295-0.204-0.478-0.557-0.855-0.993-1.004-0.356-0.127-0.738-0.183-1.131-0.198z" />
        </svg>
      ),
      title: "Verify Telegram account",
      points: 300,
      isDone: false,
    },
    {
      id: 4,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
        </svg>
      ),
      title: "Verify LinkedIn account",
      points: 250,
      isDone: false,
    },
    {
      id: 5,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      title: "Verify Instagram account",
      points: 200,
      isDone: true,
    },
    {
      id: 6,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      title: "Verify YouTube account",
      points: 250,
      isDone: false,
    },
    {
      id: 7,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "Verify GitHub account",
      points: 200,
      isDone: true,
    },
    {
      id: 8,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.297.3-.496.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      ),
      title: "Verify WhatsApp number",
      points: 150,
      isDone: false,
    }
  ];

  return (
    <div className="space-y-3">
      {socialTasks.map(task => (
        <div 
          key={task.id} 
          className="w-full bg-[var(--background-color)] rounded-lg p-3 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--card-color)] flex items-center justify-center text-[var(--text-color)]">
              {task.icon}
            </div>
            <div className="ml-3">
              <h4 className="text-white text-sm font-medium">{task.title}</h4>
              <div className="flex items-center mt-1">
                <svg 
                  className="w-4 h-4 text-yellow-500 mr-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                </svg>
                <span className="text-yellow-500 text-xs">{task.points} points</span>
              </div>
            </div>
          </div>
          
          <button 
            className={`px-4 py-1.5 rounded text-sm font-medium ${
              task.isDone 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-[var(--sec-color)] text-white hover:bg-opacity-90 transition-colors'
            }`}
            disabled={task.isDone}
          >
            {task.isDone ? 'Verified' : 'Verify'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SocialReward;
