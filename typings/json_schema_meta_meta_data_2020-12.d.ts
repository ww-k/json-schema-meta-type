/**
 * Meta-data vocabulary meta-schema
 * 元数据词汇表元模式，提供用于文档和用户界面的描述性信息
 * @see https://json-schema.org/draft/2020-12/meta/meta-data
 */
export type JSONSchemaMetaMetaData202012 =
	| boolean
	| {
			/**
			 * 标题
			 * 为模式提供简短的标题
			 * 用于用户界面显示，应该简洁明了
			 */
			title?: string;

			/**
			 * 描述
			 * 为模式提供详细的描述说明
			 * 解释此模式所描述实例的用途和含义
			 */
			description?: string;

			/**
			 * 默认值
			 * 为模式关联的默认 JSON 值
			 * 建议默认值应该能通过关联模式的验证
			 * 可用于用户界面生成和文档说明
			 */
			default?: unknown;

			/**
			 * 已弃用标记
			 * 为 true 时表示应避免使用此属性
			 * 可能表示该属性将在未来版本中移除
			 * 省略或为 false 表示未弃用
			 */
			deprecated?: boolean;

			/**
			 * 只读标记
			 * 为 true 时表示值由拥有权限独占管理
			 * 应用程序修改此值的尝试应被忽略或拒绝
			 * 例如：数据库生成的序列号
			 */
			readOnly?: boolean;

			/**
			 * 只写标记
			 * 为 true 时表示值在检索时永远不会出现
			 * 可在发送时包含，但不会在响应中返回
			 * 例如：密码输入字段
			 */
			writeOnly?: boolean;

			/**
			 * 示例值数组
			 * 提供与模式关联的示例 JSON 值
			 * 用于说明用法，建议示例值应该能通过模式验证
			 * 可包含多个示例以展示不同的使用场景
			 */
			examples?: unknown[];
	  };
