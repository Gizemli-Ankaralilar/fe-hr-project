/* src/pages/Home.js */

import React, { useState } from 'react';
import './styles/Home.scss';

function Home() {
  const [sections, setSections] = useState([
    {
      title: 'HAFTA 1',
      expanded: false,
      subSections: [
        {
          title: 'BACKLOG 1',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 2',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 3',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 4',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
      ],
    },
    {
      title: 'HAFTA 2',
      expanded: false,
      subSections: [
        {
          title: 'BACKLOG 1',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 2',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 3',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 4',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
      ],
    },
    {
      title: 'HAFTA 3',
      expanded: false,
      subSections: [
        {
          title: 'BACKLOG 1',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 2',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 3',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 4',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
      ],
    },
    {
      title: 'HAFTA 4',
      expanded: false,
      subSections: [
        {
          title: 'BACKLOG 1',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 2',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 3',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
        {
          title: 'BACKLOG 4',
          expanded: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
            },
            {
              title: 'İş 2',
              expanded: false,
            },
          ],
        },
      ],
    },
  ]);

  const toggleSection = (section) => {
    section.expanded = !section.expanded;
    setSections([...sections]);
  };

  return (
    <div className="home-container">
      <h1>İnsan Kaynakları Yönetimi Projesi</h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          <div
            className={`section-title ${section.expanded ? 'active' : ''}`}
            onClick={() => toggleSection(section)}
          >
            {section.title}
            <input type="checkbox" disabled checked className="custom-checkbox" />
          </div>
          {section.expanded && section.subSections && (
            <div className="sub-sections">
              {section.subSections.map((subSection, subSectionIndex) => (
                <div key={subSectionIndex} className="sub-section">
                  <div
                    className={`sub-section-title ${subSection.expanded ? 'active' : ''}`}
                    onClick={() => toggleSection(subSection)}
                  >
                    {subSection.title}
                    <input type="checkbox" disabled checked className="custom-checkbox" />
                  </div>
                  {subSection.expanded && subSection.subSections && (
                    <div className="content">
                      {subSection.subSections.map((subSubSection, subSubSectionIndex) => (
                        <div key={subSubSectionIndex} className="sub-sub-section">
                          {subSubSection.title}
                          <input type="checkbox" disabled checked className="custom-checkbox" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
