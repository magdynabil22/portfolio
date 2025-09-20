"use client";

import React, { useState } from "react";
import { Heading, Flex, Text, RevealFx, Column } from "@once-ui-system/core";

export function SkillsSection() {
  const skills = [
    "HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Flutter",
    "MySQL", "Git", "GitHub", "Data Structures", "Algorithms", "Design Patterns",
  ];

  return (
    <RevealFx translateY="16" delay={0.2}>
      <Column fillWidth paddingX="l" gap="m">
        <Heading as="h2" variant="display-strong-xs">Skills</Heading>
        <Flex wrap mobileDirection="column" gap="24" style={{ margin: '0 2rem' }}>
          {skills.map((skill) => {
            const [isHovered, setIsHovered] = useState(false);
            const iconsMap: Record<string, JSX.Element> = {
              HTML: <i className="devicon-html5-plain colored" style={{fontSize: '64px'}} />,
              CSS: <i className="devicon-css3-plain colored" style={{fontSize: '64px'}} />,
              Bootstrap: <i className="devicon-bootstrap-plain colored" style={{fontSize: '64px'}} />,
              JavaScript: <i className="devicon-javascript-plain colored" style={{fontSize: '64px'}} />,
              "React.js": <i className="devicon-react-original colored" style={{fontSize: '64px'}} />,
              Flutter: <i className="devicon-flutter-plain colored" style={{fontSize: '64px'}} />,
              MySQL: <i className="devicon-mysql-plain colored" style={{fontSize: '64px'}} />,
              Git: <i className="devicon-git-plain colored" style={{fontSize: '64px'}} />,
              GitHub: <i className="devicon-github-plain colored" style={{fontSize: '64px', color: '#ffffff'}} />,
              "Data Structures": <i className="fas fa-sitemap" style={{fontSize: '64px', color: '#4A90E2'}} />,
              Algorithms: <i className="fas fa-brain" style={{fontSize: '64px', color: '#7B68EE'}} />,
              "Design Patterns": <i className="fas fa-puzzle-piece" style={{fontSize: '64px', color: '#FF6B6B'}} />,
            };
            return (
              <Column
                key={skill}
                paddingY="16"
                paddingX="16"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? 'scale(1.1) translateY(-4px)' : 'scale(1) translateY(0)',
                  filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                  opacity: isHovered ? 1 : 0.8
                }}
              >
                <Flex vertical="center" gap="8">
                  <div style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)'
                  }}>
                    {iconsMap[skill] || null}
                  </div>
                </Flex>
                <Text 
                  variant="body-default-s"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: isHovered ? 'var(--brand-strong)' : 'inherit',
                    fontWeight: isHovered ? '600' : '400'
                  }}
                >
                  {skill}
                </Text>
              </Column>
            );
          })}
        </Flex>
      </Column>
    </RevealFx>
  );
}
