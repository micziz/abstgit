<h1 style="text-align: center;">Git-Utils</h1>

<p style="text-align: center;">A set of helper functions for git</p>

**NOTE!** This project is in heavy developement and is not stable, therefore it sholud not be used for production! You are advised

## Introduction

Git has revolutionized the developement space. It helps massevely with collaboration in small and big projects. But there is no modern abstraction over git that you can use for your projects. Git-Utils aims to be a minimal (no dependencies) set of helper functions for working with git. 

## Installation

```sh
npm i --save-dev git-utils
```

Yarn & pnpm are also supported.

git-utils requires node v12 (you need to enable esm), but we officially support only the latest LTS and it's tested on the latest version of Node if you encounter issues with a version below the LTS, don't expect much help.

## Usage

```js
import { clone } from 'git-utils/clone/clone';

clone("micziz/git-utlis")
```

This will clone in the current node direcotry (generally the root of your project, but you can change it with process.chdir)

If you want to clone to a specific direcotry, use cloneTo.

```js
import { cloneTo } from 'git-utils/clone/clone';

cloneTo("micziz/git-utils", "utils")
```

Check the [documentation](docs/) for all the available utilities!

## Contributing

Pull request are welcome! If you would like to contribute, please read the [contributing.md](contributing.md). 

## License

Apache 2.0

