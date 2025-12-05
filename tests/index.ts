import type { JSONSchemaMeta202012 } from "../typings/json_schema_meta_2020-12";

const testBool: JSONSchemaMeta202012 = true;
console.log(testBool);

const testEmptyObj: JSONSchemaMeta202012 = {};
console.log(testEmptyObj);

const openapiSchema: JSONSchemaMeta202012 = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	properties: {
		foo: {},
		bar: {},
	},
	patternProperties: {
		"^v": {},
	},
	additionalProperties: false,
};
console.log(openapiSchema);
