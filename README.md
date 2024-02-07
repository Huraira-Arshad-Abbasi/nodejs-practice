# Node.js Practice

Basic Node.js exercises covering the file system module and HTTP server creation.

## Files

| File | Description |
|------|-------------|
| `file-manager.js` | CLI file manager — creates or removes files via command-line args |
| `http-server.js` | Simple HTTP server that responds with an HTML greeting on port 3400 |
| `logInForm.html` | Login form HTML (practice) |
| `files/` | Files created by the file-manager exercise |

## How to Run

```bash
# File manager — add a file
node file-manager.js add myfile.txt "Hello World"

# File manager — remove a file
node file-manager.js remove myfile.txt

# HTTP server (visit http://localhost:3400)
node http-server.js
```
