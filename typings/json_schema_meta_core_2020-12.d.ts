import type { JSONSchemaMeta202012 } from "./json_schema_meta_2020-12";

/**
 * Core vocabulary meta-schema
 * 核心词汇表元模式，定义了 JSON Schema 的核心标识和引用机制
 * @see https://json-schema.org/draft/2020-12/meta/core
 */
export type JSONSchemaMetaCore202012 =
	| boolean
	| {
			/**
			 * 模式资源标识符
			 * 为模式或子模式定义唯一的 IRI 标识符
			 * 用于标识模式资源并作为相对引用的基础 IRI
			 * 必须是不带片段的有效 IRI 引用
			 * @comment Non-empty fragments not allowed.
			 * @pattern ^[^#]*#?$
			 */
			$id?: UriReferenceString;

			/**
			 * 模式方言标识符
			 * 声明此模式使用的 JSON Schema 方言
			 * 必须是完整的 IRI（包含协议方案）
			 * 通常在文档根模式中使用
			 */
			$schema?: UriString;

			/**
			 * 模式引用
			 * 引用另一个模式并应用其验证规则
			 * 值必须是 IRI 引用，解析后指向要应用的模式
			 * 这是静态引用，在模式加载时即可解析
			 */
			$ref?: UriReferenceString;

			/**
			 * 锚点标识符
			 * 为子模式定义位置无关的纯名称片段标识符
			 * 允许在不依赖 JSON Pointer 结构的情况下引用子模式
			 * 可以在模式重构时保持引用有效
			 */
			$anchor?: AnchorString;

			/**
			 * 动态引用
			 * 用于需要在运行时动态解析的引用场景
			 * 与 $dynamicAnchor 配合使用，支持递归模式扩展
			 * 值必须是片段形式的 IRI（如 "#foo"）
			 */
			$dynamicRef?: UriReferenceString;

			/**
			 * 动态锚点标识符
			 * 定义可被 $dynamicRef 动态解析的片段标识符
			 * 用于高级场景，如可扩展的递归模式
			 * 解析时会在动态作用域中查找匹配的锚点
			 */
			$dynamicAnchor?: AnchorString;

			/**
			 * 词汇表声明
			 * 声明此模式使用的词汇表及其是否为必需
			 * 键是词汇表 IRI，值为 true 表示必需，false 表示可选
			 * 用于元模式定义和方言扩展
			 */
			$vocabulary?: Record<string, boolean>;

			/**
			 * 模式注释
			 * 为模式的读者或维护者提供注释说明
			 * 实现不得向最终用户展示此内容
			 * 可用于调试输出或开发工具
			 */
			$comment?: string;

			/**
			 * 模式定义集合
			 * 存储可重用的子模式定义
			 * 不直接影响验证，通常通过 $ref 引用使用
			 * 键是定义名称，值是对应的模式
			 */
			$defs?: Record<string, JSONSchemaMeta202012>;
	  };

/**
 * 锚点字符串
 * 必须符合 XML NCName 语法：以字母或下划线开头，后跟字母、数字、下划线、连字符或点
 * 用于定义位置无关的模式标识符
 * @pattern ^[A-Za-z_][-A-Za-z0-9._]*$
 */
export type AnchorString = string;

/**
 * URI 字符串
 * 必须是有效的 URI（统一资源标识符）
 * 用于标识模式资源和词汇表
 * @format uri
 */
export type UriString = string;

/**
 * URI 引用字符串
 * 可以是完整的 URI 或相对引用
 * 用于模式引用和标识符定义
 * @format uri-reference
 */
export type UriReferenceString = string;
