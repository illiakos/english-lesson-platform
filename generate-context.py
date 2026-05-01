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