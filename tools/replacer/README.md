# Replacer README

Install it in VSCode to increase productivity while developing MkDocs documentation.

## Features

Updates a markdown link. Original image width is expected at the end of the link. The width is divided by 1.25 and rounded.

```
![Some Text](./path/to/image.png)600
```

=>

```
![Some Text](./path/to/image.png){width="480px"}
```

## Packaging

```
vsce package
```

## Installation

```
code --install-extension replacer-0.0.1.vsix
```
