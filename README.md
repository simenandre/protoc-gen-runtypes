# Protoc Generate Runtypes

> Protoc Plugin for generating Runtypes

[![lifecycle](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![NPM version](https://img.shields.io/npm/v/protoc-gen-runtypes.svg)](https://www.npmjs.com/package/protoc-gen-runtypes)
[![codecov](https://codecov.io/gh/cobraz/protoc-gen-runtypes/branch/main/graph/badge.svg)](https://codecov.io/gh/cobraz/protoc-gen-runtypes)

`protoc-gen-runtypes` is a [protoc](https://github.com/google/protobuf) plugin
that generates Runtypes types from Protobuf files.

We are thankful for all help with adding new functionality, fixing issues, or
improve the package. Feel free to open issues and pull requests ❤️

**Note**: This plugin is not released yet, see
[#15](https://github.com/cobraz/protoc-gen-runtypes/issues/15) for more! If you
are looking to convert some Protobuf files right away, I have another that does
just that (without using `protoc`):
[protobuf-to-runtypes](https://github.com/cobraz/protobuf-to-runtypes)

## Quickstart

```shell
▶ yarn add protoc-gen-runtypes
```

If you use [buf](https://buf.build/), you can find an example
[here](./buf.gen.yaml).

## Documentation

Apart from this README, you can find details and examples of using the SDK in
the following places:

- [API Documentation][docs]

[runtypes]: https://github.com/pelotom/runtypes
[docs]: ./docs
