/**
 * Validation vocabulary meta-schema
 * @see https://json-schema.org/draft/2020-12/meta/validation
 */
export type JSONSchemaMetaValidation202012 =
	| boolean
	| {
			/**
			 * 指定实例的数据类型
			 * 可以是单个类型字符串或类型数组
			 * 有效值: "null", "boolean", "object", "array", "number", "string", "integer"
			 */
			type?: SimpleTypes | SimpleTypes[];

			/**
			 * 指定实例必须等于的常量值
			 * 等同于只有一个元素的 enum
			 */
			const?: unknown;

			/**
			 * 指定实例必须等于数组中某个值的枚举
			 * 数组应至少有一个元素，元素应该是唯一的
			 */
			enum?: unknown[];

			/**
			 * 数值必须是此关键字值的倍数
			 * 值必须是严格大于 0 的数字
			 */
			multipleOf?: number;

			/**
			 * 数值的包含上限
			 * 实例必须小于或等于此值
			 */
			maximum?: number;

			/**
			 * 数值的排他上限
			 * 实例必须严格小于此值（不能等于）
			 */
			exclusiveMaximum?: number;

			/**
			 * 数值的包含下限
			 * 实例必须大于或等于此值
			 */
			minimum?: number;

			/**
			 * 数值的排他下限
			 * 实例必须严格大于此值（不能等于）
			 */
			exclusiveMinimum?: number;

			/**
			 * 字符串的最大长度（Unicode 码点数）
			 * 必须是非负整数
			 */
			maxLength?: NonNegativeInteger;

			/**
			 * 字符串的最小长度（Unicode 码点数）
			 * 必须是非负整数，省略时默认为 0
			 */
			minLength?: NonNegativeIntegerDefault0;

			/**
			 * 字符串必须匹配的正则表达式模式
			 * 注意：正则表达式不是隐式锚定的
			 * @format regex
			 */
			pattern?: string;

			/**
			 * 数组的最大元素数量
			 * 必须是非负整数
			 */
			maxItems?: NonNegativeInteger;

			/**
			 * 数组的最小元素数量
			 * 必须是非负整数，省略时默认为 0
			 */
			minItems?: NonNegativeIntegerDefault0;

			/**
			 * 指定数组元素是否必须唯一
			 * 为 true 时，所有元素必须唯一；为 false 或省略时无此要求
			 */
			uniqueItems?: boolean;

			/**
			 * 与 contains 配合使用，指定匹配项的最大数量
			 * 必须是非负整数
			 */
			maxContains?: NonNegativeInteger;

			/**
			 * 与 contains 配合使用，指定匹配项的最小数量
			 * 必须是非负整数
			 */
			minContains?: NonNegativeInteger;

			/**
			 * 对象的最大属性数量
			 * 必须是非负整数
			 */
			maxProperties?: NonNegativeInteger;

			/**
			 * 对象的最小属性数量
			 * 必须是非负整数，省略时默认为 0
			 */
			minProperties?: NonNegativeIntegerDefault0;

			/**
			 * 对象必须包含的属性名称数组
			 * 数组元素必须是字符串且唯一
			 */
			required?: StringArray;

			/**
			 * 依赖必需属性映射
			 * 当对象包含某个属性时，必须同时包含映射中指定的其他属性
			 * 键是属性名，值是该属性存在时必需的其他属性名数组
			 */
			dependentRequired?: Record<string, StringArray>;
	  };

/**
 * 非负整数，包括零
 * 用于表示计数、长度等非负数值
 */
export type NonNegativeInteger = number;

/**
 * 非负整数，包括零
 * 省略时默认值为 0
 * @default 0
 */
export type NonNegativeIntegerDefault0 = NonNegativeInteger;

/**
 * JSON Schema 支持的简单类型
 * - "array": 数组类型
 * - "boolean": 布尔类型
 * - "integer": 整数类型（零小数部分的数字）
 * - "null": 空值类型
 * - "number": 数值类型
 * - "object": 对象类型
 * - "string": 字符串类型
 */
export type SimpleTypes =
	| "array"
	| "boolean"
	| "integer"
	| "null"
	| "number"
	| "object"
	| "string";

/**
 * 字符串数组
 * 用于表示属性名列表、必需字段等
 */
export type StringArray = string[];
