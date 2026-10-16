const input = document.getElementById('password');
  const go = document.getElementById('submit');

  function tryUnlock() {
    if (input.value !== "imgaylol67") {
      alert("Wrong password");
      return;
    }

    const target = new URL('pages/lessons/lessons.html', window.location.href).href;
    const win = window.open('about:blank', '_blank');
    if (!win) {
      alert("Popup blocked. Allow popups for this page and try again.");
      return;
    }

    win.document.open();
    win.document.write(
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Bismuth Learning</title>' +
      '<style>html,body{margin:0;height:100%;background:#000}iframe{border:0;width:100%;height:100%}</style>' +
      '</head><body><iframe allowfullscreen src="' + target + '"></iframe></body></html>'
    );
    win.document.close();

    window.location.replace('https://forsyth.instructure.com');
  }

  go.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });
