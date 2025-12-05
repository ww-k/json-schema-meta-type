import type { JSONSchemaMeta202012 } from "./json_schema_meta_2020-12";

/**
 * Content vocabulary meta-schema
 * 内容词汇表元模式，用于描述字符串编码的非 JSON 数据
 * @see https://json-schema.org/draft/2020-12/meta/content
 */
export type JSONSchemaMetaContent202012 =
	| boolean
	| {
			/**
			 * 内容编码
			 * 指定字符串应被解释为编码的二进制数据
			 * 常见值：base64, base64url, base32, base16 等（RFC 4648）
			 * 如果省略但有 contentMediaType，表示使用身份编码（无转换）
			 */
			contentEncoding?: string;

			/**
			 * 内容媒体类型
			 * 指定字符串内容的 MIME 类型
			 * 如果有 contentEncoding，此属性描述解码后的字符串
			 * 例如：application/json, image/png, text/html 等
			 */
			contentMediaType?: string;

			/**
			 * 内容模式
			 * 描述字符串编码内容的结构
			 * 与 contentMediaType 配合使用，定义解码后内容的验证规则
			 * 值必须是有效的 JSON Schema
			 */
			contentSchema?: JSONSchemaMeta202012;
	  };
