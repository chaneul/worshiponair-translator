# Transcript Translation

A simple transcript translation overlay for displaying translated transcript text. (just text right now)

---

## Features

- Display transcript text
- Simple keyboard controls
- Status switching for translation workflow

---

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

---

## Usage

1. Start the application.
2. Click the **Status** indicator to cycle through:
   - Live
   - Listening
   - Translating
   - Back to Live
3. Press **E** to display the next translated transcript line.

---

## Controls

| Action                    | Control                    |
| ------------------------- | -------------------------- |
| Cycle status              | Click the status indicator |
| Show next transcript line | `E`                        |

---

## Notes

- The **Status** component and the **Transcript** component are currently independent and are not synchronized.
- Transcript progression is currently manual using the **E** key.
