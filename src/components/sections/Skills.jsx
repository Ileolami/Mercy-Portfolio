import React from 'react';

const SkillsMarquee = () => {
  const skills = [
      {
        name: 'Hugo',
        category: 'Tools',
        color: '#FF4088',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M11.754 0a3.998 3.998 0 0 0-2.049.596L3.33 4.532a4.001 4.001 0 0 0-2.017 3.474v8.47c0 1.452.788 2.79 2.049 3.497l6.346 3.91a4.001 4.001 0 0 0 4.098 0l6.346-3.91a4.001 4.001 0 0 0 2.049-3.497v-8.47a4.001 4.001 0 0 0-2.017-3.474l-6.346-3.936A4.001 4.001 0 0 0 11.754 0z"/>
          </svg>
        )
      },

      {
        name: 'Gitbook',
        category: 'Tools',
        color: '#FF4088',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="#000000" ><path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"/>
          </svg>
        )
      },

      {
        name: 'Mintlify',
        category: 'Tools',
        color: '#FF4088',
        icon: (
          <svg  viewBox="0 0 24 24" fill="#041811" xmlns="http://www.w3.org/2000/svg">
   <path d="M328.655 428.699C329.076 371.36 351.816 316.439 392.051 275.585H391.977L236.638 430.924H236.712C236.134 431.379 235.589 431.874 235.081 432.407C197.303 470.136 174.398 520.224 170.571 573.478C166.744 626.732 182.251 679.58 214.246 722.324L371.142 565.428L372.773 563.87C343.531 524.929 328.016 477.394 328.655 428.699V428.699Z" fill="#0C8C5E"/>
  </svg>
        )
      },
      {
        name: 'README',
        category: 'Tools',
        color: '#00A98F',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
          </svg>
        )
      },
      {
        name: 'MkDocs',
        category: 'Tools',
        color: '#2094F3',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M2.5 4.5C2.5 3.12 3.62 2 5 2h14c1.38 0 2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5H5c-1.38 0-2.5-1.12-2.5-2.5v-15zm2 0v15c0 .28.22.5.5.5h14c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5H5c-.28 0-.5.22-.5.5zm2 2h12v2H6.5v-2zm0 4h12v2H6.5v-2zm0 4h12v2H6.5v-2z"/>
          </svg>
        )
      },
      {
        name: 'Docsify',
        category: 'Tools',
        color: '#43853D',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
          </svg>
        )
      },
      {
        name: 'Swagger',
        category: 'Tools',
        color: '#85EA2D',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.75c5.673 0 10.25 4.577 10.25 10.25S17.673 22.25 12 22.25 1.75 17.673 1.75 12 6.327 1.75 12 1.75zM6.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          </svg>
        )
      },
      {
        name: 'Postman',
        icon: (
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF6C37">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
          </svg>
        ),
        category: 'Tools'
      },
      
     
      {
        name: 'Version Control',
        category: 'Tools',
        color: '#F05032',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
        )
      },  
      
      {
        name: 'Astro StarLight',
        category: 'Tools',
        color: '#FF5D01',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582M8.977 12.385c-.09.204-.322.224-.483.144-.16-.079-.212-.31-.12-.513.09-.204.321-.223.482-.144.161.08.212.31.121.513m2.87-2.003c.089-.204.321-.223.482-.144.16.08.212.31.121.513-.09.204-.322.224-.483.144-.16-.079-.212-.31-.12-.513"/>
            <path d="M23.505 7.118c-.559-2.353-3.005-4.823-6.557-4.823-3.386 0-6.23 2.243-6.542 4.735-.58-.138-1.162-.138-1.74 0-.313-2.492-3.156-4.735-6.542-4.735-3.552 0-5.998 2.47-6.557 4.823-.005.174-.005.348.001.522.043 1.211.557 2.343 1.325 3.157 1.253 1.33 2.832 2.387 4.393 3.137 1.571.757 3.245 1.18 4.984 1.18 1.74 0 3.413-.423 4.984-1.18 1.561-.75 3.14-1.807 4.393-3.137.768-.814 1.282-1.946 1.325-3.157.006-.174.006-.348.001-.522"/>
          </svg>
        )
      },
      // Technologies
      {
        name: 'YAML',
        category: 'Technologies',
        color: '#0088CC',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2v4h2V4H5m3 0v4h2V4H8m3 0v4h2V4h-2z"/>
          </svg>
        )
      },
      {
        name: 'JSON',
        category: 'Technologies',
        color: '#000000',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.5 14.6c0 1.2-.4 2.2-1.2 2.9-.8.7-1.9 1-3.3 1-.7 0-1.3-.1-1.9-.2-.6-.2-1.1-.4-1.5-.7v-2.7c.5.3 1 .6 1.6.8.6.2 1.1.3 1.7.3.6 0 1-.1 1.3-.3.3-.2.4-.5.4-.9 0-.2 0-.4-.1-.5-.1-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.3-.2-.1-.5-.2-.9-.3-.8-.3-1.4-.7-1.8-1.2-.4-.5-.6-1.1-.6-1.9 0-1.1.4-2 1.1-2.6.8-.6 1.8-.9 3.1-.9.6 0 1.2.1 1.7.2s1 .3 1.4.5l-.7 2.1c-.4-.2-.8-.4-1.3-.5-.4-.1-.8-.2-1.2-.2-.5 0-.8.1-1.1.3-.2.2-.3.5-.3.8 0 .2 0 .4.1.5.1.1.2.3.3.4.2.1.3.2.6.3.2.1.5.2.9.3.9.3 1.5.7 1.9 1.2.4.5.7 1.2.7 2"/>
          </svg>
        )
      },
      {
        name: 'Markdown',
        category: 'Technologies',
        color: '#000000',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35l1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35l-1.92-2.35H4.89v6.38h1.92M19.69 12h-1.93V8.81h-1.92V12h-1.93l2.89 3.28L19.69 12z"/>
          </svg>
        )
      },
           
    {
      name: 'Git',
      category: 'Version Control',
      color: '#181717',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full overflow-hidden py-16">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Enhanced gradient overlays for smoother fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#172121] via-[#172121] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#172121] via-[#172121] to-transparent" />
      
      {/* Scrolling content with improved spacing and animation */}
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="mx-8 flex flex-col items-center justify-center rounded-xl bg-gray-800/50 p-6 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-gray-700/50"
          >
            <div className="text-white transition-colors duration-200" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="mt-3 text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;