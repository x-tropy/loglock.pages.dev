# Developer notes

- Decided to keep using tremor to build immutablelog to avoid unnecessary workload.
- Used chatgpt to merge two giant tailwind.config.js, it works perfetly!
- [Tremor Installation Guide](https://www.tremor.so/docs/getting-started/installation)
- [A simple code editor for NextJs](https://github.com/uiwjs/react-textarea-code-editor#support-nextjs), [Supported languages](https://github.com/wooorm/refractor#syntaxes)
- [Revalidate by tag](https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation): Revalidate after submiting a new log
- [Route handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Heroicons can only be used in **client side**

## Data structure

- projectURL
- timestamp
- organization
- projectTitle
- projectAcronym
- experimentURL
- timestamp
- organization
- projectTitle
- projectAcronym
- algorithm
  - fileHash
  - filePath

3. filePath

- `localhost:9876/file/` + fileHash

4. hashInput

- organization
- timestamp
- algorithm
  - fileHash
  - filePath
- projectURL
- experimentURL
