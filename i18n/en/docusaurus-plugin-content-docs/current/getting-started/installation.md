---
sidebar_position: 2
---

# Installation

This guide explains how to install and configure AllviaCL-VCR.

## System Requirements

- Windows 10 or later
- Visual Studio 2019 or later
- CMake 3.15 or later

## Installation Steps

1. Download source code
```bash
git clone https://github.com/allviacl/vcr.git
cd vcr
```

2. Build
```bash
mkdir build
cd build
cmake ..
cmake --build . --config Release
```

3. Install
```bash
cmake --install .
```

## Configuration

Learn about the environment variables and settings needed after installation. 