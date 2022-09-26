### This repo reproduce the issue with NX and Typeorm

install packages

```
pnpm i
```

Typeorm migration to see the error

```
pnpm run migration:generate
```

Errors

```
error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.
```
