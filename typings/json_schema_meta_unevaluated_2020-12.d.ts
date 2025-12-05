import type { JSONSchemaMeta202012 } from "./json_schema_meta_2020-12";

/**
 * Unevaluated applicator vocabulary meta-schema
 * 未求值应用器词汇表元模式，用于处理未被其他关键字成功验证的位置
 * @see https://json-schema.org/draft/2020-12/meta/unevaluated
 */
export type JSONSchemaMetaUnevaluated202012 =
	| boolean
	| {
			/**
			 * 未求值的数组项
			 * 应用于未被 prefixItems、items 或 contains 成功验证的数组元素
			 * 只有在所有相邻关键字和动态作用域子模式都未成功验证某个数组项时，才会应用此模式
			 * 用于确保数组中的所有元素都经过某种形式的验证
			 */
			unevaluatedItems?: JSONSchemaMeta202012;

			/**
			 * 未求值的对象属性
			 * 应用于未被 properties、patternProperties 或 additionalProperties 成功验证的对象属性
			 * 只有在所有相邻关键字和动态作用域子模式都未成功验证某个属性时，才会应用此模式
			 * 用于确保对象中的所有属性都经过某种形式的验证
			 */
			unevaluatedProperties?: JSONSchemaMeta202012;
	  };
