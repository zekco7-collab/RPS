"""Apply the shared study UI inside each standalone game's private closure."""
from pathlib import Path
import re
root = Path(__file__).resolve().parent.parent
fragment = (root / 'tools/studio-fragment.js').read_text(encoding='utf-8')
start, end = '// STUDIO BEGIN', '// STUDIO END'
for name in ('index.html', 'rps-billiards.html', 'rps-billiards_app.html'):
    path = root / name
    text = path.read_text(encoding='utf-8')
    text = re.sub(r'const MISSIONS = \[\n.*?\n\];', 'const MISSIONS = [];', text, count=1, flags=re.S)
    text = re.sub(r'    if \(currentMission \+ 1 > missionsCleared\(\)\)\{.*?\n    \}', '', text, count=1, flags=re.S)
    if start in text:
        a, b = text.index(start), text.index(end) + len(end)
        text = text[:a] + text[b:].lstrip('\n')
    if 'href="puzzle-studio.css"' not in text:
        text = text.replace('</head>', '<link rel="stylesheet" href="puzzle-studio.css">\n</head>')
    text = text.replace('loop();\n})();', start + '\n' + fragment + '\n' + end + '\nloop();\n})();')
    path.write_text(text, encoding='utf-8')
