import { useState, useEffect } from 'react';
import Head from 'next/head';
import { sections } from './data';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedSection !== 'home' && sections[selectedSection].items) {
        const items = sections[selectedSection].items;
        if (event.key === 'ArrowDown') {
          setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else if (event.key === 'ArrowUp') {
          setSelectedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
      }

      switch (event.key) {
        case '1':
          setSelectedSection('home');
          break;
        case '2':
          setSelectedSection('experience');
          break;
        case '3':
          setSelectedSection('projects');
          break;
        case '4':
          setSelectedSection('skills');
          break;
      }
    };

    if (isClient) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [selectedSection, selectedIndex, isClient]);

  useEffect(() => {
    if (sections[selectedSection].items) {
      setSelectedItemName(sections[selectedSection].items[selectedIndex]?.name);
    }
  }, [selectedSection, selectedIndex]);

  const handleItemClick = (sectionKey, item) => {
    setSelectedSection(sectionKey);
    setSelectedItemName(item.name);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-darkblue text-gray-300 font-mono h-screen flex flex-col">
      <Head>
        <title>Safan Danis NK - Security Engineer</title>
        <meta name="description" content="Safan Danis NK's personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-1/4 p-2 flex flex-col border-r border-white">
          <div className="mb-4 flex-shrink-0">
            <h2
              className={`text-xl px-2 bg-darkblue ${selectedSection === 'home' ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => { setSelectedSection('home'); setSelectedItemName(null); }}
            >
              About
            </h2>
            <div className="border border-white p-2 mt-1">
              <p className="text-s px-2 pb-2" dangerouslySetInnerHTML={{ __html: sections['home'].overview }} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {Object.entries(sections).map(([key, section]) => (
              key !== 'home' && (
                <div key={key} className="mb-4 relative">
                  <h2
                    className={`text-xl px-2 bg-darkblue ${selectedSection === key ? 'text-blue-400' : 'text-gray-300'}`}
                    onClick={() => { setSelectedSection(key); setSelectedItemName(null); }}
                  >
                    {section.title}
                  </h2>
                  <div className="border border-white p-2 mt-1">
                    {section.items && (
                      <div className="pb-2">
                        {section.items.map((item, index) => (
                          <div
                            key={index}
                            className={`mt-2 ${selectedItemName === item.name ? 'bg-blue-500 text-gray-300' : 'text-gray-300'} cursor-pointer`}
                            onClick={() => handleItemClick(key, item)}
                          >
                            {item.name} {item.company && `@ ${item.company}`}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {(key === 'skills' || key === 'projects' || key === 'experience') && (
                    <div className="absolute bottom-0 right-4 transform translate-y-1/2 px-1 bg-darkblue text-xs text-gray-500">
                      {selectedItemName
                        ? sections[key].items.findIndex(item => item.name === selectedItemName) + 1
                        : 0} of {section.totalCount || section.items.length}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 p-2 overflow-y-auto">
          <div className="border border-white p-2 h-full overflow-y-auto">
            {selectedSection === 'home' ? (
              <div>
                <div className="border-1 border-white p-2">
                  <p dangerouslySetInnerHTML={{ __html: sections[selectedSection].description }} />
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl mb-2 ">{selectedItemName}</h2>
                {sections[selectedSection].items && selectedItemName ? (
                  <div className="border-1 border-white p-2">
                    <p dangerouslySetInnerHTML={{ __html: sections[selectedSection].items.find(item => item.name === selectedItemName)?.description }} />
                  </div>
                ) : (
                  <div className="border-1 border-white p-2">
                    {`Select an item from the ${sections[selectedSection].title} section to see details.`}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-4 bg-darkblue border-t border-white">
        <p className="text-gray-400">Use arrow keys to navigate or just use the mouse</p>
        <div className="mt-2">
          <a
            href="/safan-danis-resume.pdf"
            className="text-blue-400 mr-4"
            download="Safan-Danis-Resume.pdf"
          >
            <i className="fas fa-file-download"></i> Resume
          </a>
          <a
            href="https://github.com/danisnk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <i className="fab fa-github mr-4"></i>
          </a>
          <a
            href="https://linkedin.com/in/nksafan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>

      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4a5568 #1a202c;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a202c;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a5568;
          border-radius: 4px;
          border: 2px solid #1a202c;
        }

        /* Apply custom scrollbar to all scrollable areas */
        .overflow-y-auto {
          @apply custom-scrollbar;
        }
      `}</style>
    </div>
  );
}