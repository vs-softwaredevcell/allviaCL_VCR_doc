---
sidebar_position: 4
---

# API 참조

AllviaCL-VCR의 API 문서입니다.

## 핵심 API

### 컴포넌트 API
```cpp
// 컴포넌트 생성
Component* CreateComponent(const std::string& name);

// 컴포넌트 설정
bool ConfigureComponent(Component* component, const Config& config);
```

### 비전 처리 API
```cpp
// 이미지 처리
Image ProcessImage(const Image& input);

// 실시간 스트림 처리
Stream* CreateStream(const StreamConfig& config);
```

## 에러 처리

API 호출 시 발생할 수 있는 에러 코드와 처리 방법을 설명합니다. 