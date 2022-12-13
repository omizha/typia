import typia from "../../../../src";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectJsonTag = _test_application("ajv")(
    "ObjectJsonTag",
    typia.application<[ObjectJsonTag], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectJsonTag",
            },
        ],
        components: {
            schemas: {
                ObjectJsonTag: {
                    $id: "components#/schemas/ObjectJsonTag",
                    type: "object",
                    properties: {
                        vulnerable: {
                            type: "string",
                            nullable: false,
                            deprecated: true,
                            "x-typia-jsDocTags": [
                                {
                                    name: "deprecated",
                                },
                            ],
                            "x-typia-required": true,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            description: "Descripted property.",
                            "x-typia-required": true,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            title: "something",
                            description: "Titled property.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                        },
                        complicate_title: {
                            type: "string",
                            nullable: false,
                            title: "something weirdo with {@link something } tag",
                            description: "Complicate title.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something weirdo with ",
                                            kind: "text",
                                        },
                                        {
                                            text: "{@link ",
                                            kind: "link",
                                        },
                                        {
                                            text: "something ",
                                            kind: "linkText",
                                        },
                                        {
                                            text: "}",
                                            kind: "link",
                                        },
                                        {
                                            text: " tag",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "vulnerable",
                        "description",
                        "title",
                        "complicate_title",
                    ],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
