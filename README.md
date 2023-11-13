<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/mattfrias/mattfrias-site/v1/images/favicon.png" width="100" />
</div>
<h1 align="center">
  mattfrias.com - v2
</h1>
<p align="center">
  The second iteration of <a href="https://mattfrias.com" target="_blank">mattfrias.com</a> built with <a href="https://nextjs.org" target="_blank">Next.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a> Coded on <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> and hosted on <a href="https://www.docker.com/" target="_blank">Docker</a>.
</p>
<p align="center">
  Previous iterations:
  <a href="https://github.com/mattfrias/mattfrias-site/tree/v1" target="_blank">v1</a>
</p>
<p align="center">
  <a href="https://github.com/mattfrias/mattfrias-site/actions/workflows/docker-image.yml" target="_blank">
    <img src="https://github.com/mattfrias/mattfrias-site/actions/workflows/docker-image.yml/badge.svg" alt="Docker Image CI Status" />
  </a>
	<a href="https://hub.docker.com/r/mattfrias/mattfrias-site" target="_blank">
		<img src="https://img.shields.io/docker/v/mattfrias/mattfrias-site" alt="Docker Image Version">
	</a>

</p>

<!-- Explain the install process -->
## 🛠️ Installation & Set Up

### Run Locally
1. Install dependencies
```sh
npm install
```

2. Build the project
```sh
npm run build
```

3. Start the production server
```sh
npm run start
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using Docker
1. Build the Docker image
```sh
docker build -t mattfrias-site .
```

2. Run the Docker image
```sh
docker run -p 3000:3000 mattfrias-site
```

3. Open [http://DOCKER-HOST:3000](http://DOCKER-HOST:3000) with your browser, where *DOCKER-HOST* is the IP address of the host running Docker, to see the result.

