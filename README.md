## Next.js
This is Next.js practice repository. <br>
Basic concepts covered are :Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG) <br>
### SSR 
The server renders the content for each request, and sends the complete document to the client.However, it can put a high load on the server and transition between pages can be slow.

### CSR
The browser renders the content using JavaScript after receiving a basic HTML document from the server. CSR has a reduced server-side workload but a slow initial load.

### SSG
The content is rendered ahead of time during the build phase, and then served. It's serverless as serving static pages doesn't require a server to monitor.



### Getting Started

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
