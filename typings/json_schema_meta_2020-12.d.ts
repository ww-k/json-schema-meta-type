import type { JSONSchemaMetaApplicator202012 } from "./json_schema_meta_applicator_2020-12";
import type { JSONSchemaMetaContent202012 } from "./json_schema_meta_content_2020-12";
import type {
	AnchorString,
	JSONSchemaMetaCore202012,
	UriReferenceString,
} from "./json_schema_meta_core_2020-12";
import type { JSONSchemaMetaFormatAnnotation202012 } from "./json_schema_meta_format_annotation_2020-12";
import type { JSONSchemaMetaMetaData202012 } from "./json_schema_meta_meta_data_2020-12";
import type { JSONSchemaMetaUnevaluated202012 } from "./json_schema_meta_unevaluated_2020-12";
import type {
	JSONSchemaMetaValidation202012,
	StringArray,
} from "./json_schema_meta_validation_2020-12";

/**
 * 已弃用的属性
 * 这些属性来自早期草案版本，为了向后兼容而保留
 * 在新代码中应避免使用这些属性
 */
interface DeprecatedProperties {
	/**
	 * 定义（已弃用）
	 * 已被 $defs 替代
	 * 用于存储可重用的子模式定义
	 * @comment "definitions" has been replaced by "$defs".
	 * @deprecated
	 */
	definitions?: Record<string, JSONSchemaMeta202012>;

	/**
	 * 依赖（已弃用）
	 * 已被 dependentSchemas 和 dependentRequired 拆分替代
	 * 原来混合了模式依赖和属性依赖两种不同的语义
	 * @comment "dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.
	 * @deprecated
	 */
	dependencies?: Record<string, JSONSchemaMeta202012 | StringArray>;

	/**
	 * 递归锚点（已弃用）
	 * 已被 $dynamicAnchor 替代
	 * 用于定义递归引用的锚点
	 * @comment "$recursiveAnchor" has been replaced by "$dynamicAnchor".
	 * @deprecated
	 */
	$recursiveAnchor?: AnchorString;

	/**
	 * 递归引用（已弃用）
	 * 已被 $dynamicRef 替代
	 * 用于创建递归引用
	 * @comment "$recursiveRef" has been replaced by "$dynamicRef".
	 * @deprecated
	 */
	$recursiveRef?: UriReferenceString;
}

/**
 * JSON Schema 2020-12 完整元模式
 * 核心和验证规范的元模式，整合了所有词汇表
 *
 * 此类型组合了以下词汇表：
 * - Core: 核心标识和引用机制（$id, $ref, $schema 等）
 * - Applicator: 应用器，定义如何应用子模式（properties, items, allOf 等）
 * - Unevaluated: 处理未求值位置（unevaluatedItems, unevaluatedProperties）
 * - Validation: 验证约束（type, minimum, maxLength 等）
 * - Meta-Data: 元数据注解（title, description, examples 等）
 * - Format: 格式注解（format）
 * - Content: 内容编码（contentEncoding, contentMediaType 等）
 *
 * @comment This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.
 * @see https://json-schema.org/draft/2020-12/schema
 */
export type JSONSchemaMeta202012 = JSONSchemaMetaCore202012 &
	JSONSchemaMetaApplicator202012 &
	JSONSchemaMetaUnevaluated202012 &
	JSONSchemaMetaValidation202012 &
	JSONSchemaMetaMetaData202012 &
	JSONSchemaMetaFormatAnnotation202012 &
	JSONSchemaMetaContent202012 &
	DeprecatedProperties;
