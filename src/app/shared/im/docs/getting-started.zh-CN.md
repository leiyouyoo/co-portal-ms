---
order: 1
title: 开始使用
type: Documents
---

@co/im 及时消息组件库。

## 如何使用

安装 `@co/im` 依赖包：

```bash
yarn add @co/im
```

导入 `DelonImModule` 模块：

```typescript
import { DelonImModule } from '@co/im';

@NgModule({
  imports: [
    DelonImModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
