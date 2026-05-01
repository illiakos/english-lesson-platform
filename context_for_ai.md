# PROJECT CONTEXT REPORT
Generated: 2026-05-01 23:16:18

## 1. PROJECT STRUCTURE
```text
english-lesson-platform/
├── .gitignore
├── README.md
├── eslint.config.js
├── generate-context.py
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── assets/
│   │   ├── i-love-what-i-do/
│   │   │   ├── company-1.png
│   │   │   ├── company-2.png
│   │   │   ├── company-3.png
│   │   │   ├── company-4.png
│   │   │   ├── company-5.png
│   │   │   ├── company-6.png
│   │   │   ├── hero.jpg
│   │   │   ├── phrase-1.jpg
│   │   │   ├── phrase-2.jpg
│   │   │   ├── phrase-3.jpg
│   │   │   ├── phrase-4.jpg
│   │   │   ├── phrase-5.jpg
│   │   │   ├── phrase-6.jpg
│   │   │   ├── work-1.jpg
│   │   │   ├── work-2.jpg
│   │   │   ├── work-3.jpg
│   │   │   ├── work-4.jpg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── LessonRenderer.tsx
│   │   ├── sections/
│   │   │   ├── CompanyMatch.tsx
│   │   │   ├── EmailReading.tsx
│   │   │   ├── GrammarPractice.tsx
│   │   │   ├── GrammarTabs.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ListeningTask.tsx
│   │   │   ├── PhraseBox.tsx
│   │   │   ├── RankingTask.tsx
│   │   │   ├── ResultsChecklist.tsx
│   │   │   ├── SentenceBuilder.tsx
│   │   │   ├── TrueFalseQuiz.tsx
│   │   │   ├── VocabularyMatch.tsx
│   │   │   ├── WarmUpQuestions.tsx
│   │   │   ├── WordList.tsx
│   │   │   ├── WritingTask.tsx
│   ├── lessons/
│   │   ├── i-love-what-i-do.ts
│   ├── styles/
│   │   ├── globals.css
│   ├── types/
│   │   ├── lesson.ts
│   ├── utils/
│   │   ├── assetUrl.ts
```

---
## 2. PROJECT STATISTICS
**Total Files Scanned:** 52

| Extension | Count |
|---|---|
| .tsx | 18 |
| .jpg | 11 |
| .png | 6 |
| .json | 5 |
| .ts | 4 |
| .svg | 2 |
| (no extension) | 1 |
| .js | 1 |
| .py | 1 |
| .html | 1 |
| .md | 1 |
| .css | 1 |

---
## 3. FILE CONTENTS

# FILE: .gitignore
```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# FILE: README.md
```markdown
# English Lesson Platform (Frontend Starter)

Reusable Vite + React + TypeScript + TailwindCSS starter for an interactive lesson engine.

Lessons are defined as typed configs in `src/lessons/*` and rendered dynamically by `LessonRenderer`.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Add a new lesson

1. Create a new file in `src/lessons/` (for example, `my-next-lesson.ts`).
2. Export a `Lesson` object from `src/types/lesson.ts`.
3. Add section configs using available `type` values:
   - `wordlist`
   - `grammar-tabs`
   - `vocabulary-match`
   - `quiz-select`
   - `sentence-builder`
   - `writing-task`
4. Import your lesson in `src/App.tsx` and pass it into `<LessonRenderer lesson={...} />`.

## Deploy to GitHub Pages

1. Install deploy dependency:

```bash
npm install -D gh-pages
```

2. In `vite.config.ts`, set your repo base path (replace `repo-name`):

```ts
export default defineConfig({
  base: '/repo-name/',
  plugins: [react(), tailwindcss()],
})
```

3. Update `package.json` scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

```

# FILE: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])

```

# FILE: generate-context.py
```python
import os
import datetime
import fnmatch

# --- CONFIGURATION ---
OUTPUT_FILE = "context_for_ai.md"

# 1. Folders to COMPLETELY IGNORE (Structure & Content)
IGNORE_DIRS = {
    '.git', '.idea', '.vscode', '.vs', '.venv', 'venv', 'env',
    '__pycache__', 'node_modules', 'dist', 'build', 'target',
    'vendor', 'bin', 'obj', 'out', 'debug', 'release',
    '.DS_Store', 'coverage', '.nuxt', '.next', 'cmake-build-debug',
    '.angular', '.husky', '.storybook', '.pytest_cache', '.trunk',
    '__pycache__', 'logs', '.cursor',
    # Project-specific ignores:
    'postgres-data', 'pgdata'
}

# 2. Files to exclude from CONTENT READING (but show in tree)
# We use patterns here for more flexibility
IGNORE_FILES_PATTERNS = {
    OUTPUT_FILE,
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'composer.lock',
    'Cargo.lock', 'go.sum', 'Gemfile.lock',
    '.env', '.env.local', '.env.development', '.env.production', '.env.test', 'secrets.yaml', '*.log', '*.exe', '*.dll', '*.so', '*.dylib',
    '*.pyc', '*.pyo', '*.pyd', '*.db', 'thumbs.db', '.DS_Store',
    'documentation.json', 'audio-backend', 'main',
    # Project-specific file patterns:
    '*.csv', '*.pdf', '*.zip', '*.tar.gz', '*.swp', '.eslintcache'
}

# 3. Max file size to read (in bytes) to prevent bloating (default 500KB)
MAX_FILE_SIZE = 500 * 1024 

# 4. Map extensions to Markdown languages
# If not in this list, it defaults to 'text'
EXT_TO_LANG = {
    '.py': 'python', '.js': 'javascript', '.ts': 'typescript',
    '.jsx': 'jsx', '.tsx': 'tsx',
    '.java': 'java', '.c': 'c', '.cpp': 'cpp', '.cs': 'csharp',
    '.go': 'go', '.rs': 'rust', '.php': 'php', '.rb': 'ruby',
    '.html': 'html', '.css': 'css', '.scss': 'scss',
    '.json': 'json', '.yaml': 'yaml', '.yml': 'yaml', '.xml': 'xml',
    '.md': 'markdown', '.sql': 'sql', '.sh': 'bash', '.bat': 'batch',
    '.dockerfile': 'dockerfile', 'Dockerfile': 'dockerfile',
    '.toml': 'toml', '.ini': 'ini', '.csproj': 'xml'
}

def is_binary_file(filepath):
    """Checks if a file is binary by reading a small chunk."""
    try:
        with open(filepath, 'rb') as f:
            chunk = f.read(1024)
            if b'\0' in chunk:
                return True
    except Exception:
        return True
    return False

def get_language(filename):
    """Returns the markdown language tag based on extension."""
    _, ext = os.path.splitext(filename)
    if filename in EXT_TO_LANG: # Handle exact filenames like Dockerfile
        return EXT_TO_LANG[filename]
    return EXT_TO_LANG.get(ext.lower(), 'text')

def read_file_content(filepath):
    """Reads file content with size limit and binary check."""
    # 1. Check size
    if os.path.getsize(filepath) > MAX_FILE_SIZE:
        return f"[NOTE: File content skipped (Size > {MAX_FILE_SIZE/1024:.1f} KB)]"
    
    # 2. Check binary
    if is_binary_file(filepath):
        return "[NOTE: Binary file detected and skipped]"

    # 3. Read text
    encodings = ['utf-8', 'utf-16', 'latin-1', 'cp1252']
    for enc in encodings:
        try:
            with open(filepath, 'r', encoding=enc) as f:
                return f.read()
        except Exception:
            continue
    
    return "[ERROR: Could not decode file content]"

def get_file_tree(startpath):
    """Generates a visual tree structure."""
    tree_str = "```text\n"
    tree_str += f"{os.path.basename(os.getcwd())}/\n"

    for root, dirs, files in os.walk(startpath):
        # Filter directories in-place
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        level = root.replace(startpath, '').count(os.sep)
        indent = '│   ' * level
        subindent = '├── '
        
        if level > 0:
            tree_str += f"{indent[:-4]}├── {os.path.basename(root)}/\n"

        file_list = sorted(files)
        for i, f in enumerate(file_list):
            if f == OUTPUT_FILE: continue
            
            # Visual marker for last item could be '└── ' but let's keep it simple
            tree_str += f"{indent}{subindent}{f}\n"

    tree_str += "```\n"
    return tree_str

def get_project_stats(startpath):
    """Counts files by extension genericly."""
    stats = {}
    total_files = 0
    
    for root, dirs, files in os.walk(startpath):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        for f in files:
            if f == OUTPUT_FILE: continue
            ext = os.path.splitext(f)[1].lower()
            if not ext: ext = "(no extension)"
            
            stats[ext] = stats.get(ext, 0) + 1
            total_files += 1
            
    report = f"**Total Files Scanned:** {total_files}\n\n"
    report += "| Extension | Count |\n|---|---|\n"
    
    # Sort by count descending
    for ext, count in sorted(stats.items(), key=lambda item: item[1], reverse=True):
        report += f"| {ext} | {count} |\n"
        
    return report

def collect_file_contents(startpath):
    """Iterates through files and collects content."""
    content_section = ""
    
    for root, dirs, files in os.walk(startpath):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in sorted(files):
            # Check if file matches any ignore pattern
            should_ignore_content = any(fnmatch.fnmatch(file, pattern) for pattern in IGNORE_FILES_PATTERNS)
            if should_ignore_content: continue
            
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, startpath)
            
            # Skip binary files strictly here if preferred, or rely on read_file_content
            # We rely on read_file_content to catch binaries we didn't filter by name
            
            lang = get_language(file)
            
            content_section += f"\n# FILE: {rel_path}\n"
            content_section += f"```{lang}\n"
            content_section += read_file_content(full_path)
            content_section += "\n```\n"
            
    return content_section

def main():
    root_dir = os.getcwd()
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    print(f">>> Generating context file for project in: {root_dir}")
    print(">>> Please wait...")

    # 1. Header
    final_output = f"# PROJECT CONTEXT REPORT\n"
    final_output += f"Generated: {timestamp}\n\n"

    # 2. Structure
    final_output += "## 1. PROJECT STRUCTURE\n"
    final_output += get_file_tree(root_dir)
    final_output += "\n---\n"

    # 3. Stats
    final_output += "## 2. PROJECT STATISTICS\n"
    final_output += get_project_stats(root_dir)
    final_output += "\n---\n"

    # 4. Content
    final_output += "## 3. FILE CONTENTS\n"
    final_output += collect_file_contents(root_dir)

    # Save
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_output)

    size_mb = os.path.getsize(OUTPUT_FILE) / (1024 * 1024)
    print(f"\n[SUCCESS] Context saved to: {OUTPUT_FILE}")
    print(f"   Size: {size_mb:.2f} MB")
    print("   You can now upload this file to ChatGPT/Claude/LLM.")

if __name__ == "__main__":
    main()
```

# FILE: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>english-lesson-platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# FILE: package.json
```json
{
  "name": "english-lesson-platform",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.2.4",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "tailwindcss": "^4.2.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "gh-pages": "^6.3.0",
    "globals": "^17.5.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10"
  }
}

```

# FILE: tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

# FILE: tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# FILE: tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

# FILE: vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/english-lesson-platform/',
  plugins: [react(), tailwindcss()],
})

```

# FILE: public\favicon.svg
```text
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

# FILE: public\icons.svg
```text
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>

```

# FILE: public\assets\i-love-what-i-do\company-1.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\company-2.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\company-3.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\company-4.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\company-5.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\company-6.png
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\hero.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-1.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-2.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-3.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-4.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-5.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\phrase-6.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\work-1.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\work-2.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\work-3.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: public\assets\i-love-what-i-do\work-4.jpg
```text
[NOTE: Binary file detected and skipped]
```

# FILE: src\App.tsx
```tsx
import LessonRenderer from './components/LessonRenderer'
import lesson from './lessons/i-love-what-i-do'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-4 md:p-8">
      <LessonRenderer lesson={lesson} />
    </main>
  )
}

export default App

```

# FILE: src\main.tsx
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

# FILE: src\components\LessonRenderer.tsx
```tsx
import { useMemo, useState } from 'react'
import type { Lesson, LessonSection } from '../types/lesson'
import CompanyMatch from './sections/CompanyMatch'
import EmailReading from './sections/EmailReading'
import GrammarPractice from './sections/GrammarPractice'
import GrammarTabs from './sections/GrammarTabs'
import HeroSection from './sections/HeroSection'
import ListeningTask from './sections/ListeningTask'
import PhraseBox from './sections/PhraseBox'
import RankingTask from './sections/RankingTask'
import ResultsChecklist from './sections/ResultsChecklist'
import SentenceBuilder from './sections/SentenceBuilder'
import TrueFalseQuiz from './sections/TrueFalseQuiz'
import VocabularyMatch from './sections/VocabularyMatch'
import WarmUpQuestions from './sections/WarmUpQuestions'
import WordList from './sections/WordList'
import WritingTask from './sections/WritingTask'

interface LessonRendererProps {
  lesson: Lesson
}

interface SectionRendererProps {
  section: LessonSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
  progress: number
}

const NON_TRACKABLE = new Set(['hero', 'wordlist', 'grammar-tabs', 'results-checklist', 'writing-task'])

function renderSection({ section, isCompleted, onComplete, progress }: SectionRendererProps) {
  switch (section.type) {
    case 'hero':           return <HeroSection section={section} />
    case 'wordlist':       return <WordList section={section} />
    case 'grammar-tabs':   return <GrammarTabs section={section} />
    case 'warm-up-questions':
      return <WarmUpQuestions section={section} onComplete={onComplete} />
    case 'vocabulary-match':
      return <VocabularyMatch section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'listening-task':
      return <ListeningTask section={section} onComplete={onComplete} />
    case 'ranking-task':
      return <RankingTask section={section} onComplete={onComplete} />
    case 'sentence-builder':
      return <SentenceBuilder section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'company-match':
      return <CompanyMatch section={section} onComplete={onComplete} />
    case 'true-false-quiz':
      return <TrueFalseQuiz section={section} onComplete={onComplete} />
    case 'grammar-practice':
      return <GrammarPractice section={section} onComplete={onComplete} />
    case 'phrasebox':
      return <PhraseBox section={section} onComplete={onComplete} />
    case 'email-reading':
      return <EmailReading section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'writing-task':
      return <WritingTask section={section} />
    case 'results-checklist':
      return <ResultsChecklist section={section} progress={progress} />
    default:
      return null
  }
}

/* ── Section number label for non-hero sections ─────────────────── */
const SECTION_LABELS: Partial<Record<string, string>> = {
  wordlist:           'Vocabulary',
  'grammar-tabs':     'Grammar',
  'warm-up-questions':'Warm-up',
  'vocabulary-match': 'Activity',
  'listening-task':   'Listening',
  'ranking-task':     'Activity',
  'sentence-builder': 'Activity',
  'company-match':    'Activity',
  'true-false-quiz':  'Reading',
  'grammar-practice': 'Grammar',
  phrasebox:          'Activity',
  'email-reading':    'Reading',
  'writing-task':     'Writing',
  'results-checklist':'Results',
}

export default function LessonRenderer({ lesson }: LessonRendererProps) {
  const [completedSectionIds, setCompletedSectionIds] = useState<string[]>([])

  const trackableIds = useMemo(
    () => lesson.sections.filter((s) => !NON_TRACKABLE.has(s.type)).map((s) => s.id),
    [lesson.sections],
  )

  const progress = trackableIds.length > 0
    ? Math.round((completedSectionIds.length / trackableIds.length) * 100)
    : 0

  const handleComplete = (sectionId: string) => {
    setCompletedSectionIds((prev) => prev.includes(sectionId) ? prev : [...prev, sectionId])
  }

  /* activity counter (only trackable, non-hero sections) */
  let activityCounter = 0

  return (
    <div className="space-y-5 pb-16">

      {/* ── Sticky progress strip ─────────────────────────────── */}
      <div className="sticky top-0 z-20 -mx-4 md:-mx-8">
        <div className="flex items-center gap-3 bg-white/80 px-4 py-2.5 backdrop-blur-md shadow-sm md:px-8">
          <span className="shrink-0 text-xs font-semibold text-orange-500 uppercase tracking-wide">
            Progress
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-bold text-slate-700 tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* ── Lesson header card ────────────────────────────────── */}
      <header className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">
              English Lesson
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight">
              {lesson.title}
            </h1>
          </div>
          <span className="shrink-0 rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
            Level {lesson.level}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <span>{trackableIds.length} interactive sections</span>
          <span>·</span>
          <span>{completedSectionIds.length} completed</span>
        </div>
      </header>

      {/* ── Sections ─────────────────────────────────────────── */}
      {lesson.sections.map((section) => {
        const isCompleted = completedSectionIds.includes(section.id)
        const isTrackable = !NON_TRACKABLE.has(section.type)
        const isHero = section.type === 'hero'

        if (isTrackable) activityCounter++

        return (
          <section
            key={section.id}
            className="group relative rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden"
          >
            {/* section type label strip */}
            {!isHero && (
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-2.5 md:px-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {isTrackable ? `${SECTION_LABELS[section.type] ?? 'Activity'} ${activityCounter}` : SECTION_LABELS[section.type] ?? ''}
                </span>
                {isCompleted && (
                  <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-bold text-green-700">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#16a34a"/>
                      <path d="M3.5 6l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Completed
                  </span>
                )}
              </div>
            )}

            <div className={isHero ? '' : 'p-5 md:p-6'}>
              {renderSection({ section, isCompleted, onComplete: handleComplete, progress })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

```

# FILE: src\components\sections\CompanyMatch.tsx
```tsx
import { useState } from 'react'
import type { CompanyMatchSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface CompanyMatchProps {
  section: CompanyMatchSection
  onComplete: (sectionId: string) => void
}

export default function CompanyMatch({ section, onComplete }: CompanyMatchProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const correct = section.items.filter((item) => answers[item.company] === item.answer).length
  const allCorrect = correct === section.items.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Company cards grid ───────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => {
          const isCorrect = checked && answers[item.company] === item.answer
          const isWrong = checked && !!answers[item.company] && !isCorrect

          return (
            <div
              key={item.company}
              className={`flex flex-col rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              {/* Logo */}
              <div className="mb-3 flex h-20 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-slate-100">
                {imageErrors[item.company] ? (
                  <span className="text-xs font-bold text-slate-400">{item.company}</span>
                ) : (
                  <img
                    src={assetUrl(item.logo)}
                    alt={item.company}
                    onError={() => setImageErrors((prev) => ({ ...prev, [item.company]: true }))}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>

              {/* Company name */}
              <p className="mb-2 text-sm font-bold text-slate-800">{item.company}</p>

              {/* Select */}
              <select
                value={answers[item.company] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [item.company]: e.target.value }))}
                className={`w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 outline-none transition ${
                  isCorrect ? 'ring-green-300 text-green-800'
                  : isWrong  ? 'ring-red-300 text-red-800'
                  :             'ring-slate-200 focus:ring-orange-400'
                }`}
              >
                <option value="">Choose type…</option>
                {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>

              {/* Inline badge */}
              {isCorrect && <p className="mt-1.5 text-xs font-semibold text-green-700">✓ Correct</p>}
              {isWrong   && <p className="mt-1.5 text-xs font-semibold text-red-600">✕ Try again</p>}
            </div>
          )
        })}
      </div>

      {/* ── Score + buttons ──────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.items.length} correct`}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (allCorrect) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={() => { setAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\EmailReading.tsx
```tsx
import { useState } from 'react'
import type { EmailReadingSection } from '../../types/lesson'

interface EmailReadingProps {
  section: EmailReadingSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

export default function EmailReading({ section, onComplete, isCompleted }: EmailReadingProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showSamples, setShowSamples] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Email card ───────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        {/* Toolbar bar */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-500">
            {section.email.subject}
          </span>
        </div>

        {/* Email body */}
        <article className="bg-white p-5 text-sm leading-7 text-slate-700 md:p-6">
          {section.email.body.map((line, i) =>
            line === '' ? (
              <br key={i} />
            ) : (
              <p key={i} className={i === 0 ? 'font-semibold text-slate-900' : ''}>{line}</p>
            ),
          )}
          <div className="mt-4 border-t border-slate-100 pt-3">
            {section.email.closing.map((line) => (
              <p key={line} className="font-medium text-slate-800">{line}</p>
            ))}
          </div>
        </article>
      </div>

      {/* ── Questions ────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Answer the questions
        </p>
        {section.questions.map((item, index) => (
          <div key={item.question} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <label className="block">
              <span className="flex items-start gap-2 font-semibold text-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">
                  {index + 1}
                </span>
                {item.question}
              </span>
              <input
                value={answers[index] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                className="mt-2 w-full rounded-xl border-0 bg-white px-3 py-2.5 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                placeholder="Your answer…"
              />
            </label>
            {showSamples && (
              <p className="mt-2 flex items-start gap-1.5 text-sm anim-slide">
                <span className="font-bold text-green-600">Sample:</span>
                <span className="text-green-700">{item.sampleAnswer}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowSamples((prev) => !prev)}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          {showSamples ? 'Hide sample answers' : 'Show sample answers'}
        </button>
        <button
          type="button"
          onClick={() => onComplete(section.id)}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Mark as done ✓
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide rounded-xl bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ Reading section completed
        </p>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\GrammarPractice.tsx
```tsx
import { useState } from 'react'
import type { GrammarPracticeSection } from '../../types/lesson'

interface GrammarPracticeProps {
  section: GrammarPracticeSection
  onComplete: (sectionId: string) => void
}

type Tab = 'A' | 'B' | 'C'

export default function GrammarPractice({ section, onComplete }: GrammarPracticeProps) {
  const [activeTab, setActiveTab] = useState<Tab>('A')
  const [aAnswers, setAAnswers] = useState<Record<number, string>>({})
  const [bAnswers, setBAnswers] = useState<Record<number, string>>({})
  const [cAnswers, setCAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const aCorrect = section.activityA.filter((item, i) => aAnswers[i] === item.answer).length
  const bCorrect = section.activityB.filter((item, i) => bAnswers[i]?.trim().toLowerCase() === item.answer.toLowerCase()).length
  const cCorrect = section.activityC.filter((item, i) => cAnswers[i] === item.answer).length
  const total = section.activityA.length + section.activityB.length + section.activityC.length
  const score = aCorrect + bCorrect + cCorrect

  const tabs: { id: Tab; label: string; count: number; correct: number }[] = [
    { id: 'A', label: 'Choose the tense', count: section.activityA.length, correct: aCorrect },
    { id: 'B', label: 'Complete the verb', count: section.activityB.length, correct: bCorrect },
    { id: 'C', label: 'Choose the word', count: section.activityC.length, correct: cCorrect },
  ]

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Activity tabs ────────────────────────────────────── */}
      <div className="flex gap-1 rounded-2xl bg-slate-100 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 flex-col items-center rounded-xl py-2 text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-white text-orange-600 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="text-base">Activity {tab.id}</span>
            {checked && (
              <span className={`mt-0.5 ${tab.correct === tab.count ? 'text-green-600' : 'text-slate-500'}`}>
                {tab.correct}/{tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Activity A ───────────────────────────────────────── */}
      {activeTab === 'A' && (
        <div className="anim-slide space-y-2.5">
          {section.activityA.map((item, index) => {
            const isCorrect = checked && aAnswers[index] === item.answer
            const isWrong   = checked && !!aAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <select
                  value={aAnswers[index] ?? ''}
                  onChange={(e) => setAAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose…</option>
                  <option value="Present Simple">Present Simple</option>
                  <option value="Present Continuous">Present Continuous</option>
                </select>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Activity B ───────────────────────────────────────── */}
      {activeTab === 'B' && (
        <div className="anim-slide space-y-2.5">
          {section.activityB.map((item, index) => {
            const isCorrect = checked && bAnswers[index]?.trim().toLowerCase() === item.answer.toLowerCase()
            const isWrong   = checked && !!bAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <div>
                  <input
                    value={bAnswers[index] ?? ''}
                    onChange={(e) => setBAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                    placeholder="Type your answer…"
                    className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                  />
                  {isWrong && (
                    <p className="mt-1 text-xs text-green-700">Answer: {item.answer}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Activity C ───────────────────────────────────────── */}
      {activeTab === 'C' && (
        <div className="anim-slide space-y-2.5">
          {section.activityC.map((item, index) => {
            const isCorrect = checked && cAnswers[index] === item.answer
            const isWrong   = checked && !!cAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <select
                  value={cAnswers[index] ?? ''}
                  onChange={(e) => setCAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose…</option>
                  {item.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <div className="anim-slide flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <div className="flex gap-1">
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i < score ? 'bg-green-500' : 'bg-slate-300'}`} />
            ))}
          </div>
          <p className={`text-sm font-semibold ${score === total ? 'text-green-700' : 'text-slate-700'}`}>
            {score === total ? '🎉 All correct!' : `${score} / ${total} correct`}
          </p>
        </div>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (score === total) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check all activities
        </button>
        <button
          type="button"
          onClick={() => { setAAnswers({}); setBAnswers({}); setCAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\GrammarTabs.tsx
```tsx
import { useState } from 'react'
import type { GrammarTabsSection } from '../../types/lesson'

interface GrammarTabsProps {
  section: GrammarTabsSection
}

export default function GrammarTabs({ section }: GrammarTabsProps) {
  const [activeTab, setActiveTab] = useState(section.tabs[0]?.label ?? '')
  const current = section.tabs.find((tab) => tab.label === activeTab) ?? section.tabs[0]

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <div className="flex rounded-2xl bg-slate-100 p-1.5 gap-1">
        {section.tabs.map((tab) => {
          const isActive = tab.label === activeTab
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.label)}
              className={`flex-1 rounded-xl py-2 text-sm font-bold transition-all ${
                isActive
                  ? 'bg-white text-orange-600 shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* ── Tab content ──────────────────────────────────────── */}
      <div className="anim-slide space-y-4" key={activeTab}>

        {/* Rules box */}
        <div className="rounded-2xl bg-slate-900 p-5 text-slate-100">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Structure
          </p>
          <ul className="space-y-2">
            {current?.rules.map((rule) => (
              <li key={rule} className="flex items-start gap-2 font-mono text-sm">
                <span className="mt-0.5 text-orange-400">→</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Examples */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Examples
          </p>
          <ul className="space-y-2">
            {current?.examples.map((example) => (
              <li key={example} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 text-green-500">✓</span>
                <em>{example}</em>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-widest text-green-600">
            Key forms
          </p>
          <div className="flex flex-wrap gap-2">
            {section.highlights.map((item) => (
              <code
                key={item}
                className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-800 ring-1 ring-green-200"
              >
                {item}
              </code>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

```

# FILE: src\components\sections\HeroSection.tsx
```tsx
import { useState } from 'react'
import type { HeroSection as HeroSectionType } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface HeroSectionProps {
  section: HeroSectionType
}

export default function HeroSection({ section }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div>
      {/* ── Hero image banner ───────────────────────────────── */}
      <div className="relative h-52 w-full overflow-hidden sm:h-64 md:h-72">
        {!imageError ? (
          <img
            src={assetUrl(section.imageSrc)}
            alt={section.title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-orange-400 via-orange-300 to-green-400" />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
          <span className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Level {section.level}
          </span>
          <h2 className="text-3xl font-extrabold text-white drop-shadow-md md:text-4xl">
            {section.emoji} {section.title}
          </h2>
          <p className="mt-1 text-sm text-white/80">{section.subtitle}</p>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="grid gap-5 p-5 md:grid-cols-3 md:p-7">

        {/* Goals */}
        <div className="md:col-span-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Lesson Goals
          </p>
          <ol className="space-y-2">
            {section.goals.map((goal, i) => (
              <li key={goal} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-700">{goal}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Word bank */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Word Bank
          </p>
          <div className="flex flex-wrap gap-2">
            {section.words.map((word) => (
              <span
                key={word}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700 ring-1 ring-slate-200 hover:bg-orange-50 hover:text-orange-700 hover:ring-orange-200 transition-colors cursor-default"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Functional language */}
        <div className="md:col-span-3">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Functional Language
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {section.functionalLanguage.map((line) => (
              <div
                key={line}
                className="flex items-start gap-2 rounded-xl bg-green-50 p-3 ring-1 ring-green-100"
              >
                <span className="mt-0.5 text-green-500">💬</span>
                <span className="text-sm italic text-slate-700">{line}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

```

# FILE: src\components\sections\ListeningTask.tsx
```tsx
import { useState } from 'react'
import type { ListeningTaskSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface ListeningTaskProps {
  section: ListeningTaskSection
  onComplete: (sectionId: string) => void
}

export default function ListeningTask({ section, onComplete }: ListeningTaskProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const [audioMissing, setAudioMissing] = useState(false)

  const correct = section.speakers.filter((s) => answers[s.id] === s.answer).length
  const allCorrect = correct === section.speakers.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Audio player ─────────────────────────────────────── */}
      {!audioMissing ? (
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Audio track
          </p>
          <audio
            controls
            className="w-full"
            onError={() => setAudioMissing(true)}
          >
            <source src={assetUrl(section.audioSrc)} />
          </audio>
        </div>
      ) : (
        <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4 ring-1 ring-orange-200">
          <span className="text-2xl">🎧</span>
          <p className="text-sm text-orange-700">{section.note}</p>
        </div>
      )}

      {/* ── Speaker cards ────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.speakers.map((speaker, index) => {
          const isCorrect = checked && answers[speaker.id] === speaker.answer
          const isWrong = checked && !!answers[speaker.id] && !isCorrect
          return (
            <div
              key={speaker.id}
              className={`rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : 'bg-orange-100 text-orange-700'
                }`}>
                  {isCorrect ? '✓' : isWrong ? '✕' : index + 1}
                </span>
                <span className="font-semibold text-slate-800">{speaker.label}</span>
              </div>
              <select
                value={answers[speaker.id] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [speaker.id]: e.target.value }))}
                className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
              >
                <option value="">Choose role…</option>
                {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check listening
        </button>
      </div>

      {checked && (
        <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.speakers.length} correct`}
        </p>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\PhraseBox.tsx
```tsx
import { useState } from 'react'
import type { PhraseBoxSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface PhraseBoxProps {
  section: PhraseBoxSection
  onComplete: (sectionId: string) => void
}

export default function PhraseBox({ section, onComplete }: PhraseBoxProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const correct = section.cards.filter((card, i) => answers[i] === card.answer).length
  const allCorrect = correct === section.cards.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">
        Look at each picture and choose the correct phrase.
      </p>

      {/* ── Cards grid ───────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card, index) => {
          const isCorrect = checked && answers[index] === card.answer
          const isWrong   = checked && !!answers[index] && !isCorrect

          return (
            <div
              key={card.image}
              className={`flex flex-col overflow-hidden rounded-2xl ring-1 transition-all ${
                isCorrect ? 'ring-green-300' : isWrong ? 'ring-red-300' : 'ring-slate-200'
              }`}
            >
              {/* Photo */}
              {imageErrors[index] ? (
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-orange-100 to-slate-100 text-xs font-semibold text-slate-400">
                  Picture {index + 1}
                </div>
              ) : (
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={assetUrl(card.image)}
                    alt={`Phrase ${index + 1}`}
                    onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                    className="h-full w-full object-cover"
                  />
                  {isCorrect && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-600/30">
                      <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">✓ Correct</span>
                    </div>
                  )}
                </div>
              )}

              {/* Select */}
              <div className={`p-3 ${isCorrect ? 'bg-green-50' : isWrong ? 'bg-red-50' : 'bg-white'}`}>
                <select
                  value={answers[index] ?? ''}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose phrase…</option>
                  {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {isWrong && (
                  <p className="mt-1.5 text-xs font-semibold text-green-700">
                    Answer: {card.answer}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All phrases matched!' : `${correct} / ${section.cards.length} correct`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (allCorrect) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check phrasebox
        </button>
        <button
          type="button"
          onClick={() => { setAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\RankingTask.tsx
```tsx
import { useState } from 'react'
import type { RankingTaskSection } from '../../types/lesson'

interface RankingTaskProps {
  section: RankingTaskSection
  onComplete: (sectionId: string) => void
}

const MEDALS: Record<string, string> = { '1': '🥇', '2': '🥈', '3': '🥉' }

export default function RankingTask({ section, onComplete }: RankingTaskProps) {
  const [ranking, setRanking] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)

  const save = () => {
    setSaved(true)
    onComplete(section.id)
  }

  /* sort saved items by rank for the summary */
  const sortedItems = saved
    ? [...section.items].sort((a, b) => {
        const ra = parseInt(ranking[a] ?? '99')
        const rb = parseInt(ranking[b] ?? '99')
        return ra - rb
      })
    : []

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Ranking rows ─────────────────────────────────────── */}
      {!saved && (
        <div className="space-y-2.5">
          {section.items.map((item) => (
            <div
              key={item}
              className="grid grid-cols-[1fr_100px] items-center gap-3 rounded-2xl bg-slate-50 p-3.5 ring-1 ring-slate-200"
            >
              <span className="text-sm font-semibold text-slate-800 capitalize">{item}</span>
              <div className="flex items-center gap-2">
                {ranking[item] && MEDALS[ranking[item]] && (
                  <span className="text-lg">{MEDALS[ranking[item]]}</span>
                )}
                <select
                  value={ranking[item] ?? ''}
                  onChange={(e) => setRanking((prev) => ({ ...prev, [item]: e.target.value }))}
                  className="flex-1 rounded-xl bg-white px-2 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">—</option>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={String(n)}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Saved summary ────────────────────────────────────── */}
      {saved && (
        <div className="anim-slide space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Your ranking</p>
          {sortedItems.map((item, i) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                {ranking[item] ?? i + 1}
              </span>
              <span className="text-sm font-semibold capitalize text-slate-800">{item}</span>
              {MEDALS[ranking[item]] && <span className="ml-auto text-lg">{MEDALS[ranking[item]]}</span>}
            </div>
          ))}
          <p className="mt-2 rounded-2xl bg-green-50 p-3 text-sm text-green-700 ring-1 ring-green-200">
            Great choices! Your ranking is ready for discussion.
          </p>
        </div>
      )}

      {!saved && (
        <button
          type="button"
          onClick={save}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Save my ranking
        </button>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\ResultsChecklist.tsx
```tsx
import type { ResultsChecklistSection } from '../../types/lesson'

interface ResultsChecklistProps {
  section: ResultsChecklistSection
  progress: number
}

const STARS = ['⭐', '⭐⭐', '⭐⭐⭐']

function starRating(progress: number) {
  if (progress >= 90) return STARS[2]
  if (progress >= 60) return STARS[1]
  if (progress > 0)   return STARS[0]
  return '—'
}

export default function ResultsChecklist({ section, progress }: ResultsChecklistProps) {
  const completedCount = Math.round((progress / 100) * section.checklist.length)

  return (
    <div className="space-y-6">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="text-center">
        <div className="mb-1 text-5xl">{progress >= 50 ? '🎉' : '📚'}</div>
        <h2 className="text-2xl font-extrabold text-green-700">{section.emoji} {section.title}</h2>
        <p className="mt-1 text-sm text-slate-500">Here is what you practised in this lesson</p>
      </div>

      {/* ── Big progress circle ──────────────────────────────── */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle
              cx="50" cy="50" r="44"
              fill="none"
              stroke={progress >= 70 ? '#16a34a' : '#f97316'}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <span className="text-2xl font-extrabold text-slate-800">{progress}%</span>
        </div>
        <p className="text-lg font-bold text-slate-700">{starRating(progress)}</p>
        <p className="text-sm text-slate-500">
          {progress === 100
            ? 'Lesson fully completed! Well done!'
            : `${completedCount} of ${section.checklist.length} goals reached`}
        </p>
      </div>

      {/* ── Checklist ────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Now you can…
        </p>
        <ul className="space-y-2.5">
          {section.checklist.map((item, index) => {
            const done = index < completedCount
            return (
              <li
                key={item}
                className={`flex items-center gap-3 rounded-2xl p-4 ring-1 transition-all ${
                  done ? 'bg-green-50 ring-green-200' : 'bg-slate-50 ring-slate-200'
                }`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  done ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {done ? '✓' : '·'}
                </span>
                <span className={`text-sm font-semibold ${done ? 'text-green-800' : 'text-slate-600'}`}>
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* ── Progress bar ─────────────────────────────────────── */}
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Overall progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-green-500 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {progress === 100 && (
        <div className="anim-pop rounded-2xl bg-gradient-to-r from-orange-50 to-green-50 p-5 text-center ring-1 ring-orange-200">
          <p className="text-xl font-extrabold text-slate-800">🏆 Amazing work!</p>
          <p className="mt-1 text-sm text-slate-600">You completed every section of this lesson. Well done!</p>
        </div>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\SentenceBuilder.tsx
```tsx
import { useMemo, useState } from 'react'
import type { SentenceBuilderSection } from '../../types/lesson'

interface SentenceBuilderProps {
  section: SentenceBuilderSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5)
}

export default function SentenceBuilder({ section, onComplete, isCompleted }: SentenceBuilderProps) {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const currentSentence = section.sentences[sentenceIndex]

  const initialChunks = useMemo(
    () => shuffle(currentSentence.chunks),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sentenceIndex],
  )
  const [picked, setPicked] = useState<string[]>([])
  const [remaining, setRemaining] = useState<string[]>(initialChunks)
  const [checked, setChecked] = useState(false)
  const [solvedIndexes, setSolvedIndexes] = useState<number[]>([])

  const builtSentence = picked.join(' ')
  const expected = currentSentence.correctOrder.join(' ')
  const isCorrect = builtSentence.trim() === expected.trim()

  const pickChunk = (chunk: string, i: number) => {
    setRemaining((prev) => prev.filter((_, idx) => idx !== i))
    setPicked((prev) => [...prev, chunk])
    setChecked(false)
  }

  const unpickChunk = (chunk: string, i: number) => {
    setPicked((prev) => prev.filter((_, idx) => idx !== i))
    setRemaining((prev) => [...prev, chunk])
    setChecked(false)
  }

  const reset = () => {
    setRemaining(shuffle(currentSentence.chunks))
    setPicked([])
    setChecked(false)
  }

  const check = () => {
    setChecked(true)
    if (isCorrect && !solvedIndexes.includes(sentenceIndex)) {
      const next = [...solvedIndexes, sentenceIndex]
      setSolvedIndexes(next)
      if (next.length === section.sentences.length && !isCompleted) {
        onComplete(section.id)
      }
    }
  }

  const nextSentence = () => {
    if (sentenceIndex >= section.sentences.length - 1) return
    const next = sentenceIndex + 1
    setSentenceIndex(next)
    const nextChunks = shuffle(section.sentences[next].chunks)
    setRemaining(nextChunks)
    setPicked([])
    setChecked(false)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Sentence progress dots ───────────────────────────── */}
      <div className="flex items-center gap-2">
        {section.sentences.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              solvedIndexes.includes(i) ? 'bg-green-500 scale-110'
              : i === sentenceIndex       ? 'bg-orange-400 scale-110'
              :                            'bg-slate-200'
            }`}
          />
        ))}
        <span className="ml-1 text-xs font-semibold text-slate-400">
          {sentenceIndex + 1} / {section.sentences.length}
        </span>
      </div>

      {/* ── Drop zone ────────────────────────────────────────── */}
      <div
        className={`min-h-14 rounded-2xl p-4 ring-2 transition-all ${
          checked && isCorrect  ? 'bg-green-50 ring-green-300'
          : checked && !isCorrect ? 'bg-red-50 ring-red-200'
          :                          'bg-slate-50 ring-slate-200'
        }`}
      >
        {picked.length === 0 ? (
          <span className="text-sm text-slate-400">Tap chunks below to build your sentence…</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {picked.map((chunk, i) => (
              <button
                key={`${chunk}-${i}`}
                type="button"
                onClick={() => unpickChunk(chunk, i)}
                className="rounded-xl bg-orange-100 px-3 py-1.5 text-sm font-semibold text-orange-800 ring-1 ring-orange-200 hover:bg-red-100 hover:ring-red-200 active:scale-95 transition-all"
                title="Click to remove"
              >
                {chunk}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Available chunks ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {remaining.map((chunk, i) => (
          <button
            key={`${chunk}-${i}`}
            type="button"
            onClick={() => pickChunk(chunk, i)}
            className="rounded-xl border-2 border-dashed border-orange-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-orange-400 hover:bg-orange-50 active:scale-95 transition-all"
          >
            {chunk}
          </button>
        ))}
      </div>

      {/* ── Feedback ─────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
          {isCorrect ? '🎉 Correct!' : `Expected: "${expected}"`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={nextSentence}
          disabled={sentenceIndex >= section.sentences.length - 1}
          className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 transition-all"
        >
          Next →
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ All sentences completed!
        </p>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\TrueFalseQuiz.tsx
```tsx
import { useState } from 'react'
import type { TrueFalseQuizSection } from '../../types/lesson'

interface TrueFalseQuizProps {
  section: TrueFalseQuizSection
  onComplete: (sectionId: string) => void
}

export default function TrueFalseQuiz({ section, onComplete }: TrueFalseQuizProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const correct = section.statements.filter((item, i) => String(item.answer) === answers[i]).length
  const allCorrect = correct === section.statements.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Statement cards ──────────────────────────────────── */}
      <div className="space-y-3">
        {section.statements.map((item, index) => {
          const selected = answers[index]
          const isCorrect = checked && String(item.answer) === selected
          const isWrong   = checked && !!selected && !isCorrect

          return (
            <div
              key={item.statement}
              className={`rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="mb-3 flex items-start gap-3">
                {checked && (
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                  }`}>
                    {isCorrect ? '✓' : isWrong ? '✕' : ''}
                  </span>
                )}
                <p className="font-semibold text-slate-800">{item.statement}</p>
              </div>

              {/* True / False buttons */}
              <div className="flex gap-2">
                {(['true', 'false'] as const).map((value) => {
                  const isSelected = selected === value
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => !checked && setAnswers((prev) => ({ ...prev, [index]: value }))}
                      className={`flex-1 rounded-xl py-2 text-sm font-bold transition-all active:scale-95 ${
                        isSelected && !checked ? 'bg-orange-500 text-white shadow-sm'
                        : isSelected && isCorrect ? 'bg-green-600 text-white'
                        : isSelected && isWrong   ? 'bg-red-500 text-white'
                        : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300'
                      }`}
                    >
                      {value === 'true' ? '✓ True' : '✕ False'}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.statements.length} correct`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (allCorrect) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={() => { setAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\VocabularyMatch.tsx
```tsx
import { useMemo, useState } from 'react'
import type { VocabularyMatchSection } from '../../types/lesson'

interface VocabularyMatchProps {
  section: VocabularyMatchSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

export default function VocabularyMatch({ section, onComplete, isCompleted }: VocabularyMatchProps) {
  const definitions = useMemo(
    () => [...section.items.map((i) => i.definition)].sort(() => Math.random() - 0.5),
    [section.items],
  )
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const correctCount = section.items.filter(
    (item) => answers[item.word] === item.definition,
  ).length
  const allCorrect = correctCount === section.items.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }
  const reset = () => { setAnswers({}); setChecked(false) }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Pairs ────────────────────────────────────────────── */}
      <div className="space-y-2.5">
        {section.items.map((item) => {
          const isCorrect = checked && answers[item.word] === item.definition
          const isWrong = checked && !!answers[item.word] && !isCorrect

          return (
            <div
              key={item.word}
              className={`grid grid-cols-[140px_1fr] items-center gap-3 rounded-2xl p-3 ring-1 transition-all sm:grid-cols-[160px_1fr] ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50  ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              {/* Word pill */}
              <div className="flex items-center gap-2">
                {checked && (
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                    isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                  }`}>
                    {isCorrect ? '✓' : isWrong ? '✕' : ''}
                  </span>
                )}
                <span className="rounded-xl bg-white px-3 py-1.5 text-sm font-bold text-slate-800 ring-1 ring-slate-200 capitalize">
                  {item.word}
                </span>
              </div>

              {/* Definition select */}
              <select
                value={answers[item.word] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [item.word]: e.target.value }))}
                disabled={checked && isCorrect}
                className={`w-full rounded-xl border-0 bg-white px-3 py-2 text-sm ring-1 outline-none transition ${
                  isCorrect ? 'ring-green-300 text-green-800'
                  : isWrong  ? 'ring-red-300 text-red-800'
                  :             'ring-slate-200 text-slate-700 focus:ring-orange-400'
                }`}
              >
                <option value="">Choose a definition…</option>
                {definitions.map((def) => (
                  <option key={def} value={def}>{def}</option>
                ))}
              </select>
            </div>
          )
        })}
      </div>

      {/* ── Score bar ────────────────────────────────────────── */}
      {checked && (
        <div className="anim-slide flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <div className="flex gap-1">
            {section.items.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${i < correctCount ? 'bg-green-500' : 'bg-slate-300'}`}
              />
            ))}
          </div>
          <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
            {allCorrect ? 'Perfect! All correct.' : `${correctCount} / ${section.items.length} correct`}
          </p>
        </div>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Try again
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide flex items-center gap-2 text-sm font-bold text-green-700">
          <span className="rounded-full bg-green-100 px-2 py-0.5">✓ Section complete</span>
        </p>
      )}
    </div>
  )
}

```

# FILE: src\components\sections\WarmUpQuestions.tsx
```tsx
import { useState } from 'react'
import type { WarmUpQuestionsSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface WarmUpQuestionsProps {
  section: WarmUpQuestionsSection
  onComplete: (sectionId: string) => void
}

export default function WarmUpQuestions({ section, onComplete }: WarmUpQuestionsProps) {
  const [opened, setOpened] = useState<number[]>([])
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const reveal = (index: number) => {
    if (opened.includes(index)) return
    const next = [...opened, index]
    setOpened(next)
    if (next.length === section.questions.length) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Image grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {section.images.map((image, index) => (
          imageErrors[index] ? (
            <div
              key={image}
              className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-slate-100 text-xs font-semibold text-slate-400 sm:h-40"
            >
              Photo {index + 1}
            </div>
          ) : (
            <img
              key={image}
              src={assetUrl(image)}
              onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
              alt={`Work scene ${index + 1}`}
              className="h-32 w-full rounded-2xl object-cover sm:h-40"
            />
          )
        ))}
      </div>

      {/* ── Discussion questions ─────────────────────────────── */}
      <p className="text-sm font-semibold text-slate-500">
        Click a question to reveal a hint →
      </p>
      <div className="space-y-2.5">
        {section.questions.map((item, index) => {
          const isOpen = opened.includes(index)
          return (
            <button
              key={item.question}
              type="button"
              onClick={() => reveal(index)}
              className={`group w-full rounded-2xl p-4 text-left transition-all ring-1 ${
                isOpen
                  ? 'bg-green-50 ring-green-200'
                  : 'bg-slate-50 ring-slate-200 hover:bg-orange-50 hover:ring-orange-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isOpen ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-orange-200 group-hover:text-orange-700'
                }`}>
                  {isOpen ? '✓' : index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{item.question}</p>
                  {isOpen && (
                    <p className="mt-1.5 text-sm text-green-700 anim-slide">
                      {item.hint}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\WordList.tsx
```tsx
import type { WordListSection } from '../../types/lesson'

interface WordListProps {
  section: WordListSection
}

export default function WordList({ section }: WordListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {section.words.map((word) => (
          <div
            key={word}
            className="group relative flex flex-col items-center justify-center gap-1 rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-orange-300 cursor-default"
          >
            <span className="text-base font-bold capitalize text-slate-800">{word}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

```

# FILE: src\components\sections\WritingTask.tsx
```tsx
import { useState } from 'react'
import type { WritingTaskSection } from '../../types/lesson'

interface WritingTaskProps {
  section: WritingTaskSection
}

const fields = [
  { key: 'company',     placeholder: 'e.g. Tesla, Google, Spotify…', label: 'The company I want to work for' },
  { key: 'qualities',   placeholder: 'e.g. friendly, hard-working, creative…', label: 'My personal qualities' },
  { key: 'motivation',  placeholder: 'e.g. career growth, bonuses, a good salary…', label: 'What motivates me' },
  { key: 'experience',  placeholder: 'e.g. working in customer service, leading teams…', label: 'My experience' },
  { key: 'name',        placeholder: 'e.g. Monica Smith', label: 'Student name' },
] as const

type FieldKey = typeof fields[number]['key']

export default function WritingTask({ section }: WritingTaskProps) {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    company: '', qualities: '', motivation: '', experience: '', name: '',
  })

  const set = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((prev) => ({ ...prev, [key]: e.target.value }))

  const v = (key: FieldKey, fallback: string) => values[key] || fallback

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Input fields ─────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map(({ key, label, placeholder }) => (
          <label key={key} className={`flex flex-col gap-1 ${key === 'name' ? 'sm:col-span-2' : ''}`}>
            <span className="text-xs font-bold text-slate-500">{label}</span>
            <input
              value={values[key]}
              onChange={set(key)}
              placeholder={placeholder}
              className="rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 outline-none placeholder:text-slate-400 focus:ring-orange-400 transition"
            />
          </label>
        ))}
      </div>

      {/* ── Email preview ────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        {/* Toolbar */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-500">Your application email preview</span>
        </div>

        {/* Body */}
        <div className="bg-white p-5 font-[Georgia,serif] text-sm leading-7 text-slate-800 md:p-6">
          <p>Dear Sir or Madam,</p>
          <br />
          <p>
            I am writing to apply for the position at your company{' '}
            <mark className="rounded bg-orange-100 px-1 not-italic">{v('company', '[company]')}</mark>.
            I believe my skills make me a good candidate for this job.
          </p>
          <p>
            I am{' '}
            <mark className="rounded bg-orange-100 px-1">{v('qualities', '[qualities]')}</mark>.
          </p>
          <p>
            I am interested in{' '}
            <mark className="rounded bg-orange-100 px-1">{v('motivation', '[motivation]')}</mark>.
          </p>
          <p>
            I have experience{' '}
            <mark className="rounded bg-orange-100 px-1">{v('experience', '[experience]')}</mark>.
          </p>
          <p>I look forward to your answer.</p>
          <br />
          <p>Yours sincerely,</p>
          <p className="font-semibold">
            <mark className="rounded bg-orange-100 px-1">{v('name', '[Student name]')}</mark>
          </p>
        </div>
      </div>
    </div>
  )
}

```

# FILE: src\lessons\i-love-what-i-do.ts
```typescript
import type { Lesson } from '../types/lesson'

const lesson: Lesson = {
  title: 'I love what I do',
  level: 'A1/A2',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Welcome to today’s lesson',
      emoji: '🦒',
      level: 'A1/A2',
      subtitle: 'Work, grammar, and job application writing in one interactive lesson.',
      imageSrc: '/assets/i-love-what-i-do/hero.jpg',
      goals: [
        'Revise Present Simple and Present Continuous in work context',
        'Learn how to write a short job application email',
        'Practise vocabulary to talk about work and jobs',
      ],
      words: [
        'company',
        'employee',
        'salary',
        'office',
        'customer',
        'employer',
        'task',
        'staff',
        'bonus',
        'boss',
      ],
      functionalLanguage: [
        'His salary is good.',
        'They get on well with other employees.',
        'Her boss is really friendly.',
        'This week we are doing online courses.',
        'I check my emails every day.',
      ],
    },
    {
      id: 'wordlist',
      type: 'wordlist',
      title: 'Core work vocabulary',
      emoji: '🧙‍♂️',
      words: ['company', 'employee', 'salary', 'office', 'customer', 'employer', 'task', 'staff', 'bonus', 'boss'],
    },
    {
      id: 'grammar-tabs',
      type: 'grammar-tabs',
      title: 'Present Simple vs Present Continuous',
      emoji: '✅',
      tabs: [
        {
          label: 'Present Continuous',
          rules: [
            'Positive: S + am/is/are + V-ing',
            'Negative: S + am/is/are + not + V-ing',
            'Question: Am/Is/Are + S + V-ing?',
          ],
          examples: [
            'I am checking my emails now.',
            'She is talking to a customer.',
            'They are doing online courses this week.',
          ],
        },
        {
          label: 'Present Simple',
          rules: [
            'Affirmative: S + V / V-s',
            'Negative: S + do/does + not + V',
            'Question: Do/Does + S + V?',
          ],
          examples: [
            'I check my emails every day.',
            'Her boss works in the office.',
            'They get bonuses every month.',
          ],
        },
      ],
      highlights: ['am/is/are', 'do/does', 'not', '-s / -es', 'V-ing'],
    },
    {
      id: 'warm-up',
      type: 'warm-up-questions',
      title: 'Warm-up questions',
      emoji: '💼',
      images: [
        '/assets/i-love-what-i-do/work-1.jpg',
        '/assets/i-love-what-i-do/work-2.jpg',
        '/assets/i-love-what-i-do/work-3.jpg',
        '/assets/i-love-what-i-do/work-4.jpg',
      ],
      questions: [
        {
          question: 'What do all these people have in common?',
          hint: 'They all have jobs and work responsibilities.',
        },
        { question: 'Where do they work?', hint: 'In offices, stores, hospitals, and other workplaces.' },
        { question: 'What are they doing at work?', hint: 'Helping customers, checking tasks, and working with teams.' },
      ],
    },
    {
      id: 'vocabulary-match',
      type: 'vocabulary-match',
      title: 'Match words and definitions',
      emoji: '✅',
      items: [
        { word: 'company', definition: 'a business that produces or sells something' },
        { word: 'employee', definition: 'a worker' },
        { word: 'salary', definition: 'a fixed sum of money given to someone for work' },
        { word: 'office', definition: 'a place where people work at desks' },
        { word: 'customer', definition: 'a person who uses particular services' },
        { word: 'employer', definition: 'a person or company who pays workers to do a job' },
        { word: 'task', definition: 'a job a worker needs to do' },
        { word: 'staff', definition: 'all people who work at a company' },
        { word: 'bonus', definition: 'extra money given to a worker for good work' },
        { word: 'boss', definition: 'a person who manages the workers' },
      ],
    },
    {
      id: 'listening',
      type: 'listening-task',
      title: 'Listening: Who is speaking?',
      emoji: '🎧',
      audioSrc: '/assets/i-love-what-i-do/listening-1.mp3',
      note: 'Add your audio file here later.',
      options: ['boss', 'employee', 'customer', 'employer', 'office worker'],
      speakers: [
        { id: 's1', label: 'Speaker 1', answer: 'employee' },
        { id: 's2', label: 'Speaker 2', answer: 'boss' },
        { id: 's3', label: 'Speaker 3', answer: 'customer' },
        { id: 's4', label: 'Speaker 4', answer: 'office worker' },
      ],
    },
    {
      id: 'ranking',
      type: 'ranking-task',
      title: 'What matters most at work?',
      emoji: '✅',
      prompt: 'Rank these from 1 (most important) to 6.',
      items: [
        'good salary',
        'friendly boss',
        'good relations with other staff',
        'flexible hours',
        'bonuses for work',
        'chance to develop a career',
      ],
    },
    {
      id: 'sentence-builder',
      type: 'sentence-builder',
      title: 'Build correct sentences',
      emoji: '🧙‍♂️',
      prompt: 'Build each sentence from chunks.',
      sentences: [
        { chunks: ['other employees', 'They', 'with', 'get on well'], correctOrder: ['They', 'get on well', 'with', 'other employees'] },
        { chunks: ['is really', 'Her boss', 'friendly'], correctOrder: ['Her boss', 'is really', 'friendly'] },
        { chunks: ['we are doing', 'online courses', 'This week'], correctOrder: ['This week', 'we are doing', 'online courses'] },
        { chunks: ['I check', 'my emails', 'every day'], correctOrder: ['I check', 'my emails', 'every day'] },
        { chunks: ['for my work', 'I receive', 'almost every month', 'good bonuses'], correctOrder: ['I receive', 'good bonuses', 'for my work', 'almost every month'] },
      ],
    },
    {
      id: 'company-match',
      type: 'company-match',
      title: 'Company matching',
      emoji: '💼',
      options: ['technology company', 'fashion brand', 'car company', 'sports brand', 'fast food company'],
      items: [
        { company: 'Google', logo: '/assets/i-love-what-i-do/company-1.png', answer: 'technology company' },
        { company: 'Apple', logo: '/assets/i-love-what-i-do/company-2.png', answer: 'technology company' },
        { company: 'Nike', logo: '/assets/i-love-what-i-do/company-3.png', answer: 'sports brand' },
        { company: 'Mercedes-Benz', logo: '/assets/i-love-what-i-do/company-4.png', answer: 'car company' },
        { company: 'McDonald’s', logo: '/assets/i-love-what-i-do/company-5.png', answer: 'fast food company' },
        { company: 'Hennes & Mauritz', logo: '/assets/i-love-what-i-do/company-6.png', answer: 'fashion brand' },
      ],
    },
    {
      id: 'true-false',
      type: 'true-false-quiz',
      title: 'True or False',
      emoji: '✅',
      statements: [
        { statement: 'A good salary is important for many workers.', answer: true },
        { statement: 'A boss is always a customer.', answer: false },
        { statement: 'Employees can work in an office.', answer: true },
        { statement: 'A bonus is extra money for good work.', answer: true },
        { statement: 'Staff means only one worker.', answer: false },
      ],
    },
    {
      id: 'grammar-practice',
      type: 'grammar-practice',
      title: 'Grammar practice',
      emoji: '🧙‍♂️',
      activityA: [
        { sentence: 'I check emails every day.', answer: 'Present Simple' },
        { sentence: 'She is talking to a customer now.', answer: 'Present Continuous' },
        { sentence: 'They work for a big company.', answer: 'Present Simple' },
        { sentence: 'We are doing online courses this week.', answer: 'Present Continuous' },
      ],
      activityB: [
        { sentence: 'She ___ (work) in an office every day.', answer: 'works' },
        { sentence: 'They ___ (do) online courses this week.', answer: 'are doing' },
        { sentence: 'I ___ (check) emails every morning.', answer: 'check' },
        { sentence: 'He ___ (talk) to his boss now.', answer: 'is talking' },
      ],
      activityC: [
        { sentence: 'Her boss [is / are] friendly.', options: ['is', 'are'], answer: 'is' },
        { sentence: 'They [get / gets] bonuses.', options: ['get', 'gets'], answer: 'get' },
        { sentence: 'This week we [do / are doing] online courses.', options: ['do', 'are doing'], answer: 'are doing' },
        { sentence: 'She [doesn’t / don’t] work from home.', options: ['doesn’t', 'don’t'], answer: 'doesn’t' },
      ],
    },
    {
      id: 'phrasebox',
      type: 'phrasebox',
      title: 'Phrasebox',
      emoji: '💼',
      options: [
        'He is our boss',
        'Have a break',
        'Get bonuses',
        'Work for a big company',
        'Share the same office',
        'Do the tasks',
      ],
      cards: [
        { image: '/assets/i-love-what-i-do/phrase-1.jpg', answer: 'He is our boss' },
        { image: '/assets/i-love-what-i-do/phrase-2.jpg', answer: 'Have a break' },
        { image: '/assets/i-love-what-i-do/phrase-3.jpg', answer: 'Get bonuses' },
        { image: '/assets/i-love-what-i-do/phrase-4.jpg', answer: 'Work for a big company' },
        { image: '/assets/i-love-what-i-do/phrase-5.jpg', answer: 'Share the same office' },
        { image: '/assets/i-love-what-i-do/phrase-6.jpg', answer: 'Do the tasks' },
      ],
    },
    {
      id: 'email-reading',
      type: 'email-reading',
      title: 'Job application email reading',
      emoji: '✍️',
      email: {
        subject: 'Application for a position at Tesla',
        body: [
          'Dear Mr Bred,',
          '',
          'I am writing to apply for the position at your company Tesla. I believe my skills make me a good candidate for this job. I am able to perform difficult and interesting tasks. I’m interested in a big salary and a chance to develop my career. I am friendly and usually communicate well with other employees. I always try to get on well with customers. I am very motivated by getting bonuses for my work. I can work at the office or from home. I have experience working for big companies. I look forward to your answer.',
        ],
        closing: ['Yours sincerely,', 'Monica Smith'],
      },
      questions: [
        { question: 'What is the purpose of Monica’s email?', sampleAnswer: 'To apply for a job position.' },
        { question: 'What company does she want to work at?', sampleAnswer: 'Tesla.' },
        { question: 'What is she interested in?', sampleAnswer: 'A good salary and career development.' },
        { question: 'What are her personal qualities?', sampleAnswer: 'She is friendly and communicates well.' },
        { question: 'What is she motivated by?', sampleAnswer: 'Getting bonuses for her work.' },
      ],
    },
    {
      id: 'writing-task',
      type: 'writing-task',
      title: 'Write your own application',
      emoji: '✍️',
      prompt: 'Complete the fields to generate your own job application email.',
    },
    {
      id: 'results',
      type: 'results-checklist',
      title: 'Lesson results',
      emoji: '✅',
      checklist: [
        'write a job application',
        'talk about people at work',
        'use Present Simple and Present Continuous',
      ],
    },
  ],
}

export default lesson

```

# FILE: src\styles\globals.css
```css
@import "tailwindcss";

/* ─── Design tokens ─────────────────────────────────────────────── */
:root {
  --orange:     #f97316;
  --orange-lt:  #fff7ed;
  --green:      #16a34a;
  --green-lt:   #f0fdf4;
  --slate:      #0f172a;
  --muted:      #64748b;
  --card:       #ffffff;
  --border:     #e2e8f0;
  --bg:         #f8f7f2;
  --radius:     1rem;
  --shadow:     0 1px 3px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.06);
  --shadow-md:  0 4px 6px rgba(0,0,0,.06), 0 10px 30px rgba(0,0,0,.08);
}

/* ─── Base ──────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  background: #f8f7f2;
  background-image:
    radial-gradient(circle at 20% 0%, rgba(251,146,60,.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 100%, rgba(34,197,94,.06) 0%, transparent 50%);
  background-attachment: fixed;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: var(--slate);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#root { min-height: 100vh; }

/* ─── Typography ────────────────────────────────────────────────── */
h1, h2, h3 { line-height: 1.2; letter-spacing: -0.02em; }

/* ─── Selection ─────────────────────────────────────────────────── */
::selection { background: rgba(249,115,22,.18); color: var(--slate); }

/* ─── Focus ─────────────────────────────────────────────────────── */
:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 2px;
  border-radius: 6px;
}

/* ─── Scrollbar ─────────────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

/* ─── Native select reset ───────────────────────────────────────── */
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  background-size: 1.2rem;
  padding-right: 2.2rem !important;
  cursor: pointer;
}

/* ─── Audio player ──────────────────────────────────────────────── */
audio { accent-color: var(--orange); }

/* ─── Animations ────────────────────────────────────────────────── */
@keyframes pop-in {
  0%   { transform: scale(0.85); opacity: 0; }
  70%  { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes slide-up {
  from { transform: translateY(8px); opacity: 0; }
  to   { transform: translateY(0);   opacity: 1; }
}
@keyframes shimmer {
  from { background-position: -200% 0; }
  to   { background-position:  200% 0; }
}

.anim-pop   { animation: pop-in  0.25s cubic-bezier(.34,1.56,.64,1) forwards; }
.anim-slide { animation: slide-up 0.2s ease forwards; }

```

# FILE: src\types\lesson.ts
```typescript
export type SectionType =
  | 'hero'
  | 'wordlist'
  | 'grammar-tabs'
  | 'warm-up-questions'
  | 'vocabulary-match'
  | 'listening-task'
  | 'ranking-task'
  | 'sentence-builder'
  | 'company-match'
  | 'true-false-quiz'
  | 'grammar-practice'
  | 'phrasebox'
  | 'email-reading'
  | 'writing-task'
  | 'results-checklist'

export interface BaseSection {
  id: string
  type: SectionType
  title: string
  emoji?: string
}

export interface HeroSection extends BaseSection {
  type: 'hero'
  level: string
  subtitle: string
  imageSrc: string
  goals: string[]
  words: string[]
  functionalLanguage: string[]
}

export interface WordListSection extends BaseSection {
  type: 'wordlist'
  words: string[]
}

export interface GrammarTabsSection extends BaseSection {
  type: 'grammar-tabs'
  tabs: {
    label: string
    rules: string[]
    examples: string[]
  }[]
  highlights: string[]
}

export interface WarmUpQuestionsSection extends BaseSection {
  type: 'warm-up-questions'
  images: string[]
  questions: {
    question: string
    hint: string
  }[]
}

export interface VocabularyMatchSection extends BaseSection {
  type: 'vocabulary-match'
  items: {
    word: string
    definition: string
  }[]
}

export interface ListeningTaskSection extends BaseSection {
  type: 'listening-task'
  audioSrc: string
  note: string
  speakers: {
    id: string
    label: string
    answer: string
  }[]
  options: string[]
}

export interface RankingTaskSection extends BaseSection {
  type: 'ranking-task'
  prompt: string
  items: string[]
}

export interface SentenceBuilderSection extends BaseSection {
  type: 'sentence-builder'
  prompt: string
  sentences: {
    chunks: string[]
    correctOrder: string[]
  }[]
}

export interface CompanyMatchSection extends BaseSection {
  type: 'company-match'
  items: {
    company: string
    logo: string
    answer: string
  }[]
  options: string[]
}

export interface TrueFalseQuizSection extends BaseSection {
  type: 'true-false-quiz'
  statements: {
    statement: string
    answer: boolean
  }[]
}

export interface GrammarPracticeSection extends BaseSection {
  type: 'grammar-practice'
  activityA: {
    sentence: string
    answer: 'Present Simple' | 'Present Continuous'
  }[]
  activityB: {
    sentence: string
    answer: string
  }[]
  activityC: {
    sentence: string
    options: string[]
    answer: string
  }[]
}

export interface PhraseBoxSection extends BaseSection {
  type: 'phrasebox'
  cards: {
    image: string
    answer: string
  }[]
  options: string[]
}

export interface EmailReadingSection extends BaseSection {
  type: 'email-reading'
  email: {
    subject: string
    body: string[]
    closing: string[]
  }
  questions: {
    question: string
    sampleAnswer: string
  }[]
}

export interface WritingTaskSection extends BaseSection {
  type: 'writing-task'
  prompt: string
}

export interface ResultsChecklistSection extends BaseSection {
  type: 'results-checklist'
  checklist: string[]
}

export type LessonSection =
  | HeroSection
  | WordListSection
  | GrammarTabsSection
  | WarmUpQuestionsSection
  | VocabularyMatchSection
  | ListeningTaskSection
  | RankingTaskSection
  | SentenceBuilderSection
  | CompanyMatchSection
  | TrueFalseQuizSection
  | GrammarPracticeSection
  | PhraseBoxSection
  | EmailReadingSection
  | WritingTaskSection
  | ResultsChecklistSection

export interface Lesson {
  title: string
  level: string
  sections: LessonSection[]
}

```

# FILE: src\utils\assetUrl.ts
```typescript
export function assetUrl(path: string): string {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}

```
