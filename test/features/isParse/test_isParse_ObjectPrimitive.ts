import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectPrimitive = _test_isParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);