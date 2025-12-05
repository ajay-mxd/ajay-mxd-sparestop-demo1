import './globals.css'

export const metadata = {
  title: 'SpareHub - Car Spare Parts',
  description: 'Car spare parts fitment system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

5. **Click "Commit changes"**
6. **Vercel will automatically redeploy!**

---

## ✅ **Make Sure You Have ALL These Files:**

Your GitHub `app/` folder should have:
```
app/
├── page.js       ← Your main code (you already have this ✅)
├── layout.js     ← YOU NEED THIS! ❌
└── globals.css   ← You also need this
