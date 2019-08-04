JavaScript Shelljs Webpack Demo
==============================

```
npm install
npm demo
```

will throw:

```
Error: Cannot find module '/exec-child.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
webpack:///./node_modules/shelljs/src/common.js?:412
        throw e;
        ^

ShellJSInternalError: ENOENT: no such file or directory, open '/var/folders/gm/t8kf08qn0598qcl_vkxxyhxc0000gr/T/shelljs_d7da547d2136239bb317'
    at Object.openSync (fs.js:443:3)
    at Object.readFileSync (fs.js:343:35)
    at execSync (webpack:///./node_modules/shelljs/src/exec.js?:85:17)
    at Object._exec (webpack:///./node_modules/shelljs/src/exec.js?:213:12)
    at Object.eval [as exec] (webpack:///./node_modules/shelljs/src/common.js?:348:23)
    at eval (webpack:///./entry.js?:5:48)
```
