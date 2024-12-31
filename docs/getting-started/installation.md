---
sidebar_position: 2
---

# 설치

AllviaCL-VCR을 설치하고 설정하는 방법을 안내합니다.

## 시스템 요구사항

- Windows 10 이상
- Visual Studio 2019 이상
- CMake 3.15 이상

## 설치 과정

1. 소스 코드 다운로드
```bash
git clone https://github.com/allviacl/vcr.git
cd vcr
```

2. 빌드
```bash
mkdir build
cd build
cmake ..
cmake --build . --config Release
```

3. 설치
```bash
cmake --install .
```

## 설정

설치 후 필요한 환경 변수와 설정을 안내합니다. 