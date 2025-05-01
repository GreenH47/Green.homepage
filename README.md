<h1 align="center">
  Green.homepage
</h1>
<p align="center">
  My portfolio website built with <a href="https://nextjs.org" target="_blank">Next.js</a>, <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>, <a href="https://www.radix-ui.com" target="_blank">Radix UI</a> and deployed on <a href="https://www.oracle.com/au/cloud/" target="_blank">Oracle Cloud</a>.⚡
</p>
<p align="center">
  fork from <a href="https://github.com/shahsagarm/sagarshah.dev" target="_blank">sagarshah.dev</a>
</p>

![preview](https://raw.githubusercontent.com/shahsagarm/sagarshah.dev/main/thumbnail.png)

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for building performant apps with the best developer experience
- [TypeScript](https://typescriptlang.org) - Static type checker for end-to-end typesafety
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for rapid UI development
- [Radix UI](https://www.radix-ui.com/) - Primitives like drawer, button, etc. to build a stellar user experience
- [Lucide Icons](https://lucide.dev) - Beautifully simple, pixel-perfect icons
- [Next Themes](https://github.com/pacocoursey/next-themes) - An abstraction for themes (Dark + Light Mode).
- [Oracle Cloud](https://www.oracle.com/au/cloud/) - Oracle Cloud Infrastructure (OCI) is an IaaS that delivers on-premises, high-performance computing power to run cloud native and enterprise company’s IT workloads.
- [Docker](https://www.docker.com) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- [Kubernetes](https://kubernetes.io) - Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.
- [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions) - GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD.

## Running Locally

```bash
$ git clone https://github.com/GreenH47/Green.homepage.git
$ cd Green.homepage
$ npm install
$ npm run build
```
## Figma

If you are looking for a figma file, you can find it **[here](https://www.figma.com/file/K94AD9t3IhRDb9RCoguEn6/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327%3A868&mode=design&t=TkS6o9fUCYFlO8H6-1)**.

## License

Licensed under the [MIT license](https://github.com/shahsagarm/sagarshah.dev/blob/main/LICENSE).

## deployment steps

### Build and Run Docker Image

```bash
$ docker build -t green.homepage .
$ docker run -p 3000:3000 green.homepage
```

### build and push docker image to docker hub

```bash
$ docker build --platform linux/arm64 -t green.homepage .
$ docker tag green.homepage greenh47/homepage:nextjs
$ docker push greenh47/homepage:nextjs

//or
$ docker build --platform linux/arm64 -t green.homepage .
$ docker tag green.homepage greenh47/homepage:nextjs
$ docker push greenh47/homepage:nextjs

````

#### build docker image to different platform

```bash
$ docker buildx build --platform linux/amd64,linux/arm64 -t green.homepage . --load

// or arm64 only
$ docker build --platform linux/arm64 -t green.homepage .

```

### deploy docker image and use docker-compose.yml

```bash
$ docker-compose pull home_page
$ docker-compose up -d home_page
```

### deploy docker image to kubernetes

```bash
$ kubectl apply -f k8s/deployment.yaml
$ kubectl apply -f k8s/service.yaml
```
