# Contributing
Yay, you want to contribute!. If you are here, then that means that your contribution is not just adding a character. If you are doing just that, that is already covered in the [README](./README.md).

# Requirements
* `NodeJS` version 22 or later
* `npm` whatever version

## Building/Running
* First, you may want to know how to actually get this up and running on your local machine.
* Asuming you already have cloned it. and a working Node.JS and NPM version, you want to run `npm install` in the same directory as `package.json`. This will install the required dependencies (React and ESLint)
* Once it's done installing, you can run `node --run dev` to start serving the site, and you will get a link to the locally running site. Whatever changes you make to the project while the command is running will be immediately reflected in your browser. There is no need to reload.
* If you want to build a production-ready static site, you can use `node --run build`. The resulted build will end up in the `dist` directory. And to see that release version of the site run `node --run serve`, this will serve the latest built version of the site

## Images should be in the WebP format
* To convert the png files over the WebP without quality loss, use this command:
* `parallel cwebp {} -z 9 -o {.}.webp ::: *.png`
* This will convert all the png files to webp in the current standing directory

## Actually coding
* This project uses ESLint for linting. If your IDE/Editor doesn't support it by default, you should try installing an extension that enables this functionality, this is required for maintaining consistency among the repo and having things look nice. If there is no such extension, you can just run `node --run lint` in a terminal to check for eslint rules manually.
* You can code now, or refactor. Whatever, as long as it's good code and improves stuff its welcome
* Once you are done coding and you think your changes look good, you can open a pull request. However, before pushing your changes, you should keep in mind that if you plan on contributing to the repository again, DO NOT commit to the master branch of your fork. All the changes you make should be in a separate branch. This is to avoid every pull request having noise or merge commits before the actual code.
* Now you can actually push your changes to your new branch and open a PR. :D
