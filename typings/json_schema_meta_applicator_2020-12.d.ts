import type { JSONSchemaMeta202012 } from "./json_schema_meta_2020-12";

/**
 * Applicator vocabulary meta-schema
 * 应用器词汇表元模式，定义了如何将子模式应用到实例的不同部分
 * @see https://json-schema.org/draft/2020-12/meta/applicator
 */
export type JSONSchemaMetaApplicator202012 =
	| boolean
	| {
			/**
			 * 数组前缀项模式
			 * 为数组的前 N 个元素指定各自的验证模式
			 * 每个元素按位置与对应的模式进行验证
			 */
			prefixItems?: SchemaArray;

			/**
			 * 数组项模式
			 * 应用于 prefixItems 之后的剩余数组元素
			 * 如果没有 prefixItems，则应用于所有数组元素
			 */
			items?: JSONSchemaMeta202012;

			/**
			 * 数组包含模式
			 * 至少有一个（或指定数量的）数组元素必须匹配此模式
			 * 与 minContains 和 maxContains 配合使用
			 */
			contains?: JSONSchemaMeta202012;

			/**
			 * 对象附加属性模式
			 * 应用于未被 properties 或 patternProperties 匹配的属性
			 */
			additionalProperties?: JSONSchemaMeta202012;

			/**
			 * 对象属性模式映射
			 * 为对象的特定属性名指定验证模式
			 * 键是属性名，值是对应的模式
			 */
			properties?: Record<string, JSONSchemaMeta202012>;

			/**
			 * 对象模式属性映射
			 * 使用正则表达式匹配属性名并应用对应的模式
			 * 键是正则表达式字符串，值是对应的模式
			 */
			patternProperties?: Record<string, JSONSchemaMeta202012>;

			/**
			 * 依赖模式映射
			 * 当对象包含某个属性时，整个对象必须符合对应的模式
			 * 键是属性名，值是该属性存在时对象必须符合的模式
			 */
			dependentSchemas?: Record<string, JSONSchemaMeta202012>;

			/**
			 * 属性名模式
			 * 对象的所有属性名（字符串）必须符合此模式
			 */
			propertyNames?: JSONSchemaMeta202012;

			/**
			 * 条件模式
			 * 如果实例符合此模式，则必须符合 then 模式
			 * 如果实例不符合此模式，则必须符合 else 模式
			 */
			if?: JSONSchemaMeta202012;

			/**
			 * 条件为真时的模式
			 * 当 if 模式验证成功时应用此模式
			 */
			then?: JSONSchemaMeta202012;

			/**
			 * 条件为假时的模式
			 * 当 if 模式验证失败时应用此模式
			 */
			else?: JSONSchemaMeta202012;

			/**
			 * 全部匹配
			 * 实例必须符合数组中的所有模式
			 */
			allOf?: SchemaArray;

			/**
			 * 任一匹配
			 * 实例必须至少符合数组中的一个模式
			 */
			anyOf?: SchemaArray;

			/**
			 * 唯一匹配
			 * 实例必须恰好符合数组中的一个模式（不能多也不能少）
			 */
			oneOf?: SchemaArray;

			/**
			 * 非模式
			 * 实例必须不符合此模式（验证失败才算成功）
			 */
			not?: JSONSchemaMeta202012;
	  };

/**
 * 模式数组
 * 用于存储多个 JSON Schema 模式
 */
export type SchemaArray = JSONSchemaMeta202012[];
