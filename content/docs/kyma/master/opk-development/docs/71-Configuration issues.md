---
title: 'Configuration issues'
type: 'FAQ'
---

## Problems caused by too high version of Node.js

The Node.js version that the robot application (OPK) depends on cannot be higher than V13, otherwise various inexplicable problems may occur. If you encounter some unconventional problems during development or compilation, you can check the Node.js version first.

## Crash caused by babel library upgrade

Crash information:

![faq](./assets/faq-1.png)

Problem causes:

The third-party library referenced in package.json uses the `^` symbol, which will automatically match the lastest version. After the @babel library is upgraded, the old and new versions are incompatible, causing continuous crashes.

Solution:

Check the `package.json` file and remove the `^` in the `@babel/runtime` version number.

***Note: Try to avoid using the `^` symbol for dependencies in package.json, and clearly rely on the version of the library to avoid incompatibility in automatic upgrades.***

## Import a high version of React Native causes compilation failure

Exception information:

![faq](./assets/faq-2.png)

Problem causes:

The high version of react-native is introduced in the package.json dependency.

Solution:

Remove the react-native dependency in `package.json`. React-native has been integrated by default. You don't need to manually add dependencies. After removal, you need to delete the `node_modules` folder.

## react-native/cli.js is not exist

Exception information:

![faq](./assets/faq-3.png)

Problem causes:

- Caused by too high node version
- The name in package.json contains Non-English characters

Solution:

Reduce node version
The name in package.json is in English.
