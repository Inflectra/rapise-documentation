# Replacer README

Install it in VSCode to increase productivity while developing MkDocs documentation.

## Features

Replaces a markdown link with an HTML tag. Original image width is expected at the end of the markdown link. The width is divided by 1.25 and rounded.

```
![Some Text](./path/to/image.png)600
```

=>

```
<img alt="Some Text" href="./path/to/image.png" width="480px">
```

## Packaging

```
vsce package
```

## Installation

```
code --install-extension replacer-0.0.1.vsix
```
