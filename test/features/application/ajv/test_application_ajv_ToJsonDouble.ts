import typia from "../../../../src";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonDouble = _test_application("ajv")(
    "ToJsonDouble",
    typia.application<[ToJsonDouble], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ToJsonDouble.Child",
            },
        ],
        components: {
            schemas: {
                "ToJsonDouble.Child": {
                    $id: "components#/schemas/ToJsonDouble.Child",
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        flag: {
                            type: "boolean",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "flag"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
