"""Check local HTML and CSS references, including project-site path compatibility."""

from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
errors = []


def check_reference(source, value):
    url = urlsplit(value)
    if url.scheme or url.netloc or not url.path:
        return
    if url.path.startswith('/'):
        errors.append(f'{source.relative_to(ROOT)}: root-relative URL {value}')
        return
    target = (source.parent / unquote(url.path)).resolve()
    if not target.is_relative_to(ROOT) or not target.exists():
        errors.append(f'{source.relative_to(ROOT)}: missing local target {value}')


class References(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.source = source

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name in ('src', 'href', 'poster') and value:
                check_reference(self.source, value)


for source in ROOT.glob('*.html'):
    References(source).feed(source.read_text())
for source in (ROOT / 'css').rglob('*.css'):
    for value in re.findall(r'url\(\s*([^)]*?)\s*\)', source.read_text()):
        check_reference(source, value.strip('\"\''))

if errors:
    raise SystemExit('\n'.join(errors))
print('Local HTML and CSS references resolve and support a project-site URL.')
