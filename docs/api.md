---
id: api
title: API 참조
---

# API 참조

VCR API는 RESTful 원칙을 따르며, JSON 형식으로 데이터를 주고받습니다.

## 기본 정보

- 기본 URL: `https://api.vcr.allviacl.com`
- API 버전: v1
- 인증: Bearer 토큰

## 인증

### 로그인

```http
POST /api/v1/auth/login
```

**요청 본문**
```json
{
  "username": "string",
  "password": "string"
}
```

**응답**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "username": "string",
    "role": "string"
  }
}
```

## 시스템 관리

### 시스템 상태 조회

```http
GET /api/v1/system/status
```

**응답**
```json
{
  "status": "string",
  "uptime": "number",
  "memory": {
    "total": "number",
    "used": "number"
  }
}
```

### 로그 조회

```http
GET /api/v1/system/logs
```

**쿼리 파라미터**
- `start`: 시작 시간 (ISO 8601)
- `end`: 종료 시간 (ISO 8601)
- `level`: 로그 레벨 (debug, info, warn, error)

## 데이터 관리

### 데이터 조회

```http
GET /api/v1/data
```

**쿼리 파라미터**
- `type`: 데이터 유형
- `from`: 시작 시간
- `to`: 종료 시간

### 데이터 저장

```http
POST /api/v1/data
```

**요청 본문**
```json
{
  "type": "string",
  "value": "any",
  "timestamp": "string"
}
```

## 오류 코드

| 코드 | 설명 |
|------|------|
| 400 | 잘못된 요청 |
| 401 | 인증 실패 |
| 403 | 권한 없음 |
| 404 | 리소스 없음 |
| 500 | 서버 오류 |

## API 사용 예제

### cURL

```bash
# 로그인
curl -X POST https://api.vcr.allviacl.com/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "password"}'

# 시스템 상태 조회
curl https://api.vcr.allviacl.com/api/v1/system/status \
  -H "Authorization: Bearer {token}"
```

### JavaScript

```javascript
// 로그인
async function login(username, password) {
  const response = await fetch('https://api.vcr.allviacl.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

// 시스템 상태 조회
async function getSystemStatus(token) {
  const response = await fetch('https://api.vcr.allviacl.com/api/v1/system/status', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
}
``` 