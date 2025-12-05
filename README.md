# JSON Schema Meta Type

JSON Schema 2020-12 元模式的 TypeScript 类型定义。

## 简介

本项目提供了 JSON Schema 2020-12 规范的完整 TypeScript 类型定义，包括所有官方词汇表（vocabularies）。这些类型定义可以帮助您在 TypeScript 项目中以类型安全的方式使用 JSON Schema。

## 特性

- ✅ 完整的 JSON Schema 2020-12 规范支持
- ✅ 包含所有官方词汇表：
  - **Core**: 核心标识和引用机制（`$id`, `$ref`, `$schema` 等）
  - **Applicator**: 应用器，定义如何应用子模式（`properties`, `items`, `allOf` 等）
  - **Unevaluated**: 处理未求值位置（`unevaluatedItems`, `unevaluatedProperties`）
  - **Validation**: 验证约束（`type`, `minimum`, `maxLength` 等）
  - **Meta-Data**: 元数据注解（`title`, `description`, `examples` 等）
  - **Format**: 格式注解（`format`）
  - **Content**: 内容编码（`contentEncoding`, `contentMediaType` 等）
- ✅ 支持已弃用的属性以保持向后兼容
- ✅ 完整的 TypeScript 类型提示和文档注释

## 安装

```bash
npm install json-schema-meta-type
```

## 使用方法

### 基本用法

```typescript
import type { JSONSchemaMeta202012 } from 'json-schema-meta-type';

// 布尔模式
const alwaysValid: JSONSchemaMeta202012 = true;
const alwaysFail: JSONSchemaMeta202012 = false;

// 空对象模式（允许任何值）
const anyValue: JSONSchemaMeta202012 = {};

// 完整的 Schema 定义
const userSchema: JSONSchemaMeta202012 = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://example.com/user.schema.json",
  title: "User",
  description: "用户信息模式",
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 1,
      maxLength: 100
    },
    age: {
      type: "integer",
      minimum: 0,
      maximum: 150
    },
    email: {
      type: "string",
      format: "email"
    }
  },
  required: ["name", "email"],
  additionalProperties: false
};
```

### 使用特定词汇表

您也可以单独导入特定的词汇表类型：

```typescript
import type { JSONSchemaMetaCore202012 } from 'json-schema-meta-type/typings/json_schema_meta_core_2020-12';
import type { JSONSchemaMetaValidation202012 } from 'json-schema-meta-type/typings/json_schema_meta_validation_2020-12';
```

### 高级示例

```typescript
import type { JSONSchemaMeta202012 } from 'json-schema-meta-type';

// 使用 $ref 引用
const addressSchema: JSONSchemaMeta202012 = {
  $defs: {
    address: {
      type: "object",
      properties: {
        street: { type: "string" },
        city: { type: "string" },
        country: { type: "string" }
      },
      required: ["street", "city", "country"]
    }
  },
  type: "object",
  properties: {
    billingAddress: { $ref: "#/$defs/address" },
    shippingAddress: { $ref: "#/$defs/address" }
  }
};

// 使用组合关键字
const polymorphicSchema: JSONSchemaMeta202012 = {
  oneOf: [
    { type: "string" },
    { type: "number" },
    {
      type: "object",
      properties: {
        value: { type: "string" }
      }
    }
  ]
};

// 使用模式属性
const configSchema: JSONSchemaMeta202012 = {
  type: "object",
  properties: {
    name: { type: "string" },
    version: { type: "string" }
  },
  patternProperties: {
    "^x-": { type: "string" }  // 扩展字段
  },
  additionalProperties: false
};
```

## API 文档

### 主要类型

#### `JSONSchemaMeta202012`

完整的 JSON Schema 2020-12 元模式类型，包含所有词汇表。

```typescript
type JSONSchemaMeta202012 = boolean | {
  // Core 词汇表
  $id?: string;
  $schema?: string;
  $ref?: string;
  $defs?: Record<string, JSONSchemaMeta202012>;

  // Validation 词汇表
  type?: string | string[];
  enum?: any[];
  const?: any;

  // Applicator 词汇表
  properties?: Record<string, JSONSchemaMeta202012>;
  items?: JSONSchemaMeta202012;
  allOf?: JSONSchemaMeta202012[];

  // Meta-Data 词汇表
  title?: string;
  description?: string;
  examples?: any[];

  // ... 更多属性
};
```

### 词汇表类型

- `JSONSchemaMetaCore202012`: 核心词汇表
- `JSONSchemaMetaApplicator202012`: 应用器词汇表
- `JSONSchemaMetaValidation202012`: 验证词汇表
- `JSONSchemaMetaMetaData202012`: 元数据词汇表
- `JSONSchemaMetaFormatAnnotation202012`: 格式注解词汇表
- `JSONSchemaMetaContent202012`: 内容词汇表
- `JSONSchemaMetaUnevaluated202012`: 未求值词汇表

## 兼容性

- TypeScript 4.0+

## 相关资源

- [JSON Schema 官方网站](https://json-schema.org/)
- [JSON Schema 2020-12 规范](https://json-schema.org/draft/2020-12/json-schema-core.html)
- [JSON Schema 词汇表](https://json-schema.org/draft/2020-12/json-schema-validation.html)

## 许可证

ISC

## 贡献

欢迎提交 Issue 和 Pull Request！

## 仓库

[https://github.com/ww-k/json-schema-meta-type](https://github.com/ww-k/json-schema-meta-type)