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
    return null;
  }

  return (
    <div className="bg-navy text-cyan-100 font-mono h-screen flex flex-col">
      <Head>
        <title>Safan Danis NK - Security Engineer</title>
        <meta name="description" content="Safan Danis NK's personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-1 overflow-hidden p-2">
        {/* Left Sidebar */}
        <div className="w-1/4 flex flex-col border-r border-cyan-800 pr-2">
          <div className="flex flex-col h-1/5 mb-2">
            <h2
              className={`text-lg px-2 py-1 ${selectedSection === 'home' ? 'bg-cyan-900 text-cyan-100' : 'text-cyan-100'} cursor-pointer`}
              onClick={() => { setSelectedSection('home'); setSelectedItemName(null); }}
            >
              About
            </h2>
            <div className="border border-cyan-800 p-2 mt-1 flex-grow overflow-y-auto custom-scrollbar">
              <p className="text-sm px-2 pb-2" dangerouslySetInnerHTML={{ __html: sections['home'].overview }} />
            </div>
          </div>

          {Object.entries(sections).map(([key, section], index) => (
            key !== 'home' && (
              <div key={key} className={`flex flex-col ${index === Object.keys(sections).length - 2 ? 'h-1/5' : 'h-2/5'} mb-2`}>
                <h2
                  className={`text-lg px-2 py-1 ${selectedSection === key ? 'bg-cyan-900 text-cyan-100' : 'text-cyan-100'} cursor-pointer`}
                  onClick={() => { setSelectedSection(key); setSelectedItemName(null); }}
                >
                  {section.title}
                </h2>
                <div className="border border-cyan-800 p-2 mt-1 flex-grow overflow-y-auto custom-scrollbar">
                  {section.items && (
                    <div>
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className={`py-1 px-2 ${selectedItemName === item.name ? 'bg-cyan-900 text-cyan-100' : 'text-cyan-100'} cursor-pointer hover:bg-cyan-800`}
                          onClick={() => handleItemClick(key, item)}
                        >
                          {item.name} {item.company && `@ ${item.company}`}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Main Content Area */}
        <div className="w-3/4 pl-2 overflow-y-auto custom-scrollbar">
          <div className="border border-cyan-800 p-2 h-full">
            {selectedSection === 'home' ? (
              <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].description }} />
            ) : (
              <div>
                <h2 className="text-xl mb-2 text-cyan-100">{selectedItemName}</h2>
                {sections[selectedSection].items && selectedItemName ? (
                  <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].items.find(item => item.name === selectedItemName)?.description }} />
                ) : (
                  <div>{`Select an item from the ${sections[selectedSection].title} section to see details.`}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-2 border-t border-cyan-800">
        <p className="text-cyan-500 text-sm">Use arrow keys to navigate or mouse click</p>
        <div className="mt-1">
          <a href="/safan-danis-resume.pdf" className="text-cyan-300 mr-4" download="Safan-Danis-Resume.pdf">
            [Resume]
          </a>
          <a href="https://github.com/danisnk" target="_blank" rel="noopener noreferrer" className="text-cyan-300 mr-4">
            [GitHub]
          </a>
          <a href="https://linkedin.com/in/nksafan" target="_blank" rel="noopener noreferrer" className="text-cyan-300">
            [LinkedIn]
          </a>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --navy: #1c1d26;
          --cyan: #7fdbff;
        }
        body {
          font-family: 'Fira Code', monospace;
          background-color: var(--navy);
        }
        .bg-navy {
          background-color: var(--navy);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #003366 var(--navy);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--navy);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #003366;
          border-radius: 3px;
          border: 1px solid var(--navy);
        }
      `}</style>
    </div>
  );
}