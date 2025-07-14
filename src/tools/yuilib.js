const loadScriptsFrom = (path, files) => {
  files.forEach(file => {
    const script = document.createElement('script');
    script.src = `${path}/${file}`;
    script.defer = true;
    document.head.appendChild(script);
  });
};

loadScriptsFrom('https://cdn.jsdelivr.net/gh/BlackHunterCode/uilib-yui-cdn@develop/src/components/selects', ['y-select.js']);
loadScriptsFrom('https://cdn.jsdelivr.net/gh/BlackHunterCode/uilib-yui-cdn@develop/src/components/sidebar', ['y-sidebar.js']);