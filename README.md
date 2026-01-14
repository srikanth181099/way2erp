# Way2ERP

Enterprise Resource Planning Solutions Website

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm install
npm run build
```

This creates a `dist/` folder with static files ready to deploy.

---

## Deploy on aaPanel (Without Docker)

### Step 1: Prepare Files
```bash
git clone https://github.com/srikanth181099/way2erp.git
cd way2erp
npm install
npm run build
```

### Step 2: Create Website in aaPanel
1. Open aaPanel → **Website** → **Add Site**
2. Enter your domain (e.g., `way2erp.com`)
3. Select **Create Database**: No
4. Select **PHP Version**: Pure Static
5. Click **Submit**

### Step 3: Upload Built Files
1. Go to **Files** in aaPanel
2. Navigate to your site's root directory (e.g., `/www/wwwroot/way2erp.com/`)
3. Delete default files
4. Upload all contents from the `dist/` folder

### Step 4: Configure Nginx for SPA Routing
1. Go to **Website** → Click your site → **Config**
2. Add this inside the `server` block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;

# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

3. Save and restart Nginx

### Step 5: Enable SSL (Optional)
1. Go to **Website** → Click your site → **SSL**
2. Apply for Let's Encrypt certificate
3. Enable **Force HTTPS**

---

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## License

MIT
