/**
 * Format vocabulary meta-schema for annotation results
 * 格式词汇表元模式（注解结果），用于语义验证和注解
 * @see https://json-schema.org/draft/2020-12/meta/format-annotation
 */
export type JSONSchemaMetaFormatAnnotation202012 =
	| boolean
	| {
			/**
			 * 格式
			 * 指定值的语义格式，用于传达特定值集合的语义信息
			 *
			 * 常见格式值：
			 * - 日期时间：date-time, date, time, duration
			 * - 邮箱：email, idn-email
			 * - 主机名：hostname, idn-hostname
			 * - IP 地址：ipv4, ipv6
			 * - 资源标识符：uri, uri-reference, iri, iri-reference, uuid, uri-template
			 * - JSON 指针：json-pointer, relative-json-pointer
			 * - 正则表达式：regex
			 *
			 * 实现应提供断言行为（验证），同时也产生注解结果
			 * 主要应用于字符串类型，但可以定义用于任何实例类型
			 */
			format?: string;
	  };
