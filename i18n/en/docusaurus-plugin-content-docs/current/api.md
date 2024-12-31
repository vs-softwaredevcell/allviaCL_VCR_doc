---
sidebar_position: 4
---

# API Reference

API documentation for AllviaCL-VCR.

## Core APIs

### Component API
```cpp
// Create component
Component* CreateComponent(const std::string& name);

// Configure component
bool ConfigureComponent(Component* component, const Config& config);
```

### Vision Processing API
```cpp
// Process image
Image ProcessImage(const Image& input);

// Create real-time stream
Stream* CreateStream(const StreamConfig& config);
```

## Error Handling

Explains error codes and handling methods that may occur during API calls. 